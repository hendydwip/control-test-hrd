import actions from '@/store/modules/employee_status/actions'
import state from '@/store/modules/employee_status/state'
import mutations from '@/store/modules/employee_status/mutations'
import getters from '@/store/modules/employee_status/getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}