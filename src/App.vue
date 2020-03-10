<template>
  <div id="app" class='w-full'>
    <div class='bg-gray-300 flex p-3 justify-center w-full'>
      <header-bar></header-bar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/bar/Header.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    HeaderBar
  },
  mounted(){
    this.$store.dispatch('fectUser')
  },
  computed:{
    ...mapGetters([
      'user',
    ])
  },
}
</script>

<style>
#app {

}
</style>
