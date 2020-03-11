import actions from '@/store/modules/employee/actions'
import state from '@/store/modules/employee/state'
import mutations from '@/store/modules/employee/mutations'
import getters from '@/store/modules/employee/getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}