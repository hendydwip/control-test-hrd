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
            <p class="text-center text-5xl text-gray-500">-</p>
            <p class="p-4 text-center text-sm text-gray-500">People</p>
        </div>

        <div class=" w-full max-w-xs shadow bg-gray-50 rounded m-5">
            <div class="p-4 bg-white rounded-t border-b text-center">Today's Present</div>
            <p class="text-center text-5xl text-gray-500">0/{{getEmployee()}}</p>
            <p class="p-4 text-center text-sm text-gray-500">People</p>
        </div>
    </div>

    <div class="bg-gray-100 flex items-center justify-center w-full">
        <div class="flex flex-col md:flex-row">
            <div class="md:w-full shadow bg-gray-100 rounded m-4">
                <div class="p-4 bg-white rounded-t border-b text-center">Upcoming Events</div>
                <div class="p-4">
                    <table class="table-auto w-full bg-white border text-sm">
                        <tr v-for='(index,key) in getEvents' :key='key'>
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
                        <tr v-for='(index,key) in getApplicants' :key='key'>
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
import {mapGetters} from 'vuex'
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
     ...mapGetters({
      employee: 'employee/employee',
      event: 'event/event',
      applicant: 'applicant/applicant',
    }),
  },
  data(){
    return{
       
    }
  },
  methods:{
       getEmployee(){
           return this.employee.length
       },

       getGenderEmployee(gender){
        const tampung = this.employee.filter((jr) => {
          return jr.gender == gender
        })
        return tampung.length
       },

       position(id){
            if(!this.job_role) return
            const tampung = this.job_role.filter((jr) => {  return jr.id == id})
            return tampung[0].position
        }
    }
}
</script>

<style>

</style>