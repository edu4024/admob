import Vue from 'vue'
import Router from 'vue-router'
import ProductList from './../components/ProductList'
import ProductItem from './../components/ProductItem'
import ProductInfo from './../components/ProductInfo'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/info',
      name: 'ProductInfo',
      component: ProductInfo
    }
  ]
})
