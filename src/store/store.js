import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({
  state:{
    user:{},
    event:{},
    role:{},
    employeeStatus:{},
    jobRole:{},
    attendance:{},
    leaveRequest:{},
    leaveStatus:{},
    applicant:{},
    employee:{},
  },

  getters:{
    user(state){
      return state.user
    },
    event(state){
      return state.event
    },
    role(state){
      return state.role
    },
    employeeStatus(state){
      return state.employeeStatus
    },
    jobRole(state){
      return state.jobRole
    },
    attendance(state){
      return state.attendance
    },
    leaveRequest(state){
      return state.leaveRequest
    },
    leaveStatus(state){
      return state.leaveStatus
    },
    applicant(state){
      return state.applicant
    },
    employee(state){
      return state.employee
    },
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
    fectEvent ({commit}) {
      axios
        .get('http://localhost:3000/events')
        .then(r => r.data)
        .then(result => {
          commit('SET_EVENT', result)
        })
    },
    fectRole ({commit}) {
      axios
        .get('http://localhost:3000/roles')
        .then(r => r.data)
        .then(result => {
          commit('SET_ROLE', result)
        })
    },
    fectEmployeeStatus ({commit}) {
      axios
        .get('http://localhost:3000/employee_status')
        .then(r => r.data)
        .then(result => {
          commit('SET_EMPLOYEE_STATUS', result)
        })
    },
    fectJobRole ({commit}) {
      axios
        .get('http://localhost:3000/job_roles')
        .then(r => r.data)
        .then(result => {
          commit('SET_JOB_ROLE', result)
        })
    },
    fectAttendance ({commit}) {
      axios
        .get('http://localhost:3000/attendance')
        .then(r => r.data)
        .then(result => {
          commit('SET_ATTENDANCE', result)
        })
    },
    fectLeaveRequest ({commit}) {
      axios
        .get('http://localhost:3000/leave_requests')
        .then(r => r.data)
        .then(result => {
          commit('SET_LEAVE_REQUEST', result)
        })
    },
    fectLeaveStatus ({commit}) {
      axios
        .get('http://localhost:3000/leave_status')
        .then(r => r.data)
        .then(result => {
          commit('SET_LEAVE_STATUS', result)
        })
    },
    fectEmployee ({commit}) {
      axios
        .get('http://localhost:3000/employees')
        .then(r => r.data)
        .then(result => {
          commit('SET_EMPLOYEE', result)
        })
    },
    fectLeaveStatus ({commit}) {
      axios
        .get('http://localhost:3000/applicants')
        .then(r => r.data)
        .then(result => {
          commit('SET_APPLICANT', result)
        })
    },
  },

  mutations:{
    SET_USER(state,payload){
      state.user = payload
    },
    SET_EVENT(state,payload){
      state.event = payload
    },
    SET_ROLE(state,payload){
      state.role = payload
    },
    SET_EMPLOYEE_STATUS(state,payload){
      state.employeeStatus = payload
    },
    SET_JOB_ROLE(state,payload){
      state.jobRole = payload
    },
    SET_ATTENDANCE(state,payload){
      state.attendance = payload
    },
    SET_LEAVE_REQUEST(state,payload){
      state.leaveRequest = payload
    },
    SET_LEAVE_STATUS(state,payload){
      state.leaveStatus = payload
    },
    SET_EMPLOYEE(state,payload){
      state.employee = payload
    },
    SET_APPLICANT(state,payload){
      state.applicant = payload
    },
  }
})