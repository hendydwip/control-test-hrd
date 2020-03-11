<template>
	<div class='w-full flex flex-col max-w-xl mx-auto'>
		<div class='flex flex-row justify-end mb-8 w-full'>
			<router-link to='/employees/add' class='p-4 rounded-lg bg-blue-200 cursor-pointer'>
				Add Employee
			</router-link>
		</div>
		<div class='flex w-full border-b' v-for='(index,key) in employee' :key='key'> 
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
				<router-link :to='"/employees/edit/"+index.id' class='p-1 m-1 rounded-lg bg-blue-200'>Edit</router-link>
        <div @click='modal=true' class='p-1 m-1 rounded-lg bg-blue-200'>Set User</div>
			</div>

		</div>




    <Modal v-show="modal" @close='modal = false'>
      <template v-slot:header></template>
      <template v-slot:body></template>
    </Modal>    
	</div>
</template>

<script>
import Modal from '@/components/modal/modal.vue'
import {mapGetters} from 'vuex'
export default {
  components:{
    Modal
  },
  data(){
    return{
      modal:false
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
		})
	},
	methods:{
		division(id){
			if(!this.job_role) return
			const tampung = this.job_role.filter(function(jr) {  return jr.id == id})
			return tampung[0].division
		},
		position(id){
			if(!this.job_role) return
			const tampung = this.job_role.filter(function(jr) {  return jr.id == id})
			return tampung[0].position
		}
	}
}
</script>

<style>

</style>