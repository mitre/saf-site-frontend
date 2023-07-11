<template>
  <Head>
    <Title>Blog</Title>
    <Meta name="description" content="Collection of SAF blog posts" />
  </Head>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen bg-neutral-1 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24"
    >
      <div class="absolute inset-0">
        <div class="bg-neutral-1 sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold tracking-tight text-header sm:text-4xl"
          >
            Blog
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-xl text-muted sm:mt-4">
            Start Exploring our Recent Developments.
          </p>
        </div>
        <!-- Blog Cards -->
        <BlogPostCards :posts="posts" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import {ref, onMounted, nextTick} from 'vue';

/// /  Data  ////
const posts = ref([]);

/// /  Methods  ////
const getBlogPosts = async () => {
  posts.value = await useAsyncData('getAllBlogData', () => GqlBlogPosts()).then(
    ({data}) =>
      data._value.blogPosts.data.map((post) => ({
        title: post.attributes.title,
        description: post.attributes.description,
        category: {name: post.attributes.category},
        author: post.attributes.users_permissions_user.data.attributes.name,
        date: post.attributes.date,
        id: post.id,
        content: post.attributes.content
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
