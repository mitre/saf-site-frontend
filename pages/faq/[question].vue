<template>
  <div>
    <Header />
    <div v-if="isLoaded">
      <ReadingPage :title="faq.questionNumber + '. ' + faq.question" :last-updated="faq.updated" :author="faq.author"
        :is-loaded="isLoaded">
        <div
          class="mt-8 mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
          v-html="answer"></div>
      </ReadingPage>
    </div>
    <div v-else class="grid h-screen place-items-center">
      <LoadingSpinner />
    </div>
    <Footer />
  </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';

////  Data  ////
const isLoaded = ref(false)
const faq = ref({})
const route = useRoute()
const answer = ref("")

////  Methods  ////
const getFAQs = async () => {
  faq.value = await useAsyncData('getFaqByQuestionNumber', () => GqlGetFaqByQuestionNumber({ number: parseInt(route.params.question) }), { initialCache: false })
    .then(({ data }) => {
      var date = new Date(data._value.faqs.data[0].attributes.updatedAt)
      answer.value = data._value.faqs.data[0].attributes.answer
      return {
        question: data._value.faqs.data[0].attributes.question,
        answer: data._value.faqs.data[0].attributes.answer,
        questionNumber: data._value.faqs.data[0].attributes.question_number,
        updated: date.toDateString(),
        author: data._value.faqs.data[0].attributes.author.data.attributes.name
      }
    });
}


////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getFAQs()
    isLoaded.value = true
  });
});



</script>




