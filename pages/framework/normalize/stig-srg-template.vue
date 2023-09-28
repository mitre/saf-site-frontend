<template>
  <div>
    <Head>
      <Title>STIG/SRG Template</Title>
      <Meta name="description" content="STIG/SRG Template Code Block" />
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
                <strong>STIG/SRG Template</strong>
              </h1>
              <div
                class="prose prose-xl mx-auto mt-8 max-w-none text-left leading-8 dark:prose-invert"
                v-html="code"
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

<script setup>
import {ref, onMounted, nextTick} from 'vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-ruby';

/*   Data   */
const isLoaded = ref(false);
const code = ref(null);

/// /  Methods  ////
const getCodeData = async () => {
  code.value = await useAsyncData('getTextContentByPage', () =>
    GqlGetTextContentByPage({pageName: 'STIG-SRG-Template'})
  ).then(({data}) => data.value.textContents.data[0].attributes.text);
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getCodeData();
    isLoaded.value = true;
  });
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  Prism.highlightAll();
});
</script>
