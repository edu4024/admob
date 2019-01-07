// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import store from './store/index.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  methods:{
        init:function() {
            this.status = true;
        }
    }
})

// document.addEventListener('deviceready', app.init);
