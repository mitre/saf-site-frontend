<template>
  <div>
    <Head>
      <Title>MITRE SAF© Homepage</Title>
      <Meta name="description" content="Homepage of the SAF site" />
    </Head>
    <Header />
    <div class="h-full min-h-screen bg-neutral-1">
      <main v-if="isLoaded" class="mx-auto mb-16">
        <HomeHero />

        <HomeCapabilities :capabilities="capabilities" />

        <HomeTenets :tenets="tenets" />

        <HomeToolset :toolset="toolset" />

        <div class="py-24">
          <h1
            class="my-5 text-center text-4xl sm:text-5xl font-extrabold tracking-tight text-header"
          >
            Adopted by The Community
          </h1>
          <HomeLogoCloud title="Sponsors" :data="sponsors" />

          <HomeLogoCloud title="Vendors" :data="vendors" />
        </div>

        <HomeUserStories :user-stories="userStories" />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolset: [],
      userStories: [],
      capabilities: [],
      sponsors: [],
      vendors: [],
      tenets: [],
      isLoaded: false,
      sortedSponsors: [
        'Platform One',
        'DSCA',
        'DCSA',
        'US Air Force',
        'DOD CIO',
        'DISA',
        'US Army ECMA',
        'DHHS',
        'CMS',
        'CDC',
        'NRO'
      ],
      sortedVendors: [
        'Progress Chef',
        'VMware',
        'Sophos',
        'Lockheed Martin',
        'RGS',
        'Google',
        'GitHub',
        'Ansible Lockdown',
        'Oracle',
        'CrunchyData',
        'Elastic',
        'Nessus'
      ]
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getToolset();
      await this.getCapabilities();
      await this.getUserStories();
      await this.getSponsors();
      await this.getVendors();
      await this.getTenets();
      this.sortItems(this.capabilities);
      this.sortItems(this.toolset);
      this.sortItems(this.tenets);
      this.sortItems(this.userStories);
      this.isLoaded = true;
    });
  },
  methods: {
    async getToolset() {
      this.toolset = await useAsyncData('getToolset', () =>
        GqlGetToolset()
      ).then(({data}) =>
        data.value.tools.data.map((tool) => ({
          name: tool.attributes.name,
          description: tool.attributes.description,
          orderID: tool.attributes.order_id,
          link: tool.attributes.link,
          icon: {
            name: tool.attributes.icon.data
              ? tool.attributes.icon.data.attributes.name
              : null,
            url: tool.attributes.icon.data
              ? tool.attributes.icon.data.attributes.url
              : null,
            alt: tool.attributes.icon.data
              ? tool.attributes.icon.data.attributes.alternativeText
              : null
          }
        }))
      );
    },
    async getCapabilities() {
      this.capabilities = await useAsyncData('getCapabilities', () =>
        GqlGetCapabilities()
      ).then(({data}) =>
        data.value.capabilities.data.map((capability) => ({
          name: capability.attributes.name,
          description: capability.attributes.description,
          orderID: capability.attributes.order_id,
          link: capability.attributes.link,
          icon: {
            name: capability.attributes.icon.data
              ? capability.attributes.icon.data.attributes.name
              : null,
            url: capability.attributes.icon.data
              ? capability.attributes.icon.data.attributes.url
              : null,
            alt: capability.attributes.icon.data
              ? capability.attributes.icon.data.attributes.alternativeText
              : null
          }
        }))
      );
    },
    async getSponsors() {
      this.sponsors = await useAsyncData('getSponsors', () =>
        GqlGetSponsors()
      ).then(({data}) =>
        data.value.partners.data
          .map((sponsor) => ({
            name: sponsor.attributes.name,
            nameLong: sponsor.attributes.name_long,
            link: sponsor.attributes.link,
            coummunity: sponsor.attributes.community,
            icon: {
              name: sponsor.attributes.icon.data
                ? sponsor.attributes.icon.data.attributes.name
                : null,
              url: sponsor.attributes.icon.data
                ? sponsor.attributes.icon.data.attributes.url
                : null,
              alt: sponsor.attributes.icon.data
                ? sponsor.attributes.icon.data.attributes.alternativeText
                : null
            }
          }))
          .sort(
            (a, b) =>
              this.sortedSponsors.indexOf(a.name) -
              this.sortedSponsors.indexOf(b.name)
          )
      );
    },
    async getVendors() {
      this.vendors = await useAsyncData('getVendors', () =>
        GqlGetVendors()
      ).then(({data}) =>
        data.value.partners.data
          .map((vendor) => ({
            name: vendor.attributes.name,
            nameLong: vendor.attributes.name_long,
            link: vendor.attributes.link,
            community: vendor.attributes.community,
            icon: {
              name: vendor.attributes.icon.data
                ? vendor.attributes.icon.data.attributes.name
                : null,
              url: vendor.attributes.icon.data
                ? vendor.attributes.icon.data.attributes.url
                : null,
              alt: vendor.attributes.icon.data
                ? vendor.attributes.icon.data.attributes.alternativeText
                : null
            }
          }))
          .sort(
            (a, b) =>
              this.sortedVendors.indexOf(a.name) -
              this.sortedVendors.indexOf(b.name)
          )
      );
    },
    async getUserStories() {
      this.userStories = await useAsyncData('getUserStories', () =>
        GqlGetUserStories()
      ).then(({data}) =>
        data.value.userStories.data.map((userStory) => ({
          question: userStory.attributes.question,
          answer: userStory.attributes.answer,
          orderID: userStory.attributes.order_id
        }))
      );
    },
    async getTenets() {
      this.tenets = await useAsyncData('getTenets', () => GqlGetTenets()).then(
        ({data}) =>
          data.value.tenets.data.map((tenet) => ({
            name: tenet.attributes.name,
            description: tenet.attributes.description,
            orderID: tenet.attributes.order_id
          }))
      );
    },
    sortItems(items) {
      return items.sort((a, b) => a.orderID - b.orderID);
    }
  }
};
</script>
