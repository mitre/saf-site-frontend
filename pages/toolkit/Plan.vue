<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
            <div v-if="isLoaded">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center"><strong>{{
                            pageTitle
                        }}</strong>
                        </h1>
                        <div class="mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
                            v-html="planContent"></div>
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