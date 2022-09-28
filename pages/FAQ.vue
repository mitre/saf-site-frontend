<template>
    <div>
      <div>
        <Header />
      </div>
      <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full py-8 px-4 sm:px-6 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="mx-auto max-w-7xl px-4 sm:py-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <p class="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl lg:text-6xl">Frequently Asked Questions</p>
              <p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">Have a question you don't see covered here? Please contact <a href="mailto:saf@groups.mitre.org" class="text-blue-600">saf@groups.mitre.org</a></p>
            </div>
          </div>

            <div class="mx-auto max-w-7xl pb-4 px-4 sm:pb-8 sm:px-6 lg:px-8">
              <div class="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                  <Disclosure as="div" v-for="faq in faqs" :key="faq.question" class="pt-6" v-slot="{ open }">
                    <dt class="text-lg">
                      <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-400">
                        <span class="font-medium text-gray-900 dark:text-MITRE-silver">{{ faq.question }}</span>
                        <span class="ml-6 flex h-7 items-center">
                          <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="mt-2 pr-12">
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
  </template>

  
  <script>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/outline'
  
  
  export default {
    data() {
      return {
        faqs: {},
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getFAQs()
      });
    },
    components: { ChevronDownIcon, Disclosure, DisclosureButton, DisclosurePanel },
    methods: {
      async getFAQs() {
        this.faqs = await useAsyncData('getAllFAQs', () => GqlFAQs())
          .then(({ data }) => {
            return data._value.faqs.data.map((faq) => ({
              question: faq.attributes.question,
              answer: faq.attributes.answer,
            }))
          });
      },
    } 
  }
  </script>
  
