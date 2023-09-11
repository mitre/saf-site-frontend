<template>
  <LibraryPage
    :is-loaded="isLoaded"
    :page-title="pageTitle"
    :library-content="libraryContent"
  />
</template>

<script setup>
/// /  Data  ////
const isLoaded = ref(false);
const libraryContent = ref('');
const pageTitle = ref('');

/// /  Methods  ////
const getLibraryContent = async () => {
  await useAsyncData(
    'getLibraryPageByName',
    () => GqlGetLibraryPageByName({name: 'TS InSpec Objects'}),
    {initialCache: false}
  ).then(({data}) => {
    libraryContent.value = data.value.libraryPages.data[0].attributes.content;
    pageTitle.value = data.value.libraryPages.data[0].attributes.library;
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getLibraryContent();
    isLoaded.value = true;
  });
});
</script>
