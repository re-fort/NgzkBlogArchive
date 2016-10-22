// App Setting
import 'filters'
import routes from 'routes'
import store from 'vuex/store'
import App from 'App'

// Scss
import 'stylesheets/bulma.scss'
import 'stylesheets/app.scss'

// Vue Resource
Vue.use(VueResource)

// Vue Routing
Vue.use(VueRouter)
const router = new VueRouter(routes)

// vue-router and vuex store in sync.
VuexRouterSync.sync(store, router)

new Vue({
  router,
  store,
  template: '<App ref="app" />',
  components: {
    'App': App
  }
}).$mount('#app')