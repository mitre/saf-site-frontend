<template>
  <div>
    <Header />
    <div
      class="relative bg-light-backdrop-primary dark:bg-dark-backdrop-primary max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-4xl font-bold text-light-text dark:text-dark-text text-center"><strong>{{ pageTitle
            }}</strong>
            </h1>
            <div
              class="mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
              v-html="gettingStartedContent"></div>
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
const gettingStartedContent = ref("")
const pageTitle = ref("")

////  Methods  ////
const getGettingStartedContent = async () => {
  gettingStartedContent.value = await useAsyncData('getTextContentByPage', () => GqlGetTextContentByPage({ pageName: "Getting Started" }), { initialCache: false })
    .then(({ data }) => {
      pageTitle.value = data._value.textContents.data[0].attributes.name
      console.log(pageTitle)
      return data._value.textContents.data[0].attributes.text
    });
}

////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getGettingStartedContent()
    isLoaded.value = true
  });
});

</script>
