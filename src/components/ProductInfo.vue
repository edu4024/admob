<template>
  <div>
      <Toolbar :pageBack="true"/>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="#badbc7" class="white--text">
              <v-card-title primary-title>
                {{product.title}}
              </v-card-title>
              <v-divider/>
              <v-card-text>
                <p>{{product.description}}</p><br>
                <p>{{product.content}}</p>
              </v-card-text>
              <v-card-actions class="btn">
                <v-btn small @click="favorite()">Favorite</v-btn>
                <v-spacer/>
                <v-btn small @click="share()">Share</v-btn>
                <v-spacer/>
                <v-btn small @click="like()">Like</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
  </div>
</template>
<script>
import Toolbar from './Toolbar.vue'
import ProductItem from './ProductItem'
export default {
name: 'ProductInfo',
components: {
  Toolbar
},
data(){
    return {
      back: true
    }
},
computed: {
  product () {
    return this.$store.getters.getProduct
    }
},
methods: {}
}
</script>
<style scoped>
.btn {
  border-top: 1px dashed;
  border-color: #ffffff
}
</style>
