import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('color',{
  inserted(el,binding){
    el.style.color=binding.value
  },
  update(el,{value}){
    el.style.color=value
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
