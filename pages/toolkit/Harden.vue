<template>
  <div>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-50">Harden</h1>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">These open-source community-based hardening
              baselines help to securely configure common system components.
              MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community
              vendor sites.
              If you are interested in new hardening baselines, please contact us at saf@groups.mitre.org .</p>
          </div>
        </div>
        <ToolkitTable v-bind:entries="hardeningData" />
      </div>
      <div v-else>
        <p> Loading ... </p>
      </div>
    </div>
    <Footer />
  </div>
</template>
  

<script>
export default {
  data() {
    return {
      guidanceData: [],
      hardeningData: [],
      isLoaded: false,
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getGuidance()
      this.getHardeningData()
      this.isLoaded = true
    });
  },
  methods: {
    async getGuidance() {
      this.guidanceData = await useAsyncData('getHardenData', () => GqlGetHardenData())
        .then(({ data }) => {
          console.log(data._value.guidances)
          return data._value.guidances.data.map((guidance) => ({
            name: guidance.attributes.name,
            id: guidance.id,
            type: guidance.attributes.type,
            category: guidance.attributes.category,
            source_link: guidance.attributes.source_link,
            date: guidance.attributes.date,
            version: guidance.attributes.version,
            hardening: {
              id: guidance.attributes.hardening.data[0].id,
              name: guidance.attributes.hardening.data[0].attributes.name,
              name_long: guidance.attributes.hardening.data[0].attributes.name_long,
              source: guidance.attributes.hardening.data[0].attributes.source,
              platform: {
                name: guidance.attributes.hardening.data[0].attributes.platform.data.attributes.name,
                link: guidance.attributes.hardening.data[0].attributes.platform.data.attributes.link,
                icon: {
                  name: guidance.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data ? guidance.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: guidance.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data ? guidance.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: guidance.attributes.hardening.data[0].attributes.partner.data.attributes.name,
                name_long: guidance.attributes.hardening.data[0].attributes.partner.data.attributes.name_long,
                link: guidance.attributes.hardening.data[0].attributes.partner.data.attributes.link,
                icon: {
                  name: guidance.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data ? guidance.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: guidance.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data ? guidance.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            },
          }))
        });
    },
    getHardeningData() {
      for (let i = 0; i < this.guidanceData.length; i++) {
        this.hardeningData[i] = this.guidanceData[i].hardening
        this.hardeningData[i].category = this.guidanceData[i].category
        this.hardeningData[i].version = this.guidanceData[i].version
        this.hardeningData[i].benchmarkID = this.guidanceData[i].id
      }
    },
  }
}
</script>
  