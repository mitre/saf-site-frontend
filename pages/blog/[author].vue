<template>
  <div>
    <div> <Header /> </div>
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden min-h-screen h-full pt-12 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
      <template v-if="isLoaded">
        <div class="relative px-4 sm:px-6 lg:px-32">
          <article>
            <!-- Profile header -->
            <div>
              <div>
                <div class="h-16 w-full object-cover" />
              </div>
              <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div v-if="author.photo" class="flex">
                    <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="author.photo.url" v-bind:alt="author.photo.name" />
                  </div>
                  <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                      <h1 class="truncate text-2xl font-bold text-gray-900 dark:text-white">{{ author.name }}</h1>
                    </div>
                  </div>
                </div>
                <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                  <h1 class="truncate text-2xl font-bold text-gray-900 dark:text-white">{{ author.name }}</h1>
                </div>
              </div>
            </div>

            <!-- Description list -->
            <div class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div>
                    <dt class="text-sm font-medium text-gray-500 dark:text-dark-text"> Title </dt>
                    <dd class="sm:mt-1 text-sm text-gray-900 dark:text-dark-text">{{ author.fields.title }}</dd>
                  </div>
                  <div>
                    <dt class="text-sm font-medium text-gray-500 dark:text-dark-text"> Company </dt>
                    <dd class="sm:mt-1 text-sm text-gray-900 dark:text-dark-text">{{ author.fields.company }}</dd>
                  </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500 dark:text-dark-text">About</dt>
                  <div class="prose mt-1 max-w-prose space-y-5 text-sm text-gray-900 dark:text-dark-text" v-html="author.description" />
                  
                </div>
              </dl>
              <div id="Social Medias" class="flex gap-2 pt-5 pb-5">
                <a v-if="socialMediaLinks.displayEmail != null" v-bind:href="'mailto:' + socialMediaLinks.displayEmail">
                  <MailIcon  text-gray-500 class="w-9 h-9 dark:text-dark-text" />
                </a>
                <a v-if="socialMediaLinks.twitter" v-bind:href="socialMediaLinks.twitter">
                  <img src="~/assets/TwitterLogo.png" class="max-w-full h-auto max-h-8" alt="Twitter Logo" />
                </a>
                <a v-if="socialMediaLinks.facebook" v-bind:href="socialMediaLinks.facebook">
                  <img src="~/assets/FacebookLogo.png" class="max-w-full h-auto max-h-8" alt="Facebook Logo" />
                </a>
                <a v-if="socialMediaLinks.instagram" v-bind:href="socialMediaLinks.instagram">
                  <img src="~/assets/InstagramLogo.png" class="max-w-full h-auto max-h-8" alt="Instagram Logo" />
                </a>
                <a v-if="socialMediaLinks.github" v-bind:href="socialMediaLinks.github" class="dark:hidden">
                  <img src="~/assets/GitHubLogo.png" class="max-w-full h-auto max-h-8" alt="GitHub Logo" />
                </a>
                <a v-if="socialMediaLinks.github" v-bind:href="socialMediaLinks.github" class="hidden dark:flex">
                  <img src="~/assets/GitHubLogoWhite.png" class="max-w-full h-auto max-h-8" alt="GitHub Logo" />
                </a>
                <a v-if="socialMediaLinks.linkedin" v-bind:href="socialMediaLinks.linkedin">
                  <img src="~/assets/LinkedInLogo.png" class="max-w-full h-auto max-h-8" alt="LinkedIn Logo" />
                </a>
                <a v-if="socialMediaLinks.other" v-bind:href="socialMediaLinks.other">
                  <LinkIcon class="w-7 h-8 dark:text-dark-text" />
                </a>
              </div>
            </div>
            <div class="border-b border-gray-200 pb-5" />
          </article>
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
                    <a :href="`/blog/${slugify(post.author)}?id=${post.author}`" class="hover:underline">
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
import {LinkIcon, MailIcon} from '@heroicons/vue/outline'

export default {
  components: {LinkIcon, MailIcon},
  data() {
    return {
      posts: [],
      authorName: {},
      author: {},
      isLoaded: false,
      socialMediaLinks: {
        facebook: null,
        twitter: null,
        instagram: null,
        github: null,
        linkedin: null,
        displayEmail: null,
        other: null,
      },
    };
  },
  mounted() {
    this.authorName = this.$route.query.id
    this.$nextTick(async () => {
      await this.getBlogData()
      await this.getBlogAuthor()
      this.author = this.author[0]
      this.isLoaded = true
      console.log('This is the data in mounted')
      console.log(this.author)
      console.log('This are media links')
      console.log(this.socialMediaLinks)
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
          let socialMedia = data._value.usersPermissionsUsers.data[0].attributes.SocialMedia
          console.log(socialMedia)
          for(let i=0; i<socialMedia.length; i++){
            if(socialMedia[i].__typename === 'ComponentSocialMediaFacebook')
              this.socialMediaLinks.facebook = socialMedia[i].ProfileLink
            else if(socialMedia[i].__typename === 'ComponentSocialMediaTwitter')
              this.socialMediaLinks.twitter = socialMedia[i].ProfileLink
            else if(socialMedia[i].__typename === 'ComponentSocialMediaInstagram')
              this.socialMediaLinks.instagram = socialMedia[i].ProfileLink
            else if(socialMedia[i].__typename === 'ComponentSocialMediaLinkedIn')
              this.socialMediaLinks.linkedin = socialMedia[i].ProfileLink
            else if(socialMedia[i].__typename === 'ComponentSocialMediaGitHub')
              this.socialMediaLinks.github = socialMedia[i].ProfileLink
            else if(socialMedia[i].__typename === 'ComponentSocialMediaDisplayEmail')
              this.socialMediaLinks.displayEmail = socialMedia[i].DisplayEmail
            else if(socialMedia[i].__typename === 'ComponentSocialMediaOther')
              this.socialMediaLinks.other = socialMedia[i].ProfileLink
          } 
          return data._value.usersPermissionsUsers.data.map((author) => ({
              name: author.attributes.name,
              fields: {
                title: author.attributes.jobTitle,
                company: author.attributes.partner.data.attributes.partner_name.replace('_', ' '),
              },
              description: marked(author.attributes.description),
              photo:{
                name:  author.attributes.photo.data ? author.attributes.photo.data.attributes.name : null ,
                url:  author.attributes.photo.data ? author.attributes.photo.data.attributes.url : null ,
              }, 
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
