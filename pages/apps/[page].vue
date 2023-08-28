<template>
  <div>
    <Head>
      <Title>{{ pageTitle }}</Title>
      <Meta name="description" :content="`Application page for ${pageTitle}`" />
    </Head>
    <Header />
    <div v-if="isLoaded">
      <ApplicationPage
        :product-icon="pageIconHref"
        :title="pageTitle"
        :grabber="pageGrabber"
        :description="pageContent"
        :features="pageFeatures ?? []"
      />
    </div>
    <div v-else class="grid h-screen place-items-center">
      <LoadingSpinner />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {ApplicationPageFeature} from 'global';

/// /  Data  ////
const isLoaded = ref(false);
const route = useRoute();
const pageIconHref = ref('');
const pageTitle = ref('');
const pageContent = ref('');
const pageGrabber = ref('');
const pageFeatures = ref<ApplicationPageFeature[]>();

/// /  Methods  ////
const getPageContent = async () => {
  await useAsyncData('getApplicationPage', () =>
    GqlGetApplicationPage({
      page: route.fullPath.split('/')[2].replaceAll('-', ' ')
    })
  ).then(({data}) => {
    const pageData = data?.value?.appPages?.data[0].attributes;
    if (pageData) {
      pageIconHref.value =
        pageData?.tool?.data?.attributes?.icon?.data?.attributes?.url ??
        'Error';
      pageTitle.value =
        data?.value?.appPages?.data[0]?.attributes?.tool?.data?.attributes
          ?.name ?? 'Error';
      pageGrabber.value =
        data?.value?.appPages?.data[0]?.attributes?.grabber ?? 'Error';
      pageContent.value =
        data?.value?.appPages?.data[0]?.attributes?.description ?? 'Error';
      pageFeatures.value =
        data?.value?.appPages?.data[0]?.attributes?.features?.map((item) => ({
          name: item?.title,
          description: item?.description,
          imageSrc: item?.image?.data?.attributes?.url,
          imageAlt: item?.image?.data?.attributes?.alternativeText
        })) ?? [
          {
            name: 'Error',
            description: 'Error',
            imageSrc: 'Error',
            imageAlt: 'Error'
          }
        ];
    }
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
