<template>
  <div id="app" class='w-full'>
    <div v-if='$route.name !== "login" && $route.name !== "apply"' class='bg-gray-300 flex p-3 mb-8 justify-center w-full'>
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
    this.$store.dispatch('employee/fect')
    this.$store.dispatch('job_role/fect')
    this.$store.dispatch('event/fect')
    this.$store.dispatch('employee_status/fect')
    this.$store.dispatch('role/fect')
    this.$store.dispatch('applicant/fect')
    this.$store.dispatch('attendance/fect')
    this.$store.dispatch('leave_request/fect')
    this.$store.dispatch('leave_status/fect')
  },
  computed:{
    ...mapGetters({
      event: 'event/event',
      role: 'role/role',
      applicant: 'applicant/applicant',
      attendance: 'attendance/attendance',                 
    })
  },
}
</script>

<style>
#app {

}
</style>
