<template>
  <div>
    <div>
        <Header />
    </div>

    <div class="mr-6 flex lg:hidden">
      <button
        type="button"
        @click="setIsOpen(true)"
        class="relative"
        aria-label="Open navigation"
      >
        <MenuIcon class="h-6 w-6 stroke-slate-500" />
      </button>
      <Dialog
        :open="isOpen"
        @close="setIsOpen"
        class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <DialogPanel class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6">
          <div class="flex items-center">
            <button
              type="button"
              @click="setIsOpen(false)"
              aria-label="Close navigation"
            >
              <XIcon class="h-6 w-6 stroke-slate-500" />
            </button>
          </div>
          <!-- Insert subsection navigation component here for mobile view -->
        </DialogPanel>
      </Dialog>
    </div>
    

    <div class="relative bg-white dark:bg-dark-bg mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"> <!-- pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 -->

      <div class="hidden lg:relative lg:block lg:flex-none">
          <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
              
              <div class="w-64 pr-8 xl:w-72 xl:pr-16">
                <nav class='text-base lg:text-sm'>
                  <ul role="list" class="space-y-9">
                    <div v-for="(section, key) in docData" :key="key">
                      <li key={{section.section_title}}>
                        <h2 class="font-display font-medium text-slate-900 dark:text-white">
                          {{section.section_title}}
                        </h2>
                        <ul
                          role="list"
                          class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                        >
                          <div v-for="subsection in section.subsections">
                            <li key={{subsection.title}} class="relative">
                              <a :href ="`/docs/${subsection.href}`" :class="[
                                'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                                subsection.href==currentSubsectionHref
                                ? 'font-semibold text-sky-500 before:bg-sky-500'
                                : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                                ]">
                              {{subsection.title}}
                              </a>
                            </li>
                          </div>
                        </ul>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>

          </div>
      </div>

      <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          <!-- Is the v-if below necessary? -->
          <div v-if="docData.section_title">
            <header v-if="section" class="mb-9 space-y-1">
                <p class="font-display text-sm font-medium text-sky-500">
                  {{docData.section_title}}
                </p>
                <h1 v-if="title" class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
                  {{docData.section_title}}
                </h1>
            </header>
          </div>
          <p class="text-4xl font-bold text-gray-900 border-b border-slate-200 pb-4 mb-6 dark:text-white">{{currentSubsection}}</p>
          <span v-if="renderedContent" v-html="renderedContent" class="mt-8 mx-auto leading-8 prose dark:prose-invert"></span>
          <!-- <Prose>{children}</Prose> -->
        </article>
        <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            <div v-if="allLinks[currentIndex-1]">
              <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
                Previous
              </dt>
              <dd class="mt-1">
                <a :href ="`/docs/${allLinks[currentIndex-1].href}`" class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"> <!-- Change docData.title to find next page title -->
                  <span aria-hidden="true">&larr;</span> {{allLinks[currentIndex-1].title}}
                </a>
              </dd>
            </div>
            <div v-if="allLinks[currentIndex+1]" class="ml-auto text-right">
              <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
                Next
              </dt>
              <dd class="mt-1">
                <a :href ="`/docs/${allLinks[currentIndex+1].href}`" class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"> <!-- Change docData.title to find next page title -->
                  <span aria-hidden="true">&rarr;</span> {{allLinks[currentIndex+1].title}} 
                </a>
              </dd>
            </div>
        </dl>
      </div>
  
      <div class="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <nav aria-labelledby="on-this-page-title" class="w-56">
          <div v-if="docData.length>0"> <!--Change this to a function to get the headings in the markdown text-->
              <h2
                id="on-this-page-title"
                class="font-display text-sm font-medium text-slate-900 dark:text-white"
              >
                On this page
              </h2>
              <ol role="list" class="mt-4 space-y-3 text-sm">
                <div v-for="(section, key) in docData" :key="key">
                  <li key={{section.section_title}}>
                    <h3>
                      <NuxtLink
                        href={{section.section_title}}
                        :class="{ 'text-sky-500': isActive, 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300': !isActive}"
                      >
                        {{section.section_title}}
                      </NuxtLink>
                    </h3>
                    <div v-if="section.subsections > 0">
                      <ol
                        role="list"
                        class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                      >
                      <div v-for="subsection in section.subsections">
                          <li key={{subsection.title}}>
                            <a
                              :href="`/docs/${subsection.href}`"
                              :class="{ 'text-sky-500': isActive, 'hover:text-slate-600 dark:hover:text-slate-300': !isActive}"
                            >
                              {{subsection.title}}
                          </a>
                          </li>
                      </div>
                      </ol>
                    </div>
                  </li>
                </div>
              </ol>
          </div>
        </nav>
      </div> 
    </div>
  </div>
</template>
  
  
<script>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
  
  export default {
    data() {
      return {
        docData: {},
        renderedContent: {},
        tableOfContents: {},
        allLinks: [],
        currentIndex: 0,
        currentSubsection: "",        
        currentSubsectionHref: "",
        isOpen: ref(false),
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getData()
      });
    },
    components: { Dialog, DialogPanel, MenuIcon, XIcon },
    methods: {
      async getData() {
        this.docData = await useAsyncData('getIndexDocumentation', () => GqlGetIndexDocumentation({id: "1"}))
          .then(({ data }) => {
            console.log("Data: ", data)
            this.renderedContent = data._value.currentDoc.data.attributes.subsections[0].content
            this.currentSubsection = data._value.currentDoc.data.attributes.subsections[0].title
            this.currentSubsectionHref = data._value.currentDoc.data.attributes.subsections[0].href
            this.allLinks = data._value.allLinks.data.flatMap(num => num.attributes.subsections)
            this.currentIndex = 0;

            // TO-DO: Add functionality for "On this page"
            
            return data._value.allLinks.data.map((doc) => ({
            section_title: doc.attributes.section_title,
            subsections: doc.attributes.subsections,
          }))
          });
      },
      setIsOpen(value){
        this.isOpen = value
      },
    } 
  }
</script>
