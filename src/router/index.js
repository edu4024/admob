import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './../components/ProductList'
import ProductItem from './../components/ProductItem'
import ProductInfo from './../components/ProductInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList,
      // children: []
    },
    {
      path: '/info',
      name: 'ProductInfo',
      component: ProductInfo
    }
  ]
})
