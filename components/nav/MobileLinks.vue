<template>
  <div>
    <NuxtLink v-for="item in items" :key="item.name" :to="item.href" :class="[
      '-m-3 flex items-center rounded-md p-3 hover:bg-neutral-2 ',
      item.href == route.fullPath ? 'text-nav-active ' : 'text-nav-base '
    ]">
      <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-fill" aria-hidden="true" />
      <span class="ml-3 font-medium">
        {{ item.name }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { LinkObject } from 'global';

/// /  Props  ////
const props = defineProps({
  items: {
    type: Array<LinkObject>,
    required: true
  }
});
const route = useRoute();

const { items } = toRefs(props);
</script>
