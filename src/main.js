import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import Toast from 'components/common/toast/index.js'


Vue.config.productionTip = false

Vue.use(Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
