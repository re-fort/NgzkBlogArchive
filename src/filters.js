// Vue Filter
Vue.filter('YYYYMM_JP', (ymd) => ymd ? ymd.substr(0, 4) + '年' + ymd.substr(4, 2) + '月' : '')
Vue.filter('YYYY/MM', (ymd) => ymd ? ymd.substr(0, 4) + '/' + ymd.substr(4, 2) : '')
Vue.filter('DD', (ymd) => ymd ? ymd.slice(-2) : '')