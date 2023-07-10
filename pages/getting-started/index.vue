<template>
  <Head>
    <Title>Getting Started</Title>
    <Meta name="description" content="Getting started content for SAF" />
  </Head>
  <div>
    <Header />
    <div class="relative bg-neutral-1  max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-4xl font-bold text-header  text-center"><strong>Getting
                Started</strong>
            </h1>
            <div
              class="prose-img mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert  prose-li:text-start prose-code:text-start"
              style="" v-html="gettingStartedContent"></div>
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

<style scoped>
.prose-img :deep(img) {
  background-color: #f1f3f4;
  border-radius: 25px;
  padding: 10px;
}
</style>

<script setup>
////  Data  ////
const isLoaded = ref(false)
const gettingStartedContent = ref("")
const pageTitle = ref("")

////  Methods  ////
const getGettingStartedContent = async () => {
  gettingStartedContent.value = await useAsyncData('getGettingStartedPage', () => GqlGetGettingStartedPage())
    .then(({ data }) => {
      return data._value.gettingStartedPage.data.attributes.content
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
