<template>
  <div>
    <div> <Header /> </div>
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden min-h-screen h-full pt-12 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
      <template v-if="isLoaded">
        <div class="relative px-4 sm:px-6 lg:px-32">
          <div class="relative bg-blue-900 rounded-3xl">
            <div class="absolute ">
              <!-- <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100" alt="" /> -->
              <div class="absolute  bg-blue-500 mix-blend-multiply opacity-70 rounded-3xl" aria-hidden="true" />
            </div>
            <div class="sm:flex justify-between items-center">
              <div v-if="author.photo" class="relative order-2 sm:mr-8">
                <img v-bind:src="author.photo.url" v-bind:alt="author.photo.name" class="max-w-full h-auto max-h-28 sm:max-h-36 mx-auto pt-10 sm:py-6 align-middle" /> 
              </div>
              <div class="relative order-1 max-w-7xl ml-4 sm:ml-8 py-6 px-4 sm:py-4 sm:pt-0 sm:px-6 lg:px-1">
                <h1 class="mt-2 block text-2xl sm:text-3xl leading-8 font-extrabold tracking-tight text-white">
                  {{ authorName }} 
                </h1>
                <div class="mt-2 max-w-3xl text-lg text-dark-text pl-1"> {{author.company}} - {{author.title}} </div>
              </div>  
            </div>
            <div class="prose mt-2 ml-8 mr-8 pb-4 sm:justify-center max-w-5xl text-sm sm:text-base tracking-wide sm:tracking-normal text-white dark:text-MITRE-silver" v-html="author.description" /> 
            <div id="Social Medias" class="flex gap-2 pl-8 pb-5">
              <a v-if="author.emailLink" v-bind:href="author.emailLink">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
              <a v-if="author.twitter" v-bind:href="author.twitter">
                <img src="~/assets/TwitterLogo.png" class="max-w-full h-auto max-h-8" alt="Twitter Logo" />
              </a>
              <a v-if="author.facebook" v-bind:href="author.facebook">
                <img src="~/assets/FacebookLogo.png" class="max-w-full h-auto max-h-8" alt="Facebook Logo" />
              </a>
              <a v-if="author.instagram" v-bind:href="author.instagram">
                <img src="~/assets/InstagramLogo.png" class="max-w-full h-auto max-h-8" alt="Instagram Logo" />
              </a>
              <a v-if="author.linkedin" v-bind:href="author.linkedin">
                <img src="~/assets/LinkedInLogo.png" class="max-w-full h-auto max-h-8" alt="LinkedIn Logo" />
              </a>
            </div>
          </div>
        </div>
        <span class="block text-xl pt-12 text-center underline font-bold dark:text-dark-text">
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
              emailLink: 'mailto:' + author.attributes.displayEmail,
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