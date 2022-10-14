<template>

<article class="pt-6 lg:pt-0">
    <p class="text-5xl font-bold text-gray-900 border-b border-slate-200 pb-4 mb-6 dark:text-white text-center">{{props.currentSubsection}}</p>
    <span v-if="props.renderedContent" v-html="props.renderedContent" class="mt-8 mx-auto leading-8 prose dark:prose-invert"></span>
</article>
<dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
    <div v-if="props.allLinks[props.currentIndex-1]">
        <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
        Previous
        </dt>
        <dd class="mt-1">
        <a :href ="`/docs/${props.allLinks[props.currentIndex-1].href}`" class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"> <!-- Change docData.title to find next page title -->
            <span aria-hidden="true">&larr;</span> {{props.allLinks[props.currentIndex-1].title}}
        </a>
        </dd>
    </div>
    <div v-if="props.allLinks[props.currentIndex+1]" class="ml-auto text-right">
        <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
        Next
        </dt>
        <dd class="mt-1">
        <a :href ="`/docs/${props.allLinks[props.currentIndex+1].href}`" class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"> <!-- Change docData.title to find next page title -->
            <span aria-hidden="true">&rarr;</span> {{props.allLinks[props.currentIndex+1].title}} 
        </a>
        </dd>
    </div>
</dl>
    
</template>
  
  
<script setup>

const props = defineProps(["renderedContent","currentSubsection","allLinks","currentIndex"]);

</script>
