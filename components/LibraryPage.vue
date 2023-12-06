<template>
  <div>
    <Head>
      <Title>{{ pageTitle }}</Title>
      <Meta name="description" :content="`${pageTitle} library content`" />
    </Head>
    <div>
      <Header />
      <div
        class="max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-center text-5xl font-bold text-header">
                <strong>{{ pageTitle }}</strong>
              </h1>
              <div
                class="prose prose-xl prose-headings:text-foreground prose-a:text-foreground mx-auto mb-6 mt-8 max-w-5xl text-left leading-8 text-foreground"
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

<script setup lang="ts">
/*   Data   */
const props = defineProps({
  pageTitle: {
    type: String,
    required: true
  },
  libraryContent: {
    type: String,
    required: true
  },
  isLoaded: {
    type: Boolean,
    required: true
  }
});

const {pageTitle, libraryContent, isLoaded} = toRefs(props);
</script>
