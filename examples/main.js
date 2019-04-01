import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import KuiperUi from './../packages'
Vue.config.productionTip = false
Vue.use(KuiperUi)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
