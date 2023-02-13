export default {
  head: {
    title: '字节青训小分队仿掘金',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    "element-ui/lib/theme-chalk/index.css"
    ],
    plugins: [
      '~/plugins/ElementUI.js'
    ],
  
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: '/',
  },
  build: {
  }
}
