<template>
	<div class='w-full max-w-4xl mx-auto'>
    <div class='w-full py-4 flex flex-row'>
      <div class='w-full border-b text-6xl'>Apply Job</div>
    </div>
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
      <button @click='add(dataKirim)' class="bg-blue-600 leading-none rounded mx-2 px-4 py-2 text-white">Apply</button>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed:{
		...mapGetters({
      job_role: 'job_role/job_role',
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
    ...mapActions({
      add:'applicant/add',
    }),   
  }
}
</script>

<style>

</style>