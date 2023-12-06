<template>
  <div class="relative flex border-b border-accent bg-neutral-1 lg:hidden">
    <button
      type="button"
      class="my-5 flex text-2xl"
      aria-label="Open navigation"
      @click="setIsOpen(true)"
    >
      <Menu class="stroke-base ml-4 h-6 w-6" />
      <ol class="ml-4 flex min-w-0 flex-wrap leading-6">
        <li class="flex items-center truncate">
          {{ props.currentSectionTitle }}
          <svg
            width="3"
            height="6"
            aria-hidden="true"
            class="mx-3 overflow-visible"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </svg>
        </li>
        <li class="truncate font-bold">
          {{ props.currentSubsection }}
        </li>
      </ol>
    </button>
    <ClientOnly>
      <Dialog
        :open="isOpen"
        class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-blur/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
        @close="setIsOpen"
      >
        <DialogPanel
          class="min-h-full w-full max-w-xs bg-neutral-2 px-4 pb-12 pt-5 sm:px-6"
        >
          <div class="flex items-center">
            <button
              type="button"
              aria-label="Close navigation"
              @click="setIsOpen(false)"
            >
              <X class="h-6 w-6 stroke-nav-base" />
            </button>
          </div>
          <div v-if="props.docData" class="md:mt-5">
            <DocumentationNavigation :doc-data="props.docData" />
          </div>
        </DialogPanel>
      </Dialog>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {Dialog, DialogPanel} from '@headlessui/vue';
import {Menu, X} from 'lucide-vue-next';

/*   Data   */
const isOpen = ref(false);
const props = defineProps({
  docData: {
    type: Object,
    required: true
  },
  currentSubsection: {
    type: String,
    required: true
  },
  currentSectionTitle: {
    type: String,
    required: true
  }
});

/*   Methods   */
const setIsOpen = (value: boolean) => {
  isOpen.value = value;
};
</script>
