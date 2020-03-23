<template>
  <div class='w-full flex flex-col max-w-4xl mx-auto'>
    <div v-if='roleUser[0].id === userLoginRole' class='flex flex-row justify-end mb-8 w-full'>
      <router-link to='/employees/add' class='p-4 rounded-lg bg-blue-200 cursor-pointer'>
        Add Employee
      </router-link>
    </div>

    <div class="align-middle inline-block rounded min-w-full shadow overflow-hidden border-b border-gray-200">
      <div class="border-b border-gray-300 text-center bg-white pt-4 shadow rounded-t">
        <div class='w-full flex flex-row justify-between p-2 border-b'>
          <div v-for='(index,key) in employee_status' :key='key' @click='filter == index.id? filter="" : filter=index.id' :class='filter == index.id?"bg-blue-400":""' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
            {{index.status}}
          </div>
        </div>
      </div>

      <table class="min-w-full">
        <tr class="hover:bg-gray-100" v-for='(index,key) in filterEmployee' :key='key'>
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
              <router-link :to='"/employees/edit/"+index.id' class='p-1 m-1 text-center rounded-lg bg-blue-200 cursor-pointer'>Edit User</router-link>
              <div @click='modalSet(index.id)' v-if='roleUser[0].id === userLoginRole' class='p-1 m-1 text-center rounded-lg bg-blue-200 cursor-pointer'>Set User</div>
          </td>
        </tr>
      </table>
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
import {mapGetters, mapActions} from 'vuex'
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
        username:'',
        password:'',
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
      roleUser: 'role/role',
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
    },
    userLoginRole(){
      const data = window.$cookies.get('user')
      return data.role
    }
  },
  methods:{
    ...mapActions({
      addUpdate:'user/addOrUpdate'
    }),
    reset(){
      this.modal = false
    },
    modalSet(id){
      this.dataKirim.id = id
      this.modal = true
    },
    setUserEmployee(){
      if(this.dataKirim.username && this.dataKirim.password){
        this.addUpdate(this.dataKirim)
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