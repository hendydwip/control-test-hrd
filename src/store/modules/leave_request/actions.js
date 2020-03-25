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
  async updateStatus({dispatch}, payload){
    const res = await axios.get('http://localhost:3000/leave_requests?id=' + payload.id + '&_limit=1')
    const tampung = res.data[0]

    tampung.status = payload.status
    try {
      await axios.put('http://localhost:3000/leave_requests/'+payload.id,tampung)
    }catch(e){
      console.log(e.response)
    }
    dispatch("fect")
  },
  async delete({dispatch}, payload){
    try {
      await axios.delete('http://localhost:3000/leave_requests/'+payload)
    }catch(e){
      console.log(e.response)
    }
    dispatch("fect")
  }
}