<template>
  <Head>
    <Title>eMASS Client</Title>
    <Meta name="description" content="eMASS Client library content" />
  </Head>
  <div>
    <Header />
    <div class="relative bg-neutral-1  max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-4xl font-bold text-header  text-center"><strong>{{ pageTitle
            }}</strong>
            </h1>
            <div class="mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg text-foreground"
              v-html="libraryContent"></div>
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
const libraryContent = ref("")
const pageTitle = ref("")

////  Methods  ////
const getLibraryContent = async () => {
  await useAsyncData('getLibraryPageByName', () => GqlGetLibraryPageByName({ name: "eMASS Client" }), { initialCache: false })
    .then(({ data }) => {
      console.log(data)
      libraryContent.value = data._value.libraryPages.data[0].attributes.content
      pageTitle.value = data._value.libraryPages.data[0].attributes.library
    });
}

////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getLibraryContent()
    isLoaded.value = true
  });
});

</script>
