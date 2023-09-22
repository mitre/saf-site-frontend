<template>
  <div>
    <Head>
      <Title>Question {{ faq?.questionNumber ?? 0 }}</Title>
      <Meta
        name="description"
        :content="`Answer to question ${faq?.questionNumber ?? 'error'}`"
      />
    </Head>
    <div>
      <Header />
      <div v-if="isLoaded && faq">
        <ReadingPage
          :title="faq.question"
          :last-updated="faq.updated"
          :author="faq.author"
          go-back-link="/faq"
        >
          <div
            class="prose prose-xl max-w-full mx-auto mt-8 text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start"
            v-html="answer"
          ></div>
        </ReadingPage>
      </div>
      <div v-else class="grid h-screen place-items-center">
        <LoadingSpinner />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick} from 'vue';
import {FAQ} from '~/global';

/// /  Data  ////
const isLoaded = ref(false);
const faq = ref<
  FAQ & {
    updated: string;
    author: string;
  }
>();
const route = useRoute();
const answer = ref('');

/// /  Methods  ////
const getFAQs = async () => {
  faq.value = await useAsyncData('getFaqByQuestionNumber', () =>
    GqlGetFaqByQuestionNumber({
      number: parseInt(route.params.question.toString(), 10)
    })
  ).then(({data}) => {
    if (!data.value || !data?.value?.faqs?.data[0]) {
      return navigateTo('/faq');
    }

    const date = new Date(data?.value?.faqs?.data[0]?.attributes?.updatedAt);
    answer.value = data?.value?.faqs?.data[0]?.attributes?.answer ?? 'Error';
    return {
      question: data?.value?.faqs?.data[0]?.attributes?.question,
      answer: data?.value?.faqs?.data[0]?.attributes?.answer,
      questionNumber: data?.value?.faqs?.data[0]?.attributes?.question_number,
      updated: date.toDateString(),
      author:
        data?.value?.faqs?.data[0]?.attributes?.author?.data?.attributes?.name
    };
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getFAQs();
    isLoaded.value = true;
  });
});
</script>
