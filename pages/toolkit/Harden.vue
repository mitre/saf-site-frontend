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
        <Listing v-bind:profiles="profiles" />
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
        profiles: [],
        isLoaded: true,
        // remember to set this back to false when database is connected
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getProfiles()
        this.isLoaded = true
      });
    },
    methods: {
      async getProfiles() {
        this.profiles = await useAsyncData('getAllProfiles', () => GqlGetProfileData({type: "Harden"}))
          .then(({ data }) => {
            console.log("Profiles return: ", data._value.profiles.data)
            return data._value.profiles.data.map((profile) => ({
                name: profile.attributes.name,
                url: profile.attributes.url,
                category: profile.attributes.category,
                name_long: profile.attributes.name_long,
                partner :{
                  name: profile.attributes.partner.data.attributes.name,
                },
                platform :{
                  name: profile.attributes.platform.data.attributes.name,
                },
            }))
          });
      },
    } 
  }
  </script>
    
  