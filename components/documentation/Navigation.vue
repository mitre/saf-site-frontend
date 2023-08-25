<template>
  <div>
    <DocumentationCommandPalette
      v-model:is-command-palette-open="isCommandPaletteOpen"
    />
    <div
      class="max-w-8xl pointer-events-auto sticky top-0 z-50 mb-10 mr-5 bg-neutral-2"
    >
      <div class="w-100 -ml-0.5 h-10 bg-neutral-2"></div>
      <button
        type="button"
        class="w-full items-center rounded-md bg-neutral-1 py-1.5 pl-2 pr-3 leading-6 shadow-sm ring-1 ring-neutral-1/10 hover:ring-neutral-1 lg:flex"
        @click="isCommandPaletteOpen = true"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          class="mr-3 inline flex-none"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></circle>
        </svg>
        Search<span class="ml-auto flex-none pl-3 text-sm font-semibold"
          >Ctrl K</span
        >
      </button>
    </div>
    <div class="w-64 pr-8 xl:w-72 xl:pr-16">
      <nav class="lg:text-base text-lg">
        <ul role="list" class="space-y-9">
          <div v-for="(section, key) in props.docData" :key="key">
            <li key="{{section.section_title}}">
              <h2 class="font-bold">
                {{ section.section_title }}
              </h2>
              <ul
                role="list"
                class="mt-2 space-y-2 border-l-2 border-nav-base lg:mt-4 lg:space-y-4"
              >
                <div
                  v-for="subsection in section.subsections"
                  :key="subsection.title"
                >
                  <li :key="subsection.title" class="relative">
                    <a
                      :href="`/docs/${subsection.href}`"
                      :class="[
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        subsection.href === currentSubsectionHref
                          ? 'font-semibold text-nav-active before:bg-nav-active  '
                          : 'text-nav-base  before:hidden before:bg-nav-hover  hover:text-nav-hover  hover:before:block '
                      ]"
                    >
                      {{ subsection.title }}
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import {ref, onUnmounted} from 'vue';

const isCommandPaletteOpen = ref(false);
const props = defineProps({
  docData: {
    type: Object,
    required: true
  }
});

const onKeyDown = (event) => {
  if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
    isCommandPaletteOpen.value = !isCommandPaletteOpen.value;
    event.preventDefault();
    event.stopPropagation();
  }
};

onMounted(() => {
  document.addEventListener('keydown', onKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', onKeyDown);
});

const route = useRoute();
const currentSubsectionHref = ref(
  route.params.section !== undefined
    ? route.params.section
    : 'mapper-guide-intro'
);
</script>
