<template>
  <div class="relative h-full min-h-screen overflow-hidden py-16">
    <ScrollToTop />
    <div
      class="relative w-full bg-neutral-1 px-6 py-6 shadow-2xl shadow-dropshadow ring-1 ring-accent/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-6"
    >
      <NuxtLink
        :to="goBackLink"
        class="inline-flex items-center gap-x-2 rounded-md bg-button-accent px-3.5 py-2.5 font-bold text-button-text shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2"
      >
        <ChevronLeftIcon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
        Back
      </NuxtLink>
      <div class="relative px-4">
        <div class="mx-auto text-xl">
          <h1>
            <span
              class="mt-2 block text-center text-5xl font-extrabold tracking-tight text-header"
            >
              {{ title }}
            </span>
            <span
              class="block pt-3 text-center text-2xl font-semibold text-foreground"
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
import {ChevronLeftIcon} from '@heroicons/vue/solid';

/*   Data   */
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  goBackLink: {
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
