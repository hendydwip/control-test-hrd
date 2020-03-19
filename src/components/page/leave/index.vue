<template>
  <div class='w-full flex flex-col max-w-4xl mx-auto w-full'>
    <div class='w-full mb-4'>
      <button @click='modal = true' class='p-4 text-white flex capitalize rounded-lg mx-4 bg-blue-400 cursor-pointer'>Add</button>
    </div>
    <div class='flex justify-between mb-4 w-full'>
      <button v-for='(item,key) in leave_status' :key='key' @click='filter == item.id? filter="" : filter=item.id' :class='filter == item.id?"bg-blue-600":""' class='p-4 text-white flex capitalize rounded-lg mx-4 bg-blue-400 cursor-pointer'>{{item.status}}</button>
      <div class='capitalize my-4'>
        Showing : {{filter?leave_status[filter-1].status:'All'}}
      </div>
    </div>
    
    <div class='w-full border' v-for='(leave,key) in filteredData' :key='key'>
      <div class='flex flex-row'>
        <div class='w-1/6'>Name</div>
        <div>{{filterEmployeeLeave(leave.employee).name}}</div>
      </div>
      <div class='flex flex-row'>
        <div class='w-1/6'>Leave Start - To</div>
        <div>{{leave.start_date}} - {{leave.end_date}}</div>
      </div>
      <div class='flex flex-row'>
        <div class='w-1/6'>Status</div>
        <div>{{filterLeaveStatus(leave.status).status}}</div>
      </div>
      <div class='flex flex-row'>
        <div class='w-1/6'>Description</div>
        <div>{{leave.description}}</div>
      </div>
    </div>





    <Modal v-show="modal" @close='modal = false'>
      <template v-slot:header>
        <div>Buat Cuti ????</div>
      </template>
      <template v-slot:body>
        <div class='w-full'>
          <div class='w-full flex flex-row p-2'>
            <div class='w-1/3'>Start</div>
            <div class='w-2/3'><input type="date" class='border w-full' v-model='dataKirim.start'></div>            
          </div>
          <div class='w-full flex flex-row p-2'>
            <div class='w-1/3'>To</div>
            <div class='w-2/3'><input type="date" class='border w-full' v-model='dataKirim.to'></div>            
          </div>
          <div class='w-full flex flex-row p-2'>
            <div class='w-1/3'>Description</div>
            <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.desc'></div>            
          </div>                  
        </div>
      </template>
      <template v-slot:footer>
        <div class='w-full py-4 flex flex-row'>
          <div @click='addLeave' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
            Add
          </div>    
          <div @click='modal = false' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
            Cancel
          </div>             
        </div>           
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/modal/modal.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  components:{
    Modal
  },
  computed:{
    userLogin(){
      const data = window.$cookies.get('user')
      console.log(data)
      return data
    },
    userLoginRole(){
      const data = window.$cookies.get('user')
      return data.role
    },
    ...mapGetters({
      leave_request: 'leave_request/leave_request',
      leave_status: 'leave_status/leave_status',
      employee: 'employee/employee'
    }),
    filteredData(){
      var penempatan = ''
      if(!this.leave_request.length) return ''
      if(this.userLoginRole == 2){
        penempatan = this.leave_request.filter((pr) => {
          return pr.employee == this.userLogin.id
        })
      }else{
        penempatan = this.leave_request
      }


      if(this.filter){
        const tampung = penempatan.filter((jr) => {
          return jr.status == this.filter
        })
        return tampung
      }else{
        return penempatan
      }
    }
  },
  data(){
    return{
      filter: '',
      modal:false,
      dataKirim:{
        employee:'',
        start: '',
        to: '',
        desc: ''
      },
    }
  },
  methods:{
    ...mapActions({
      add:'leave_request/add'
    }),
    addLeave(){
      this.dataKirim.employee = this.userLogin.id
      if(confirm("Sudah Yakin Cuti ?")) this.add(this.dataKirim)
      this.modal = false
    },
    filterEmployeeLeave(idnya){
      if(!this.employee.length) return ''
      const tampung = this.employee.filter((jr) => {
        return jr.id == idnya
      })
      return tampung[0]
    },
    filterLeaveStatus(idnya){
      if(!this.leave_status.length) return ''
      const tampung = this.leave_status.filter((jr) => {
        return jr.id == idnya
      })
      console.log(tampung)
      return tampung[0]
    }
  }
}
</script>

<style>

</style>