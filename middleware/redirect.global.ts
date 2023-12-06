export default defineNuxtRouteMiddleware((to, from) => {
  // Provide backwards compatability for old link
  switch (to.fullPath) {
    case '/#/':
      return navigateTo('/');
    case '/#/getstarted':
      return navigateTo('/getting-started');
    case '/#/harden':
      return navigateTo('/libs/harden');
    case '/#/validate':
      return navigateTo('/libs/validate');
    case '/#/normalize':
      return navigateTo('/framework/normalize');
    case '/#/train':
      return navigateTo('/training');
    case '/#/faq':
      return navigateTo('/faq');
  }
});
