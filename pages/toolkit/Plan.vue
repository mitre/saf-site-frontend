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
        name: 'Test Title 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl tortor, convallis id quam sed, suscipit tempor lectus. Vestibulum congue ligula accumsan urna fringilla hendrerit. Cras id nisi elit. Nullam euismod risus id neque tristique, non tempus ex sodales. Mauris eu ullamcorper leo, ut pretium magna. Donec sit amet ultrices ex. Pellentesque euismod scelerisque neque. Aliquam erat volutpat. Donec fringilla rutrum mi, sed cursus leo accumsan ac. Duis id cursus ex. Sed maximus sapien erat, in cursus purus iaculis a. Integer lectus tortor, maximus eget arcu eget, vehicula mollis odio.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677105612/Heimdall_Summary_View_569781d578.jpg?updated_at=2023-02-22T22:40:13.064Z',
        imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
        name: 'Test Title 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl tortor, convallis id quam sed, suscipit tempor lectus. Vestibulum congue ligula accumsan urna fringilla hendrerit. Cras id nisi elit. Nullam euismod risus id neque tristique, non tempus ex sodales. Mauris eu ullamcorper leo, ut pretium magna. Donec sit amet ultrices ex. Pellentesque euismod scelerisque neque. Aliquam erat volutpat. Donec fringilla rutrum mi, sed cursus leo accumsan ac. Duis id cursus ex. Sed maximus sapien erat, in cursus purus iaculis a. Integer lectus tortor, maximus eget arcu eget, vehicula mollis odio.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677105611/Heimdall_Compare_View_3a022b6c3c.jpg?updated_at=2023-02-22T22:40:12.421Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
        name: 'Test Title 3',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisl tortor, convallis id quam sed, suscipit tempor lectus. Vestibulum congue ligula accumsan urna fringilla hendrerit. Cras id nisi elit. Nullam euismod risus id neque tristique, non tempus ex sodales. Mauris eu ullamcorper leo, ut pretium magna. Donec sit amet ultrices ex. Pellentesque euismod scelerisque neque. Aliquam erat volutpat. Donec fringilla rutrum mi, sed cursus leo accumsan ac. Duis id cursus ex. Sed maximus sapien erat, in cursus purus iaculis a. Integer lectus tortor, maximus eget arcu eget, vehicula mollis odio.',
        imageSrc: 'https://res.cloudinary.com/the-mitre-corporation/image/upload/v1677105612/Heimdall_Fail_Details_ff384cbe3f.jpg?updated_at=2023-02-22T22:40:12.902Z',
        imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
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