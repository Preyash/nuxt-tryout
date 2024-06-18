export const useApi = async (url, params) => {

  const cookie = useCookie('token')

  const config = useRuntimeConfig()

  const opts = {
    key: url,
    baseURL: config.baseURL,

    async onRequest({ options }) {

      options.headers = options.headers || {}

      if (cookie.value) {
        options.headers['x-access-token'] = cookie.value
      }
    },

    async onRequestError({ error }) {
      console.log(error.message)
    },

    async onResponseError({ response }) {
      console.log(response._data.message)
    },

    ...params

  }

  const { data, pending, error, execute } = await useFetch(url, opts)

  return {
    data, pending, error, execute
  }

}

// export const useCustomFetch = createUseFetch((opts) => {
//   const authToken = useAuthToken().value;

//   opts = opts || {};

//   let headers: HeadersInit = {
//       ...opts?.headers,
//   };

//   if (authToken && headers['Authorization'] !== null) {
//       headers['Authorization'] = 'Bearer ' + authToken;
//   }

//   opts.headers = headers;

//   return opts;
// });