// App Setting
import 'filters'
import axios from 'axios'
import router from './router'
import store from './store'
import VuexRouterSync from 'vuex-router-sync'

import App from 'App'

// Sass
import 'stylesheets/bulma'

// axios
Vue.prototype.$http = axios

// vue-router and vuex store in sync.
VuexRouterSync.sync(store, router)

new Vue({
  router,
  store,
  template: '<App ref="app" />',
  components: {
    'App': App,
  },
}).$mount('#app')
