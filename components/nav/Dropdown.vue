<template>
    <Popover class="relative" v-slot="{ open }">
        <PopoverButton :class="[
            open
                ? 'text-gray-900 dark:text-gray-200'
                : '',
            items.some(e => e.href === route.fullPath) ? 'text-sky-500' : 'text-gray-600 dark:text-gray-400',
            'group bg-white dark:bg-dark-bg rounded-md inline-flex items-center text-base font-medium  hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        ]">
            <span>{{ label }}</span>
            <ChevronDownIcon :class="[
                open ? 'text-gray-900 dark:text-gray-400'
                    : '',
                items.some(e => e.href === route.fullPath) ? 'text-sky-500' : 'text-gray-600 dark:text-gray-400',
                'ml-2 h-5 w-5 group-hover:text-gray-900 dark:group-hover:text-gray-200'
            ]" aria-hidden="true" />
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white dark:bg-dark-bg px-5 py-6 sm:gap-8 sm:p-8">
                        <NuxtLink v-for="item in items" :key="item.name" :to="item.href" :class="[
                            '-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                            item.href == route.fullPath
                                ? 'bg-gray-300 dark:bg-gray-700'
                                : ''
                        ]">
                            <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                            <div class="ml-4">
                                <p class="text-base font-medium text-gray-900 dark:text-MITRE-silver">
                                    {{ item.name }}
                                </p>
                                <p class="mt-1 text-sm text-gray-500 dark:text-dark-text">
                                    {{ item.description }}
                                </p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script setup>
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    PopoverOverlay,
} from '@headlessui/vue';

import { ChevronDownIcon } from '@heroicons/vue/solid'

////  Props  ////
const route = useRoute()

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
});

const { items, label } = toRefs(props);

</script>