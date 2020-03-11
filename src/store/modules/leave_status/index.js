import actions from '@/store/modules/leave_status/actions'
import state from '@/store/modules/leave_status/state'
import mutations from '@/store/modules/leave_status/mutations'
import getters from '@/store/modules/leave_status/getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}