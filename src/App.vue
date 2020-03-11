<template>
  <div id="app" class='w-full'>
    <div class='bg-gray-300 flex p-3 mb-8 justify-center w-full'>
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
    this.$store.dispatch('user/fect')
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
      user: 'user/user',
      event: 'event/event',
      employee_status: 'employee_status/employee_status',
      role: 'role/role',
      applicant: 'applicant/applicant',
      attendance: 'attendance/attendance',
      leave_request: 'leave_request/leave_request',
      leave_status: 'leave_status/leave_status',                        
    })
  },
}
</script>

<style>
#app {

}
</style>
