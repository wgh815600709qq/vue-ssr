module.exports = {
  /* 借助 head 属性，Nuxt.js 让你可以在 nuxt.config.js 中配置应用的 meta 信息。  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  注意：在任何vue组件的生命周期内，只有beforeCreate和created这两个钩子会在浏览器端和服务端均被调用；
  其他的钩子都只会在浏览器端调用。
  */
  build: {
    vendor: ['axios', 'element-ui'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.devtool = false
    }
  },
  // CSS 模块
  css: ['~/assets/css/main.css', 'element-ui/lib/theme-chalk/index.css'],
  plugins: [ // plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。
    { src: '~/plugins/element-ui', ssr: true }
  ],
  // 组件缓存
  cache: true

}
