<template>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen bg-white px-4 pt-4 dark:bg-dark-bg sm:px-6 lg:px-8"
    >
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-50">
              Harden
            </h1>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">
              These open-source community-based hardening baselines help to
              securely configure common system components. MITRE is helping to
              provide stewardship over these hardening baselines, hosted here
              and at other community vendor sites. If you are interested in new
              hardening baselines, please contact us at saf@groups.mitre.org .
            </p>
          </div>
        </div>
        <ToolkitTable :entries="categorizedData" />
      </div>
      <div v-else>
        <p>Loading ...</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      categorizedData: {
        'Cloud Service Providers': [],
        'Virtual Platforms': [],
        'Operating Systems': [],
        Databases: [],
        Network: [],
        'Application Logic': [],
        'Web Servers': []
      },
      guidanceData: [],
      hardeningData: [],
      isLoaded: false
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getGuidance();
      this.getHardeningData();
      this.isLoaded = true;
    });
  },
  methods: {
    async getGuidance() {
      this.guidanceData = await useAsyncData('getHardenData', () =>
        GqlGetHardenData()
      ).then(({data}) => {
        return data._value.guidances.data.map((guidance) => ({
          name: guidance.attributes.name,
          id: guidance.id,
          type: guidance.attributes.type,
          category: guidance.attributes.category,
          source: guidance.attributes.source,
          date: guidance.attributes.date,
          version: guidance.attributes.version,
          hardening: guidance.attributes.hardening.data.map((harden) => ({
            id: harden.id,
            name: harden.attributes.name,
            name_long: harden.attributes.name_long,
            source: harden.attributes.source,
            platform: {
              name: harden.attributes.platform.data.attributes.name,
              link: harden.attributes.platform.data.attributes.link,
              icon: {
                name: harden.attributes.platform.data.attributes.icon.data
                  ? harden.attributes.platform.data.attributes.icon.data
                      .attributes.name
                  : null,
                url: harden.attributes.platform.data.attributes.icon.data
                  ? harden.attributes.platform.data.attributes.icon.data
                      .attributes.url
                  : null
              }
            },
            partner: {
              name: harden.attributes.partner.data.attributes.name,
              name_long: harden.attributes.partner.data.attributes.name_long,
              link: harden.attributes.partner.data.attributes.link,
              icon: {
                name: harden.attributes.partner.data.attributes.icon.data
                  ? harden.attributes.partner.data.attributes.icon.data
                      .attributes.name
                  : null,
                url: harden.attributes.partner.data.attributes.icon.data
                  ? harden.attributes.partner.data.attributes.icon.data
                      .attributes.url
                  : null
              }
            }
          }))
        }));
      });
    },
    getHardeningData() {
      for (let i = 0; i < this.guidanceData.length; i++) {
        this.guidanceData[i].hardening.forEach((harden) => {
          const temp = harden;
          temp.category = this.guidanceData[i].category;
          temp.version = this.guidanceData[i].version;
          temp.benchmarkID = this.guidanceData[i].id;
          this.hardeningData.push(temp);
        });
      }
      for (let i = 0; i < this.hardeningData.length; i++) {
        this.categorizedData[
          this.hardeningData[i].category.replaceAll('_', ' ')
        ].push(this.hardeningData[i]);
      }
    }
  }
};
</script>
