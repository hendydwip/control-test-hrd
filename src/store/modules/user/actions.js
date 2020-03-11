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
}