<template>
  <div>
    <Head>
      <Title>{{ guidance?.name ?? "Unknown"}} Guidance</Title>
      <Meta name="description" :content="`Guidance for ${guidance?.name ?? 'Unkown'}`" />
    </Head>
    <div>
      <Header />
      <div
        class="relative mb-8 h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded">
          <FrameworkModal :guidance="guidance" />
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
/*   Data   */
const isLoaded = ref(false);
const guidance = ref<Guidance>();
const route = useRoute();

/*   Methods   */
const getGuidance = async () => {
      guidance.value = await useAsyncData(
        'getGuidanceDataFromID',
        () => GqlGetGuidanceDataFromID({id: route.query.id}),
        {initialCache: false}
      ).then(({data}) => {
        if (!data.value || !data?.value?.guidance?.data){
          return navigateTo('/guidance');
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
              : 0,
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
                      : null
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
                      : null
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
                    name: validate?.attributes?.platform?.data?.attributes?.icon?.data
                      ? validate?.attributes?.platform?.data?.attributes?.icon?.data
                      ?.attributes?.name
                      : null,
                    url: validate?.attributes?.platform?.data?.attributes?.icon?.data
                      ? validate?.attributes?.platform?.data?.attributes?.icon?.data
                      ?.attributes?.url
                      : null
                  }
                },
                partner: {
                  name: validate?.attributes?.partner?.data?.attributes?.name,
                  name_long:
                    validate?.attributes?.partner?.data?.attributes?.name_long,
                  link: validate?.attributes?.partner?.data?.attributes?.link,
                  icon: {
                    name: validate?.attributes?.partner?.data?.attributes?.icon?.data
                      ? validate?.attributes?.partner?.data?.attributes?.icon?.data
                      ?.attributes?.name
                      : null,
                    url: validate?.attributes?.partner?.data?.attributes?.icon?.data
                      ? validate?.attributes?.partner?.data?.attributes?.icon?.data
                      ?.attributes?.url
                      : null
                  }
                }
              }))
            : null
        };
      });
    };

/*   Lifecycle   */
onMounted(async () => {
  await nextTick(async () => {
    await getGuidance();
    isLoaded.value = true;
  });
});
</script>
