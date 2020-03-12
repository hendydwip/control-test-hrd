<template>
  <div class='w-full flex flex-col max-w-xl mx-auto'>
    <div class='flex flex-row justify-end mb-8 w-full'>
      <router-link to='/employees/add' class='p-4 rounded-lg bg-blue-200 cursor-pointer'>
        Add Employee
      </router-link>
    </div>
    <div class='w-full flex flex-row justify-between p-2 border-b'>
      <div v-for='(index,key) in employee_status' :key='key' @click='filter = index.id' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
        {{index.status}}
      </div>  
    </div>
    <div class='flex w-full border-b' v-for='(index,key) in filterEmployee' :key='key'> 
      <div class='flex flex-col justify-start p-2 w-2/5'>
        <div class='font-bold'>{{index.name}}</div>
        <div>{{index.email}}</div>
        <div>{{index.phone}}</div>
      </div>
      <div class='flex flex-col justify-start p-2 w-2/5'>
        <div class='font-bold'>{{division(index.job_role)}}</div>
        <div>{{position(index.job_role)}}</div>
      </div>
      <div class='flex flex-col justify-between p-1 w-1/5'>
        <router-link :to='"/employees/edit/"+index.id' class='p-1 m-1 text-center rounded-lg bg-blue-200 cursor-pointer'>Edit</router-link>
        <div @click='modalSet(index.id)' class='p-1 m-1 text-center rounded-lg bg-blue-200 cursor-pointer'>Set User</div>
      </div>

    </div>




    <Modal v-show="modal" @close='reset()'>
      <template v-slot:header>
        <div>Buat USER ?</div>
      </template>
      <template v-slot:body>
        <div class='w-full'>
          <div class='w-full flex flex-row p-2'>
            <div class='w-1/3'>Username</div>
            <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.username'></div>            
          </div>
          <div class='w-full flex flex-row p-2'>
            <div class='w-1/3'>Password</div>
            <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.password'></div>            
          </div>
          <div class='w-full py-4 flex flex-row p-2'>
            <div class='w-1/3'>Role</div>
            <div class='w-2/3'>
              <label class='px-2'>Admin
                <input type="radio" :value='1' v-model='dataKirim.role'>
              </label>
              <label class='px-2'>Guest
                <input type="radio" :value='2' v-model='dataKirim.role'>
              </label>
            </div>
          </div>                  
        </div>
      </template>
      <template v-slot:footer>
        <div class='w-full py-4 flex flex-row'>
          <div @click='setUserEmployee()' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
            Add
          </div>    
          <div @click='reset()' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
            Cancel
          </div>             
        </div>           
      </template>
    </Modal>    
  </div>
</template>

<script>
import Modal from '@/components/modal/modal.vue'
import {mapGetters,mapMutations} from 'vuex'
export default {
  components:{
    Modal
  },
  data(){
    return{
      modal:false,
      filter: 0,
      dataKirim:{
        id:'',
        username:'original1',
        password:'original1',
        role : 1      
      },
    }
  },
  mounted(){
    this.$store.dispatch('employee/fect')
    this.$store.dispatch('job_role/fect')        
  },
  computed:{
    ...mapGetters({
      job_role: 'job_role/job_role',
      employee: 'employee/employee',
      employee_status: 'employee_status/employee_status',
    }),
    filterEmployee(){
      if(this.filter){
        const tampung = this.employee.filter((jr) => {
          return jr.employee_status == this.filter
        })
        return tampung
      }
      return this.employee
    }
  },
  methods:{
    ...mapMutations({
      add: 'user/ADD_USER'
    }),     
    reset(){
      this.modal = false
      this.dataKirim.id = ''
      this.dataKirim.username = 'original1'
      this.dataKirim.password = 'original1'
    },
    modalSet(id){
      this.dataKirim.id = id
      this.modal = true
    },
    setUserEmployee(){
      if(this.dataKirim.username && this.dataKirim.password){
        this.add(this.dataKirim)
        this.$store.dispatch('user/addOrUpdate')
        this.reset()
        return
      }
      alert('Still Empty Username or Password')
    },
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