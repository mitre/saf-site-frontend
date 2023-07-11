<template>
  <div>
    <Head>
      <Title>HDF Converters</Title>
      <Meta name="description" content="HDF Converters library content" />
    </Head>
    <div>
      <Header />
      <div
        class="max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-center text-4xl font-bold text-header">
                <strong>{{ pageTitle }}</strong>
              </h1>
              <div
                class="prose prose-sm mx-auto mb-6 mt-8 max-w-5xl text-left leading-8 text-foreground lg:prose-lg"
                v-html="libraryContent"
              ></div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Loading ...</p>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
/// /  Data  ////
const isLoaded = ref(false);
const libraryContent = ref('');
const pageTitle = ref('');

/// /  Methods  ////
const getLibraryContent = async () => {
  await useAsyncData(
    'getLibraryPageByName',
    () => GqlGetLibraryPageByName({name: 'HDF Converters'}),
    {initialCache: false}
  ).then(({data}) => {
    libraryContent.value = data._value.libraryPages.data[0].attributes.content;
    pageTitle.value = data._value.libraryPages.data[0].attributes.library;
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getLibraryContent();
    isLoaded.value = true;
  });
});
</script>
