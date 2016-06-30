// Vue
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from 'routes.js'
import App from 'App.vue'

// Scss
import 'stylesheets/bulma.scss'
import 'font-awesome/scss/font-awesome.scss'
import 'stylesheets/custom.scss'

// Vue Filter
Vue.filter('YYYYMM_JP', (ymd) => ymd ? ymd.substr(0, 4) + '年' + ymd.substr(4, 2) + '月' : '')
Vue.filter('YYYY/MM', (ymd) => ymd ? ymd.substr(0, 4) + '/' + ymd.substr(4, 2) : '')
Vue.filter('DD', (ymd) => ymd ? ymd.slice(-2) : '')

// Vue Resource
Vue.use(VueResource)

// Vue Routing
Vue.use(VueRouter)
let router = new VueRouter({
  linkActiveClass: 'is-active'
})
router.map(routes)

// Applicaiton Initialize
router.start(Vue.extend(App), '#app')
