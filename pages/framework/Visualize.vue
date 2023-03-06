<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
            <div v-if="isLoaded">
                <div class="mx-auto max-w-7xl text-center">
                    <img src="https://res.cloudinary.com/the-mitre-corporation/image/upload/v1656709924/Visualize_Icon_Light_a2b69e0c60.svg?updated_at=2022-07-01T21:12:06.195Z"
                        class="w-14 md:w-20 aspect-square mx-auto mb-4" aria-hidden="true" alt="Alt text here" />
                    <h2 class="text-3xl font-bold tracking-tight dark:text-gray-200 sm:text-4xl">{{ pageTitle }}</h2>
                    <div class="mt-8 mx-auto leading-8 text-left dark:text-dark-text" v-html="visualizeContent"></div>

                </div>
                <div class="sm:flex sm:items-center mb-10 max-w-6xl mx-auto">
                    <div class="sm:flex-auto">
                        <!-- <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center"><strong>{{
                            pageTitle
                        }}</strong>
                        </h1>
                        <div class="mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
                            v-html="visualizeContent"></div> -->

                        <div class="mt-16 space-y-16">
                            <div v-for="(feature, featureIdx) in features" :key="feature.name"
                                class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                                <div
                                    :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-4', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-9']">
                                    <h3 class="text-2xl font-bold dark:text-gray-200">{{ feature.name }}</h3>
                                    <p class="mt-2 text-lg dark:text-dark-text">{{ feature.description }}</p>
                                </div>
                                <div
                                    :class="[featureIdx % 2 === 0 ? 'lg:col-start-6' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7']">
                                    <div class="overflow-hidden rounded-lg">
                                        <component :is="feature.icon"
                                            :class="[featureIdx % 2 === 0 ? 'md:float-right' : '', 'flex-shrink-0 w-40 text-blue-600']"
                                            aria-hidden="true" />
                                        <!-- <img :src="feature.imageSrc" :alt="feature.imageAlt"
                                            class="object-cover object-center" /> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p> Loading ... </p>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { AcademicCapIcon } from '@heroicons/vue/solid';

////  Data  ////
const isLoaded = ref(false)
const visualizeContent = ref("")
const pageTitle = ref("")
const features = [
    {
        name: 'Visualize Your Secrity Posture',
        description:
            'Load data into Heimdall for easy sorting, filtering, and summarizing of your security results. Focus on information relevant to security assessments.',
        icon: AcademicCapIcon,
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782131/Heimdall1_55997cad8d.png?updated_at=2023-03-02T18:35:33.118Z',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Aggregate Your Security Data',
        description:
            'Heimdall automatically converts input security data into a common format (OASIS Heimdall Data Format). Unite all of your security scan output under a single pane of glass. Export your aggregated data into a multitude of common formats supporting assessments.',
        icon: AcademicCapIcon,
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782131/Heimdall2_b64b243c12.png?updated_at=2023-03-02T18:35:32.869Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Deep Dive Into Your Data',
        description:
            'Use Heimdall to examine each control in your test suite in detail. Determine root causes of failures and see the exact test code that led to each result.',
        icon: AcademicCapIcon,
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782130/Heimdall3_a5621163a6.png?updated_at=2023-03-02T18:35:32.348Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Prove Security Over Time',
        description:
            'Heimdall’s comparison view shows the delta between two test runs. Tell at a glance if your security posture is improving or needs attention.',
        icon: AcademicCapIcon,
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782130/Heimdall4_e780629f96.png?updated_at=2023-03-02T18:35:32.653Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    }
]

////  Methods  ////
const getVisualizeContent = async () => {
    visualizeContent.value = await useAsyncData('getTextContentByPage', () => GqlGetTextContentByPage({ pageName: "Visualize" }), { initialCache: false })
        .then(({ data }) => {
            pageTitle.value = data._value.textContents.data[0].attributes.name
            return data._value.textContents.data[0].attributes.text
        });
}

////  Lifecycle  ////
onMounted(async () => {
    await nextTick(async () => {
        await getVisualizeContent()
        isLoaded.value = true
    });
});

</script>