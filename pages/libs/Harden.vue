<template>
  <div>
    <Head>
      <Title>Harden Library</Title>
      <Meta name="description" content="Harden library content" />
    </Head>
    <div>
      <Header />
      <div
        class="relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"
      >
        <div v-if="isLoaded">
          <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
              <h1 class="text-5xl font-bold text-header">Harden</h1>
              <p class="mt-2 text-xl">
                These open source community-based hardening baselines help to
                securely configure common system components. MITRE is helping to
                provide stewardship over these hardening baselines, hosted here
                and at other community vendor sites. If you are interested in
                new hardening baselines, please contact us at
                <a href="mailto:saf@groups.mitre.org" class="underline"
                  >saf@groups.mitre.org</a
                >.
              </p>
              <h2 class="mt-2 text-2xl font-bold text-header">Usage</h2>
              <p class="mt-2 text-xl">The Hardening Library contents are hardening scripts that can be used in conjunction with orchestration tools such as Ansible or Chef recipes to harden system components against baselines. Specific usage instructions for each piece of hardening content can be found in their repository README files.</p>
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
                  : null,
                alt: harden.attributes.platform.data.attributes.icon.data
                  ? harden.attributes.platform.data.attributes.icon.data
                      .attributes.alternativeText
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
                  : null,
                alt: harden.attributes.partner.data.attributes.icon.data
                  ? harden.attributes.partner.data.attributes.icon.data
                      .attributes.alternativeText
                  : null
              }
            }
          }))
        }))
      );
    },
    getHardeningData() {
      for (let i = 0; i < this.guidanceData.length; i += 1) {
        this.guidanceData[i].hardening.forEach((harden) => {
          const temp = harden;
          temp.category = this.guidanceData[i].category;
          temp.version = this.guidanceData[i].version;
          temp.benchmarkID = this.guidanceData[i].id;
          this.hardeningData.push(temp);
        });
      }
      for (let i = 0; i < this.hardeningData.length; i += 1) {
        this.categorizedData[
          this.hardeningData[i].category.replaceAll('_', ' ')
        ].push(this.hardeningData[i]);
      }
    }
  }
};
</script>
