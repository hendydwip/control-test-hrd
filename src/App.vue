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
    this.$store.dispatch('fectEvent')
    this.$store.dispatch('fectRole')
    this.$store.dispatch('fectEmployeeStatus')
    this.$store.dispatch('fectJobRole')
    this.$store.dispatch('fectAttendance')
    this.$store.dispatch('fectLeaveRequest')
    this.$store.dispatch('fectLeaveStatus')
    this.$store.dispatch('fectEmployee')
    this.$store.dispatch('fectApplicant')
  },
  computed:{
    ...mapGetters([
      'user',
      'event',
      'role',
      'employeeStatus',
      'jobRole',
      'attendance',
      'leaveRequest',
      'leaveStatus',
      'employee',
      'applicant',
    ])
  },
}
</script>

<style>
#app {

}
</style>
