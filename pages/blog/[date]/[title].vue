<template>
  <div>
    <Head>
      <Title>{{ postTitle }}</Title>
      <Meta name="description" :content="`${postTitle} blog post`" />
    </Head>
    <div>
      <Header />
      <div v-if="isLoaded">
        <ReadingPage
          :title="postTitle"
          :last-updated="postDate"
          :author="postAuthor"
          go-back-link="/blog"
        >
          <div
            class="prose prose-xl max-w-full mx-auto mt-8 text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start"
            v-html="renderedContent"
          ></div>
        </ReadingPage>
      </div>
      <div v-else class="grid h-screen place-items-center">
        <LoadingSpinner />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick} from 'vue';

/*   Data   */
const isLoaded = ref(false);
const postTitle = ref('');
const postDate = ref('');
const postAuthor = ref('');
const renderedContent = ref('');
const route = useRoute();

/*   Methods   */
const getBlogPost = async () => {
  await useAsyncData('getBlogDataFromID', () =>
    GqlGetBlogDataFromID({id: route.query.id?.toString() ?? 'Error'})
  ).then(({data}) => {
    if (!data.value || !data?.value?.blogPost?.data) {
      navigateTo('/blog');
      return;
    }
    const postData = data.value.blogPost.data.attributes;
    postTitle.value = postData?.title ?? 'Error';
    postDate.value = postData?.date;
    renderedContent.value = postData?.content ?? 'Error';
    postAuthor.value =
      postData?.users_permissions_user?.data?.attributes?.name ?? 'Error';
    isLoaded.value = true;
  });
};

/*   Lifecycle   */
onMounted(async () => {
  await nextTick(async () => {
    await getBlogPost();
    isLoaded.value = true;
  });
});
</script>
