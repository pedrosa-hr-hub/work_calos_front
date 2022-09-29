const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/V1': {
      target: 'http://localhost:8000',
      hangeOrigin: true,
      pathRewrite: {
      '^/V1': ''
        }
      }
    }
  }
})
