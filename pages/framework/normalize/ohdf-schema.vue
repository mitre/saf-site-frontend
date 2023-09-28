<template>
  <div>
    <Head>
      <Title>OHDF Schema</Title>
      <Meta name="description" content="OHDF Schema" />
    </Head>
    <div>
      <Header />
      <div
        class="max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto my-5 max-w-7xl mx-auto">
              <h1 class="text-center text-5xl font-bold text-header mb-5">
                <strong>OHDF Schema</strong>
              </h1>
              <div class="dark:block hidden">
                <json-viewer
                  :value="jsonData"
                  :expand-depth="1"
                  copyable
                  theme="json-code-dark-theme"
                  boxed
                />
              </div>
              <div class="dark:hidden">
                <json-viewer
                  :value="jsonData"
                  :expand-depth="2"
                  :expanded="true"
                  copyable
                  theme="json-code-light-theme"
                  boxed
                />
              </div>
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

<script setup>
import {ref, onMounted, nextTick} from 'vue';
import JsonViewer from 'vue-json-viewer/ssr';
import 'vue-json-viewer/style.css';
/// /  Data  ////
const isLoaded = ref(true);
const jsonData = ref(null);

/// /  Methods  ////
const getJsonData = async () => {
  jsonData.value = await useAsyncData('getJsonContentByPage', () =>
    GqlGetJsonContentByPage({pageName: 'Normalize-Schema'})
  ).then(({data}) => data.value.jsonContents.data[0].attributes.json);
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getJsonData();
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
