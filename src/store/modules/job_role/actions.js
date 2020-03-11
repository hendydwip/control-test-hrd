import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/job_roles')
      .then(r => r.data)
      .then(result => {
        commit('SET_JOB_ROLE', result)
      })
  },
}