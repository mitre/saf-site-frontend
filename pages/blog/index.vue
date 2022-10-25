<template>
  <div>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white dark:bg-dark-bg sm:h-2/3 " />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-MITRE-silver sm:text-4xl">Blog</h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Start Exploring our Recent Developments.</p>
        </div>
        <!-- Blog Cards -->
        <BlogPostCards v-bind:posts="posts" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getBlogPosts()
    });
  },
  methods: {
    async getBlogPosts() {
      this.posts = await useAsyncData('getAllBlogData', () => GqlBlogPosts())
        .then(({ data }) => {
          console.log(data._value.blogPosts.data)
          return data._value.blogPosts.data.map((post) => ({
            title: post.attributes.title,
            description: post.attributes.description,
            category: {name: post.attributes.category},
            author: post.attributes.users_permissions_user.data.attributes.name,
            date: post.attributes.date,
            id: post.id,
            content: post.attributes.content
            // readingTime: this.readingTime(post.attributes.content)
          }))
        });
    },
  } 
}
</script>




