import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/employees')
      .then(r => r.data)
      .then(result => {
        commit('SET_EMPLOYEE', result)
      })
  },
  add({state}){
    if(state.addEmployee){
      axios
        .post('http://localhost:3000/employees',state.addEmployee)
    }else{
      alert('Kosong')
    }
  },
  edit({state}){
    if(state.addEmployee){
      axios
        .put('http://localhost:3000/employees/'+state.addEmployee.id,state.addEmployee)
    }else{
      alert('Kosongin')
    }
  },
  delete({state}){
    if(state.addEmployee){
      axios
        .delete('http://localhost:3000/employees/'+state.addEmployee.id)
    }else{
      alert('Kosongin')
    }
  },  

}