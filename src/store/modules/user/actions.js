import axios from 'axios'
import router from '@/routes'

export default {
  fectAll ({commit}) {
    axios
      .get('http://localhost:3000/users')
      .then(r => r.data)
      .then(result => {
        commit('SET_USER', result)
      })
    },


  async fetch( { commit }, id ) {
    try {
      const res = await axios.get( 'http://localhost:3000/users/' + id )
      commit('SET_USER_LOGIN', res.data)
    } catch (error) {
      window.alert(error)
      window.alert('fetc')
    }
  },
  async login( { dispatch }, payload ) {
    console.log(payload)
    try {
      const res = await axios.get('http://localhost:3000/users?name=' + payload.name + '&password=' + payload.password + '&_limit=1')
      const user = res.data[0]

      dispatch( 'fetch', user.id )
      window.$cookies.set('user', user)
      router.push('/')

    } catch (error) {
      window.alert(error)
      window.alert('login')
    }
  },
  async logout( { commit} ) {
    window.$cookies.remove('user')
    commit('SET_USER_LOGIN', '')
    router.push('/login')
  },



















  async addOrUpdate({commit}, payload ) {
      commit('ADD_USER', '')
      const res = await axios.get('http://localhost:3000/users?username=' + payload.username + '&_limit=1')
      const userID = await axios.get('http://localhost:3000/users?id=' + payload.id + '&_limit=1')

      if(!userID.data.length && !res.data.length){
        try {
          await axios.post('http://localhost:3000/users',{
            'username':payload.username,
            'password':payload.password,
            'role':payload.role
          })
        }catch(e){
          console.log(e.response)
        }
        return
      }

      if(userID.data.length && !res.data.length){
        try {
          await axios.put('http://localhost:3000/users/'+payload.id,{
            'username':payload.username,
            'password':payload.password,
            'role':payload.role
          })
        }catch(e){
          console.log(e.response)
        }
        return
      }

      alert('Username sudah digunakan oleh orang lain')
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