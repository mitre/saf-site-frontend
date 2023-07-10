<template>
  <Head>
    <Title>Blog</Title>
    <Meta name="description" content="Collection of SAF blog posts" />
  </Head>
  <div>
    <Header />
    <div class="relative bg-neutral-1  min-h-screen h-full pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-neutral-1  sm:h-2/3 " />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-header  sm:text-4xl">Blog</h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-muted  sm:mt-4">Start Exploring our
            Recent Developments.</p>
        </div>
        <!-- Blog Cards -->
        <BlogPostCards v-bind:posts="posts" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

////  Data  ////
const posts = ref([])

////  Methods  ////
const getBlogPosts = async () => {
  posts.value = await useAsyncData('getAllBlogData', () => GqlBlogPosts())
    .then(({ data }) => {
      return data._value.blogPosts.data.map((post) => ({
        title: post.attributes.title,
        description: post.attributes.description,
        category: { name: post.attributes.category },
        author: post.attributes.users_permissions_user.data.attributes.name,
        date: post.attributes.date,
        id: post.id,
        content: post.attributes.content
      }))
    });
}

////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getBlogPosts()
  });
});

</script>