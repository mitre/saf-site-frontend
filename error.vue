<template>
  <Header />
  <div class="min-h-full pt-16 pb-12 flex flex-col bg-white dark:bg-dark-backdrop-primary">
    <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex-shrink-0 flex justify-center">
        <a href="/" class="inline-flex">
          <span class="sr-only">Workflow</span>
          <img class="h-40 sm:h-56 w-auto" src="./assets/safLogo.svg" alt="SAF Logo" />
        </a>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">{{ error.statusCode }} Error </p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-5xl">Page not
            found.</h1>
          <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6">
            <a href="/#" class="text-base font-medium text-blue-600 hover:text-blue-500">Go back home<span
                aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </main>
    <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex justify-center space-x-4">
        <a href="mailto:saf@groups.mitre.org" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact
          Support</a>
      </nav>
    </footer>
  </div>
  <Footer />
</template>

<script>
export default {
  props: ['error'],
  // layout: 'error',
}

</script>