<template>
    <Popover class="relative" v-slot="{ open }">
        <PopoverButton :class="[
            open
                ? 'text-nav-hover '
                : '',
            items.some(e => e.href === route.fullPath) ? 'text-nav-active ' : 'text-nav-base ',
            'group bg-neutral-1  rounded-md inline-flex items-center text-base font-medium  hover:text-nav-hover  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
        ]">
            <span class="font-mitre font-semibold">{{ label }}</span>
            <ChevronDownIcon :class="[
                open ? 'text-nav-hover '
                    : '',
                items.some(e => e.href === route.fullPath) ? 'text-nav-active ' : 'text-nav-base ',
                'ml-2 h-5 w-5 group-hover:text-nav-hover '
            ]" aria-hidden="true" />
        </PopoverButton>

        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-dropshadow  ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-neutral-1  px-5 py-6 sm:gap-8 sm:p-8">
                        <NuxtLink v-for="item in items" :key="item.name" :to="item.href" :class="[
                            '-m-3 p-3 flex items-start rounded-lg hover:bg-neutral-2 ',
                            item.href == route.fullPath
                                ? 'bg-neutral-2 '
                                : ''
                        ]">
                            <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fill" aria-hidden="true" />
                            <div class="ml-4">
                                <p class="text-base font-medium text-base ">
                                    {{ item.name }}
                                </p>
                                <p class="mt-1 text-sm text-muted ">
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
    PopoverPanel,
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