import actions from '@/store/modules/attendance/actions'
import state from '@/store/modules/attendance/state'
import mutations from '@/store/modules/attendance/mutations'
import getters from '@/store/modules/attendance/getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}