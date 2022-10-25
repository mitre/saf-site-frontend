<!-- <template>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full py-8 px-4 sm:px-6 lg:px-8">
        <div class="mt-10">
            <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                {{faq.question}}
          <div v-for="stat in stats" :key="stat.label" class="border-t-2 border-gray-100 pt-6">
                <dt class="text-base font-medium text-gray-500">{{ stat.label }}</dt>
                <dd class="text-3xl font-bold tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div> 
            </dl>
            <div class="mt-10">
            <a href="#" class="text-base font-medium text-indigo-600">
                Learn more about how we're changing the world
                <span aria-hidden="true"> &rarr;</span>
            </a>
            </div>
        </div>
  </div>
  </template> -->

<template>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full py-8 px-4 sm:px-6 lg:px-8">
      <div class="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div class="mx-auto text-lg">
          <h1>
            <span class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight dark:text-gray-50 sm:text-4xl">{{faq.question}}</span>
          </h1>
        </div>
        <div class="mt-8 mx-auto leading-8 prose dark:prose-invert max-w-5xl">
            <span v-if="faq" v-html="faq.answer"></span>
            <p class="dark:text-white font-bold my-8">Updated: {{faq.updated}}</p>
        </div>
      </div>
      
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
          faq: {},
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
          await this.getFAQ()
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
        async getFAQ() {
          this.faq = await useAsyncData('getFaqById', () => GqlGetFaqById({id: this.$route.params.question}))
            .then(({data}) => {
             var date = new Date(data._value.faq.data.attributes.updatedAt)
              this.currentHash = this.$route.hash.replace(/^#+/, '')
              return {
                question: data._value.faq.data.attributes.question,
                answer: data._value.faq.data.attributes.answer,
                updated: date.toDateString(),
              }
            });
        },
        updateHash() {
       this.currentHash = this.$route.hash.replace(/^#+/, '')
        }
      } 
    }
    </script>
    
  



