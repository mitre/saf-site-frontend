<template>
  <div>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8 mb-8">
      <div v-if="isLoaded">
       <ToolkitModal v-bind:guidance="guidance" />
      </div>
      <div v-else>
       <p> Loading ...</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
 data() {
    return {
      guidance: {},
      isLoaded: false,
    }
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getBenchmark()
      this.isLoaded = true
    });
  },
  methods: {
    async getBenchmark() {
      this.guidance = await useAsyncData('getGuidanceDataFromID', () => GqlGetGuidanceDataFromID({ id: this.$route.query.id }), { initialCache: false })
        .then(({ data }) => {
          const guidance = data._value.guidance.data
          return {
            name: guidance.attributes.name,
            id: guidance.id,
            type: guidance.attributes.type,
            category: guidance.attributes.category,
            source: guidance.attributes.source,
            date: guidance.attributes.date,
            version: guidance.attributes.version,
            hardening: guidance.attributes.hardening.data ? guidance.attributes.hardening.data.map((harden) => ({
              id: harden.id,
              name: harden.attributes.name,
              name_long: harden.attributes.name_long,
              source: harden.attributes.source,
              platform: {
                name: harden.attributes.platform.data.attributes.name,
                link: harden.attributes.platform.data.attributes.link,
                icon: {
                  name: harden.attributes.platform.data.attributes.icon.data ? harden.attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: harden.attributes.platform.data.attributes.icon.data ? harden.attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: harden.attributes.partner.data.attributes.name,
                name_long: harden.attributes.partner.data.attributes.name_long,
                link: harden.attributes.partner.data.attributes.link,
                icon: {
                  name: harden.attributes.partner.data.attributes.icon.data ? harden.attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: harden.attributes.partner.data.attributes.icon.data ? harden.attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            })): null,
            validation: guidance.attributes.validation.data ? guidance.attributes.validation.data.map((validate) => ({
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
            })): null,
          }
        });
    },
  }
}
</script>