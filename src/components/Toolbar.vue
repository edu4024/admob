<template>
  <div>
  <v-toolbar color="#59788c">
    <v-btn v-if="pageBack" small @click="back()">back</v-btn>
  </v-toolbar>
  </div>
</template>
<script>
import admobid from './../adsConfig/config.js'
export default {
  name: "Toolbar",
  data(){
      return {}
  },
  props: {
    pageBack: Boolean
  },
  methods: {
    back: function () {
      window.AdMob.prepareInterstitial({
          adId: admobid.interstitial,
          autoShow: true
        })
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
</style>
