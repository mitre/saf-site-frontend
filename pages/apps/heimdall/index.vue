<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
            <div v-if="isLoaded">
                <ProductPage :title="pageTitle" :description="heimdallContent" :features="features"
                    :product-icon="productIcon" />
            </div>
            <div v-else>
                <p> Loading ... </p>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
////  Data  ////
// const isLoaded = ref(false)
// const heimdallContent = ref("")
// const pageTitle = ref("")
const isLoaded = true
const productIcon = "https://res.cloudinary.com/the-mitre-corporation/image/upload/v1656708294/heimdall_8f6fe65253.svg?updated_at=2022-07-01T20:45:14.185Z"
const pageTitle = "Heimdall"
const heimdallContent = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non tellus nulla. Etiam vel odio elementum, rutrum risus sit amet, convallis risus. Aliquam dignissim neque erat, placerat porttitor orci placerat bibendum. Proin id euismod justo. Cras fringilla purus id orci sodales sodales. Curabitur at risus vitae magna tempus interdum a at tellus. Nunc consectetur risus aliquet luctus pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur orci.</p>"
const features = [
    {
        name: 'Visualize Your Secrity Posture',
        description:
            'Load data into Heimdall for easy sorting, filtering, and summarizing of your security results. Focus on information relevant to security assessments.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782131/Heimdall1_55997cad8d.png?updated_at=2023-03-02T18:35:33.118Z',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Aggregate Your Security Data',
        description:
            'Heimdall automatically converts input security data into a common format (OASIS Heimdall Data Format). Unite all of your security scan output under a single pane of glass. Export your aggregated data into a multitude of common formats supporting assessments.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782131/Heimdall2_b64b243c12.png?updated_at=2023-03-02T18:35:32.869Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Deep Dive Into Your Data',
        description:
            'Use Heimdall to examine each control in your test suite in detail. Determine root causes of failures and see the exact test code that led to each result.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782130/Heimdall3_a5621163a6.png?updated_at=2023-03-02T18:35:32.348Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Prove Security Over Time',
        description:
            'Heimdall’s comparison view shows the delta between two test runs. Tell at a glance if your security posture is improving or needs attention.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677782130/Heimdall4_e780629f96.png?updated_at=2023-03-02T18:35:32.653Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    }
]

////  Methods  ////
// const getVisualizeContent = async () => {
//     heimdallContent.value = await useAsyncData('getTextContentByPage', () => GqlGetTextContentByPage({ pageName: "Heimdall" }), { initialCache: false })
//         .then(({ data }) => {
//             pageTitle.value = data._value.textContents.data[0].attributes.name
//             return data._value.textContents.data[0].attributes.text
//         });
// }

////  Lifecycle  ////
// onMounted(async () => {
//     await nextTick(async () => {
//         await getHeimdallContent()
//         isLoaded.value = true
//     });
// });

</script>