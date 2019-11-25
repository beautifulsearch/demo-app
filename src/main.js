import Vue from 'vue'
import App from './App.vue'
import store from './store'

import "@/assets/css/normalize.css";
import "@/assets/css/constants.css";

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
