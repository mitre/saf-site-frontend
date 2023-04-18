<template>
    <div class="relative dark:bg-dark-backdrop-primary h-full pt-4 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl text-center">
            <img :src="`${productIcon}`" class="w-14 md:w-20 aspect-square mx-auto my-2" aria-hidden="true"
                alt="Alt text here" />
            <h2 class="text-3xl font-bold tracking-tight dark:text-gray-200 sm:text-4xl">{{
                title }}</h2>
            <h3 class="mt-6 mx-auto leading-8 text-center dark:text-dark-text">{{ grabber }}</h3>
            <div class="mt-8 mx-auto leading-8 text-left dark:text-dark-text" v-html="description"></div>

        </div>
    </div>
    <div class="sm:flex sm:items-center mb-10 mx-auto">
        <div class="sm:flex-auto">
            <div class="mt-16 space-y-16">
                <div v-for="(feature, featureIdx) in features" :key="feature.name"
                    :class="[featureIdx % 2 === 0 ? '' : 'bg-gray-300 dark:bg-gray-700', 'flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 p-4']">
                    <div
                        :class="[featureIdx % 2 === 0 ? 'lg:col-start-1 lg:ml-10' : 'lg:col-start-8 xl:col-start-9 lg:mr-10', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4 ']">
                        <h3 class="text-2xl font-bold dark:text-gray-200">{{ feature.name }}</h3>
                        <p class="mt-2 text-lg dark:text-dark-text">{{ feature.description }}</p>
                    </div>
                    <div
                        :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5 lg:mr-10' : 'lg:col-start-1 lg:ml-10', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8 ']">
                        <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg drop-shadow-2xl">
                            <img :src="feature.imageSrc" :alt="feature.imageAlt" class="object-cover object-center" />
                        </div>
                    </div>
                </div>
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
    features: {
        type: Array,
        required: true,
    }
});

const { title, grabber, description, features, productIcon } = toRefs(props);
</script>