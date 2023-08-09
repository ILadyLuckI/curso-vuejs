import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Vue.filter registra um filtro de forma global
//o nome do foltro será 'inverter' e vai receber uma função anonima como parametro
Vue.filter('inverter', function(valor) {
	return valor.split('').reverse().join('')
})

Vue.mixin({
	created() {
		console.log('Created - Mixin Global!')
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
