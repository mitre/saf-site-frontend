<template>
  <div>
    <Head>
      <Title>Validate Library</Title>
      <Meta name="description" content="Validate library content" />
    </Head>
    <div>
      <Header />
      <div
        class="relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-5xl font-bold text-header">Validate</h1>
              <p class="mt-2 text-xl">
                These open source community-based InSpec profiles validate the
                security of common system components. MITRE is helping to
                provide stewardship over these profiles, hosted here and at
                other community vendor sites. If you are interested in new
                profiles, please contact us at
                <a href="mailto:saf@groups.mitre.org" class="underline"
                  >saf@groups.mitre.org</a
                >. If you are interested in developing and contributing your own
                profiles, please see our
                <a href="/training" class="underline">training material</a>. All
                assessment tests under MITRE SAF <sup>©</sup> are associated
                with NIST SP 800-53 Security Controls.
              </p>
            </div>
          </div>
          <FrameworkTable :entries="categorizedData" />
        </div>
        <div v-else class="grid h-screen place-items-center">
          <LoadingSpinner />
        </div>
      </div>
      <Footer />
    </div>
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
      validationData: [],
      isLoaded: false
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getGuidance();
      this.getValidationData();
      this.isLoaded = true;
    });
  },
  methods: {
    async getGuidance() {
      this.guidanceData = await useAsyncData('getValidateData', () =>
        GqlGetValidateData()
      ).then(({data}) =>
        data.value.guidances.data.map((guidance) => ({
          name: guidance.attributes.name,
          id: guidance.id,
          type: guidance.attributes.type,
          category: guidance.attributes.category,
          source: guidance.attributes.source,
          date: guidance.attributes.date,
          version:
            guidance.attributes.version.length !== 0
              ? guidance.attributes.version[0].version
              : 0,
          validation: guidance.attributes.validation.data.map((validate) => ({
            id: validate.id,
            name: validate.attributes.name,
            name_long: validate.attributes.name_long,
            source: validate.attributes.source,
            platform: {
              name: validate.attributes.platform.data.attributes.name,
              link: validate.attributes.platform.data.attributes.link,
              icon: {
                name: validate.attributes.platform.data.attributes.icon.data
                  ? validate.attributes.platform.data.attributes.icon.data
                      .attributes.name
                  : null,
                url: validate.attributes.platform.data.attributes.icon.data
                  ? validate.attributes.platform.data.attributes.icon.data
                      .attributes.url
                  : null,
                alt: validate.attributes.platform.data.attributes.icon.data
                  ? validate.attributes.platform.data.attributes.icon.data
                      .attributes.alternativeText
                  : null
              }
            },
            partner: {
              name: validate.attributes.partner.data.attributes.name,
              name_long: validate.attributes.partner.data.attributes.name_long,
              link: validate.attributes.partner.data.attributes.link,
              icon: {
                name: validate.attributes.partner.data.attributes.icon.data
                  ? validate.attributes.partner.data.attributes.icon.data
                      .attributes.name
                  : null,
                url: validate.attributes.partner.data.attributes.icon.data
                  ? validate.attributes.partner.data.attributes.icon.data
                      .attributes.url
                  : null,
                alt: validate.attributes.partner.data.attributes.icon.data
                  ? validate.attributes.partner.data.attributes.icon.data
                      .attributes.alternativeText
                  : null
              }
            }
          }))
        }))
      );
    },
    getValidationData() {
      for (let i = 0; i < this.guidanceData.length; i += 1) {
        this.guidanceData[i].validation.forEach((validate) => {
          const temp = validate;
          temp.category = this.guidanceData[i].category;
          temp.version = this.guidanceData[i].version;
          temp.benchmarkID = this.guidanceData[i].id;
          this.validationData.push(temp);
        });
      }
      for (let i = 0; i < this.validationData.length; i += 1) {
        this.categorizedData[
          this.validationData[i].category.replaceAll('_', ' ')
        ].push(this.validationData[i]);
      }
    }
  }
};
</script>
