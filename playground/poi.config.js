module.exports = {
  entry: 'playground/index.js',
  publicFolder: 'playground/public',
  chainWebpack(config) {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
  }
}