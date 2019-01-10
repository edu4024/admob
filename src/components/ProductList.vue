<template>
  <div id="list">
      <ProductItem/>
  </div>
</template>
<script>
import ProductItem from './ProductItem.vue'
import admobid from './../adsConfig/config.js'
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    onDeviceReady: function () {
        this.initApp()
    },
    registerAdEvents: function () {},
    initApp: function() {
        if (!window.AdMob ) {
        }
        // this will create a banner on startup
      window.AdMob.createBanner({
          adId: admobid.banner,
          position: window.AdMob.AD_POSITION.BOTTOM_CENTER,
          overlap: false,
          offsetTopBar: false,
          bgColor: 'black'
        })
    },
    ratingUser: function () {
      let appId = 'io.admob'
      LaunchReview.launch(() => {
        console.log('Successfully launched store app')
      }, (err) => {
        console.log('Error launching store app: ' + err)
      }, appId)
    }
  },
  mounted: function ()  {
    if ('cordova' in window) {
      document.addEventListener('deviceready', this.onDeviceReady, false)
    } else {
      console.log('no device ready')
    }
    this.ratingUser()
  },
  beforeMount: function () {}
}
</script>
<style scoped>
</style>
