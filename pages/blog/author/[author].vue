<template>
  <div>
    <div> <Header /> </div>
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden min-h-screen h-full pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <template v-if="isLoaded">
        <div class="relative px-4 sm:px-6 lg:px-32">
          <div class="relative bg-blue-800 rounded-3xl">
            <div class="absolute inset-0">
              <!-- <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" /> -->
              <div class="absolute inset-0 bg-blue-500 mix-blend-multiply opacity-70 rounded-3xl" aria-hidden="true" />
            </div>
            <div class="sm:flex justify-between items-center">
              <div v-if="author.photo" class="relative order-2 sm:mr-8">
                <img v-bind:src="author.photo.url" v-bind:alt="author.photo.name" class="max-w-full h-auto max-h-36 mx-auto pt-10 sm:py-0 align-middle" /> 
              </div>
              <div class="relative order-1 max-w-7xl ml-8 py-12 px-4 sm:py-12 sm:px-6 lg:px-1">
                <h1 class="mt-2 block text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-white">
                  {{ authorName }} 
                </h1>
                <div class="mt-2 max-w-3xl text-lg text-dark-text pl-1"> {{author.company}} - {{author.title}} </div>
                
              </div>  
            </div>
            <div class="prose mt-2 ml-8 mr-8 pb-4 sm:justify-center max-w-3xl text-white dark:text-MITRE-silver" v-html="author.description" /> 
          </div>
        </div>
        <span class="block text-xl pt-12 text-center underline dark:text-dark-text">
                Recent Articles
        </span>  
        <!-- <BlogPostCards graphql-query="author"/>  -->
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
      </template>
      <template v-else class="min-h-screen h-full ">
        <h1 class="mt-2 block text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-black dark:text-white">Loading...</h1> 
      </template>
    </div>
    <!-- <div v-else class="h-screen"> 
      <p> Loading .... </p>
    </div> -->
    <div> <Footer /> </div>
  </div>
</template>

<script>
import { marked } from 'marked'

export default {
  data() {
    return {
      posts: [],
      authorName: {},
      author: {},
      isLoaded: false,
    };
  },
  mounted() {
    this.authorName = this.$route.query.id
    this.$nextTick(async () => {
      await this.getBlogData()
      await this.getBlogAuthor()
      this.author = this.author[0]
      this.isLoaded = true
    });
  },
  methods: {
    async getBlogData() {
      console.log(this.$route.query)
      this.posts = await useAsyncData('getBlogDataFromAuthor', () => GqlGetBlogDataFromAuthor({author: this.$route.query.id}))
        .then(({ data }) => {
          console.log(data._value.blogPosts.data)
          return data._value.blogPosts.data.map((post) => ({
              title: post.attributes.title,
              description: post.attributes.description,
              category: {name: post.attributes.category},
              author: post.attributes.users_permissions_user.data.attributes.name,
              date: post.attributes.date,
              id: post.id,
              readingTime: this.readingTime(post.attributes.content),
          }))
            
        });
    },
    async getBlogAuthor(){
      this.author = await useAsyncData('getBlogAuthor', () => GqlGetBlogAuthor({author: this.$route.query.id}))
        .then(({data}) => {
          console.log(data._value.usersPermissionsUsers.data)
          return data._value.usersPermissionsUsers.data.map((author) => ({
              name: author.attributes.name,
              title: author.attributes.jobTitle,
              company: author.attributes.company.replace('_', ' '),
              description: marked(author.attributes.description),
              photo:{
                name: author.attributes.photo.data.attributes.name,
                url: author.attributes.photo.data.attributes.url,
              }, 
              displayEmail: author.attributes.displayEmail,
              linkedin: author.attributes.linkedIn,
              twitter: author.attributes.twitter,
              facebook: author.attributes.facebook,
              instagram: author.attributes.instagram,
          }))
        })
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
      return str
    },
  }


}
</script>