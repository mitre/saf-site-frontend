<template>
  <div>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
      <div v-if="isLoaded">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-50">Validate</h1>
            <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">These open-source community-based InSpec profiles
              validate the security of
              common system components. MITRE is helping to provide stewardship over these profiles, hosted here and at
              other community vendor sites. If you are interested in new profiles, please contact us at saf@groups.mitre.org
              . If you are interested in developing and contributing your own profiles, please see our training material.

              All assessment tests under MITRE SAF are associated with NIST SP 800-53 Security Controls. Explore these
              associations in this Control Assessment Range table!</p>
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
        categories: [],
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
        this.profiles = await useAsyncData('getAllProfiles', () => GqlGetProfileData({type: "Validate"}))
          .then(({ data }) => {
            console.log("Profiles return: ", data._value.profiles.data)
            return data._value.profiles.data.map((profile) => ({
                name: profile.attributes.name,
                url: profile.attributes.url,
                category: profile.attributes.category,
                // category: profile.attributes.profile_category.data.attributes.category,
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
    
  