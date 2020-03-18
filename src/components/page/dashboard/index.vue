<template>
  <div class="bg-gray-100 flex h-screen items-center justify-center w-full">
    <div class=" w-full max-w-xs shadow bg-gray-50 rounded m-5">
        <div class="p-4 bg-white rounded-t border-b text-center">Total Employees</div>
        <p class="text-center text-5xl text-gray-500">{{getEmployee()}}</p>
        <p class="p-4 text-center text-sm text-gray-500">{{getGenderEmployee(1)}} Males/{{getGenderEmployee(2)}} Females</p>
    </div>
    
    <div class=" w-full max-w-xs shadow bg-gray-50 rounded m-5">
        <div class="p-4 bg-white rounded-t border-b text-center">Out Today</div>
        <p class="text-center text-5xl text-gray-500">-</p>
        <p class="p-4 text-center text-sm text-gray-500">People</p>
    </div>

    <div class=" w-full max-w-xs shadow bg-gray-50 rounded m-5">
        <div class="p-4 bg-white rounded-t border-b text-center">Today's Present</div>
        <p class="text-center text-5xl text-gray-500">0/{{getEmployee()}}</p>
        <p class="p-4 text-center text-sm text-gray-500">People</p>
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