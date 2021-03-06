import actions from '@/store/modules/user/actions'
import state from '@/store/modules/user/state'
import mutations from '@/store/modules/user/mutations'
import getters from '@/store/modules/user/getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}