import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/users')
      .then(r => r.data)
      .then(result => {
        commit('SET_USER', result)
      })
    },
    async addOrUpdate({state}){
      if(state.user){
        try {
          await axios.put('http://localhost:3000/users/'+state.addUser.id,state.addUser)
        }catch(e){
          if(e.response.status){
            await axios.post('http://localhost:3000/users',state.addUser)
            return
          }
          console.log(e.response)
        }

      }else{
        alert('Kosong')
      }
    },
    delete({state}){
      if(state.addUser){
        axios
          .delete('http://localhost:3000/users/'+state.addUser.id)
      }else{
        alert('Kosongin')
      }
    },        
}