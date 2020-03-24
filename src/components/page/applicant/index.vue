<template>
  <div class='w-full flex flex-col max-w-4xl mx-auto w-full'>
    <div class="align-middle inline-block rounded min-w-full shadow overflow-hidden border-b border-gray-200">
      <div class="border-b border-gray-300 text-center bg-white pt-4 shadow rounded-t">
        <div class='w-full flex flex-row justify-between p-2 border-b'>
          <div class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer' :class='filter == "unprocessed"?"bg-blue-600":""' @click='filter == "unprocessed"? filter="" : filter="unprocessed"'>
            Unprocessed
          </div>
          <div class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer' :class='filter == "interview"?"bg-blue-600":""' @click='filter == "interview"? filter="" : filter="interview"'>
            Scheduled to Interview
          </div>
          <div class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer' :class='filter == "psychotest"?"bg-blue-600":""' @click='filter == "psychotest"? filter="" : filter="psychotest"'>
            Scheduled to Psycho Test 
          </div>
          <div class='p-4 rounded-lg capitalize mx-4'>
            Showing : {{filter?filter:"All"}}
          </div>
        </div>
      </div>

      <table class="min-w-full">
        <tr class="hover:bg-gray-100" v-for='(index,key) in filterApplicant' :key='key'>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <a href="#" class="">
                  <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" class="h-10 w-10 rounded-full">
                  </a>
              </div>
              <div class="ml-4">
                <div class="text-sm leading-5 font-medium text-gray-900">{{index.name}}</div>
                <div class="text-sm leading-5 text-gray-500">{{index.email}}</div>
                <div class="text-sm leading-5 text-gray-500">{{index.phone}}</div>
              </div>
            </div>
          </td>
          
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div class="text-sm leading-5 text-gray-900">{{division(index.job_role)}}</div>
            <div class="text-sm leading-5 text-gray-500">{{position(index.job_role)}}</div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <div class="text-sm leading-5 text-gray-900">
              <div v-if='index.schedule_int'>
                Interview : {{index.schedule_int}}
              </div>
              <div v-else>
                Set Interview :
                <input v-model='date' class='border mx-2' type="date" name="" id="">
                <button class='bg-blue-600 p-2 rounded text-white' @click='interview({id:index.id,schedule_int:date})'>Add Interview</button>
              </div>
            </div>
            <div class="text-sm leading-5 text-gray-900" v-if='index.schedule_int'>
              <div v-if='index.schedule_pt'>
                Psycho Test : {{index.schedule_pt}}
              </div>
              <div v-else>
                Set Psycho Test :
                <input v-model='date' class='border mx-2' type="date" name="" id="">
                <button class='bg-blue-600 p-2 rounded text-white' @click="psychotest({id:index.id,schedule_pt:date})">Add Psycho Test</button>
              </div>            
            </div>
          </td>
        </tr>
      </table>
    </div>




  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      applicant: 'applicant/applicant',
      job_role: 'job_role/job_role',           
    }),
    filterApplicant(){
      var tampung
      switch(this.filter){
        case 'unprocessed':
          tampung = this.applicant.filter((jr) => {
            return (!jr.schedule_int && !jr.schedule_pt) 
          })
          return tampung
        case 'interview':
          tampung = this.applicant.filter((jr) => {
            return (jr.schedule_int && !jr.schedule_pt) 
          })
          return tampung
        case 'psychotest':
          tampung = this.applicant.filter((jr) => {
            return (jr.schedule_int && jr.schedule_pt) 
          })
          return tampung
        default:
          return this.applicant
      }
    },
  },
  data(){
    return{
      filter:'',
      date:''
    }
  },
  methods:{
    ...mapActions({
      interview:'applicant/interview',
      psychotest:'applicant/psychotest'
    }),
    division(id){
      if(!this.job_role) return
      const tampung = this.job_role.filter((jr) => {  return jr.id == id})
      return tampung[0].division
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