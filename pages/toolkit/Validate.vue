<template>
  <div>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-50">Validate</h1>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">These open-source community-based InSpec profiles
              validate the security of common system components. MITRE is helping to provide stewardship over these
              profiles,
              hosted here and at other community vendor sites. If you are interested in new profiles, please contact us
              at saf@groups.mitre.org.
              If you are interested in developing and contributing your own profiles, please see our training material.
              All assessment tests under MITRE SAF are associated with NIST SP 800-53 Security Controls. Explore these
              associations in this Control Assessment Range table!</p>
          </div>
        </div>
        <ToolkitTable v-bind:entries="validationData" />
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
      validationData: [],
      isLoaded: false,
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getGuidance()
      this.getValidationData()
      this.isLoaded = true
    });
  },
  methods: {
    async getGuidance() {
      this.guidanceData = await useAsyncData('getValidateData', () => GqlGetValidateData())
        .then(({ data }) => {
          return data._value.guidances.data.map((guidance) => ({
            name: guidance.attributes.name,
            id: guidance.id,
            type: guidance.attributes.type,
            category: guidance.attributes.category,
            source_link: guidance.attributes.source_link,
            date: guidance.attributes.date,
            version: guidance.attributes.version,
            validation: {
              id: guidance.attributes.validation.data[0].id,
              name: guidance.attributes.validation.data[0].attributes.name,
              name_long: guidance.attributes.validation.data[0].attributes.name_long,
              source: guidance.attributes.validation.data[0].attributes.source,
              platform: {
                name: guidance.attributes.validation.data[0].attributes.platform.data.attributes.name,
                link: guidance.attributes.validation.data[0].attributes.platform.data.attributes.link,
                icon: {
                  name: guidance.attributes.validation.data[0].attributes.platform.data.attributes.icon.data ? guidance.attributes.validation.data[0].attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: guidance.attributes.validation.data[0].attributes.platform.data.attributes.icon.data ? guidance.attributes.validation.data[0].attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: guidance.attributes.validation.data[0].attributes.partner.data.attributes.name,
                name_long: guidance.attributes.validation.data[0].attributes.partner.data.attributes.name_long,
                link: guidance.attributes.validation.data[0].attributes.partner.data.attributes.link,
                icon: {
                  name: guidance.attributes.validation.data[0].attributes.partner.data.attributes.icon.data ? guidance.attributes.validation.data[0].attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: guidance.attributes.validation.data[0].attributes.partner.data.attributes.icon.data ? guidance.attributes.validation.data[0].attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            },
          }))
        });
    },
    getValidationData() {
      for (let i = 0; i < this.guidanceData.length; i++) {
        this.validationData[i] = this.guidanceData[i].validation
        this.validationData[i].category = this.guidanceData[i].category
        this.validationData[i].version = this.guidanceData[i].version
        this.validationData[i].benchmarkID = this.guidanceData[i].id
      }
    },
  }
}
</script>
    
  