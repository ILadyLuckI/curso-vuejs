import Vue from 'vue'
import App from './App.vue'
//registrando o componente de forma global
import Contador from './Contador.vue'

Vue.config.productionTip = false
//Chamando o componente
//Vue.component recebe dois parametros, sendo:
//1 - criar o nome do componente que será referenciado, aqui será 'app-contador'
//2 - o segundo parametro irá apontar para o componente que acabou de ser criado 'contador'
Vue.component('app-contador', Contador)

new Vue({
  render: h => h(App),
}).$mount('#app')
