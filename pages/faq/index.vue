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
            <h2 id="faq-heading" class="text-3xl font-bold tracking-tight text-light-header dark:text-dark-header ">
              Frequently asked
              questions</h2>
            <p class="mt-4 text-base text-light-text dark:text-dark-text">Have a question you don't see covered here?
              Please contact <a href="mailto:saf@groups.mitre.org"
                class="text-nav-light-active dark:text-nav-dark-active">saf@groups.mitre.org</a></p>
          </div>

          <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            <div v-for="faq in faqs" :key="faq.id">
              <dt class="text-lg font-bold text-light-text dark:text-dark-text">{{ faq.questionNumber }}. {{ faq.question
              }}
              </dt>
              <dd class="mt-3 text-sm prose dark:prose-invert line-clamp-3 text-light-text dark:text-dark-text"
                v-html="faq.answer"></dd>
              <dd class="mt-4 text-nav-light-active dark:text-nav-dark-active font-bold">
                <NuxtLink :to="`/faq/${faq.questionNumber}`">View More</NuxtLink>
              </dd>
            </div>
          </dl>
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
  
