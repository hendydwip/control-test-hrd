import axios from 'axios'
import routes from '../../../routes'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/applicants')
      .then(r => r.data)
      .then(result => {
        commit('SET_APPLICANT', result)
      })
  },
  async add({dispatch}, payload){
    try {
      await axios.post('http://localhost:3000/applicants',{
        "name": payload.name,
        "email": payload.email,
        "job_role": payload.job_role,
        "gender": payload.gender,
        "birth_date": payload.birth_date,
        "birth_place": payload.birth_place,
        "schedule_pt": "",
        "schedule_int": "",
        "phone": payload.phone
      })
    }catch(e){
      console.log(e.response)
    }
    dispatch('fect')
    routes.push('/login')
  },

  async interview({dispatch}, payload){
    const res = await axios.get('http://localhost:3000/applicants?id=' + payload.id + '&_limit=1')
    const tampung = res.data[0]
    tampung.schedule_int = payload.schedule_int
    try {
      await axios.put('http://localhost:3000/applicants/'+payload.id,tampung)
    }catch(e){
      console.log(e.response)
    }
    dispatch('fect')
  },

  async psychotest({dispatch}, payload){
    const res = await axios.get('http://localhost:3000/applicants?id=' + payload.id + '&_limit=1')
    const tampung = res.data[0]
    tampung.schedule_pt = payload.schedule_pt
    try {
      await axios.put('http://localhost:3000/applicants/'+payload.id,tampung)
    }catch(e){
      console.log(e.response)
    }
    dispatch('fect')
  },
}