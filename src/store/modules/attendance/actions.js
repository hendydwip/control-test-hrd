import axios from 'axios'
export default {
  fect ({commit}) {
    axios
      .get('http://localhost:3000/attendance')
      .then(r => r.data)
      .then(result => {
        commit('SET_ATTENDANCE', result)
      })
  },

  async addIn({dispatch}, payload ) {
    const res = await axios.get('http://localhost:3000/attendance?date=' + payload.date + '&_limit=1')
    let tampung = ''
    if(!res.data.length){
      try {
        await axios.post('http://localhost:3000/attendance',{
          'date':payload.date,
          'data':[{
            'checkin':payload.checkin,
            'checkout':'',
            'user_id':payload.user_id
          }]
        })
      }catch(e){
        console.log(e.response)
      }
      dispatch('fect')
      return
    }

    tampung = res.data
    var ketemu = false
    var tampung1 = res.data[0].data.map(el => {
      if(el.user_id == payload.user_id){
          ketemu = true
          return Object.assign({}, el, {checkin:payload.checkin})
      }
      return el
    });

    if(!ketemu) tampung1.push({checkout:"",checkin:payload.checkin,user_id:payload.user_id})
    tampung[0].data = tampung1

    try {
      await axios.put('http://localhost:3000/attendance/'+tampung[0].id,tampung[0])
    }catch(e){
      console.log(e.response)
    }

    dispatch('fect')
  },


  async addOut({dispatch}, payload ) {
    const res = await axios.get('http://localhost:3000/attendance?date=' + payload.date + '&_limit=1')
    let tampung = ''

    if(!res.data.length){
      try {
        await axios.post('http://localhost:3000/attendance',{
          'date':payload.date,
          'data':[{
            'checkin':'',
            'checkout':payload.checkin,
            'user_id':payload.user_id
          }]
        })
      }catch(e){
        console.log(e.response)
      }
      dispatch('fect')
      return      
    }

    tampung = res.data
    var ketemu = false
    var tampung1 = res.data[0].data.map(el => {
      if(el.user_id == payload.user_id){
        ketemu = true 
        return Object.assign({}, el, {checkout:payload.checkin})
      }
      return el
    });
    if(!ketemu) tampung1.push({checkout:payload.checkin,checkin:"",user_id:payload.user_id})
    tampung[0].data = tampung1

    try {
      await axios.put('http://localhost:3000/attendance/'+tampung[0].id,tampung[0])
    }catch(e){
      console.log(e.response)
    }
    dispatch('fect')
  },

}