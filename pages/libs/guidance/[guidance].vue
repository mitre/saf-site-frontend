<template>
  <div>
    <Head>
      <Title>{{ guidance?.name ?? 'Unknown' }} Guidance</Title>
      <Meta
        name="description"
        :content="`Guidance for ${guidance?.name ?? 'Unkown'}`"
      />
    </Head>
    <div>
      <Header />
      <div
        class="relative mb-8 h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div v-if="isLoaded">
          <div class="space-y-5 pt-5">
            <div>
              <h1 class="text-center text-2xl font-bold leading-6">
                Guidance Overview
              </h1>
              <h2 class="text-center text-xl text-muted">
                Extra details for the guidance overview
              </h2>
            </div>

            <dl class="grid grid-cols-1 sm:grid-cols-2">
              <div
                class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
              >
                <dt class="text-2xl font-bold leading-6 text-foreground">
                  Full name
                </dt>
                <dd class="text-xl mt-1 leading-6 text-foreground sm:mt-2">
                  {{ guidance.name }}
                </dd>
              </div>
              <div
                class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
              >
                <dt class="text-2xl font-bold leading-6 text-foreground">
                  Category
                </dt>
                <dd class="text-xl mt-1 leading-6 text-foreground sm:mt-2">
                  {{ guidance.category.replaceAll('_', ' ') }}
                </dd>
              </div>
              <div
                class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
              >
                <dt class="text-2xl font-bold leading-6 text-foreground">
                  Version
                </dt>
                <dd class="text-xl mt-1 leading-6 text-foreground sm:mt-2">
                  {{ guidance.version }}
                </dd>
              </div>
              <div
                class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
              >
                <dt class="text-2xl font-bold leading-6 text-foreground">
                  Type
                </dt>
                <dd class="text-xl mt-1 leading-6 text-foreground sm:mt-2">
                  {{ guidance.type }}
                </dd>
              </div>
              <div
                class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
              >
                <dt class="text-2xl font-bold leading-6 text-foreground">
                  Date
                </dt>
                <dd class="text-xl mt-1 leading-6 text-foreground sm:mt-2">
                  {{ guidance.date }}
                </dd>
              </div>
              <div
                class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0"
              >
                <dt class="text-2xl font-bold leading-6 text-foreground">
                  Url
                </dt>
                <dd class="text-xl mt-1 leading-6 text-foreground sm:mt-2">
                  <a :href="guidance.source">{{ guidance.source }}</a>
                </dd>
              </div>
            </dl>

            <div class="pt-10">
              <h2 class="text-center text-3xl font-bold leading-6">
                Related Content
              </h2>
              <h2 class="text-center text-xl text-muted">
                Related hardening and validation content for the guidance
              </h2>
            </div>
            <h3 class="text-center font-bold text-2xl">Harden</h3>
            <FrameworkContent :contents="guidance.hardening" />
            <h3 class="text-center font-bold text-2xl">Validate</h3>
            <FrameworkContent :contents="guidance.validation" />
          </div>
        </div>
        <div v-else class="grid h-screen place-items-center">
          <LoadingSpinner />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import {Guidance} from '~/global';

/*   Data   */
const isLoaded = ref(false);
const guidance = ref<Guidance>();
const route = useRoute();

/*   Methods   */
const getGuidance = async () => {
  guidance.value = await useAsyncData(
    'getGuidanceDataFromID',
    () => GqlGetGuidanceDataFromID({id: route.query.id?.toString() ?? ''}),
    {initialCache: false}
  ).then(({data}) => {
    if (!data.value || !data?.value?.guidance?.data) {
      navigateTo('/guidance');
      return;
    }

    const guidance = data.value.guidance.data;
    return {
      name: guidance?.attributes?.name,
      id: guidance.id,
      type: guidance?.attributes?.type,
      category: guidance?.attributes?.category,
      source: guidance?.attributes?.source,
      date: guidance?.attributes?.date,
      version:
        guidance?.attributes?.version?.length !== 0
          ? guidance?.attributes?.version[0].version
          : '',
      hardening: guidance?.attributes?.hardening?.data
        ? guidance?.attributes?.hardening?.data.map((harden) => ({
            id: harden?.id,
            name: harden?.attributes?.name,
            name_long: harden?.attributes?.name_long,
            source: harden?.attributes?.source,
            last_update: harden?.attributes?.code_last_updated,
            platform: {
              name: harden?.attributes?.platform?.data?.attributes?.name,
              link: harden?.attributes?.platform?.data?.attributes?.link,
              icon: {
                name: harden?.attributes?.platform?.data?.attributes?.icon?.data
                  ? harden?.attributes?.platform?.data?.attributes?.icon?.data
                      ?.attributes?.name
                  : null,
                url: harden?.attributes?.platform?.data?.attributes?.icon?.data
                  ? harden?.attributes?.platform?.data?.attributes?.icon?.data
                      ?.attributes?.url
                  : null,
                alt: harden?.attributes?.platform?.data?.attributes?.icon?.data
                  ?.attributes?.alternativeText
              }
            },
            partner: {
              name: harden?.attributes?.partner?.data?.attributes?.name,
              name_long:
                harden?.attributes?.partner?.data?.attributes?.name_long,
              link: harden?.attributes?.partner?.data?.attributes?.link,
              icon: {
                name: harden?.attributes?.partner?.data?.attributes?.icon?.data
                  ? harden?.attributes?.partner?.data?.attributes?.icon?.data
                      ?.attributes?.name
                  : null,
                url: harden?.attributes?.partner?.data?.attributes?.icon?.data
                  ? harden?.attributes?.partner?.data?.attributes?.icon?.data
                      ?.attributes?.url
                  : null,
                alt: harden?.attributes?.platform?.data?.attributes?.icon?.data
                  ?.attributes?.alternativeText
              }
            }
          }))
        : null,
      validation: guidance?.attributes?.validation?.data
        ? guidance?.attributes.validation.data.map((validate) => ({
            id: validate?.id,
            name: validate?.attributes?.name,
            name_long: validate?.attributes?.name_long,
            source: validate?.attributes?.source,
            last_update: validate?.attributes?.code_last_updated,
            platform: {
              name: validate?.attributes?.platform?.data?.attributes?.name,
              link: validate?.attributes?.platform?.data?.attributes?.link,
              icon: {
                name: validate?.attributes?.platform?.data?.attributes?.icon
                  ?.data
                  ? validate?.attributes?.platform?.data?.attributes?.icon?.data
                      ?.attributes?.name
                  : null,
                url: validate?.attributes?.platform?.data?.attributes?.icon
                  ?.data
                  ? validate?.attributes?.platform?.data?.attributes?.icon?.data
                      ?.attributes?.url
                  : null,
                alt: validate?.attributes?.platform?.data?.attributes?.icon
                  ?.data?.attributes?.alternativeText
              }
            },
            partner: {
              name: validate?.attributes?.partner?.data?.attributes?.name,
              name_long:
                validate?.attributes?.partner?.data?.attributes?.name_long,
              link: validate?.attributes?.partner?.data?.attributes?.link,
              icon: {
                name: validate?.attributes?.partner?.data?.attributes?.icon
                  ?.data
                  ? validate?.attributes?.partner?.data?.attributes?.icon?.data
                      ?.attributes?.name
                  : null,
                url: validate?.attributes?.partner?.data?.attributes?.icon?.data
                  ? validate?.attributes?.partner?.data?.attributes?.icon?.data
                      ?.attributes?.url
                  : null,
                alt: validate?.attributes?.platform?.data?.attributes?.icon
                  ?.data?.attributes?.alternativeText
              }
            }
          }))
        : null
    };
  });

  console.log('What si this: ', guidance);
};

/*   Lifecycle   */
onMounted(async () => {
  await nextTick(async () => {
    await getGuidance();
    isLoaded.value = true;
  });
});
</script>
