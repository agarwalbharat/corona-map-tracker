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
    manifestOptions: {
      background_color: "#272727"
    },
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}