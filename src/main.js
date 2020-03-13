import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import router from './routes'
import {store} from './store/store.js'

Vue.use(VueCookies)

router.beforeEach((to, from, next) => {

  if (!to.meta.middleware) return next()
  if( !store.state.user.userLogin && window.$cookies.isKey('user') ) store.dispatch('user/fetch', window.$cookies.get('user').id)
  
  const middleware = to.meta.middleware

  const context = {
    to,
    from,
    next,
    store,
  }

  return middleware[0]({
    ...context
  })

})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
