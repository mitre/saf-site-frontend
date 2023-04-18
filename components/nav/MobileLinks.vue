<template>
    <NuxtLink v-for="item in items" :key="item.name" :to="item.href" :class="[
        '-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700',
        item.href == route.fullPath
            ? 'bg-gray-300 dark:bg-gray-700'
            : ''
    ]">
        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
        <span class="ml-3 text-base font-medium text-gray-900 dark:text-MITRE-silver">
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
