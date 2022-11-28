<template>
    <Header />
    <div class="relative bg-white dark:bg-dark-bg min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
    <Listing />
  </div>
  <Footer />
  </template>
  
  <script>
  export default {
    data() {
      return {
        profiles: {},
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getProfiles()
      });
    },
    methods: {
      async getProfiles() {
        this.profiles = await useAsyncData('getAllProfiles', () => GQLProfiles())
          .then(({ data }) => {
            console.log("Profiles return: ", data)
            return data._value.profiles.data.map((profile) => ({
              
            }))
          });
      },
    } 
  }
  </script>
    
  