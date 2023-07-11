<template>
  <TransitionRoot
    :show="props.isCommandPaletteOpen"
    as="template"
    appear
    @after-leave="query = ''"
  >
    <Dialog
      as="div"
      class="relative z-50"
      @close="$emit('update:isCommandPaletteOpen', false)"
    >
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-blur bg-opacity-90 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-50 mt-20 overflow-y-auto">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <DialogPanel
            class="mx-auto mt-5 max-w-xl transform divide-y divide-accent overflow-hidden rounded-xl bg-neutral-1 shadow-2xl ring-1 ring-accent ring-opacity-5 transition-all dark:divide-opacity-20"
          >
            <Combobox>
              <div class="relative">
                <SearchIcon
                  class="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-base"
                  aria-hidden="true"
                />
                <ComboboxInput
                  class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-base placeholder:text-base focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  @change="query = $event.target.value"
                />
              </div>

              <ComboboxOptions
                v-if="Object.keys(filteredItems).length > 0"
                static
                class="max-h-96 scroll-py-3 overflow-y-auto p-3"
              >
                <div v-for="section in Object.keys(filteredItems)" class="mb-2">
                  <h1 class="mb-1 text-base font-bold">{{ section }}</h1>
                  <ComboboxOption
                    v-for="item in filteredItems[section]"
                    :key="item.id"
                    v-slot="{active}"
                    :value="item"
                    as="template"
                  >
                    <li
                      :class="[
                        'flex cursor-default select-none rounded-xl p-3',
                        active && 'bg-neutral-2 '
                      ]"
                    >
                      <a
                        :href="`/docs/${item.subsection_href}`"
                        class="ml-4 flex-auto"
                      >
                        <p
                          :class="[
                            'text-sm font-semibold',
                            active ? 'text-base ' : 'text-base '
                          ]"
                        >
                          {{ item.subsection_title }}
                        </p>
                        <p
                          :class="[
                            'text-sm',
                            active ? 'text-muted ' : 'text-muted '
                          ]"
                        >
                          {{
                            item.text_found !== ''
                              ? item.text_found + '...'
                              : ''
                          }}
                        </p>
                      </a>
                    </li>
                  </ComboboxOption>
                </div>
              </ComboboxOptions>

              <div
                v-if="query !== '' && Object.keys(filteredItems).length === 0"
                class="px-6 py-14 text-center text-sm sm:px-14"
              >
                <ExclamationIcon
                  type="outline"
                  name="exclamation-circle"
                  class="mx-auto h-6 w-6 text-base"
                />
                <p class="mt-4 text-base font-semibold">No results found</p>
                <p class="mt-2 text-muted">
                  No results found for this search term. Please try again.
                </p>
              </div>
            </Combobox>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {computed, ref, onMounted, nextTick} from 'vue';
import {SearchIcon, ExclamationIcon} from '@heroicons/vue/solid';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue';

/// /  Data  ////
const isLoaded = ref(false);
const results = ref([]);
const query = ref('');

const props = defineProps({
  isCommandPaletteOpen: {
    type: Boolean,
    required: true
  }
});

// Updates parent isCommandPaletteOpen variable
defineEmits(['update:isCommandPaletteOpen']);

/// /  Methods  ////
const getDocumentation = async () => {
  results.value = await useAsyncData('getAllDocumentation', () =>
    GqlGetAllDocumentation()
  ).then(({data}) => {
    const newArray = [];

    data._value.documentations.data.forEach((section) => {
      section.attributes.subsections.forEach((sub) => {
        newArray.push({
          id: section.id,
          section_title: section.attributes.section_title,
          subsection_title: sub.title,
          // Replaces are used to take out html characters that shouldn't be searchable
          subsection_content: sub.content
            .replace(/<\/?[^>]+(>|$)/g, ' ')
            .replace(/&nbsp/g, ' ')
            .replace(/&lt/g, '<')
            .replace(/&gt/g, '>'),
          subsection_href: sub.href
        });
      });
    });

    return newArray;
  });
};

const filteredItems = computed(() => {
  if (query.value === '') {
    return {};
  }
  const resultsMappedObj = {};

  const filteredResults = results.value.filter(
    (result) =>
      result.section_title.toLowerCase().includes(query.value.toLowerCase()) ||
      result.subsection_title
        .toLowerCase()
        .includes(query.value.toLowerCase()) ||
      result.subsection_content
        .toLowerCase()
        .includes(query.value.toLowerCase())
  );

  for (const result of filteredResults) {
    const findIndex = result.subsection_content
      .toLowerCase()
      .indexOf(query.value.toLowerCase());
    let startIndex = -1;
    let endIndex = -1;
    let resultText = '';

    // If the substring will be out of range at the start
    if (findIndex - 30 <= 0) {
      startIndex = 0;
    } else {
      startIndex = findIndex - 30;
      resultText += '...';
    }

    // If the substring will be out of range at the end
    if (findIndex + 30 >= result.subsection_content.length) {
      endIndex = result.subsection_content.length;
    } else {
      endIndex = findIndex + 30;
    }

    result.text_found =
      findIndex !== -1
        ? resultText + result.subsection_content.substring(startIndex, endIndex)
        : '';

    // Add result to the mapping of sections
    if (result.section_title in resultsMappedObj) {
      resultsMappedObj[result.section_title].push(result);
    } else {
      resultsMappedObj[result.section_title] = [result];
    }
  }
  return resultsMappedObj;
});

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getDocumentation();
    isLoaded.value = true;
  });
});
</script>
