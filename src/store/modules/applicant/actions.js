import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/applicants')
      .then(r => r.data)
      .then(result => {
        commit('SET_APPLICANT', result)
      })
  },
}