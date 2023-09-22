<template>
  <div>
    <Head>
      <Title>FAQ</Title>
      <Meta
        name="description"
        content="Collection of frequently asked questions"
      />
    </Head>
    <div>
      <Header />
      <div class="relativ h-full min-h-screen px-4 pt-4 sm:px-6 lg:px-8">
        <section aria-labelledby="faq-heading">
          <div
            class="max-2xl mx-auto px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"
          >
            <div>
              <h2
                id="faq-heading"
                class="text-4xl font-bold tracking-tight text-header"
              >
                Frequently asked questions
              </h2>
              <p class="mt-4 text-xl">
                Have a question you don't see covered here? Please contact
                <a href="mailto:saf@groups.mitre.org" class="text-nav-active"
                  >saf@groups.mitre.org</a
                >
              </p>
            </div>

            <div
              class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3"
            >
              <div
                v-for="faq in faqs"
                :key="faq.questionNumber"
                class="flex flex-col"
              >
                <span class="text-2xl font-bold">{{ faq.question }} </span>
                <span class="prose prose-xl mt-3 text-base dark:prose-invert">{{
                  parser
                    .parseFromString(faq.answer ?? '', 'text/html')
                    .body.childNodes[0].innerText.substring(0, 125) + '...'
                }}</span>
                <span class="mt-4 font-bold text-nav-active">
                  <NuxtLink :to="`/faq/${faq.questionNumber}`"
                    >View More</NuxtLink
                  >
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick} from 'vue';
import { FAQ } from '~/global';

/*   Data   */
const isLoaded = ref(false);
const faqs = ref<FAQ[]>([]);
const parser = new DOMParser();

/*   Methods   */
const getFAQs = async () => {
  faqs.value = await useAsyncData('getAllFAQs', () => GqlFAQs()).then(
    ({data}) =>
      data?.value?.faqs?.data.map((faq) => ({
        questionNumber: faq?.attributes?.question_number ?? 0,
        question: faq?.attributes?.question ?? 'Error',
        answer: faq?.attributes?.answer ?? 'Error'
      })) ?? []
  );
};

/*   Lifecycle   */
onMounted(async () => {
  await nextTick(async () => {
    await getFAQs();
    isLoaded.value = true;
  });
});
</script>
