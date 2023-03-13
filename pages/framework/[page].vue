<template>
    <Header />
    <div v-if="isLoaded">
        <ProductPage :product-icon="pageIconHref" :title="pageTitle" :grabber="pageGrabber" :description="pageContent"
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
    await useAsyncData('getFrameworkPage', () => GqlGetFrameworkPage({ page: route.params.page }))
        .then(({ data }) => {
            pageIconHref.value = data._value.frameworkPages.data[0].attributes.Icon.data.attributes.url
            pageTitle.value = data._value.frameworkPages.data[0].attributes.Page
            pageGrabber.value = data._value.frameworkPages.data[0].attributes.Grabber
            pageContent.value = data._value.frameworkPages.data[0].attributes.Description
            pageFeatures.value = data._value.frameworkPages.data[0].attributes.Features.map((item) => {
                return {
                    name: item.Title,
                    description: item.Description,
                    imageSrc: item.Image.data.attributes.url
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
