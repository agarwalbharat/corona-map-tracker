module.exports = {
  productionSourceMap: false,
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'COVID-19 Tracker',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#272727',
    msTileColor: '#272727',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestPath:"./public/manifest.json",
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}