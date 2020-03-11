import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/leave_requests')
      .then(r => r.data)
      .then(result => {
        commit('SET_LEAVE_REQUEST', result)
      })
  },
}