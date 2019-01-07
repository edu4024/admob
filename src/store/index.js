import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: {},
    products: [
      {
        id: 1,
        title: 'Product #1',
        description: 'lalala',
        content: '#content'
      },
      {
        id: 2,
        title: 'Product #2',
        description: 'lalala',
        content: '#content'
      },
      {
        id: 3,
        title: 'Product #3',
        description: 'lalala',
        content: '#content'
      },
      {
        id: 4,
        title: 'Product #4',
        description: 'lalala',
        content: '#content'
      }
    ]
  },
  mutations: {
    setProduct (state, id) {
      state.product = state.products[id]
    }
  },
  actions: {
    setProduct ({commit, state}, payload) {
      commit('setProduct', payload)
      console.log(state.product)
    }
  },
  getters: {
    getProducts (state) {
      return state.products
    },
    getProduct (state) {
      return state.product
    }
  }
})
