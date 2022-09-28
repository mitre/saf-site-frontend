<template>
  <div>
    <div> <Header /> </div>
    <div v-if="isLoaded" class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden h-full pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg prose prose-lg max-w-prose mx-auto ">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl">
              {{ authorName }}
            </span>
            <span class="block text-xl pt-10 text-center underline dark:text-MITRE-silver">
              Recent Articles
            </span>
          </h1>
          <!-- <span v-html="renderedContent" class="mt-8 text-xl mx-auto leading-8 prose prose-sm dark:prose-invert"></span> -->
          <!-- <div class="mt-8 mx-auto leading-8 text-center prose prose-sm lg:prose-lg dark:prose-invert prose-li:text-start hover:prose-headings:text-red-600" v-html="renderedContent" ></div> -->

        </div>
      </div>
      <div class="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div v-for="post in posts" :key="post.title"
            class="flex flex-col rounded-lg shadow-xl border-2 hover:border-2 hover:border-blue-500 dark:hover:border-blue-500 dark:border-gray-600 overflow-hidden">
            <div
              class="flex-1 bg-white dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-gray-700 p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-blue-600">
                  <a :href="post.category.href" class="hover:underline">
                    {{ post.category.name }}
                  </a>
                </p>
                <a :href ="`/blog/${post.date}/${slugify(post.title)}?id=${post.id}`" class="block mt-2"> 
                  <p class="text-xl font-semibold text-gray-900 dark:text-dark-text">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500 line-clamp-2">
                    {{ post.description }}
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="ml-3">
                  <span class="text-sm font-medium text-gray-900 dark:text-dark-text ">
                    <a :href="`/blog/author/${slugify(post.author)}?id=${post.author}`" class="hover:underline">
                      <p class="">{{post.author}}</p>  
                    </a>
                  </span>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="post.datetime">
                      {{ post.date }}
                    </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span>  {{ post.readingTime }} min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div v-else class="h-screen"> 
      <p> Loading .... </p>
    </div>
    <div> <Footer /> </div>
  </div>
</template>

<script>
export default {
  setup() {

  },
  data() {
    return {
      posts: [],
      authorName: {},
      isLoaded: false,
    };
  },
  mounted() {
    this.authorName = this.$route.query.id
    this.$nextTick(async () => {
      await this.getData()
      this.isLoaded = true
    });
  },
  methods: {
  async getData() {
    console.log(this.$route.query)
    this.posts = await useAsyncData('getBlogDataFromAuthor', () => GqlGetBlogDataFromAuthor({author: this.$route.query.id}))
      .then(({ data }) => {
        console.log(data._value.blogPosts.data)
        return data._value.blogPosts.data.map((post) => ({
            title: post.attributes.title,
            description: post.attributes.description,
            category: {name: post.attributes.category},
            author: post.attributes.author,
            date: post.attributes.date,
            id: post.id,
            readingTime: this.readingTime(post.attributes.content),
          }))
          
      });
    },
    readingTime(text) {
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      return Math.ceil(words / wpm);
    },
    slugify (str) {
      str = str.toLowerCase()
      str = str.trim()
      str = str.replace(/[^\w\s-]/g, '')
      str = str.replace(/[\s_-]+/g, '-')
      str = str.replace(/^-+|-+$/g, '')
      console.log(str)
      return str
    },
  }


}
</script>