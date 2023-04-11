<template>
  <div class="relative bg-white dark:bg-dark-bg flex lg:hidden border-b border-slate-200">
    <button type="button" @click="setIsOpen(true)" class="my-5 flex text-xl dark:text-white" aria-label="Open navigation">
      <MenuIcon class="h-6 w-6 ml-4 stroke-slate-500" />
      <ol class="ml-4 flex text-sm leading-6 flex-wrap min-w-0">
        <li class="flex items-center text-slate-900 truncate dark:text-slate-400">{{ props.currentSectionTitle }}
          <svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-slate-400">
            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </li>
        <li class="font-bold text-slate-900 truncate dark:text-slate-200">{{ props.currentSubsection }}</li>
      </ol>
    </button>
    <ClientOnly>
      <Dialog :open="isOpen" @close="setIsOpen"
        class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation">
        <DialogPanel class="min-h-full w-full max-w-xs bg-slate-50 dark:bg-dark-bg px-4 pt-5 pb-12 sm:px-6">
          <div class="flex items-center">
            <button type="button" @click="setIsOpen(false)" aria-label="Close navigation">
              <XIcon class="h-6 w-6 stroke-slate-500" />
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
    

    
<script setup>

import { Dialog, DialogPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const isOpen = ref(false)
const props = defineProps({
  docData: {
    type: Object,
    required: true,
  },
  currentSubsection: {
    type: String,
    required: true,
  },
  currentSectionTitle: {
    type: String,
    required: true,
  },

});
const setIsOpen = (value) => { isOpen.value = value }
</script>

  