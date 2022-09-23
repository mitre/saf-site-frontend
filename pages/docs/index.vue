<template>
  <div>
    <div>
        <Header />
    </div>

    <!-- Add left side nav here for desktop and mobile  (See if vue or nuxt have a checker for mobile device) -->

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
          <span v-html="renderedContent" class="mt-8 mx-auto leading-8 prose dark:prose-invert"></span>
          <!-- <Prose>{children}</Prose> -->
        </article>
        <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
            <div v-if="previousPage">
              <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
                Previous
              </dt>
              <dd class="mt-1">
                <a :href ="`/docs/`" class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"> <!-- Change docData.title to find next page title -->
                  <span aria-hidden="true">&larr;</span> {{previousPage.title}}
                </a>
              </dd>
            </div>
            <div v-if="nextPage" class="ml-auto text-right">
              <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
                Next
              </dt>
              <dd class="mt-1">
                <a :href ="`/docs/`" class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"> <!-- Change docData.title to find next page title -->
                  <span aria-hidden="true">&rarr;</span> {{nextPage.title}} 
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
  import axios from 'axios'
  import { graphql } from 'graphql'
  import gql from 'graphql-tag'
  import { marked } from 'marked'
  import { slugifyWithCounter } from '@sindresorhus/slugify'

  
  
  export default {
    data() {
      return {
        docData: {},
        renderedContent: {},
        tableOfContents: {},
        currentSubsection: "",         // Hardcoded Temp Value
        currentSubsectionHref: "",
        previousPage: {title: "PP Title", href: "/"}, // Hardcoded Temp Value
        nextPage: {title: "NP Title", href:"/blog"}, // Hardcoded Temp Value
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getData()
      });
    },
    methods: {
      async getData() {
        this.docData = await useAsyncData('getDocumentation', () => GqlGetDocumentation({href: "class-overview"}))  // Temporarily hardcoded the input
          .then(({ data }) => {
            console.log("The route: ", this.$route.params.section)
            this.renderedContent = data._value.currentDoc.data[0].attributes.subsections[0].content
            this.currentSubsection = data._value.currentDoc.data[0].attributes.subsections[0].title
            this.currentSubsectionHref = "class-overview"  // Temporarily hardcoded the input
            console.log("Current Subsection:", this.currentSubsection)

            console.log("Current Doc: ", data._value.currentDoc)
            console.log("All Links: ", data._value.allLinks)

            let test = data._value.currentDoc.data[0].attributes.subsections[0].content

            var parser = new DOMParser();
            var htmlDoc = parser.parseFromString(test, 'text/html');

            let onPage = []
            
            let nodes = htmlDoc.body.childNodes
            
            for (let el in nodes){
              if(el.localName ==='h1'){

              }
            }

            console.log(nodes[0].localName)
            console.log(htmlDoc.body.childNodes)

            console.log("Test: ",data._value.currentDoc.data[0].attributes.subsections[0].content)
            // renderedContent.querySelectorAll
            // const headings = [...renderedContent.querySelectorAll("h3.title")].map(node => node.textContent);
            // console.log(headings);

            
            return data._value.allLinks.data.map((doc) => ({
            section_title: doc.attributes.section_title,
            subsections: doc.attributes.subsections,
          }))
          });
      },
      slugify (str) {
        str = str.toLowerCase()
        str = str.trim()
        str = str.replace(/[^\w\s-]/g, '')
        str = str.replace(/[\s_-]+/g, '-')
        str = str.replace(/^-+|-+$/g, '')
        console.log(str)
        return str
      },
      getNodeText(node) {
        let text = ''
        for (let child of node.children ?? []) {
          if (typeof child === 'string') {
            text += child
          }
          text += getNodeText(child)
        }
        return text
      },
      collectHeadings(nodes, slugify = slugifyWithCounter()) {
        let sections = []

        for (let node of nodes) {
          if (node.name === 'h2' || node.name === 'h3') {
            let title = getNodeText(node)
            if (title) {
              let id = slugify(title)
              node.attributes.id = id
              if (node.name === 'h3') {
                if (!sections[sections.length - 1]) {
                  throw new Error(
                    'Cannot add `h3` to table of contents without a preceding `h2`'
                  )
                }
                sections[sections.length - 1].children.push({
                  ...node.attributes,
                  title,
                })
              } else {
                sections.push({ ...node.attributes, title, children: [] })
              }
            }
          }

          sections.push(...collectHeadings(node.children ?? [], slugify))
        }

        return sections
      },
      readingTime(text) {
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        return Math.ceil(words / wpm);
      },
      isActive(subsection) {
      if (subsection === currentSubsection) {
        return true
      }
      return false
    },
    } 
  }
  </script>
  
    
    <!-- <script setup>
  
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    import { MenuIcon, XIcon } from '@heroicons/vue/outline'
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    
    const navigation = [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ]
  </script>  -->
  
  
  // let getHeadings = useCallback((tableOfContents) => {
  //     return tableOfContents
  //       .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
  //       .map((id) => {
  //         let el = document.getElementById(id)
  //         if (!el) return
  
  //         let style = window.getComputedStyle(el)
  //         let scrollMt = parseFloat(style.scrollMarginTop)
  
  //         let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
  //         return { id, top }
  //       })
  //   }, [])


  <!-- title: "Test Title",
        section: {title: "Test Section"},
        
        tableOfContents:  [
        {
          title: 'Introduction',
          links: [
            { title: 'Getting started', href: '/' },
            { title: 'Installation', href: '/docs/installation' },
          ],
        },
        {
          title: 'Core concepts',
          links: [
            { title: 'Understanding caching', href: '/docs/understanding-caching' },
            {
              title: 'Predicting user behavior',
              href: '/docs/predicting-user-behavior',
            },
            { title: 'Basics of time-travel', href: '/docs/basics-of-time-travel' },
            {
              title: 'Introduction to string theory',
              href: '/docs/introduction-to-string-theory',
            },
            { title: 'The butterfly effect', href: '/docs/the-butterfly-effect' },
          ],
        },
        {
          title: 'Advanced guides',
          links: [
            { title: 'Writing plugins', href: '/docs/writing-plugins' },
            { title: 'Neuralink integration', href: '/docs/neuralink-integration' },
            { title: 'Temporal paradoxes', href: '/docs/temporal-paradoxes' },
            { title: 'Testing', href: '/docs/testing' },
            { title: 'Compile-time caching', href: '/docs/compile-time-caching' },
            {
              title: 'Predictive data generation',
              href: '/docs/predictive-data-generation',
            },
          ],
        },
        {
          title: 'API reference',
          links: [
            { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict' },
            { title: 'CacheAdvance.flush()', href: '/docs/cacheadvance-flush' },
            { title: 'CacheAdvance.revert()', href: '/docs/cacheadvance-revert' },
            { title: 'CacheAdvance.regret()', href: '/docs/cacheadvance-regret' },
          ],
        },
        {
          title: 'Contributing',
          links: [
            { title: 'How to contribute', href: '/docs/how-to-contribute' },
            { title: 'Architecture guide', href: '/docs/architecture-guide' },
            { title: 'Design principles', href: '/docs/design-principles' },
          ],
        },
        ]  
      
        isActive(section) {
      if (section.id === currentSection) {
        return true
      }
      if (!section.children) {
        return false
      }
      return section.children.findIndex(isActive) > -1
    },-->
  
    
    