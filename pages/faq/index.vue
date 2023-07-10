<template>
  <Head>
    <Title>FAQ</Title>
    <Meta name="description" content="Collection of frequently asked questions" />
  </Head>
  <div>
    <Header />
    <div class="relativ min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="faq-heading">
        <div class="max-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="max-w-xl">
            <h2 id="faq-heading" class="text-3xl font-bold tracking-tight text-header  ">
              Frequently asked
              questions</h2>
            <p class="mt-4 text-base text-base ">Have a question you don't see covered here?
              Please contact <a href="mailto:saf@groups.mitre.org" class="text-nav-active ">saf@groups.mitre.org</a></p>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            <div v-for="faq in faqs" :key="faq.id">
              <span class="text-lg font-bold text-base ">{{ faq.questionNumber }}. {{
                faq.question
              }}
              </span>
              <span class="mt-3 text-sm prose dark:prose-invert line-clamp-3 text-base " v-html="faq.answer" />
              <span class="mt-4 text-nav-active  font-bold">
                <NuxtLink :to="`/faq/${faq.questionNumber}`">View More</NuxtLink>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';

////  Data  ////
const isLoaded = ref(false)
const faqs = ref({})

////  Methods  ////
const getFAQs = async () => {
  faqs.value = await useAsyncData('getAllFAQs', () => GqlFAQs())
    .then(({ data }) => {
      return data._value.faqs.data.map((faq) => ({
        questionNumber: faq.attributes.question_number,
        question: faq.attributes.question,
        answer: faq.attributes.answer,
      }))
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
  
