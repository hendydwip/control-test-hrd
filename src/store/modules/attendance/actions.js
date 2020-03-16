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


  async out({commit}, payload ){
    commit('SET_ATTENDANCE', '')
    const res = await axios.get('http://localhost:3000/attendance?date=' + payload.date + '&_limit=1')
    console.log(res.data)
    console.log(payload.date)
    
  },

  async add({commit}, payload ) {
    commit('SET_ATTENDANCE', '')
    const res = await axios.get('http://localhost:3000/attendance?date=' + payload.date + '&_limit=1')
    let tampung = ''
    console.log(res.data)
    console.log(payload.date)
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
      return      
    }

    tampung = res.data
    console.log(tampung,'asdasd')
    // if(!userID.data.length && !res.data.length){
    //   try {
    //     await axios.post('http://localhost:3000/users',{
    //       'username':payload.username,
    //       'password':payload.password,
    //       'role':payload.role
    //     })
    //   }catch(e){
    //     console.log(e.response)
    //   }
    //   return
    // }

    // if(userID.data.length && !res.data.length){
    //   try {
    //     await axios.put('http://localhost:3000/users/'+payload.id,{
    //       'username':payload.username,
    //       'password':payload.password,
    //       'role':payload.role
    //     })
    //   }catch(e){
    //     console.log(e.response)
    //   }
    //   return
    // }
  },

}