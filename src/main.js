// App Setting
import 'filters'
import axios from 'axios'
import router from './router'
import store from './store'
import VuexRouterSync from 'vuex-router-sync'
import * as serviceWorker from './serviceWorker'

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
  components: {
    'App': App,
  },
  template: '<App ref="app" />',
}).$mount('#app')

serviceWorker.register()
