const address = require('./config')

// console.log('address', address)
// console.log('process.env.NODE_CONFIG', process.env.NODE_CONFIG)
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = {
  env: {
    NODE_CONFIG: process.env.NODE_CONFIG || 'dev'
  },
  // 设置缓存
  // 默认
  // cache: {
  //   max: 1000,       // 组件缓存数
  //   maxAge: 900000   // 15分钟
  // }
  cache: true,
  transition: 'page',
  /*
   ** Headers of the page
   */
  head: {
    title: '优质商家 火热上线 - 聚贸跨境电商平台',
    meta: [{
      charset: 'utf-8'
    }, {
      hid: 'keyword',
      name: 'keyword',
      content: '聚贸跨境电商平台,聚贸电商,优质商家,共赢,立即入驻'
    }, {
      hid: 'description',
      name: 'description',
      content: '秉感恩之心 行共赢之道。'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: address.CDN_ADDRESS + '/favicon.png'
    }]
  },

  router: {
    middleware: ['ssr-cookie', 'check-login']
  },
  modules: [
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/api': {
      target: address.SERVER_ADDRESS,
      ws: false
    },
    '/sso': {
      target: address.SERVER_ADDRESS + '/api',
      ws: false
    }
  },

  /*
   ** Global CSS '~/node_modules/element-ui/lib/theme-default/index.css',
   * ~/theme/index.css
   */
  css: ['~/assets/scss/index.scss', '~plugins/swiper/swiper.css'],
  /*
   ** Add axios globally
   */
  plugins: [
    '~plugins/element-ui',
    // '~plugins/filter/',
    '~plugins/directive/',
    '~plugins/checkLogin',
    '~plugins/utils',
    {src: '~plugins/qrcode', ssr: false},
    {src: '~plugins/baidu', ssr: false},
    { src: '~plugins/swiper/swiper.js', ssr: false }
  ],

  build: {
    filenames: {
      css: 'styles.[chunkhash].css'
    },
    extractCSS: true,
    vendor: ['axios', 'element-ui'],
    babel: {
      plugins: [
        ['component', [{
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }]]
      ]
    },
    publicPath: address.CDN_ADDRESS
  },
  /*
   ** Run ESLINT on save
   */
  extend(config, ctx) {
    if (ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
