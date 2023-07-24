<template>
  <div class="relative h-full min-h-screen overflow-hidden py-16">
    <ScrollToTop />
    <div
      class="relative w-full bg-neutral-1 px-6 py-12 shadow-2xl shadow-dropshadow ring-1 ring-accent/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16"
    >
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg mx-auto max-w-prose text-lg">
          <h1>
            <span
              class="mt-2 block text-center text-4xl font-extrabold leading-8 tracking-tight text-header sm:text-4xl"
            >
              {{ title }}
            </span>
            <span
              class="block pt-3 text-center font-semibold tracking-wide text-nav-active"
            >
              Updated: {{ lastUpdated }}
              &nbsp; | &nbsp;
              <NuxtLink
                :to="`/blog/authors?name=${author}`"
                class="font-semibold text-nav-active no-underline hover:underline"
              >
                {{ author }}
              </NuxtLink>
            </span>
          </h1>
          <slot> <!-- The body of the reading page goes here --></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/// /  Props  ////
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  lastUpdated: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const {title, lastUpdated, author} = toRefs(props);
</script>
