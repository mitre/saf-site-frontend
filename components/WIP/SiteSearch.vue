<!-- Currently Not In Use And Not Complete (Remove comment after complete)-->
<template>
  <div class="flex flex-1 justify-end px-2 lg:ml-6">
    <div class="w-1/8 max-w-lg lg:max-w-xs">
      <label for="search" class="sr-only">Search</label>
      <div class="relative pl-0">
        <div
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2"
        >
          <SearchIcon class="h-5 w-5 text-base" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          class="block w-0 rounded-md border border-transparent bg-white py-3 pl-5 pr-4 leading-5 text-gray-300 placeholder-gray-400 hover:bg-gray-200 focus:w-full focus:border-white focus:bg-white focus:pl-10 focus:text-gray-900 focus:outline-none focus:ring-blue-400 dark:focus:bg-mitre-light-silver sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  </div>
</template>

<!-- Currently Not In Use And Not Complete-->
<script setup>
/// /  Props  ////

/// /  Methods  ////

/// /  Lifecycle  ////
</script>
