<template>
    <Header />
    <div v-if="isLoaded">
        <ApplicationPage :product-icon="pageIconHref" :title="pageTitle" :grabber="pageGrabber" :description="pageContent"
            :features="pageFeatures" />
    </div>
    <div v-else class="grid h-screen place-items-center">
        <LoadingSpinner />
    </div>
    <Footer />
</template>

<script setup>
////  Data  ////
const isLoaded = ref(false)
const route = useRoute()
const pageIconHref = ref("")
const pageTitle = ref("")
const pageContent = ref("")
const pageGrabber = ref("")
const pageFeatures = ref([])

////  Methods  ////
const getPageContent = async () => {
    await useAsyncData('getApplicationPage', () => GqlGetApplicationPage({ page: route.params.page }))
        .then(({ data }) => {
            pageIconHref.value = data._value.appPages.data[0].attributes.tool.data.attributes.icon.data.attributes.url
            pageTitle.value = data._value.appPages.data[0].attributes.tool.data.attributes.name
            pageGrabber.value = data._value.appPages.data[0].attributes.grabber
            pageContent.value = data._value.appPages.data[0].attributes.description
            pageFeatures.value = data._value.appPages.data[0].attributes.features.map((item) => {
                return {
                    name: item.title,
                    description: item.description,
                    imageSrc: item.image.data.attributes.url,
                    imageAlt: item.image.data.attributes.alternativeText
                }
            })
            return data
        });
}


////  Lifecycle  ////
onMounted(async () => {
    await nextTick(async () => {
        await getPageContent()
        isLoaded.value = true
    });
});

</script>
