<template>
    <div class="relative bg-white dark:bg-dark-bg h-full pt-4 px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-7xl text-center mb-11">
            <img :src="`${productIcon}`" class="w-14 md:w-20 aspect-square mx-auto my-2" aria-hidden="true"
                alt="Alt text here" />
            <h2 class="text-3xl font-bold tracking-tight dark:text-gray-200 sm:text-4xl">{{
                title }}</h2>
            <h3 class="mt-6 mx-auto leading-8 text-center dark:text-dark-text">{{ grabber }}</h3>
            <div class="mt-8 mx-auto leading-8 text-left dark:text-dark-text min-h-[30vh]" v-html="description">
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

// const features = [
//     {
//         name: 'Visualize Your Secrity Posture',
//         description:
//             'Load data into Heimdall for easy sorting, filtering, and summarizing of your security results. Focus on information relevant to security assessments.',
//         imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782131/Heimdall1_55997cad8d.png?updated_at=2023-03-02T18:35:33.118Z',
//         imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
//     },
//     {
//         name: 'Aggregate Your Security Data',
//         description:
//             'Heimdall automatically converts input security data into a common format (OASIS Heimdall Data Format). Unite all of your security scan output under a single pane of glass. Export your aggregated data into a multitude of common formats supporting assessments.',
//         imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782131/Heimdall2_b64b243c12.png?updated_at=2023-03-02T18:35:32.869Z',
//         imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
//     },
//     {
//         name: 'Deep Dive Into Your Data',
//         description:
//             'Use Heimdall to examine each control in your test suite in detail. Determine root causes of failures and see the exact test code that led to each result.',
//         imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782130/Heimdall3_a5621163a6.png?updated_at=2023-03-02T18:35:32.348Z',
//         imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
//     },
//     {
//         name: 'Prove Security Over Time',
//         description:
//             'Heimdall’s comparison view shows the delta between two test runs. Tell at a glance if your security posture is improving or needs attention.',
//         imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782130/Heimdall4_e780629f96.png?updated_at=2023-03-02T18:35:32.653Z',
//         imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
//     }
// ]
</script>