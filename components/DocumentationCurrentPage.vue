<template>
  <article class="pt-6 lg:pt-0">
    <h1
      class="mb-6 border-b border-slate-400 pb-4 text-center text-5xl font-bold text-gray-900 dark:text-slate-200"
    >
      {{ props.currentSubsection }}
    </h1>
    <span
      v-if="props.renderedContent"
      class="prose mx-auto mt-8 leading-8 dark:prose-invert dark:prose-headings:text-MITRE-silver dark:prose-p:text-dark-text"
      v-html="props.renderedContent"
    />
  </article>
  <dl
    class="mt-12 mb-6 flex border-t border-slate-200 pt-6 dark:border-slate-800 lg:mb-0"
  >
    <div v-if="props.allLinks[props.currentIndex - 1]">
      <a
        :href="`/docs/${props.allLinks[props.currentIndex - 1].href}`"
        class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <dt
          class="font-display text-sm font-medium text-slate-900 dark:text-white"
        >
          Previous
        </dt>
        <dd class="mt-1">
          <span aria-hidden="true">&larr;</span>
          {{ props.allLinks[props.currentIndex - 1].title }}
        </dd>
      </a>
    </div>
    <div
      v-if="props.allLinks[props.currentIndex + 1]"
      class="ml-auto text-right"
    >
      <a
        :href="`/docs/${props.allLinks[props.currentIndex + 1].href}`"
        class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <dt
          class="font-display text-sm font-medium text-slate-900 dark:text-white"
        >
          Next
        </dt>
        <dd class="mt-1">
          {{ props.allLinks[props.currentIndex + 1].title }}
          <span aria-hidden="true">&rarr;</span>
        </dd>
      </a>
    </div>
  </dl>
</template>

<script setup>
const props = defineProps({
  renderedContent: {type: Object, required: true},
  currentSubsection: {type: String, required: true},
  allLinks: {type: Array, required: true},
  currentIndex: {type: Number, required: true}
});
</script>
