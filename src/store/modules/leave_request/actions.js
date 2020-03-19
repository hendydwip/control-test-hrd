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
  async add({dispatch}, payload){
    try {
      await axios.post('http://localhost:3000/leave_requests',{
        "status": 2,
        "employee": payload.employee,
        "description": payload.desc,
        "start_date": payload.start,
        "end_date": payload.to
      })
    }catch(e){
      console.log(e.response)
    }
    dispatch('fect')
  },
}