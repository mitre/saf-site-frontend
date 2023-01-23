<template>
  <div
    class="relative flex border-b border-slate-200 bg-white dark:bg-dark-bg lg:hidden"
  >
    <button
      type="button"
      class="my-5 flex text-xl dark:text-white"
      aria-label="Open navigation"
      @click="setIsOpen(true)"
    >
      <MenuIcon class="ml-4 h-6 w-6 stroke-slate-500" />
      <ol class="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
        <li
          class="flex items-center truncate text-slate-900 dark:text-slate-400"
        >
          {{ props.currentSectionTitle }}
          <svg
            width="3"
            height="6"
            aria-hidden="true"
            class="mx-3 overflow-visible text-slate-400"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </li>
        <li class="truncate font-bold text-slate-900 dark:text-slate-200">
          {{ props.currentSubsection }}
        </li>
      </ol>
    </button>
    <ClientOnly>
      <Dialog
        :open="isOpen"
        class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
        @close="setIsOpen"
      >
        <DialogPanel
          class="min-h-full w-full max-w-xs bg-slate-50 px-4 pt-5 pb-12 dark:bg-dark-bg sm:px-6"
        >
          <div class="flex items-center">
            <button
              type="button"
              aria-label="Close navigation"
              @click="setIsOpen(false)"
            >
              <XIcon class="h-6 w-6 stroke-slate-500" />
            </button>
          </div>
          <div v-if="props.docData" class="md:mt-5">
            <DocumentationNavigation
              :doc-data="props.docData"
              :current-subsection-href="props.currentSubsectionHref"
            />
          </div>
        </DialogPanel>
      </Dialog>
    </ClientOnly>
  </div>
</template>

<script setup>
import {Dialog, DialogPanel} from '@headlessui/vue';
import {MenuIcon, XIcon} from '@heroicons/vue/outline';

const isOpen = ref(false);
const props = defineProps({
  docData: {type: Object, required: true},
  currentSubsectionHref: {type: String, required: true},
  currentSubsection: {type: String, required: true},
  currentSectionTitle: {type: String, required: true}
});
const setIsOpen = (value) => {
  isOpen.value = value;
};
</script>
