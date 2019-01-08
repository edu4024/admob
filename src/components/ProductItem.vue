<template>
  <div>
    <Toolbar :pageBack="false"/>
    <v-card
      v-for="(product, index) in products"
      :key="index"
      @click="info(index)"
    >
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#badbc7" class="white--text">
              <v-card-title primary-title>
                {{product.title}}
              </v-card-title>
              <v-card-text>
                {{product.description}}
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
export default {
name: 'ProductItem',
components: {
  Toolbar
},
data() {
    return{}
},
computed: {
  products () {
    return this.$store.getters.getProducts
  }
},
methods: {
  info: function (index) {
    this.$store.dispatch('setProduct', index)
    this.$router.push('/info')
  }
}
}
</script>
<style>
</style>
