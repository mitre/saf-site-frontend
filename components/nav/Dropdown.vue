<template>
  <Popover v-slot="{open}" class="relative">
    <PopoverButton
      :class="[
        open ? 'text-nav-hover ' : '',
        items.some((e) => e.href === route.fullPath)
          ? 'text-nav-active '
          : 'text-nav-base ',
        'group inline-flex  items-center rounded-md bg-neutral-1 font-medium  hover:text-nav-hover  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
      ]"
    >
      <span class="font-semibold">{{ label }}</span>
      <ChevronDownIcon
        :class="[
          open ? 'text-nav-hover ' : '',
          items.some((e) => e.href === route.fullPath)
            ? 'text-nav-active '
            : 'text-nav-base ',
          'ml-2 h-5 w-5 group-hover:text-nav-hover '
        ]"
        aria-hidden="true"
      />
    </PopoverButton>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <PopoverPanel
        class="absolute left-1/2 z-10 mt-3 w-screen max-w-lg -translate-x-1/2 transform px-2 sm:px-0"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-dropshadow ring-opacity-5"
        >
          <div
            class="relative grid gap-6 rounded-xl border border-accent bg-neutral-1 px-5 py-6 sm:gap-8 sm:p-8 overflow-auto max-h-[87vh]"
          >
            <template v-for="item in items" :key="item.name">
              <a
                v-if="item.external"
                rel="noopener noreferrer"
                target="_blank"
                :href="item.href"
                :class="[
                  '-m-3 flex items-start rounded-lg p-3 hover:bg-neutral-2 ',
                  item.href == route.fullPath ? 'bg-neutral-2 ' : ''
                ]"
              >
                <component
                  :is="item.icon"
                  class="h-6 w-6 flex-shrink-0 text-fill"
                  aria-hidden="true"
                />
                <div class="ml-4">
                  <p class="font-medium">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-muted">
                    {{ item.description }}
                  </p>
                </div>
              </a>
              <NuxtLink
                v-else
                :to="item.href"
                :class="[
                  '-m-3 flex items-start rounded-lg p-3 hover:bg-neutral-2 ',
                  item.href == route.fullPath ? 'bg-neutral-2 ' : ''
                ]"
              >
                <component
                  :is="item.icon"
                  class="h-6 w-6 flex-shrink-0 text-fill"
                  aria-hidden="true"
                />
                <div class="ml-4">
                  <p class="font-medium">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-muted">
                    {{ item.description }}
                  </p>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup lang="ts">
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
import {ChevronDownIcon} from '@heroicons/vue/solid';
import {LinkObject} from '~/global';

/*   Data   */
const route = useRoute();

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  items: {
    type: Array<LinkObject>,
    required: true
  }
});

const {items, label} = toRefs(props);
</script>
