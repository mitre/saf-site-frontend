<template>
  <div>
    <template v-for="item in items" :key="item.name">
      <a
        v-if="item.external"
        rel="noopener noreferrer"
        target="_blank"
        :href="item.href"
        :class="[
          '-m-3 flex items-center rounded-md p-3 hover:bg-neutral-2 ',
          item.href == route.fullPath ? 'text-nav-active ' : 'text-nav-base '
        ]"
      >
        <component
          :is="item.icon"
          class="h-6 w-6 flex-shrink-0 text-fill"
          aria-hidden="true"
        />
        <span class="ml-3 font-medium">
          {{ item.name }}
        </span>
      </a>
      <NuxtLink
        v-else
        :to="item.href"
        :class="[
          '-m-3 flex items-center rounded-md p-3 hover:bg-neutral-2 ',
          item.href == route.fullPath ? 'text-nav-active ' : 'text-nav-base '
        ]"
      >
        <component
          :is="item.icon"
          class="h-6 w-6 flex-shrink-0 text-fill"
          aria-hidden="true"
        />
        <span class="ml-3 font-medium">
          {{ item.name }}
        </span>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
/*   Data   */
const props = defineProps({
  items: {
    type: Array<LinkObject>,
    required: true
  }
});
const route = useRoute();

const {items} = toRefs(props);
</script>
