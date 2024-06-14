export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = store.isLoggedIn;

  console.log(isLoggedIn)

  const publicPaths = ['/login', '/sign-up'];

  if (publicPaths.includes(to.path) || isLoggedIn) {
    return;
  }
  return navigateTo('/login');
});