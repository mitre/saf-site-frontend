<template>
  <Header />
  <div>
    <Head>
      <Title>Documentation</Title>
      <Meta
        name="description"
        content="Collection of MITRE SAF© documentation"
      />
    </Head>
    <DocumentationCollections :collection="collections" />
  </div>
  <Footer />
</template>

<script setup>
import HeimdallLogo from '@/assets/icons/HeimdallLogo.vue';
import SafShieldLogo from '@/assets/icons/SafShieldLogo.vue';
/// /  Data  ////
const collections = [
  {name: 'General', icon: SafShieldLogo, description: 'Testing', link: '/'},
  {name: 'Heimdall©', icon: HeimdallLogo, description: 'Testing', link: '/'},
  {name: 'Vulcan©', icon: SafShieldLogo, description: 'Testing', link: '/'},
  {name: 'SAF CLI', icon: SafShieldLogo, description: 'Testing', link: '/'},
  {name: 'eMasser', icon: SafShieldLogo, description: 'Testing', link: '/'}
];

/// /  Methods  ////
//   const getData = async () => {
//     docData.value = await useAsyncData('getIndexDocumentation', () =>
//       GqlGetIndexDocumentation()
//     ).then(({data}) => {
//       if (!data.value || !data.value.currentDoc.data[0]) {
//         return navigateTo('/docs');
//       }

//       // Get current document attributes
//       const currentDocAttributes = data.value.currentDoc.data[0].attributes;
//       currentSubsection.value = currentDocAttributes.subsections[0].title;
//       currentSectionTitle.value = currentDocAttributes.section_title;

//       // Get the hrefs for all documentation sections
//       allLinks.value = data.value.allLinks.data.flatMap(
//         (num) => num.attributes.subsections
//       );
//       currentHeading.value = route.hash.replace(/^#+/, '');

//       const {content} = currentDocAttributes.subsections[0];

//       // Parse HTML section content
//       const onPage = [];
//       const parser = new DOMParser();
//       const htmlDoc = parser.parseFromString(content, 'text/html');

//       let currentHeader = -1;
//       for (const element of htmlDoc.body.childNodes) {
//         if (element.localName === 'h1') {
//           onPage.push({
//             title: element.outerText,
//             subtitles: []
//           });
//           currentHeader += 1;
//           element.id = slugify(element.outerText);
//         }
//         if (element.localName === 'h2') {
//           if (currentHeader != -1) {
//             onPage[currentHeader].subtitles.push(element.outerText);
//             element.id = slugify(element.outerText);
//           }
//         }
//       }

//       renderedContent.value = htmlDoc.documentElement.outerHTML;
//       tableOfContents.value = onPage;

//       return data.value.allLinks.data.map((doc) => ({
//         section_title: doc.attributes.section_title,
//         subsections: doc.attributes.subsections
//       }));
//     });
//   };

//   /// /  Lifecycle  ////
//   onMounted(async () => {
//     await nextTick(async () => {
//       await getData();
//       isLoaded.value = true;
//     });
//   });

//   onBeforeRouteUpdate(async (to) => {
//     currentHeading.value = to.hash.replace(/^#+/, '');
//   });
</script>
