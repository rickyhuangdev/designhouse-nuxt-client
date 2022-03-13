export default function ({$axios}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json'
      },

    }
  })

  // Set baseURL to something different
  api.setBaseURL(process.env.API_BASE)
  api.interceptors.request.use(config => {

    return config;
  },error => {
    return Promise.reject(error);
  })

  api.interceptors.response.use(res => res.data, error => {
    return Promise.reject(error)
  })
  // Inject to context as $api
  inject('api', api)
}
