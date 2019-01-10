<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
export default {
  name: 'App',
  components: {
    Toolbar
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
