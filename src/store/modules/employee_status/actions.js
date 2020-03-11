import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/employee_status')
      .then(r => r.data)
      .then(result => {
        commit('SET_EMPLOYEE_STATUS', result)
      })
  },
}