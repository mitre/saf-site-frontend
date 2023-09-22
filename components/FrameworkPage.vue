<template>
  <div
    class="relative mb-11 min-h-[calc(100vh-295px)] px-4 pt-4 sm:px-6 lg:px-8"
  >
    <div class="mx-auto max-w-7xl text-center">
      <img
        :src="`${productIcon}`"
        class="aspect-square mx-auto my-2 w-14 md:w-20"
        aria-hidden="true"
        alt="Alt text here"
      />
      <h2 class="text-5xl font-bold tracking-tight text-header">
        {{ title }}
      </h2>
      <h3 class="mx-auto mt-6 text-xl text-center leading-8">
        {{ grabber }}
      </h3>
      <div
        class="prose prose-xl mx-auto mt-8 max-w-none text-left leading-8 dark:prose-invert"
        v-html="description"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
/*   Data   */
const props = defineProps({
  productIcon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  grabber: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const {title, grabber, description, productIcon} = toRefs(props);
</script>
