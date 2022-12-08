<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="my-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full">
              <thead class="bg-white">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Platform</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Partner</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Version</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <template v-for="category in categories">
                  <tr class="border-t border-gray-200">
                    <th colspan="5" scope="colgroup"
                      class="bg-gray-100 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6">{{
                          category
                      }}</th>
                  </tr>
                  <template v-for="(profile, index) in profiles" :key="index">
                    <tr v-if="profile.category.replaceAll('_', ' ') == category "
                      :class="[index === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t']">
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{
                            profile.name
                        }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ profile.platform.name }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ profile.partner.name }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ profile.url }}</td>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <button @click="" class="text-indigo-600 hover:text-indigo-900">View Details<span class="sr-only">,
                              {{
                                profile.name
                              }}</span></button>
                        </td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script>
export default {
  data(){
    return{
      categories: [
      'Cloud Service Providers',
      'Virtual Platforms',
      'Operating Systems',
      'Databases',
      'Network',
      'Application Logic',
      'Web Servers',
      ]
    }
  },
  props: {
    profiles: {
      type: Array,
      required: true,
    },
  },
}
</script>