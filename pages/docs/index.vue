<template>
  <div>
    <Head>
      <Title>Documentation</Title>
      <Meta name="description" content="Collection of SAF documentation" />
    </Head>
    <DocumentationComponent
      :all-links="allLinks"
      :current-heading="currentHeading"
      :current-index="currentIndex"
      :current-section-title="currentSectionTitle"
      :current-subsection="currentSubsection"
      :doc-data="docData"
      :is-loaded="isLoaded"
      :table-of-contents="tableOfContents"
      :rendered-content="renderedContent"
    />
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeRouteUpdate} from 'vue';
import slugify from '@/utils/useSlugify';

/// /  Data  ////
const docData = ref({});
const renderedContent = ref('');
const tableOfContents = ref([]);
const currentSectionTitle = ref('');
const currentHeading = ref('');
const allLinks = ref([]);
const currentIndex = ref(0);
const currentSubsection = ref('');
const isLoaded = ref(false);
const route = useRoute();

/// /  Methods  ////
const getData = async () => {
  docData.value = await useAsyncData('getIndexDocumentation', () =>
    GqlGetIndexDocumentation()
  ).then(({data}) => {
    if (!data._value || !data._value.currentDoc.data[0]) {
      return navigateTo('/docs');
    }

    // Get current document attributes
    const currentDocAttributes = data._value.currentDoc.data[0].attributes;
    currentSubsection.value = currentDocAttributes.subsections[0].title;
    currentSectionTitle.value = currentDocAttributes.section_title;

    // Get the hrefs for all documentation sections
    allLinks.value = data._value.allLinks.data.flatMap(
      (num) => num.attributes.subsections
    );
    currentHeading.value = route.hash.replace(/^#+/, '');

    const {content} = currentDocAttributes.subsections[0];

    // Parse HTML section content
    const onPage = [];
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, 'text/html');

    let currentHeader = -1;
    for (const element of htmlDoc.body.childNodes) {
      if (element.localName === 'h1') {
        onPage.push({
          title: element.outerText,
          subtitles: []
        });
        currentHeader += 1;
        element.id = slugify(element.outerText);
      }
      if (element.localName === 'h2') {
        onPage[currentHeader].subtitles.push(element.outerText);
        element.id = slugify(element.outerText);
      }
    }

    renderedContent.value = htmlDoc.documentElement.outerHTML;
    tableOfContents.value = onPage;

    return data._value.allLinks.data.map((doc) => ({
      section_title: doc.attributes.section_title,
      subsections: doc.attributes.subsections
    }));
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getData();
    isLoaded.value = true;
  });
});

onBeforeRouteUpdate(async (to, from) => {
  currentHeading.value = to.hash.replace(/^#+/, '');
});
</script>
