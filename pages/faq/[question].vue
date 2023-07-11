<template>
  <Head>
    <Title>Question {{ faq.questionNumber }}</Title>
    <Meta
      name="description"
      :content="`Answer to question ${faq.questionNumber}`"
    />
  </Head>
  <div>
    <Header />
    <div v-if="isLoaded">
      <ReadingPage
        :title="faq.questionNumber + '. ' + faq.question"
        :last-updated="faq.updated"
        :author="faq.author"
      >
        <div
          class="prose prose-sm mx-auto mt-8 text-left text-base leading-8 dark:prose-invert lg:prose-lg prose-code:text-start prose-li:text-start"
          v-html="answer"
        ></div>
      </ReadingPage>
    </div>
    <div v-else class="grid h-screen place-items-center">
      <LoadingSpinner />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import {ref, onMounted, nextTick} from 'vue';

/// /  Data  ////
const isLoaded = ref(false);
const faq = ref({});
const route = useRoute();
const answer = ref('');

/// /  Methods  ////
const getFAQs = async () => {
  faq.value = await useAsyncData(
    'getFaqByQuestionNumber',
    () =>
      GqlGetFaqByQuestionNumber({number: parseInt(route.params.question, 10)}),
    {initialCache: false}
  ).then(({data}) => {
    if (!data._value || !data._value.faqs.data[0]) return navigateTo('/faq');

    const date = new Date(data._value.faqs.data[0].attributes.updatedAt);
    answer.value = data._value.faqs.data[0].attributes.answer;
    return {
      question: data._value.faqs.data[0].attributes.question,
      answer: data._value.faqs.data[0].attributes.answer,
      questionNumber: data._value.faqs.data[0].attributes.question_number,
      updated: date.toDateString(),
      author: data._value.faqs.data[0].attributes.author.data.attributes.name
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
