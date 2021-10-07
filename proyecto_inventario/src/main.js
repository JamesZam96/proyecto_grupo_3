import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import {nameFilter} from '@/filters'
import {phoneFilter} from '@/filters'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.filter('upper', nameFilter);
Vue.filter('noline', phoneFilter)
Vue.use(BootstrapVue)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
