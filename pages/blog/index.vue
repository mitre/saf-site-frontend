<template>
  <div>
    <Head>
      <Title>Blog</Title>
      <Meta name="description" content="Collection of MITRE SAF© blog posts" />
    </Head>
    <div>
      <Header />
      <div
        class="relative h-full min-h-screen bg-neutral-1 px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28"
      >
        <div class="absolute inset-0">
          <div class="bg-neutral-1 sm:h-2/3" />
        </div>
        <div class="relative mx-auto max-w-7xl">
          <div class="text-center">
            <h2
              class="text-4xl font-extrabold tracking-tight text-header sm:text-5xl"
            >
              Blog
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-2xl text-muted sm:mt-4">
              Start Exploring our Recent Developments.
            </p>
          </div>
          <!-- Blog Cards -->
          <BlogPostCards :posts="posts" />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick} from 'vue';

/// /  Data  ////
const posts = ref();

/// /  Methods  ////
const getBlogPosts = async () => {
  posts.value = await useAsyncData('getAllBlogData', () => GqlBlogPosts()).then(
    ({data}) =>
      data?.value?.blogPosts?.data.map((post) => ({
        title: post?.attributes?.title,
        description: post?.attributes?.description,
        category: {name: post?.attributes?.category},
        author:
          post?.attributes?.users_permissions_user?.data?.attributes?.name,
        date: post?.attributes?.date,
        id: post.id,
        content: post?.attributes?.content
      }))
  );
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getBlogPosts();
  });
});
</script>
