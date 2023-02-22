<template>
  <div>
    <Header />
    <div v-if="isLoaded">
      <ReadingPage :title="postData.title" :last-updated="postData.date" :author="postAuthor">
        <div
          class="mt-8 mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
          v-html="renderedContent"></div>
      </ReadingPage>
    </div>
    <div v-else class="grid h-screen place-items-center">
      <LoadingSpinner />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { marked } from 'marked'
import { ref, onMounted, nextTick } from 'vue';

////  Data  ////
const isLoaded = ref(false)
const postData = ref({})
const postAuthor = ref({})
const renderedContent = ref({})
const route = useRoute()

////  Methods  ////
const getBlogPost = async () => {
  await useAsyncData('getBlogDataFromID', () => GqlGetBlogDataFromID({ id: route.query.id }))
    .then(({ data }) => {
      postData.value = data._value.blogPost.data.attributes
      renderedContent.value = marked(postData.value.content)
      postAuthor.value = postData.value.users_permissions_user.data.attributes.name
      isLoaded.value = true
    });
}

////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getBlogPost()
    isLoaded.value = true
  });
});
</script>