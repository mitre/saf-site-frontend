<template>
    <div class="relative pt-4 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-295px)] mb-11">
        <div class="mx-auto max-w-7xl text-center">
            <img :src="`${productIcon}`" class="w-14 md:w-20 aspect-square mx-auto my-2" aria-hidden="true"
                alt="Alt text here" />
            <h2 class="text-3xl font-bold tracking-tight text-light-header dark:text-dark-header sm:text-4xl">{{
                title }}</h2>
            <h3 class="mt-6 mx-auto leading-8 text-center text-light-text dark:text-dark-text">{{ grabber }}</h3>
            <div class="mt-8 mx-auto leading-8 text-left text-light-text dark:text-dark-text" v-html="description">
            </div>

        </div>
    </div>
</template>

<script setup>
////  Data  ////
const props = defineProps({
    productIcon: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    grabber: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const { title, grabber, description, productIcon } = toRefs(props);
</script>
