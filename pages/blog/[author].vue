<template>
  <div>
    <Header />
    <div
      class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden min-h-screen h-full pt-12 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8">
      <template v-if="isLoaded">
        <div class="relative px-4 sm:px-6">
          <article>
            <!-- Profile header -->
            <div>
              <div>
                <div class="sm:h-16 w-full object-cover" />
              </div>
              <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mt-2 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div v-if="author.photo" class="flex">
                    <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="author.photo.url"
                      v-bind:alt="author.photo.name" />
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
            <div class="mx-auto mt-6 px-4 sm:px-6 lg:px-8">
              <dl class="grid grid-cols-1 gap-y-8 sm:grid-cols-2">
                <div>
                  <dt class="text-sm font-medium text-gray-500 dark:text-MITRE-silver"> Title </dt>
                  <dd class="sm:mt-1 text-sm text-gray-900 dark:text-dark-text">{{ author.fields.title }}</dd>
                </div>
                <a>
                  <!-- TODO: Add a internal link to the relavent partner page here -->
                  <dt class="text-sm font-medium text-gray-500 dark:text-MITRE-silver"> Company </dt>
                  <dd class="sm:mt-1 text-sm text-gray-900 dark:text-dark-text">{{ author.fields.company }}</dd>
                </a>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-medium text-gray-500 dark:text-MITRE-silver">About</dt>
                  <div class="prose mt-1 max-w-prose space-y-5 text-sm text-gray-900 dark:text-dark-text"
                    v-html="author.description" />

                </div>
              </dl>
              <div id="Social Medias" class="flex gap-2 pt-5 pb-5">
                <a v-if="socialMediaLinks.displayEmail != null" v-bind:href="'mailto:' + socialMediaLinks.displayEmail">
                  <MailIcon text-gray-500 class="w-9 h-9 dark:text-dark-text" />
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
                  <img src="@/assets/GitHubLogoBlack.svg" class="max-w-full h-auto max-h-8" alt="GitHub Logo" />
                </a>
                <a v-if="socialMediaLinks.github" v-bind:href="socialMediaLinks.github" class="hidden dark:flex">
                  <img src="@/assets/GitHubLogoWhite.svg" class="max-w-full h-auto max-h-8" alt="GitHub Logo" />
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
        <span class="block text-xl pt-12 text-center underline font-bold dark:text-white">
          Recent Articles
        </span>
        <!-- Blog Cards -->
        <BlogPostCards v-bind:posts="posts" />
      </template>
      <div v-else class="grid h-screen place-items-center">
        <LoadingSpinner />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { marked } from 'marked'
import { LinkIcon, MailIcon } from '@heroicons/vue/outline'

////  Data  ////
const posts = ref([])
const authorName = ref({})
const author = ref({})
const authorObjs = ref([])
const isLoaded = ref(false)
const socialMediaLinks = ref({
  facebook: null,
  twitter: null,
  instagram: null,
  github: null,
  linkedin: null,
  displayEmail: null,
  other: null,
})
const route = useRoute()

////  Methods  ////
const getBlogData = async () => {
  posts.value = await useAsyncData('getBlogDataFromAuthor', () => GqlGetBlogDataFromAuthor({ author: route.query.name }))
    .then(({ data }) => {
      if(!data._value || !data._value.blogPosts.data)
        navigateTo('/blog')
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

const getBlogAuthor = async () => {
  authorObjs.value = await useAsyncData('getBlogAuthor', () => GqlGetBlogAuthor({ author: route.query.name }))
    .then(({ data }) => {
      if(!data._value || !data._value.usersPermissionsUsers.data[0])
        navigateTo('/blog')
      let socialMedia = data._value.usersPermissionsUsers.data[0].attributes.SocialMedia
      for (let i = 0; i < socialMedia.length; i++) {
        switch (socialMedia[i].__typename) {
          case 'ComponentSocialMediaFacebook':
            socialMediaLinks.value.facebook = socialMedia[i].ProfileLink
            break;
          case 'ComponentSocialMediaTwitter':
            socialMediaLinks.value.twitter = socialMedia[i].ProfileLink
            break;
          case 'ComponentSocialMediaInstagram':
            socialMediaLinks.value.instagram = socialMedia[i].ProfileLink
            break;
          case 'ComponentSocialMediaLinkedIn':
            socialMediaLinks.value.linkedin = socialMedia[i].ProfileLin
            break;
          case 'ComponentSocialMediaGitHub':
            socialMediaLinks.value.github = socialMedia[i].ProfileLink
            break;
          case 'ComponentSocialMediaDisplayEmail':
            socialMediaLinks.value.displayEmail = socialMedia[i].DisplayEmail
            break;
          case 'ComponentSocialMediaOther':
            socialMediaLinks.value.other = socialMedia[i].ProfileLink
            break;
          default:
          // Error on default
        }
      }
      return data._value.usersPermissionsUsers.data.map((author) => ({
        name: author.attributes.name,
        fields: {
          title: author.attributes.jobTitle,
          company: author.attributes.partner.data.attributes.name.replace('_', ' '),
        },
        description: marked(author.attributes.description),
        photo: {
          name: author.attributes.photo.data ? author.attributes.photo.data.attributes.name : null,
          url: author.attributes.photo.data ? author.attributes.photo.data.attributes.url : null,
        },
      }))
    })
}

////  Lifecycle  ////
onMounted(async () => {
  authorName.value = route.query.id
  await nextTick(async () => {
    await getBlogData()
    await getBlogAuthor()
    author.value = authorObjs.value[0]
    isLoaded.value = true
  });
});

</script>