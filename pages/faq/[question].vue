<template>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen overflow-hidden bg-white py-16 dark:bg-dark-bg"
    >
      <div
        class="absolute inset-0 bg-[url(/assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      ></div>
      <div
        class="relative w-full bg-white px-6 py-12 shadow-2xl shadow-slate-700/10 ring-1 ring-gray-900/5 dark:bg-gray-800 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28"
      >
        <div class="relative px-4 sm:px-6 lg:px-8">
          <template
            v-if="isLoaded"
          >
            <div class="prose prose-lg mx-auto max-w-prose text-lg">
              <h1>
                <span
                  class="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl"
                >
                  {{ faq.questionNumber }}. {{ faq.question }}
                </span>
                <span
                  class="block pt-3 text-center text-base font-semibold tracking-wide text-blue-600"
                >
                  Updated: {{ faq.updated }}
                  &nbsp; | &nbsp;
                  <NuxtLink
                    :to="`/blog/${slugify(faq.author)}?id=${faq.author}`"
                    class="hover:underline"
                  >
                    {{ faq.author }}
                  </NuxtLink>
                </span>
              </h1>
              <div
                class="prose prose-sm mx-auto mt-8 text-left leading-8 prose-code:text-start prose-li:text-start dark:prose-invert dark:text-dark-text lg:prose-lg"
                v-html="faq.answer"
              ></div>
            </div>
          </template>
          <template v-else>
            <div
              class="mt-2 block h-full min-h-screen text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl"
            >
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
export default {
  data() {
    return {
      faq: {},
      isLoaded: false
    };
  },

  mounted() {
    this.$nextTick(async () => {
      await this.getFAQ();
    });
  },
  methods: {
    async getFAQ() {
      this.faq = await useAsyncData('getFaqByQuestionNumber', () =>
        GqlGetFaqByQuestionNumber({
          number: parseInt(this.$route.params.question)
        }), { initialCache: false }
      ).then(({data}) => {
        var date = new Date(data._value.faqs.data[0].attributes.updatedAt);
        this.isLoaded = true;
        return {
          question: data._value.faqs.data[0].attributes.question,
          answer: data._value.faqs.data[0].attributes.answer,
          questionNumber: data._value.faqs.data[0].attributes.question_number,
          updated: date.toDateString(),
          author:
            data._value.faqs.data[0].attributes.author.data.attributes.name
        };
      });
    },
    slugify(str) {
      str = str.toLowerCase();
      str = str.trim();
      str = str.replace(/[^\w\s-]/g, '');
      str = str.replace(/[.\s_-]+/g, '-');
      str = str.replace(/^-+|-+$/g, '');
      return str;
    }
  }
};
</script>
