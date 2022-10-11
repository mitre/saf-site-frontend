<template>
  <div>
    <div> <Header /> </div>
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden min-h-screen h-full">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <template v-if="isLoaded" class="text-lg prose prose-lg max-w-prose mx-auto ">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl">
              {{postData.title}}
            </span>
            <span class="pt-3 block text-base text-center text-blue-600 font-semibold tracking-wide">
               {{postData.date}}
              &nbsp; | &nbsp; 
              <a :href="`/blog/author/${slugify(postAuthor)}?id=${postAuthor}`" class="hover:underline">
               {{postAuthor}}
              </a> 
            </span>
          </h1>
          <!-- <span v-html="renderedContent" class="mt-8 text-xl mx-auto leading-8 prose prose-sm dark:prose-invert"></span> -->
          <div class="mt-8 mx-auto leading-8 text-center prose prose-sm lg:prose-lg dark:prose-invert prose-li:text-start prose-code:text-start" v-html="renderedContent" ></div>

        </template>
        <template v-else> 
          <div class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight min-h-screen h-full text-gray-900 dark:text-MITRE-silver sm:text-4xl" >
             Loading ... 
          </div>
        </template>
      </div>
    </div>
    <div> <Footer /> </div>
  </div>
</template>

<script>
import { marked } from 'marked'


export default {
  data() {
    return {
      post: {},
      postData: {},
      postAuthor: {},
      renderedContent: {},
      isLoaded: false,
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getData()
      console.log('I made it passed data fetch!')
    });
  },
  methods: {
  async getData() {
    // console.log(this.$route)
    this.post = await useAsyncData('getBlogDataFromID', () => GqlGetBlogDataFromID({id: this.$route.query.id}))
      .then(({ data }) => {
        console.log(this.post)
        this.postData = data._value.blogPost.data.attributes
        console.log('This is postdata')
        console.log(this.postData)
        this.renderedContent = marked(this.postData.content)
        this.postAuthor = this.postData.users_permissions_user.data.attributes.name
        this.isLoaded = true
      });
     
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