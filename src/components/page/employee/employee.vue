<template>
	<div class='w-full max-w-xl mx-auto'>
		<div class='flex flex-row justify-end mb-8 w-full'>
			<router-link to='/employees/add' class='p-4 rounded-lg bg-blue-200 cursor-pointer'>
				Add Employee
			</router-link>
		</div>
		<div class='flex w-full border-b' v-for='(index,key) in employee' :key='key'> 
			<div class='flex flex-col w-2/5'>
				<div class='font-bold'>{{index.name}}</div>
				<div>{{index.email}}</div>
				<div>{{index.phone}}</div>
			</div>
			<div class='flex flex-col w-2/5'>
				<div class='font-bold'>{{division(index.job_role)}}</div>
				<div>{{position(index.job_role)}}</div>
			</div>
			<div class='flex w-1/5'>
				<router-link :to='"/employees/edit/"+index.id' class='p-4 rounded-lg bg-blue-200'>Edit</router-link>
			</div>		
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
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