export default defineNuxtRouteMiddleware(async (to, from) => {
  let token = null;
  let role = null;

  const publicPaths = ['/login', '/register', '/verify-password', '/forgot-password', '/sign-up'];

  if (process.client) {
    token = localStorage.getItem('token') || null;
    role = localStorage.getItem('role') || null;

    if (token && publicPaths.includes(to.path)) {
      const path = role === 'admin' ? '/admin' : role === 'lessee' ? '/lessee' : role === 'enforcement' ? '/enforcement' : '/';
      return navigateTo(path);
    }

    if (!token && !publicPaths.includes(to.path)) {
      return navigateTo('/login');
    }
  }

  if (to.path.startsWith('/verify-password')) {
    const token = to.params.token;
    const apiUrl = `verify-token/${token}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (data && data.success) {
        return navigateTo(`/reset-password/${token}`);
      } else {
        const toast = useNuxtApp().$toast;
        toast.error(data.message || 'Something went wrong');
        return navigateTo('/forgot-password');
      }
    } catch (error) {
      const toast = useNuxtApp().$toast;
      toast.error(error.message || 'Something went wrong');
      return navigateTo('/');
    }
  }
});