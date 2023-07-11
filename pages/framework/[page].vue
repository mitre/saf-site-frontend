<template>
  <div>
    <Head>
      <Title>{{ pageTitle }}</Title>
      <Meta name="description" :content="`Framework page for ${pageTitle}`" />
    </Head>
    <Header />
    <div v-if="isLoaded">
      <FrameworkPage
        :product-icon="pageIconHref"
        :title="pageTitle"
        :grabber="pageGrabber"
        :description="pageContent"
        :features="pageFeatures"
      />
    </div>
    <div v-else class="grid h-screen place-items-center">
      <LoadingSpinner />
    </div>
    <Footer />
  </div>
</template>

<script setup>
/// /  Data  ////
const isLoaded = ref(false);
const route = useRoute();
const pageIconHref = ref('');
const pageTitle = ref('');
const pageContent = ref('');
const pageGrabber = ref('');
const pageFeatures = ref([]);

/// /  Methods  ////
const getPageContent = async () => {
  await useAsyncData('getFrameworkPage', () =>
    GqlGetFrameworkPage({page: route.params.page})
  ).then(({data}) => {
    pageIconHref.value =
      data.value.frameworkPages.data[0].attributes.capability.data.attributes.icon.data.attributes.url;
    pageTitle.value =
      data.value.frameworkPages.data[0].attributes.capability.data.attributes.name;
    pageGrabber.value = data.value.frameworkPages.data[0].attributes.grabber;
    pageContent.value =
      data.value.frameworkPages.data[0].attributes.description;
    return data;
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getPageContent();
    isLoaded.value = true;
  });
});
</script>
