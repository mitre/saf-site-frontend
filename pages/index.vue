<template>
  <Header />
  <main class="my-16 mx-auto sm:mt-24">
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
      </div>
    </div> -->
    <!-- <HomeHero /> -->
    <HomeCapabilities :capabilities="capabilities" />

    <!-- SAF core tenets -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
          <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">{{ stat.value }}</dd>
        </div>
      </dl>
    </div>


    <HomeToolset :toolset="toolset"/>




    <!-- <HomeWhenToUseIt :stages="stages" /> -->

    <!-- Commercial Sponsers -->
    <!-- <HomeSponsers 
      :partners="vendors"
      partners_h2="Partners"
      partners_desc="foobar"
      left=true
    /> -->
    <!-- Government Sponsers -->
    <!-- <HomeSponsers
      :partners="sponsors"
      partners_h2="Sponsors"
      partners_desc="foobar"
    /> -->
  </main>
  <Footer />
</template>

<script >
export default {
  data() {
    return {
      stages: [],
      vendors: [],
      toolset: [],
      capabilities: [],
      stats: [
        { id: 1, name: 'Transactions every 24 hours', value: 'Free' },
        { id: 2, name: 'Assets under holding', value: 'Open Source' },
        { id: 3, name: 'New users annually', value: 'Community Project' },
      ]
    };
  },
  mounted() {
    this.$nextTick(async () => {
      // await this.getWhenToUseIt()
      // await this.getVendors()
      await this.getToolset()
      await this.getCapabilities()
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
          console.log('look here', data._value.capabilities.data)
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
    // async getWhenToUseIt() {
    //   this.stages = await useAsyncData('getWhenToUseIt', () => GqlWhenToUseIt())
    //     .then(({ data }) => {
    //       return data._value.textContents.data.map((stage) => ({
    //         name: stage.attributes.name,
    //         text: stage.attributes.text
    //       }))
    //     });
    // },
    // async getVendors() {
    //   this.vendors = await useAsyncData('getVendors', () => GqlVendors())
    //     .then(({ data }) => {
    //       return data._value.partners.data.map((vendor) => ({
    //         name: vendor.attributes.name,
    //         name_long: vendor.attributes.name_long,
    //         link: vendor.attributes.link,
    //         icon: vendor.attributes.icon.data.attributes.url,
    //         community: vendor.attributes.community,
    //       }))
    //     });
    //   }
    }
  }
</script> 

<script setup>
const features = [
  {
    name: 'Push to Deploy',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'SSL Certificates',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'Simple Queues',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'Advanced Security',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'Powerful API',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
  {
    name: 'Database Backups',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  },
]
</script>

