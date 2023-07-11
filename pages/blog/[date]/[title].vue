<template>
  <Head>
    <Title>{{ postData.title }}</Title>
    <Meta name="description" :content="`${postData.title} blog post`" />
  </Head>
  <div>
    <Header />
    <div v-if="isLoaded">
      <ReadingPage
        :title="postData.title"
        :last-updated="postData.date"
        :author="postAuthor"
      >
        <div
          class="prose prose-sm mx-auto mt-8 text-left text-base leading-8 dark:prose-invert lg:prose-lg prose-code:text-start prose-li:text-start"
          v-html="renderedContent"
        ></div>
      </ReadingPage>
    </div>
    <div v-else class="grid h-screen place-items-center">
      <LoadingSpinner />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import {ref, onMounted, nextTick} from 'vue';

/// /  Data  ////
const isLoaded = ref(false);
const postData = ref({});
const postAuthor = ref({});
const renderedContent = ref('');
const route = useRoute();

/// /  Methods  ////
const getBlogPost = async () => {
  await useAsyncData('getBlogDataFromID', () =>
    GqlGetBlogDataFromID({id: route.query.id})
  ).then(({data}) => {
    if (!data._value || !data._value.blogPost.data) return navigateTo('/blog');
    postData.value = data._value.blogPost.data.attributes;
    renderedContent.value = postData.value.content;
    postAuthor.value =
      postData.value.users_permissions_user.data.attributes.name;
    isLoaded.value = true;
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getBlogPost();
    isLoaded.value = true;
  });
});
</script>
