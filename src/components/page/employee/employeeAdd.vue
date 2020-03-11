<template>


	<div v-if='$route.name == "ubah"' class='w-full max-w-xl mx-auto'>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Name</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.name'></div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Email</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.email'></div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Phone</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.phone'></div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Gender</div>
      <div class='w-2/3'>
        <label class='px-2'>Pria
          <input type="radio" value='1' v-model='dataKirim.gender'>
        </label>
        <label class='px-2'>Perempuan
          <input type="radio" value='2' v-model='dataKirim.gender'>
        </label>
      </div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Birthdate</div>
      <div class='w-2/3'><input type="date" class='border w-full' v-model='dataKirim.birth_date'></div>
    </div>       
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Birthplace</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.birth_place'></div>
    </div>          
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Job Role</div>
      <div class='w-2/3'>
        <select name="" id="" class='w-full border bg-white' v-model='dataKirim.job_role'>
          <option :value="index.id" v-for='(index,key) in job_role' :key='key'>{{index.position}}</option>
        </select>
      </div>
    </div>    
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Employe Status</div>
      <div class='w-2/3'>
        <select name="" id="" class='w-full border bg-white' v-model='dataKirim.employee_status'>
          <option :value="index.id" v-for='(index,key) in employee_status' :key='key'>{{index.status}}</option>
        </select>
      </div>
    </div>


    <div class='w-full py-4 flex flex-row'>
      <div @click='pusKuy()' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
        Edit
      </div>
      <router-link to='/employees' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
        Cancel
      </router-link>        
    </div>                       
	</div>




	<div v-else class='w-full max-w-xl mx-auto'>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Name</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.name'></div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Email</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.email'></div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Phone</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.phone'></div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Gender</div>
      <div class='w-2/3'>
        <label class='px-2'>Pria
          <input type="radio" value='1' v-model='dataKirim.gender'>
        </label>
        <label class='px-2'>Perempuan
          <input type="radio" value='2' v-model='dataKirim.gender'>
        </label>
      </div>
    </div>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Birthdate</div>
      <div class='w-2/3'><input type="date" class='border w-full' v-model='dataKirim.birth_date'></div>
    </div>       
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Birthplace</div>
      <div class='w-2/3'><input type="text" class='border w-full' v-model='dataKirim.birth_place'></div>
    </div>          
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Job Role</div>
      <div class='w-2/3'>
        <select name="" id="" class='w-full border bg-white' v-model='dataKirim.job_role'>
          <option :value="index.id" v-for='(index,key) in job_role' :key='key'>{{index.position}}</option>
        </select>
      </div>
    </div>    
    <div class='w-full py-4 flex flex-row'>
      <div class='w-1/3'>Employe Status</div>
      <div class='w-2/3'>
        <select name="" id="" class='w-full border bg-white' v-model='dataKirim.employee_status'>
          <option :value="index.id" v-for='(index,key) in employee_status' :key='key'>{{index.status}}</option>
        </select>
      </div>
    </div>


    <div class='w-full py-4 flex flex-row'>
      <div @click='pusKuy()' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
        Add
      </div>
      <router-link to='/employees' class='p-4 rounded-lg mx-4 bg-blue-200 cursor-pointer'>
        Cancel
      </router-link>      
    </div>                       
	</div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('employee/fect')
    this.$store.dispatch('job_role/fect')
  },
  beforeUpdate(){
    if(this.$route.name == "ubah") this.dataEdit()
  },
  computed:{
		...mapGetters({
      job_role: 'job_role/job_role',
      employee_status: 'employee_status/employee_status',
      employee: 'employee/employee',
      }),
  },
  data(){
    return{
      dataKirim:{
        name: '',
        email: '',
        job_role: '',
        gender: '',
        birth_date: '',
        birth_place: '',
        employee_status: '',
        phone: ''
      },
    }
  },
  methods:{
    ...mapMutations({
      add: 'employee/ADD_EMPLOYEE'
    }),    
    pusKuy(){
      this.add(this.dataKirim)
      if(this.$route.name == "ubah"){
        this.$store.dispatch('employee/edit')
      }else{
        this.$store.dispatch('employee/add')
      }
      this.$router.push('/employees')
    },
    dataEdit(){
      var id = this.$route.params.id
			const tampung = this.employee.filter(function(jr) {  
        return jr.id == id
        })
      this.dataKirim = tampung[0]
    }    
  }
}
</script>

<style>

</style>