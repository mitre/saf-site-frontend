<template>
  <div>
    <div>
        <Header />
    </div>

    <div class="relative bg-white dark:bg-dark-bg flex lg:hidden">
      <button
        type="button"
        @click="setIsOpen(true)"
        class="mx-auto my-5 flex text-xl dark:text-white"
        aria-label="Open navigation"
      >
        Subsection List
        <MenuIcon class="h-6 w-6 ml-3 stroke-slate-500" />
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
          <div v-if="docData" class="mt-5">
            <DocumentationNavigation  :doc-data="docData" :current-subsection-href="currentSubsectionHref"/>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
    

    <div class="relative bg-white dark:bg-dark-bg mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12"> <!-- pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 -->

      <div class="hidden lg:relative lg:block lg:flex-none">
          <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
          <div class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
            <div class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
            <div class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
              
            <div v-if="docData">
              <DocumentationNavigation  :doc-data="docData" :current-subsection-href="currentSubsectionHref"/>
            </div>

          </div>
      </div>

      <div class="min-w-0 max-w-2xl flex-auto px-4 lg:py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
        <article>
          <p class="text-5xl font-bold text-gray-900 border-b border-slate-200 pb-4 mb-6 dark:text-white text-center">{{currentSubsection}}</p>
          <span v-if="renderedContent" v-html="renderedContent" class="mt-8 mx-auto leading-8 prose dark:prose-invert"></span>
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
          <div v-if="tableOfContents.length>0"> <!--Change this to a function to get the headings in the markdown text-->
              <h2
                id="on-this-page-title"
                class="font-display text-sm font-medium text-slate-900 dark:text-white"
              >
                On this page
              </h2>
              <ol role="list" class="mt-4 space-y-3 text-sm">
                <div v-for="(heading, key) in tableOfContents" :key="key">
                  <li key={{heading.title}}>
                    <h3>
                      <NuxtLink
                        :href="`/docs/${currentSubsectionHref}#${slugify(heading.title)}`"
                        :class="currentSubtitle == heading.title  ? 'text-sky-500' : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'"
                      >
                        {{heading.title}}
                      </NuxtLink>
                    </h3>
                    <div v-if="heading.subtitles.length > 0">
                      <ol
                        role="list"
                        class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
                      >
                      <div v-for="subtitle in heading.subtitles">
                          <li key={{subtitle}}>
                            <a
                              :href="`/docs/${currentSubsectionHref}#${slugify(subtitle)}`"
                              :class="currentSubtitle == subtitle ? 'text-sky-500':'hover:text-slate-600 dark:hover:text-slate-300'"
                            >
                              {{subtitle}}
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
        tableOfContents: [],
        currentSubtitle: "",
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
      slugify (str) {
      str = str.toLowerCase()
      str = str.trim()
      str = str.replace(/[^\w\s-]/g, '')
      str = str.replace(/[.\s_-]+/g, '-')
      str = str.replace(/^-+|-+$/g, '')
      console.log(str)
      return str
    },
      async getData() {
        this.docData = await useAsyncData('getIndexDocumentation', () => GqlGetIndexDocumentation({id: "6"})) // Change from hard coded value
          .then(({ data }) => {
            let content = data._value.currentDoc.data.attributes.subsections[0].content
            this.currentSubsection = data._value.currentDoc.data.attributes.subsections[0].title
            this.currentSubsectionHref = data._value.currentDoc.data.attributes.subsections[0].href
            this.allLinks = data._value.allLinks.data.flatMap(num => num.attributes.subsections)
            this.currentIndex = 0;

            let onPage = [];
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(content, 'text/html')


            let currentHeader = -1;
            for (let element in htmlDoc.body.childNodes){
              if (htmlDoc.body.childNodes[element].localName == "h1"){
                onPage.push({
                  title: htmlDoc.body.childNodes[element].outerText,
                  subtitles: []
                })
                currentHeader += 1;
                htmlDoc.body.childNodes[element].id = this.slugify(htmlDoc.body.childNodes[element].outerText)
              }
              if (htmlDoc.body.childNodes[element].localName == "h2"){
                onPage[currentHeader].subtitles.push(htmlDoc.body.childNodes[element].outerText)
                htmlDoc.body.childNodes[element].id = this.slugify(htmlDoc.body.childNodes[element].outerText)
              }
            }

            this.renderedContent = htmlDoc.documentElement.outerHTML
            this.tableOfContents = onPage

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
