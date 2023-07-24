<template>
  <div>
    <Head>
      <Title>{{ author?.name }}</Title>
      <Meta name="description" :content="`Author page for ${author?.name}`" />
    </Head>
    <div>
      <Header />
      <div
        class="relative h-full min-h-screen overflow-hidden bg-neutral-1 px-4 py-16 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-12"
      >
        <template v-if="isLoaded && author && posts">
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
                        :src="author.photo.url ?? ''"
                        :alt="author.photo.name ?? ''"
                      />
                    </div>
                    <div
                      class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                    >
                      <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                        <h1 class="truncate text-2xl font-bold">
                          {{ author.name }}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                    <h1 class="truncate text-2xl font-bold">
                      {{ author.name }}
                    </h1>
                  </div>
                </div>
              </div>
              <!-- Description list -->
              <div class="mx-auto mt-6 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2">
                  <div class="flex flex-col">
                    <span class="text-sm font-bold"> Title </span>
                    <span class="text-sm sm:mt-1">{{
                      author.fields.title
                    }}</span>
                  </div>
                  <div class="flex flex-col">
                    <!-- TODO: Add a internal link to the relavent partner page here -->
                    <span class="text-sm font-bold"> Company </span>
                    <span class="text-sm sm:mt-1">{{
                      author.fields.company
                    }}</span>
                  </div>
                  <div class="sm:col-span-2">
                    <span class="text-sm font-bold">About</span>
                    <div
                      class="prose mt-1 max-w-prose space-y-5 text-sm text-foreground"
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
                    <MailIcon class="h-9 w-9" />
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
                  <a
                    v-if="socialMediaLinks.other"
                    :href="socialMediaLinks.other"
                  >
                    <span class="sr-only">External Link</span>
                    <LinkIcon class="h-8 w-7" />
                  </a>
                </div>
              </div>
              <div class="border-b border-accent pb-5" />
            </article>
          </div>
          <span class="block pt-12 text-center text-xl font-bold underline">
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
  </div>
</template>

<script setup lang="ts">
import {LinkIcon, MailIcon} from '@heroicons/vue/outline';

/// /  Data  ////
const posts = ref<BlogPost[]>();
const author = ref<Author>();
const isLoaded = ref(false);
const socialMediaLinks = ref<SocialMediaLinkMapping>({
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
    GqlGetBlogDataFromAuthor({author: route.query.name?.toString() ?? ''})
  ).then(({data}) => {
    if (!data.value || !data?.value?.blogPosts?.data) {
      return navigateTo('/blog');
    }
    return data.value.blogPosts.data.map((post) => ({
      title: post?.attributes?.title,
      description: post?.attributes?.description,
      category: {name: post?.attributes?.category},
      author: post?.attributes?.users_permissions_user?.data?.attributes?.name,
      date: post?.attributes?.date,
      id: post.id,
      content: post?.attributes?.content
    }));
  });
};

const getBlogAuthor = async () => {
  author.value = await useAsyncData('getBlogAuthor', () =>
    GqlGetBlogAuthor({author: route.query.name?.toString() ?? ''})
  ).then(({data}) => {
    if (!data.value || !data?.value?.usersPermissionsUsers?.data[0]) {
      return navigateTo('/blog');
    }
    const socialMedia =
      data?.value?.usersPermissionsUsers?.data[0]?.attributes?.SocialMedia;
    if (socialMedia) {
      for (let i = 0; i < socialMedia.length; i += 1) {
        const socialMediaData = socialMedia ? socialMedia[i] : null;
        if (socialMediaData) {
          switch (socialMediaData.__typename) {
            case 'ComponentSocialMediaFacebook':
              socialMediaLinks.value.facebook =
                socialMediaData.ProfileLink ?? null;
              break;
            case 'ComponentSocialMediaTwitter':
              socialMediaLinks.value.twitter =
                socialMediaData.ProfileLink ?? null;
              break;
            case 'ComponentSocialMediaInstagram':
              socialMediaLinks.value.instagram =
                socialMediaData.ProfileLink ?? null;
              break;
            case 'ComponentSocialMediaLinkedIn':
              socialMediaLinks.value.linkedin =
                socialMediaData.ProfileLink ?? null;
              break;
            case 'ComponentSocialMediaGitHub':
              socialMediaLinks.value.github =
                socialMediaData.ProfileLink ?? null;
              break;
            case 'ComponentSocialMediaDisplayEmail':
              socialMediaLinks.value.displayEmail =
                socialMediaData.DisplayEmail ?? null;
              break;
            case 'ComponentSocialMediaOther':
              socialMediaLinks.value.other =
                socialMediaData.ProfileLink ?? null;
              break;
            default:
            // Error on default
          }
        }
      }
    }
    const authorObj = data.value.usersPermissionsUsers.data[0]; // Needs to grab the first becuase it is a "findMany" return
    return {
      name: authorObj?.attributes?.name,
      fields: {
        title: authorObj?.attributes?.jobTitle,
        company: authorObj?.attributes?.partner?.data?.attributes?.name.replace(
          '_',
          ' '
        )
      },
      description: authorObj?.attributes?.description,
      photo: {
        name: authorObj?.attributes?.photo?.data
          ? authorObj?.attributes?.photo?.data?.attributes?.name
          : null,
        url: authorObj?.attributes?.photo?.data
          ? authorObj?.attributes?.photo?.data?.attributes?.url
          : null
      }
    };
  });
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    await getBlogData();
    await getBlogAuthor();
    isLoaded.value = true;
  });
});
</script>
