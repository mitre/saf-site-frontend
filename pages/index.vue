<template>
  <Header />
  <main class="bg-white dark:bg-dark-bg min-h-screen h-full px-6 my-16 mx-auto sm:mt-24 ">
    <HomeHero />
    <HomeCapabilities :capabilities="capabilities" />

    <!-- SAF core tenets -->
    <HomeTenets :tenets="tenets"/>

    <HomeToolset :toolset="toolset"/>

    <div class="bg-white py-24 sm:py-32 lg:py-40" >
      <p class="mt-2 mb-6 md:mb-2  text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Adopted By</p>
      <div class="md:flex items-center">
        <p class="font-bold tracking-tight text-gray-900 sm:text-3xl mx-auto items-center">Sponsors</p>
        <HomeSponsors :data="sponsors" class="ml-auto"/>
      </div>
      <div class="md:flex items-center">
        <p class="md:hidden font-bold tracking-tight text-gray-900 sm:text-3xl mx-auto items-center">Vendors</p>
        <HomeSponsors :data="vendors" class="mr-auto"/>
        <p class="hidden md:flex font-bold tracking-tight text-gray-900 sm:text-3xl mx-auto items-center">Vendors</p>
      </div>
    </div>

    <HomeUserStories :userStories="userStories" />

  </main>
  <Footer />
</template>

<script >
export default {
  data() {
    return {
      toolset: [],
      userStories: [],
      capabilities: [],
      sponsors: [],
      vendors: [],
      tenets: [],
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getToolset()
      await this.getCapabilities()
      await this.getUserStories()
      await this.getSponsors()
      await this.getVendors()
      await this.getTenets()

    });
  },
  methods: {
    async getToolset() {
      this.toolset = await useAsyncData('getToolset', () => GqlGetToolset())
        .then(({ data }) => {
          return data._value.tools.data.map((tool) => ({
            name: tool.attributes.name,
            description: tool.attributes.description,
            orderID: tool.attributes.order_id,
            link: tool.attributes.link,
            icon: {
              name: tool.attributes.icon.data ? tool.attributes.icon.data.attributes.name : null,
              url: tool.attributes.icon.data ? tool.attributes.icon.data.attributes.url : null,
            },
          }))
        });
    },
    async getCapabilities() {
      this.capabilities = await useAsyncData('getCapabilities', () => GqlGetCapabilities())
        .then(({ data }) => {
          return data._value.capabilities.data.map((capability) => ({
            name: capability.attributes.name,
            description: capability.attributes.description,
            orderID: capability.attributes.order_id,
            link: capability.attributes.link,
            icon: {
              name: capability.attributes.icon.data ? capability.attributes.icon.data.attributes.name : null,
              url: capability.attributes.icon.data ? capability.attributes.icon.data.attributes.url : null,
            },
          }))
        });
    },
    async getSponsors() {
      this.sponsors = await useAsyncData('getSponsors', () => GqlGetSponsors())
        .then(({ data }) => {
          return data._value.partners.data.map((sponsor) => ({
            name: sponsor.attributes.name,
            nameLong: sponsor.attributes.name_long,
            link: sponsor.attributes.link,
            coummunity: sponsor.attributes.community,
            icon: {
              name: sponsor.attributes.icon.data ? sponsor.attributes.icon.data.attributes.name : null,
              url: sponsor.attributes.icon.data ? sponsor.attributes.icon.data.attributes.url : null,
            },
          }))
        });
    },
    async getVendors() {
      this.vendors = await useAsyncData('getVendors', () => GqlGetVendors())
        .then(({ data }) => {
          return data._value.partners.data.map((vendor) => ({
            name: vendor.attributes.name,
            nameLong: vendor.attributes.name_long,
            link: vendor.attributes.link,
            community: vendor.attributes.community,
            icon: {
              name: vendor.attributes.icon.data ? vendor.attributes.icon.data.attributes.name : null,
              url: vendor.attributes.icon.data ? vendor.attributes.icon.data.attributes.url : null,
            },
          }))
        });
    },
    async getUserStories() {
      this.userStories = await useAsyncData('getUserStories', () => GqlGetUserStories())
        .then(({ data }) => {
          return data._value.userStories.data.map((userStory) => ({
            question: userStory.attributes.question,
            answer: userStory.attributes.answer,
            orderID: userStory.attributes.order_id,
          }))
        });
    },
    async getTenets() {
      this.tenets = await useAsyncData('getTenets', () => GqlGetTenets())
        .then(({ data }) => {
          return data._value.tenets.data.map((tenet) => ({
            name: tenet.attributes.name,
            description: tenet.attributes.description,
            orderID: tenet.attributes.order_id,
            icon: {
              name: tenet.attributes.icon.data ? tenet.attributes.icon.data.attributes.name : null,
              url: tenet.attributes.icon.data ? tenet.attributes.icon.data.attributes.url : null,
            },
          }))
        });
    },
  }
}
</script> 


