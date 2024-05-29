export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = false;

  if (to.params.id === '1') {
    return abortNavigation()
  }

  if (isLoggedIn) {
    return navigateTo('/');
  } else {
    return navigateTo('/login');
  }

  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
})
