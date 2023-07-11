<template>
  <Head>
    <Title>{{ author.name }}</Title>
    <Meta name="description" :content="`Author page for ${author.name}`" />
  </Head>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen overflow-hidden bg-neutral-1 px-4 py-16 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12"
    >
      <template v-if="isLoaded">
        <div class="relative px-4 sm:px-6">
          <article>
            <!-- Profile header -->
            <div>
              <div>
                <div class="w-full object-cover sm:h-16" />
              </div>
              <div class="mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mt-2 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                  <div v-if="author.photo" class="flex">
                    <img
                      class="ring-base h-24 w-24 rounded-full p-2 ring-4 sm:h-32 sm:w-32"
                      :src="author.photo.url"
                      :alt="author.photo.name"
                    />
                  </div>
                  <div
                    class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                  >
                    <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                      <h1 class="truncate text-2xl text-base font-bold">
                        {{ author.name }}
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                  <h1 class="truncate text-2xl text-base font-bold">
                    {{ author.name }}
                  </h1>
                </div>
              </div>
            </div>
            <!-- Description list -->
            <div class="mx-auto mt-6 px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2">
                <div>
                  <span class="text-base text-sm font-bold"> Title </span>
                  <span class="text-base text-sm sm:mt-1">{{
                    author.fields.title
                  }}</span>
                </div>
                <div>
                  <!-- TODO: Add a internal link to the relavent partner page here -->
                  <span class="text-base text-sm font-bold"> Company </span>
                  <span class="text-base text-sm sm:mt-1">{{
                    author.fields.company
                  }}</span>
                </div>
                <div class="sm:col-span-2">
                  <span class="text-sm font-bold">About</span>
                  <div
                    class="prose mt-1 max-w-prose space-y-5 text-sm"
                    v-html="author.description"
                  />
                </div>
              </div>
              <div id="Social Medias" class="flex gap-2 pb-5 pt-5">
                <a
                  v-if="socialMediaLinks.displayEmail !== null"
                  :href="'mailto:' + socialMediaLinks.displayEmail"
                >
                  <span class="sr-only">Mail Link</span>
                  <MailIcon class="h-9 w-9 text-base" />
                </a>
                <a
                  v-if="socialMediaLinks.twitter"
                  :href="socialMediaLinks.twitter"
                >
                  <img
                    src="~/assets/logos/TwitterLogo.png"
                    class="h-auto max-h-8 max-w-full"
                    alt="Twitter Logo"
                  />
                </a>
                <a
                  v-if="socialMediaLinks.facebook"
                  :href="socialMediaLinks.facebook"
                >
                  <img
                    src="~/assets/logos/FacebookLogo.png"
                    class="h-auto max-h-8 max-w-full"
                    alt="Facebook Logo"
                  />
                </a>
                <a
                  v-if="socialMediaLinks.instagram"
                  :href="socialMediaLinks.instagram"
                >
                  <img
                    src="~/assets/logos/InstagramLogo.png"
                    class="h-auto max-h-8 max-w-full"
                    alt="Instagram Logo"
                  />
                </a>
                <a
                  v-if="socialMediaLinks.github"
                  :href="socialMediaLinks.github"
                  class="dark:hidden"
                >
                  <img
                    src="@/assets/logos/GitHubLogoBlack.svg"
                    class="h-auto max-h-8 max-w-full"
                    alt="GitHub Logo"
                  />
                </a>
                <a
                  v-if="socialMediaLinks.github"
                  :href="socialMediaLinks.github"
                  class="hidden dark:flex"
                >
                  <img
                    src="@/assets/logos/GitHubLogoWhite.svg"
                    class="h-auto max-h-8 max-w-full"
                    alt="GitHub Logo"
                  />
                </a>
                <a
                  v-if="socialMediaLinks.linkedin"
                  :href="socialMediaLinks.linkedin"
                >
                  <img
                    src="~/assets/logos/LinkedInLogo.png"
                    class="h-auto max-h-8 max-w-full"
                    alt="LinkedIn Logo"
                  />
                </a>
                <a v-if="socialMediaLinks.other" :href="socialMediaLinks.other">
                  <span class="sr-only">External Link</span>
                  <LinkIcon class="h-8 w-7 text-base" />
                </a>
              </div>
            </div>
            <div class="border-b border-accent pb-5" />
          </article>
        </div>
        <span
          class="block pt-12 text-center text-base text-xl font-bold underline"
        >
          Recent Articles
        </span>
        <!-- Blog Cards -->
        <BlogPostCards :posts="posts" />
      </template>
      <div v-else class="grid h-screen place-items-center">
        <LoadingSpinner />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import {LinkIcon, MailIcon} from '@heroicons/vue/outline';

/// /  Data  ////
const posts = ref([]);
const authorName = ref({});
const author = ref({});
const authorObjs = ref([]);
const isLoaded = ref(false);
const socialMediaLinks = ref({
  facebook: null,
  twitter: null,
  instagram: null,
  github: null,
  linkedin: null,
  displayEmail: null,
  other: null
});
const route = useRoute();

/// /  Methods  ////
const getBlogData = async () => {
  posts.value = await useAsyncData('getBlogDataFromAuthor', () =>
    GqlGetBlogDataFromAuthor({author: route.query.name})
  ).then(({data}) => {
    if (!data._value || !data._value.blogPosts.data) return navigateTo('/blog');
    return data._value.blogPosts.data.map((post) => ({
      title: post.attributes.title,
      description: post.attributes.description,
      category: {name: post.attributes.category},
      author: post.attributes.users_permissions_user.data.attributes.name,
      date: post.attributes.date,
      id: post.id,
      content: post.attributes.content
    }));
  });
};

const getBlogAuthor = async () => {
  authorObjs.value = await useAsyncData('getBlogAuthor', () =>
    GqlGetBlogAuthor({author: route.query.name})
  ).then(({data}) => {
    if (!data._value || !data._value.usersPermissionsUsers.data[0])
      return navigateTo('/blog');
    const socialMedia =
      data._value.usersPermissionsUsers.data[0].attributes.SocialMedia;
    for (let i = 0; i < socialMedia.length; i++) {
      switch (socialMedia[i].__typename) {
        case 'ComponentSocialMediaFacebook':
          socialMediaLinks.value.facebook = socialMedia[i].ProfileLink;
          break;
        case 'ComponentSocialMediaTwitter':
          socialMediaLinks.value.twitter = socialMedia[i].ProfileLink;
          break;
        case 'ComponentSocialMediaInstagram':
          socialMediaLinks.value.instagram = socialMedia[i].ProfileLink;
          break;
        case 'ComponentSocialMediaLinkedIn':
          socialMediaLinks.value.linkedin = socialMedia[i].ProfileLin;
          break;
        case 'ComponentSocialMediaGitHub':
          socialMediaLinks.value.github = socialMedia[i].ProfileLink;
          break;
        case 'ComponentSocialMediaDisplayEmail':
          socialMediaLinks.value.displayEmail = socialMedia[i].DisplayEmail;
          break;
        case 'ComponentSocialMediaOther':
          socialMediaLinks.value.other = socialMedia[i].ProfileLink;
          break;
        default:
        // Error on default
      }
    }
    return data._value.usersPermissionsUsers.data.map((author) => ({
      name: author.attributes.name,
      fields: {
        title: author.attributes.jobTitle,
        company: author.attributes.partner.data.attributes.name.replace(
          '_',
          ' '
        )
      },
      description: author.attributes.description,
      photo: {
        name: author.attributes.photo.data
          ? author.attributes.photo.data.attributes.name
          : null,
        url: author.attributes.photo.data
          ? author.attributes.photo.data.attributes.url
          : null
      }
    }));
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  authorName.value = route.query.id;
  await nextTick(async () => {
    await getBlogData();
    await getBlogAuthor();
    if (authorObjs.value !== undefined) author.value = authorObjs.value[0];
    isLoaded.value = true;
  });
});
</script>
