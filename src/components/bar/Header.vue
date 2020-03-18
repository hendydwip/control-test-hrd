<template>
<div class='flex flex-row items-center'>
  <div class='uppercase font-bold'>
    HRD Kayaknya
  </div>
  <ul class="flex">
    <router-link to='/dashboard' tag='li' class='menu-inactive' active-class='menu-active' exact><a> Dashboard </a></router-link>
    <router-link to='/employees' tag='li' class='menu-inactive' active-class='menu-active'><a> Employees </a></router-link>
    <router-link to='/applicants' tag='li' class='menu-inactive' active-class='menu-active'><a> Applicants </a></router-link>
    <router-link to='/attendance' tag='li' class='menu-inactive' active-class='menu-active'><a> Attendance </a></router-link>
    <router-link to='/leave' tag='li' class='menu-inactive' active-class='menu-active'><a> Leave Request </a></router-link>
  </ul>
  <div>
    {{nameUser.name}}
  </div>
  <div @click='logout' class='menu-inactive cursor-pointer'>
    Logout
  </div>
</div>  
</template>

<script>
import { mapActions,mapGetters } from 'vuex' // mapMutations,
export default {
  computed:{
    ...mapGetters({
      employee: 'employee/employee',
    }),
    nameUser(){
      if(!this.employee) return ''
      const nameUser = this.employee.filter((x)=>{
        return x.id == window.$cookies.get('user').id
      })
      return nameUser[0]
    }
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
  }
}
</script>

<style>
.menu-inactive{
  @apply mx-2;
  @apply inline-block;
  @apply border;
  @apply border-white;
  @apply rounded;
  @apply text-blue-500;
  @apply py-1;
  @apply px-3;
}

.menu-inactive:hover{
  @apply border-gray-200;
  @apply bg-gray-200;

}

.menu-active{
  @apply inline-block;
  @apply border;
  @apply border-blue-500;
  @apply rounded;
  @apply py-1;
  @apply px-3;
  @apply bg-blue-500;
  @apply text-white;
}
</style>