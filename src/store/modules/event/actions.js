import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/events')
      .then(r => r.data)
      .then(result => {
        commit('SET_EVENT', result)
      })
  },
}