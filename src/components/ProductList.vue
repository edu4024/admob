<template>
  <div id="list">
      <ProductItem/>
  </div>
</template>
<script>
import ProductItem from './ProductItem.vue'
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
      document.removeEventListener('deviceready', onDeviceReady, false)
        this.initAds()
        admob.createBannerView()
        admob.requestInterstitialAd()
    },
     registerAdEvents: function () {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
    },
    initAds: function() {
     if (admob) {
       let adPublisherIds = {
         android : {
           banner : "ca-app-pub-6781448910011955/1827426103",
           interstitial : "ca-app-pub-6781448910011955~8160066013"
         }
       }
       let admobid = adPublisherIds.android
        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial
        })

        registerAdEvents()

      } else {
        console.log('AdMobAds plugin not ready');
      }
    }
}
}
</script>
<style scoped>
</style>
