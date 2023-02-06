<template>
  <div>
    <Header />
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden min-h-screen h-full">
      <div
        class="absolute inset-0 bg-[url(/assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
      </div>
      <div
        class="relative w-full bg-white dark:bg-gray-800 px-6 py-12 shadow-2xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28">
        <div class="relative px-4 sm:px-6 lg:px-8">
          <template v-if="isLoaded" class="text-lg prose prose-lg max-w-prose mx-auto ">
            <h1>
              <span
                class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl">
                {{ faq.questionNumber }}. {{ faq.question }}
              </span>
              <span class="pt-3 block text-base text-center text-blue-600 font-semibold tracking-wide">
                Updated: {{ faq.updated }}
                &nbsp; | &nbsp;
                <NuxtLink :to="`/blog/${slugify(faq.author)}?id=${faq.author}`" class="hover:underline">
                  {{ faq.author }}
                </NuxtLink>
              </span>
            </h1>
            <div
              class="mt-8 mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
              v-html="faq.answer"></div>
          </template>
          <template v-else>
            <div
              class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight min-h-screen h-full text-gray-900 dark:text-MITRE-silver sm:text-4xl">
              Loading ...
            </div>
          </template>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import slugify from '@/utils/useSlugify';

export default {
  data() {
    return {
      faq: {},
      isLoaded: false,
    };
  },

  mounted() {
    this.$nextTick(async () => {
      await this.getFAQ()
    });
  },
  methods: {
    async getFAQ() {
      this.faq = await useAsyncData('getFaqByQuestionNumber', () => GqlGetFaqByQuestionNumber({ number: parseInt(this.$route.params.question) }), { initialCache: false })
        .then(({ data }) => {
          var date = new Date(data._value.faqs.data[0].attributes.updatedAt)
          this.isLoaded = true
          return {
            question: data._value.faqs.data[0].attributes.question,
            answer: data._value.faqs.data[0].attributes.answer,
            questionNumber: data._value.faqs.data[0].attributes.question_number,
            updated: date.toDateString(),
            author: data._value.faqs.data[0].attributes.author.data.attributes.name
          }
        });
    },
  }
}
</script>
  




