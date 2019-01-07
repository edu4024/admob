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
  methods: {}
}
</script>
<style scoped>
</style>
