<template>
    <NuxtLink v-for="item in items" :key="item.name" :to="item.href" :class="[
        '-m-3 p-3 flex items-center rounded-md hover:bg-neutral-2 ',
        item.href == route.fullPath
            ? 'text-nav-active '
            : 'text-nav-base '
    ]">
        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fill" aria-hidden="true" />
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
