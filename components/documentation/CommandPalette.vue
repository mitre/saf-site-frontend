<template>
    <TransitionRoot :show="props.isCommandPaletteOpen" as="template" @after-leave="query = ''" appear>
        <Dialog as="div" class="relative z-10" @close="$emit('update:isCommandPaletteOpen', false)">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto mt-20">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="ease-in duration-200" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95">
                    <DialogPanel
                        class="mt-5 mx-auto max-w-xl transform divide-y divide-gray-100 dark:divide-gray-500 dark:divide-opacity-20 dark:bg-gray-900 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                        <Combobox>
                            <div class="relative">
                                <SearchIcon
                                    class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-gray-500"
                                    aria-hidden="true" />
                                <ComboboxInput
                                    class="h-12 w-full border-0 bg-transparent pl-11 pr-4 dark:text-gray-200 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm "
                                    placeholder="Search..." @change="query = $event.target.value" />
                            </div>

                            <ComboboxOptions v-if="Object.keys(filteredItems).length > 0" static
                                class="max-h-96 scroll-py-3 overflow-y-auto p-3">
                                <div v-for="section in Object.keys(filteredItems)" class="mb-2">
                                    <h1 class="font-bold mb-1 dark:text-gray-200">{{ section }}</h1>
                                    <ComboboxOption v-for="item in filteredItems[section]" :key="item.id" :value="item"
                                        as="template" v-slot="{ active }">
                                        <li
                                            :class="['flex cursor-default select-none rounded-xl p-3', active && 'bg-gray-100 dark:bg-gray-400']">
                                            <a :href="`/docs/${item.subsection_href}`" class="ml-4 flex-auto">
                                                <p
                                                    :class="['text-sm font-semibold', active ? 'text-gray-900 dark:text-gray-900' : 'text-gray-300']">
                                                    {{ item.subsection_title }}
                                                </p>
                                                <p :class="['text-sm', active ? 'text-gray-700' : 'text-gray-500']">
                                                    {{ item.text_found !== "" ? item.text_found + "..." : "" }}
                                                </p>
                                            </a>
                                        </li>
                                    </ComboboxOption>
                                </div>
                            </ComboboxOptions>

                            <div v-if="query !== '' && Object.keys(filteredItems).length === 0"
                                class="py-14 px-6 text-center text-sm sm:px-14">
                                <ExclamationIcon type="outline" name="exclamation-circle"
                                    class="mx-auto h-6 w-6 text-gray-400" />
                                <p class="mt-4 font-semibold text-gray-900">No results found</p>
                                <p class="mt-2 text-gray-500">No components found for this search term. Please try again.
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
import { computed, ref, onMounted, nextTick } from 'vue'
import { SearchIcon, ExclamationIcon } from '@heroicons/vue/solid'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'


////  Data  ////
const isLoaded = ref(false)
const results = ref([])
const query = ref('')

const props = defineProps({
    isCommandPaletteOpen: {
        type: Boolean,
        required: true,
    },
});

// Updates parent isCommandPaletteOpen variable
defineEmits(['update:isCommandPaletteOpen'])


////  Methods  ////
const getDocumentation = async () => {
    results.value = await useAsyncData('getAllDocumentation', () => GqlGetAllDocumentation())
        .then(({ data }) => {
            let newArray = []

            data._value.documentations.data.forEach((section) => {
                section.attributes.subsections.forEach((sub) => {
                    newArray.push({
                        id: section.id,
                        section_title: section.attributes.section_title,
                        subsection_title: sub.title,
                        // Replaces are used to take out html characters that shouldn't be searchable
                        subsection_content: sub.content.replace(/<\/?[^>]+(>|$)/g, " ").replace(/&nbsp/g, " ").replace(/&lt/g, "<").replace(/&gt/g, ">"),
                        subsection_href: sub.href
                    })
                })

            })

            return newArray
        })
}

const filteredItems = computed(() => {
    if (query.value === '') {
        return {}
    }
    else {
        let resultsMappedObj = {}

        const filteredResults = results.value.filter((result) => {
            return result.section_title.toLowerCase().includes(query.value.toLowerCase()) || result.subsection_title.toLowerCase().includes(query.value.toLowerCase()) || result.subsection_content.toLowerCase().includes(query.value.toLowerCase())
        })


        for (const result of filteredResults) {
            const findIndex = result.subsection_content.toLowerCase().indexOf(query.value.toLowerCase())
            let startIndex = -1
            let endIndex = -1
            let resultText = ""

            // If the substring will be out of range at the start
            if (findIndex - 30 <= 0) {
                startIndex = 0

            } else {
                startIndex = findIndex - 30
                resultText += "..."
            }

            // If the substring will be out of range at the end
            if (findIndex + 30 >= result.subsection_content.length) {
                endIndex = result.subsection_content.length

            } else {
                endIndex = findIndex + 30
            }

            result.text_found = findIndex !== -1 ? resultText + result.subsection_content.substring(startIndex, endIndex) : ""

            // Add result to the mapping of sections
            if (result.section_title in resultsMappedObj) {
                resultsMappedObj[result.section_title].push(result)
            }
            else {
                resultsMappedObj[result.section_title] = [result]
            }
        }
        return resultsMappedObj
    }
}

)


////  Lifecycle  ////
onMounted(async () => {
    await nextTick(async () => {
        await getDocumentation()
        isLoaded.value = true
    });
});
</script>