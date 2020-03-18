<template>
  <div class="bg-gray-100 flex h-screen items-center justify-center w-full">
    <div class="w-full max-w-xs">
      <p class="text-center text-sm text-gray-500">Total Employees</p>
      <p class="text-center text-sm text-gray-500">{{getEmployee()}}</p>
      <p class="text-center text-sm text-gray-500">{{getGenderEmployee(1)}} Males/{{getGenderEmployee(2)}} Females</p>
    </div>
    <div class="w-full max-w-xs">
      <p class="text-center text-sm text-gray-500">Out Today</p>
      <p class="text-center text-sm text-gray-500">.. People</p>
    </div>
    <div class="w-full max-w-xs">
      <p class="text-center text-sm text-gray-500">Today's Present</p>
      <p class="text-center text-sm text-gray-500">0/{{getEmployee()}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    userLogin(){
      const data = window.$cookies.get('user')
      return data
    },
     ...mapGetters({
      employee: 'employee/employee',
    }),
  },
  data(){
    return{
        test : 'data',
    }
  },
  methods:{
       testData(){
           return this.test;
       },
       getEmployee(){
           return this.employee.length
       },
       getGenderEmployee(gender){
        const tampung = this.employee.filter((jr) => {
          return jr.gender == gender
        })
        return tampung.length
       }
  }
}
</script>

<style>

</style>