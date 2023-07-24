<template>
  <div>
    <ScrollToTop />

    <article class="pt-6 lg:pt-0">
      <h1 class="mb-6 border-b border-accent pb-4 text-center text-5xl font-bold text-header">
        {{ props.currentSubsection }}
      </h1>
      <span v-if="props.renderedContent" class="prose mx-auto mt-8 leading-8 dark:prose-invert"
        v-html="props.renderedContent"></span>
    </article>
    <div class="mb-6 mt-12 flex border-t border-accent pt-6 lg:mb-0">
      <div v-if="props.allLinks[props.currentIndex - 1]">
        <a :href="`/docs/${props.allLinks[props.currentIndex - 1].href}`"
          class="flex flex-col font-semibold text-nav-base hover:text-nav-hover">
          <span class="font-display text-sm font-medium text-nav-base">
            Previous
          </span>
          <span class="mt-1">
            <span aria-hidden="true">&larr;</span>
            {{ props.allLinks[props.currentIndex - 1].title }}
          </span>
        </a>
      </div>
      <div v-if="props.allLinks[props.currentIndex + 1]" class="ml-auto text-right">
        <a :href="`/docs/${props.allLinks[props.currentIndex + 1].href}`"
          class="flex flex-col font-semibold text-nav-base hover:text-nav-hover">
          <span class="font-display text-sm font-medium text-nav-base">
            Next
          </span>
          <span class="mt-1">
            {{ props.allLinks[props.currentIndex + 1].title }}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  renderedContent: {
    type: String,
    required: true
  },
  currentSubsection: {
    type: String,
    required: true
  },
  allLinks: {
    type: Array,
    required: true
  },
  currentIndex: {
    type: Number,
    required: true
  }
});
</script>
