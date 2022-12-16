<template>
  <div>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-50">Harden</h1>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">These open-source community-based hardening baselines help to securely configure common system components.
              MITRE is helping to provide stewardship over these hardening baselines, hosted here and at other community vendor sites.
              If you are interested in new hardening baselines, please contact us at saf@groups.mitre.org .</p>
          </div>
        </div>
        <Listing v-bind:profiles="hardeningData" v-bind:benchmarks="benchmarks" />
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
        benchmarks: [],
        hardeningData: [],
        categories: [],
        isLoaded: false,
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getBenchmarks()
        this.getHardeningData()
        this.isLoaded = true
      });
    },
    methods: {
      async getBenchmarks() {
        this.benchmarks = await useAsyncData('getBenchmarkData', () => GqlGetBenchmarkData())
          .then(({ data }) => {
            console.log("Benchmarks return: ", data._value.benchmarks.data)
            return data._value.benchmarks.data.map((benchmark) => ({
              name: benchmark.attributes.name,
              id: benchmark.id,
              type: benchmark.attributes.type,
              category: benchmark.attributes.category,
              source_link: benchmark.attributes.source_link,
              date: benchmark.attributes.date,
              version: benchmark.attributes.version,
              hardening:{
                id: benchmark.attributes.hardening.data[0].id,
                name: benchmark.attributes.hardening.data[0].attributes.name,
                name_long: benchmark.attributes.hardening.data[0].attributes.name_long,
                source: benchmark.attributes.hardening.data[0].attributes.source,
                platform: {
                  name: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.name,
                  link: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.link,
                  icon: {
                    name: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data.attributes.name : null,
                    url: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data.attributes.url : null,
                  }
                },
                partner: {
                  name: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.name,
                  name_long: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.name_long,
                  link: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.link,
                  icon: {
                    name: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data.attributes.name : null,
                    url: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data.attributes.url : null,
                  }
                }
              },
              validation:{
                id: benchmark.attributes.validation.data[0].id,
                name: benchmark.attributes.validation.data[0].attributes.name,
                name_long: benchmark.attributes.validation.data[0].attributes.name_long,
                source: benchmark.attributes.validation.data[0].attributes.source,
                platform: {
                  name: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.name,
                  link: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.link,
                  icon: {
                    name: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data.attributes.name: null,
                    url: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data.attributes.url : null,
                  }
                },
                partner: {
                  name: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.name,
                  name_long: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.name_long,
                  link: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.link,
                  icon: {
                    name: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data.attributes.name : null,
                    url: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data.attributes.url : null,
                  }
                }
              },
            }))
          });
      },
      getHardeningData() {
        for(let i=0; i<this.benchmarks.length; i++){
          this.hardeningData[i] = this.benchmarks[i].hardening
          this.hardeningData[i].category = this.benchmarks[i].category
          this.hardeningData[i].version = this.benchmarks[i].version
          this.hardeningData[i].benchmarkID = this.benchmarks[i].id
        }
        
        console.log('Here is Hardening data', this.hardeningData)
      },
    } 
  }
  </script>
  