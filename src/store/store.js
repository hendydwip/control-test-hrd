import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state:{
    user:{},
  },

  getters:{
    user(state){
      return state.user
    }
  },

  actions:{
    fectUser ({commit}) {
      axios
        .get('http://localhost:3000/users')
        .then(r => r.data)
        .then(result => {
          commit('SET_USER', result)
        })
    },
  },

  mutations:{
    SET_USER(state,payload){
      state.user = payload
    },
  }
})