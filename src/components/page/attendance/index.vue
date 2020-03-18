<template>
  <div class='w-full flex flex-col max-w-4xl mx-auto w-full'>
    <div class='flex flex-row justify-start w-full'>
      <button class='p-1 m-1 text-center text-white rounded-lg bg-blue-400 cursor-pointer' @click='pushCheckIn("checkin")'>Check in</button>
      <button class='p-1 m-1 text-center text-white rounded-lg bg-red-400 cursor-pointer' @click='pushCheckIn("checkout")'>Check out</button>
    </div>

    <button class='m-4 p-4 bg-blue-400 text-white border rounded-lg w-1/6 mx-auto' @click='typeShow == "checkin"?typeShow = "checkout":typeShow = "checkin"'>Change Show</button>
    
    <div class='flex flex-col w-full capitalize my-4'>
      Showing Status : {{typeShow}}
    </div>
    <div class='flex flex-col overflow-y-auto max-h-75 w-full'>
      <div class='flex flex-row bg-gray-700 text-white'>
        <div class='flex border w-1/6 py-4 justify-center'>Employee</div>
        <div class='flex border w-1/6 py-4' v-for='(parent,key) in attendance.slice(attendance.length-5,attendance.length)' :key='key'>
          <div class='text-center w-full'>{{parent.date}}</div>
        </div>
      </div>

      <div class='flex flex-col w-full'>
        <div class='flex w-full flex-row' v-for='(item,key) in employee' :key='key'>
          <div class='bg-gray-200 justify-center flex border text-blue-600 py-4 w-1/6'>{{item.name}}</div>
          <div class='flex border w-1/6 py-4' v-for='(parentemp,key) in attendance.slice(attendance.length-5,attendance.length)' :key='key' :class='haveCheck(parentemp.data, item.id)?"bg-blue-500":"bg-red-500"'>
            <div class='flex flex-col text-center text-white w-full'>
              <div>{{haveCheck(parentemp.data, item.id)?haveCheck(parentemp.data, item.id):"-"}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed:{
    userLogin(){
      const data = window.$cookies.get('user')
      return data
    },
    ...mapGetters({
      attendance: 'attendance/attendance',
      employee: 'employee/employee'
    })  
  },
  data(){
    return{
      typeShow: 'checkin',
      controlAttendance:{ 
        date:'',
        user_id: '',
        checkin: '',
        checkout: ''
      }
    }
  },
  methods:{
    ...mapActions({
      addIn:'attendance/addIn',
      addOut:'attendance/addOut'
    }),    

    haveCheck(data, user_id){
      const tampung = data.filter(x => {
        return x.user_id == user_id
      })
      if(!tampung.length) return false
      if(this.typeShow == 'checkin') return tampung[0].checkin
      return tampung[0].checkout
    },

    setTime(){ 
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return time
    },
    setDate(){
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      return date
    },
    pushCheckIn(typeCheck){
      this.controlAttendance.date = this.setDate()
      this.controlAttendance.user_id = this.userLogin.id
      this.controlAttendance.checkin = this.setTime()
      switch(typeCheck){
        case 'checkin':
          this.addIn(this.controlAttendance)
          break
        case 'checkout':
          this.addOut(this.controlAttendance)
          break
          }
    }
  }
}
</script>

<style>

</style>