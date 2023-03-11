<template>
  <div>
    <div class="relative bg-white py-24 sm:py-32 lg:py-40">
        <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 class="text-lg font-semibold text-indigo-600">Deploy faster</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to deploy your app</p>
          <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500">Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.</p>
          <div class="mt-20">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="feature in features" :key="feature.name" class="pt-6">
                <div class="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center rounded-xl bg-indigo-500 p-3 shadow-lg">
                        <component :is="feature.icon" class="h-8 w-8 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ feature.name }}</h3>
                    <p class="mt-5 text-base leading-7 text-gray-600">{{ feature.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>