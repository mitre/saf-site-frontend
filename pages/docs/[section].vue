<template>
  <DocumentationComponent :all-links="allLinks" :current-heading="currentHeading" :current-index="currentIndex"
    :current-section-title="currentSectionTitle" :current-subsection="currentSubsection" :doc-data="docData"
    :is-loaded="isLoaded" :table-of-contents="tableOfContents" :rendered-content="renderedContent" />
</template>

<script setup>
import slugify from '@/utils/useSlugify';

////  Data  ////
const docData = ref({})
const renderedContent = ref("")
const tableOfContents = ref([])
const currentSectionTitle = ref("")
const currentHeading = ref("")
const allLinks = ref([])
const currentIndex = ref(0)
const currentSubsection = ref("")
const isLoaded = ref(false)
const route = useRoute()

////  Methods  ////
const getData = async () => {
  docData.value = await useAsyncData('getDocumentation', () => GqlGetDocumentation({ href: route.params.section }))
    .then(({ data }) => {

      // Get current document attributes
      const currentDocAttributes = data._value.currentDoc.data[0].attributes
      currentSubsection.value = currentDocAttributes.subsections[0].title
      currentSectionTitle.value = currentDocAttributes.section_title
      // Get the hrefs for all documentation sections
      allLinks.value = data._value.allLinks.data.flatMap(num => num.attributes.subsections)
      currentHeading.value = route.hash.replace(/^#+/, '')

      currentIndex.value = allLinks.value.findIndex((elem) => {
        return elem.title === currentDocAttributes.subsections[0].title
      })

      let content = currentDocAttributes.subsections[0].content

      // Parse HTML section content
      let onPage = [];
      const parser = new DOMParser();
      let htmlDoc = parser.parseFromString(content, 'text/html')

      let currentHeader = -1;
      for (let element of htmlDoc.body.childNodes) {
        if (element.localName == "h1") {
          onPage.push({
            title: element.outerText,
            subtitles: []
          })
          currentHeader += 1;
          element.id = slugify(element.outerText)
        }
        if (element.localName == "h2") {
          onPage[currentHeader].subtitles.push(element.outerText)
          element.id = slugify(element.outerText)
        }
      }

      renderedContent.value = htmlDoc.documentElement.outerHTML
      tableOfContents.value = onPage

      return data._value.allLinks.data.map((doc) => ({
        section_title: doc.attributes.section_title,
        subsections: doc.attributes.subsections,
      }))
    });
}

////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getData()
    isLoaded.value = true
  });
});

onBeforeRouteUpdate(async (to, from) => {
  currentHeading = to.hash.replace(/^#+/, '')
})
</script>