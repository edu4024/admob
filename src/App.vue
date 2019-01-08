<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
export default {
  name: 'App',
  components: {
    Toolbar
  },
  data() {
    return {}
  },
  methods: {
    onDeviceReady: function () {
      document.removeEventListener('deviceready', onDeviceReady, false)
        this.initAds()
        admob.createBannerView()
        admob.requestInterstitialAd()
    }
  },
  mounted() {
    if ('cordova' in window) {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    }
  }
}
</script>

<style>
</style>
