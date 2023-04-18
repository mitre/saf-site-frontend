<template>
    <NuxtLink v-for="item in items" :key="item.name" :to="item.href" :class="[
        '-m-3 p-3 flex items-center rounded-md hover:bg-light-backdrop-secondary dark:hover:bg-dark-backdrop-secondary',
        item.href == route.fullPath
            ? 'text-nav-light-active dark:text-nav-dark-active'
            : 'text-nav-light-inactive dark:text-nav-dark-inactive'
    ]">
        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-light-icon-primary" aria-hidden="true" />
        <span class="ml-3 text-base font-medium">
            {{ item.name }}
        </span>
    </NuxtLink>
</template>

<script setup>
////  Props  ////
const props = defineProps({
    items: {
        type: String,
        required: true,
    },
});
const route = useRoute()

const { items } = toRefs(props);
</script>
