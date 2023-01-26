<template>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen bg-white px-4 pt-4 dark:bg-dark-bg sm:px-6 lg:px-8"
    >
      <section aria-labelledby="faq-heading">
        <div
          class="max-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <div class="max-w-xl">
            <h2
              id="faq-heading"
              class="text-3xl font-bold tracking-tight dark:text-slate-200"
            >
              Frequently asked questions
            </h2>
            <p class="mt-4 text-base dark:text-gray-500">
              Have a question you don't see covered here? Please contact
              <a
                href="mailto:saf@groups.mitre.org"
                class="text-blue-500 dark:text-white"
                >saf@groups.mitre.org</a
              >
            </p>
          </div>

          <dl
            class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3"
          >
            <div v-for="faq in faqs" :key="faq.id">
              <dt class="text-lg font-bold dark:text-slate-200">
                {{ faq.questionNumber }}. {{ faq.question }}
              </dt>
              <dd
                class="prose mt-3 text-sm line-clamp-3 dark:prose-invert"
                v-html="faq.answer"
              />
              <dd class="mt-4 font-bold text-blue-500">
                <NuxtLink :to="`/faq/${faq.questionNumber}`">
                  View More
                </NuxtLink>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: {}
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getFAQs();
    });
  },
  methods: {
    async getFAQs() {
      this.faqs = await useAsyncData('getAllFAQs', () => GqlFAQs()).then(
        ({data}) => {
          return data._value.faqs.data.map((faq) => ({
            questionNumber: faq.attributes.question_number,
            question: faq.attributes.question,
            answer: faq.attributes.answer
          }));
        }
      );
    }
  }
};
</script>
