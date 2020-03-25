<template>
  <div class="bg-gray-100 items-center justify-center w-full">
    <div class="bg-gray-100 flex items-center justify-center w-full">
      <div class="w-full max-w-xs shadow bg-gray-50 rounded m-5">
        <div class="p-4 bg-white rounded-t border-b text-center">Total Employees</div>
        <p class="text-center text-5xl text-gray-500">{{getEmployee()}}</p>
        <p class="p-4 text-center text-sm text-gray-500">{{getGenderEmployee(1)}} Males/{{getGenderEmployee(2)}} Females</p>
      </div>
      
      <div class=" w-full max-w-xs shadow bg-gray-50 rounded m-5">
        <div class="p-4 bg-white rounded-t border-b text-center">Out Today</div>
        <p class="text-center text-5xl text-gray-500">{{getAttendance(2)}}</p>
        <p class="p-4 text-center text-sm text-gray-500">People</p>
      </div>

      <div class=" w-full max-w-xs shadow bg-gray-50 rounded m-5">
        <div class="p-4 bg-white rounded-t border-b text-center">Today's Present</div>
        <p class="text-center text-5xl text-gray-500"> {{getAttendance(1)}}/{{getEmployee()}}</p>
        <p class="p-4 text-center text-sm text-gray-500">People</p>
      </div>
    </div>

    <div class="bg-gray-100 flex items-center justify-center w-full">
      <div class='flex flex-col'>
        <div class="p-4 bg-white rounded-t border-b text-center">Attendance</div>
        <div class='shadow bg-gray-100 rounded p-4 w-full'>
          <button class='p-1 m-1 text-center text-white rounded-lg bg-blue-400 cursor-pointer' @click='pushCheckIn("checkin")'>Check in</button>
          <button class='p-1 m-1 text-center text-white rounded-lg bg-red-400 cursor-pointer' @click='pushCheckIn("checkout")'>Check out</button>
          <div class='text-center w-full' v-if='getUserAttendance.length == true'>
            <div>Checkin : {{getUserAttendance[0].checkin}}</div>
            <div>Checkout : {{getUserAttendance[0].checkout}}</div>
          </div>
          <div class='text-center w-full' v-else>
            You not attend today
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
          <div class="md:w-full shadow bg-gray-100 rounded m-4">
              <div class="p-4 bg-white rounded-t border-b text-center">Upcoming Events</div>
              <div class="p-4">
                <table class="table-auto w-full bg-white border text-sm">
                    <tr v-for='(index,key) in event' :key='key'>
                      <td class="px-4 py-2 border-b"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></td>
                      <td class="px-4 py-2 border-b">{{index.date}}</td>
                      <td class="px-4 py-2 border-b">{{index.description}}</td>
                    </tr>
                </table>
              </div>
          </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-full shadow bg-gray-100 rounded m-4">
          <div class="p-4 bg-white rounded-t border-b text-center">New Applicant</div>
          <div class="p-4">
            <table class="table-auto w-full bg-white border text-sm">
              <tr v-for='(index,key) in applicant' :key='key'>
                <td class="px-4 py-2 border-b"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></td>
                <td class="px-4 py-2 border-b">{{index.name}}</td>
                <td class="px-4 py-2 border-b">{{position(index.job_role)}}</td>
                <td class="px-4 py-2 border-b">{{index.schedule_pt}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    userLogin(){
      const data = window.$cookies.get('user')
      return data
    },
    getEvents(){
      return this.event
    },
    getApplicants(){
      return this.applicant
    },
    getUserAttendance(){
      if(!this.attendance.length) return ''
      var tampung1 = this.attendance.filter(el => {
        return el.date == this.setDate()
      })
      
      var tampung2 = tampung1[0].data.filter(el => {
        return el.user_id == this.userLogin.id
      });

      return tampung2
    },
     ...mapGetters({
      employee: 'employee/employee',
      event: 'event/event',
      applicant: 'applicant/applicant',
      attendance: 'attendance/attendance',
      job_role: 'job_role/job_role'
    }),
  },
  data(){
    return{
      controlAttendance:{ 
        date:'',
        user_id: '',
        checkin: '',
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
    },


    getEmployee(){
      if(!this.employee.length) return 0
      return this.employee.length
    },
    getAttendance(value){
      if(!this.attendance.length) return
      var att = 0 
      const today = new Date()
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      const tampung = this.attendance.filter((jr) => {
          return jr.date == date
      })
      if(tampung.length > 0)
        if(value == 1){
          att = tampung[0].data.length
        }else{
          att = parseInt(this.employee.length) - parseInt(tampung[0].data.length)
        }
      return att
    },

    getGenderEmployee(gender){
      if(!this.employee.length) return ''
      const tampung = this.employee.filter((jr) => {
        return jr.gender == gender
      })
      return tampung.length
    },

    position(id){
      // if(!this.job_role.length) return ''
      const tampung = this.job_role.filter((jr) => {  return jr.id == id })
      console.log(tampung)
      return tampung[0].position
    }
  }
}
</script>

<style>

</style>