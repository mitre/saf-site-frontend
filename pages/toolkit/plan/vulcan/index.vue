<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
            <div v-if="isLoaded">
                <div class="mx-auto max-w-7xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight dark:text-gray-200 sm:text-4xl">{{ pageTitle }}</h2>
                    <div class="mt-8 mx-auto leading-8 text-left dark:text-dark-text" v-html="planContent"></div>
                </div>
                <div class="sm:flex sm:items-center mb-10 max-w-7xl mx-auto">
                    <div class="sm:flex-auto">
                        <div class="mt-16 space-y-16">
                            <div v-for="(feature, featureIdx) in features" :key="feature.name"
                                class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8">
                                <div
                                    :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4']">
                                    <h3 class="text-2xl font-bold dark:text-gray-200">{{ feature.name }}</h3>
                                    <p class="mt-2 text-lg dark:text-dark-text">{{ feature.description }}</p>
                                </div>
                                <div
                                    :class="[featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8']">
                                    <div class="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg">
                                        <img :src="feature.imageSrc" :alt="feature.imageAlt"
                                            class="object-cover object-center" />
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
////  Data  ////
const isLoaded = ref(false)
const planContent = ref("")
const pageTitle = ref("")

const features = [
    {
        name: 'Develop Baselines in a User-Friendly Editing Window',
        description:
            'Construct your baselines in a simple but feature-rich editing view. Use Vulcan’s sorting and filtering features to quickly search through your controls.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677259283/Vulcan1_288f0e4073.png?updated_at=2023-02-24T17:21:24.991Z',
        imageAlt: 'Change alt text',
    },
    {
        name: 'Align Your Content Back To Source Guidance',
        description:
            'Import your high-level requirements into Vulcan and use them as the direct template for your baseline content. Start with general guidance and tailor it to your component.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677259283/Vulcan2_023dc2c953.png?updated_at=2023-02-24T17:21:25.071Z',
        imageAlt: 'Change alt text',
    },
    {
        name: 'Streamline Baseline Creation In A Collaborative Environment',
        description:
            'Vulcan supports a distributed model of baseline development in which multiple authors collaborate to produce high-quality content. Use Vulcan’s change control, peer review and role-based permissions to keep all of your authors working from the same sheet of music. Avoid the mental overhead of managing your document versions manually.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677259284/Vulcan3_2df8781086.png?updated_at=2023-02-24T17:21:25.074Z',
        imageAlt: 'Change alt text',
    },
    {
        name: 'Develop Automated Tests For Your Content',
        description:
            'Vulcan includes an InSpec testing framework integration to allow authors to write automated tests alongside their human-readable baselines. Vulcan pre-populates the tests with metadata from the original baselines to keep your test profiles tightly bound to the guidance from which they were written.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677259283/Vulcan4_9c4a928692.png?updated_at=2023-02-24T17:21:24.771Z',
        imageAlt: 'Change alt text',
    }
]

////  Methods  ////
const getPlanContent = async () => {
    planContent.value = await useAsyncData('getTextContentByPage', () => GqlGetTextContentByPage({ pageName: "Plan" }), { initialCache: false })
        .then(({ data }) => {
            pageTitle.value = data._value.textContents.data[0].attributes.name
            return data._value.textContents.data[0].attributes.text
        });
}

////  Lifecycle  ////
onMounted(async () => {
    await nextTick(async () => {
        await getPlanContent()
        isLoaded.value = true
    });
});

</script>