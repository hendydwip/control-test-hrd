import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import user from '@/store/modules/user'
import event from '@/store/modules/event'
import employee from '@/store/modules/employee'
import employee_status from '@/store/modules/employee_status'
import attendance from '@/store/modules/attendance'
import applicant from '@/store/modules/applicant'
import job_role from '@/store/modules/job_role'
import leave_request from '@/store/modules/leave_request'
import leave_status from '@/store/modules/leave_status'
import role from '@/store/modules/role'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export const store = new Vuex.Store({

  modules: {
    user,
    event,
    employee,
    employee_status,
    attendance,
    applicant,
    job_role,
    leave_request,
    leave_status,
    role
  },
})