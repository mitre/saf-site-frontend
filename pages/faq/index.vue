<template>
  <Header />
  <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
  <section aria-labelledby="faq-heading">
    <div class="max-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="max-w-xl">
        <h2 id="faq-heading" class="text-3xl font-bold tracking-tight dark:text-slate-200 ">Frequently asked questions</h2>
        <p class="mt-4 text-base dark:text-gray-500">Have a question you don't see covered here? Please contact <a href="mailto:saf@groups.mitre.org" class="text-blue-500 dark:text-white">saf@groups.mitre.org</a></p>
      </div>

      <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        <div v-for="faq in faqs" :key="faq.id">
          <dt class="text-lg font-bold text-lg dark:text-slate-200">{{faq.questionNumber}}. {{ faq.question }}</dt>
          <dd class="mt-3 text-sm prose dark:prose-invert line-clamp-3" v-html="faq.answer"></dd>
          <dd class="mt-4 text-blue-500 font-bold" ><a :href ="`/faq/${faq.questionNumber}`">View More</a></dd>
        </div>
      </dl>
    </div>
  </section>
</div>
<Footer />
</template>

<!-- <template>
    <div>
      <div>
        <Header />
      </div>
      <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full py-8 px-4 sm:px-6 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="mx-auto max-w-7xl px-4 sm:py-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <p class="text-4xl font-bold tracking-tight dark:text-slate-200 sm:text-5xl lg:text-6xl">Frequently Asked Questions</p>
              <p class="mx-auto mt-5 text-lg dark:text-gray-500">Have a question you don't see covered here? Please contact <a href="mailto:saf@groups.mitre.org" class="text-blue-500 dark:text-white">saf@groups.mitre.org</a></p>
            </div>
          </div>

            <div class="mx-auto max-w-7xl pb-4 px-1 sm:pb-8 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-7xl divide-y-2 divide-gray-200">
                <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                  <Disclosure  as="div" v-for="faq in faqs" :key="faq.question" class="pt-6 pb-3 sm:pb-0" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                        <div class="flex h-2">
                          <span >
                            <a :href="`#${slugify(faq.question)}`"><HashtagIcon :class="slugify(faq.question) == currentHash ? 'dark:bg-gray-500 bg-gray-300 dark:text-white text-black rounded-full h-8 w-8 p-1' : 'dark:text-white text-black h-8 w-8 p-1'" aria-hidden="true"/></a>
                          </span>
                          <span class="ml-4 font-bold text-xl text-gray-800 dark:text-slate-200" :id="`${slugify(faq.question)}`">{{ faq.question }}</span>
                        </div>
                        <span class="ml-6 flex h-7 items-center">
                          <ChevronDownIcon :class="[open || slugify(faq.question) == currentHash ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-6 pr-12 pl-2">
                      <span v-if="faq" v-html="faq.answer" class="mt-8 mx-auto leading-8 prose dark:prose-invert"></span>
                    </DisclosurePanel>
                  </Disclosure>
                </dl>
              </div>
            </div>

        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </template> -->

  
  <script>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronDownIcon, HashtagIcon } from '@heroicons/vue/outline'
  
  
  export default {
    data() {
      return {
        faqs: {},
        currentHash: "",
      };
    },
    watch: {
    $route() {
        this.updateHash()
    }
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getFAQs()
      });
    },
    components: { ChevronDownIcon, HashtagIcon, Disclosure, DisclosureButton, DisclosurePanel },
    methods: {
      slugify (str) {
      str = str.toLowerCase()
      str = str.trim()
      str = str.replace(/[^\w\s-]/g, '')
      str = str.replace(/[\s_-]+/g, '-')
      str = str.replace(/^-+|-+$/g, '')
      return str
    },
      async getFAQs() {
        this.faqs = await useAsyncData('getAllFAQs', () => GqlFAQs())
          .then(({ data }) => {
            console.log(data)
            this.currentHash = this.$route.hash.replace(/^#+/, '')
            return data._value.faqs.data.map((faq) => ({
              questionNumber: faq.attributes.question_number,
              question: faq.attributes.question,
              answer: faq.attributes.answer,
            }))
          });
      },
      updateHash() {
     this.currentHash = this.$route.hash.replace(/^#+/, '')
      }
    } 
  }
  </script>
  
