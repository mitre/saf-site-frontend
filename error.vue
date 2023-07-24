<template>
  <div>
    <Header />
    <div class="bg-background flex min-h-screen flex-col pb-12 pt-16">
      <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div class="flex flex-shrink-0 justify-center">
          <a href="/" class="inline-flex">
            <span class="sr-only">Workflow</span>
            <img class="h-40 w-auto sm:h-56" src="./assets/logos/safLogo.svg" alt="SAF Logo" />
          </a>
        </div>
        <div class="py-16">
          <div class="text-center">
            <p class="text-sm font-semibold uppercase tracking-wide text-header">
              {{ error.statusCode }} Error
            </p>
            <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Page not found.
            </h1>
            <p class="mt-2 text-muted">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div class="mt-6">
              <a href="/#" class="font-medium text-nav-active">
                Go back home
                <span aria-hidden="true"> &rarr;</span></a>
            </div>
          </div>
        </div>
      </main>
      <div class="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
        <nav class="flex justify-center space-x-4">
          <a href="mailto:saf@groups.mitre.org" class="text-sm font-medium text-nav-active">Contact Support</a>
        </nav>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});

const { error } = toRefs(props);
</script>
