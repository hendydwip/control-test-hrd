export default {
  SET_USER(state,payload){
    state.user = payload
  },
  SET_USER_LOGIN(state,payload){
    state.userLogin = payload
  },  
  ADD_USER(state, payload){
    state.addUser = payload
  }  
}