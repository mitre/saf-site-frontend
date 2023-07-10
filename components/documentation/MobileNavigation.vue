<template>
  <div class="relative bg-neutral-1  flex lg:hidden border-b  border-accent ">
    <button type="button" @click="setIsOpen(true)" class="my-5 flex text-xl text-base " aria-label="Open navigation">
      <MenuIcon class="h-6 w-6 ml-4 stroke-base " />
      <ol class="ml-4 flex text-sm leading-6 flex-wrap min-w-0">
        <li class="flex items-center text-base  truncate">{{ props.currentSectionTitle }}
          <svg width="3" height="6" aria-hidden="true" class="mx-3 overflow-visible text-base ">
            <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
          </svg>
        </li>
        <li class="font-bold text-base  truncate">{{ props.currentSubsection }}</li>
      </ol>
    </button>
    <ClientOnly>
      <Dialog :open="isOpen" @close="setIsOpen"
        class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-blur/50  pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation">
        <DialogPanel class="min-h-full w-full max-w-xs bg-neutral-2  px-4 pt-5 pb-12 sm:px-6">
          <div class="flex items-center">
            <button type="button" @click="setIsOpen(false)" aria-label="Close navigation">
              <XIcon class="h-6 w-6 stroke-nav-base " />
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

  