<template>
  <Header />
  <main class="bg-white dark:bg-dark-bg min-h-screen h-full px-6 my-16 mx-auto sm:mt-24 ">
    <!-- <div class="text-center my-16">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">

        <span class="block text-blue-600 xl:inline">MITRE Security Automation Framework</span>
      </h1>
      <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">The MITRE Security Automation Framework (SAF) brings together applications, techniques, libraries, and tools developed by MITRE and the security community to streamline security automation for systems and DevOps pipelines.</p>
      <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div class="rounded-md shadow">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"> Get started </a>
        </div>
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"> Live demo </a>
        </div>
      </div> -->
    <!-- </div> -->
    <!-- <HomeHero /> -->
    <HomeCapabilities :capabilities="capabilities" />

    <!-- SAF core tenets -->
    <div class="relative bg-gray-50 dark:bg-dark-bg py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The SAF Is ...</p>
        </div>
        <dl class="mt-24 grid grid-cols-1  gap-y-16 gap-x-8 lg:grid-cols-3">
          <div v-for="tenet in tenets" :key="tenet.id" class="lg:mx-auto flex max-w-sm gap-y-4">
            <component :is="tenet.icon" class="h-12 w-12 mr-3" />
            <div> 
              <dd class="text-start text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{{ tenet.name }}</dd>
              <dd class="text-start mt-3 leading-7 text-gray-600">{{ tenet.value }}</dd>
            </div>

          </div>
        </dl>
      </div>
    </div>

    <HomeToolset :toolset="toolset"/>

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

    <HomeUserStories :userStories="userStories" />





    <!-- <HomeWhenToUseIt :stages="stages" /> -->

    <!-- Commercial sponsors -->
    <!-- <Homesponsors 
      :partners="vendors"
      partners_h2="Partners"
      partners_desc="foobar"
      left=true
    /> -->
    <!-- Government sponsors -->
    <!-- <Homesponsors
      :partners="sponsors"
      partners_h2="Sponsors"
      partners_desc="foobar"
    /> -->
  </main>
  <Footer />
</template>

<script >
import { CurrencyDollarIcon, GlobeIcon, BeakerIcon } from '@heroicons/vue/outline';
export default {
  components: {CurrencyDollarIcon, GlobeIcon, BeakerIcon},
  data() {
    return {
      toolset: [],
      userStories: [],
      capabilities: [],
      sponsors: [],
      vendors: [],
      tenets: [
        { id: 1,  name: 'Free', value: 'Add a description ...', icon:CurrencyDollarIcon},
        { id: 2,  name: 'Open Source', value: 'Add a description ...', icon:BeakerIcon},
        { id: 3,  name: 'Community Project', value: 'Add a description ...', icon:GlobeIcon},
      ]
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getToolset()
      await this.getCapabilities()
      await this.getUserStories()
      await this.getSponsors()
      await this.getVendors()

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
  }
}
</script> 


