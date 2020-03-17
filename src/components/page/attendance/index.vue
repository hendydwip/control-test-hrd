<template>
  <div class='w-full flex flex-col max-w-4xl mx-auto w-full'>
    <div class='flex flex-row justify-start w-full'>
      <span>
        {{userLogin}}
      </span>
      <button class='p-1 m-1 text-center text-white rounded-lg bg-blue-400 cursor-pointer' @click='pushCheckIn("checkin")'>Check in</button>
      <button class='p-1 m-1 text-center text-white rounded-lg bg-red-400 cursor-pointer' @click='pushCheckIn("checkout")'>Check out</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  computed:{
    userLogin(){
      const data = window.$cookies.get('user')
      return data
    }    
  },
  data(){
    return{
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
      // console.log(this.controlAttendance)
    }
  }
}
</script>

<style>

</style>