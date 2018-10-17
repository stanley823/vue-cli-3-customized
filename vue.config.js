const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'static',
  configureWebpack: {
  },
  productionSourceMap: false,
  devServer: {
    port: 8080,
    proxy: null
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('base', resolve('src/base'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('layouts', resolve('src/layouts'))
      .set('public', resolve('public'))
      .set('api', resolve('src/api'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'lodash': '_'
    })
  }
}
