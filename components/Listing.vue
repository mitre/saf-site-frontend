<template>
  <div class="px-4 sm:px-6 lg:px-8">
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
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Version</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <template v-for="listing in profilesList" :key="listing.platform">
                  <tr class="border-t border-gray-200">
                    <th colspan="5" scope="colgroup"
                      class="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6">{{
                          listing.platform
                      }}</th>
                  </tr>
                  <tr v-for="(profile, profileIdx) in listing.profiles" :key="profileIdx"
                    :class="[profileIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t']">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{
                        profile.name
                    }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ profile.platform }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ profile.type }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ profile.version }}</td>
                    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <btn @click="" class="text-indigo-600 hover:text-indigo-900">View Details<span class="sr-only">,
                          {{
    profile.name
                          }}</span></btn>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const open = ref(false)
const profilesList = [
  {
    platform: 'Cloud Service Providers',
    profiles: [
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
    ],
  },
  {
    platform: 'Virtual Platforms',
    profiles: [
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
    ],
  },
  {
    platform: 'Operating Systems',
    profiles: [
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
      { name: 'Test', platform: 'Test', type: 'Test', version: 'Test' },
    ],
  },
  // More profiles...
]
</script>