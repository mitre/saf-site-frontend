<template>
    <ScrollToTop />

    <article class="pt-6 lg:pt-0">
        <h1
            class="text-5xl font-bold text-light-header dark:text-dark-header border-b border-light-border-primary dark:border-dark-border-primary pb-4 mb-6  text-center">
            {{ props.currentSubsection }}</h1>
        <span v-if="props.renderedContent" v-html="props.renderedContent"
            class="mt-8 mx-auto leading-8 prose dark:prose-invert"></span>
    </article>
    <div class="mt-12 mb-6 lg:mb-0 flex border-t border-light-border-primary dark:border-dark-border-primary pt-6">
        <div v-if="props.allLinks[props.currentIndex - 1]">
            <a :href="`/docs/${props.allLinks[props.currentIndex - 1].href}`"
                class="text-base font-semibold text-nav-light-inactive dark:text-nav-dark-inactive hover:text-nav-light-hover dark:hover:text-nav-dark-hover">
                <span class="font-display text-sm font-medium text-nav-light-inactive dark:text-nav-dark-inactive">
                    Previous
                </span>
                <span class="mt-1">
                    <span aria-hidden="true">&larr;</span> {{ props.allLinks[props.currentIndex - 1].title }}
                </span>
            </a>
        </div>
        <div v-if="props.allLinks[props.currentIndex + 1]" class="ml-auto text-right">
            <a :href="`/docs/${props.allLinks[props.currentIndex + 1].href}`"
                class="text-base font-semibold text-nav-light-inactive dark:text-nav-dark-inactive hover:text-nav-light-hover dark:hover:text-nav-dark-hover">
                <span class="font-display text-sm font-medium text-nav-light-inactive dark:text-nav-dark-inactive">
                    Next
                </span>
                <span class="mt-1">
                    {{ props.allLinks[props.currentIndex + 1].title }} <span aria-hidden="true">&rarr;</span>
                </span>
            </a>
        </div>
    </div>
</template>
  

<script setup>
const props = defineProps({
    renderedContent: {
        type: String,
        required: true,
    },
    currentSubsection: {
        type: String,
        required: true,
    },
    allLinks: {
        type: Array,
        required: true,
    },
    currentIndex: {
        type: Number,
        required: true,
    },
});
</script>
