<template>
  <div>
    <Head>
      <Title>Getting Started</Title>
      <Meta
        name="description"
        content="Getting started content for MITRE SAF©"
      />
    </Head>
    <div>
      <Header />
      <div
        class="max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded && gettingStartedContent">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-center text-5xl font-bold text-header">
                <strong>Getting Started</strong>
              </h1>
              <div
                class="prose-img prose prose-xl mx-auto mb-6 mt-8 max-w-5xl text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start"
                style=""
                v-html="gettingStartedContent"
              ></div>
            </div>
          </div>
        </div>
        <div v-else class="text-center my-5">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/*   Data   */
const isLoaded = ref(false);
const gettingStartedContent = ref<string | undefined>();

/*   Methods   */
const getGettingStartedContent = async () => {
  gettingStartedContent.value = await useAsyncData(
    'getGettingStartedPage',
    () => GqlGetGettingStartedPage()
  ).then(
    ({data}) => data?.value?.gettingStartedPage?.data?.attributes?.content
  );
};

/*   Lifecycle   */
onMounted(async () => {
  await nextTick(async () => {
    await getGettingStartedContent();
    isLoaded.value = true;
  });
});
</script>

<style scoped>
.prose-img :deep(img) {
  background-color: #f1f3f4;
  border-radius: 25px;
  padding: 10px;
}
</style>
