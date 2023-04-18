<template>
    <div class="relative py-16 bg-white dark:bg-dark-backdrop-primary overflow-hidden min-h-screen h-full">
        <ScrollToTop />
        <div
            class="relative w-full bg-white dark:bg-gray-800 px-6 py-12 shadow-2xl shadow-slate-700/10 dark:shadow-gray-600 ring-1 ring-gray-900/5 dark:ring-gray-700 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
            <div class="relative px-4 sm:px-6 lg:px-8">
                <div class="text-lg prose prose-lg max-w-prose mx-auto ">
                    <h1>
                        <span
                            class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-mitre-silver sm:text-4xl">
                            {{ title }}
                        </span>
                        <span class="pt-3 block text-base text-center text-blue-600 font-semibold tracking-wide">
                            Updated: {{ lastUpdated }}
                            &nbsp; | &nbsp;
                            <NuxtLink :to="`/blog/authors?name=${author}`"
                                class="text-blue-600 hover:underline no-underline font-semibold">
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

<script setup>
////  Props  ////
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    lastUpdated: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

const { title, lastUpdated, author } = toRefs(props);

</script>