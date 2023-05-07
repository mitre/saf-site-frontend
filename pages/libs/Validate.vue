<template>
  <div>
    <Header />
    <div
      class="relative bg-light-backdrop-primary dark:bg-dark-backdrop-primary min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-bold text-light-header dark:text-dark-header">Validate</h1>
            <p class="mt-2 text-sm text-light-text dark:text-dark-text">These open-source community-based InSpec profiles
              validate the security of common system components. MITRE is helping to provide stewardship over these
              profiles,
              hosted here and at other community vendor sites. If you are interested in new profiles, please contact us
              at saf@groups.mitre.org.
              If you are interested in developing and contributing your own profiles, please see our training material.
              All assessment tests under MITRE SAF© are associated with NIST SP 800-53 Security Controls. Explore these
              associations in this Control Assessment Range table!</p>
          </div>
        </div>
        <FrameworkTable v-bind:entries="categorizedData" />
      </div>
      <div v-else class="grid h-screen place-items-center">
        <LoadingSpinner />
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
        'Databases': [],
        'Network': [],
        'Application Logic': [],
        'Web Servers': [],
      },
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
            source: guidance.attributes.source,
            date: guidance.attributes.date,
            version: guidance.attributes.version.length != 0 ? guidance.attributes.version[0].version : 0,
            validation: guidance.attributes.validation.data.map((validate) => ({
              id: validate.id,
              name: validate.attributes.name,
              name_long: validate.attributes.name_long,
              source: validate.attributes.source,
              platform: {
                name: validate.attributes.platform.data.attributes.name,
                link: validate.attributes.platform.data.attributes.link,
                icon: {
                  name: validate.attributes.platform.data.attributes.icon.data ? validate.attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: validate.attributes.platform.data.attributes.icon.data ? validate.attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: validate.attributes.partner.data.attributes.name,
                name_long: validate.attributes.partner.data.attributes.name_long,
                link: validate.attributes.partner.data.attributes.link,
                icon: {
                  name: validate.attributes.partner.data.attributes.icon.data ? validate.attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: validate.attributes.partner.data.attributes.icon.data ? validate.attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            })),
          }))
        });
    },
    getValidationData() {
      for (let i = 0; i < this.guidanceData.length; i++) {
        this.guidanceData[i].validation.forEach((validate) => {
          let temp = validate
          temp.category = this.guidanceData[i].category
          temp.version = this.guidanceData[i].version
          temp.benchmarkID = this.guidanceData[i].id
          this.validationData.push(temp)
        })
      }
      for (let i = 0; i < this.validationData.length; i++) {
        this.categorizedData[this.validationData[i].category.replaceAll('_', ' ')].push(this.validationData[i])
      }
    },
  }
}
</script>
  
