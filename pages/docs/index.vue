<template>
  <div>
    <Header />

    <DocumentationMobileNavigation :doc-data="docData" :current-subsection-href="currentSubsectionHref"
      :current-subsection="currentSubsection" :current-section-title="currentSectionTitle" />

    <div class="relative bg-white dark:bg-dark-bg mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-10">
      <div class="hidden lg:relative lg:block lg:flex-none">
        <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
        <div class="sticky top-[82px] -ml-0.5 h-[calc(100vh-82px)] overflow-y-auto overflow-x-hidden pb-8 pl-0.5">
          <div class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
          <div class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />

          <div v-if="docData">
            <DocumentationNavigation :doc-data="docData" :current-subsection-href="currentSubsectionHref" />
          </div>

        </div>
      </div>

      <div class="min-w-0 max-w-2xl flex-auto px-6 lg:py-10 lg:max-w-6xl lg:pr-0 lg:pl-8 xl:px-16">
        <DocumentationCurrentPage :rendered-content="renderedContent" :current-subsection="currentSubsection"
          :all-links="allLinks" :current-index="currentIndex" />
      </div>

      <div
        class="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
        <DocumentationPageNavigation :table-of-contents="tableOfContents"
          :current-subsection-href="currentSubsectionHref" :current-heading="currentHeading" />
      </div>
    </div>

    <Footer />
  </div>
</template>
  
  
<script>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import slugify from '@/utils/useSlugify';

export default {
  data() {
    return {
      docData: {},
      renderedContent: {},
      tableOfContents: [],
      currentSectionTitle: "",
      currentHeading: "",
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
  beforeRouteUpdate(to, from) {
    this.currentHeading = to.hash.replace(/^#+/, '')
  },
  components: { Dialog, DialogPanel, MenuIcon, XIcon },
  methods: {
    async getData() {
      this.docData = await useAsyncData('getIndexDocumentation', () => GqlGetIndexDocumentation())
        .then(({ data }) => {
          console.log("Data: ", data)
          let content = data._value.currentDoc.data[0].attributes.subsections[0].content
          this.currentSubsection = data._value.currentDoc.data[0].attributes.subsections[0].title
          this.currentSectionTitle = data._value.currentDoc.data[0].attributes.section_title
          this.currentSubsectionHref = data._value.currentDoc.data[0].attributes.subsections[0].href
          this.allLinks = data._value.allLinks.data.flatMap(num => num.attributes.subsections)
          this.currentHeading = this.$route.hash.replace(/^#+/, '')

          // Parse HTML section content
          let onPage = [];
          let parser = new DOMParser();
          let htmlDoc = parser.parseFromString(content, 'text/html')

          let currentHeader = -1;
          for (let element in htmlDoc.body.childNodes) {
            if (htmlDoc.body.childNodes[element].localName == "h1") {
              onPage.push({
                title: htmlDoc.body.childNodes[element].outerText,
                subtitles: []
              })
              currentHeader += 1;
              htmlDoc.body.childNodes[element].id = slugify(htmlDoc.body.childNodes[element].outerText)
            }
            if (htmlDoc.body.childNodes[element].localName == "h2") {
              onPage[currentHeader].subtitles.push(htmlDoc.body.childNodes[element].outerText)
              htmlDoc.body.childNodes[element].id = slugify(htmlDoc.body.childNodes[element].outerText)
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
  }
}
</script>
