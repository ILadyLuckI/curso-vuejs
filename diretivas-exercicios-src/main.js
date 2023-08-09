import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*Declaramos uma diretiva globalmente na aplicação*/
Vue.directive('destaque', {
	/*escolhemos o metodo 'hoock' (gatilho)*/
	bind(el, binding, vnode) {
		/* el.style.backgroundColor = 'Lightgreen' */

		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value		
				} else {
					el.style.color = binding.value
				}
		}, atraso)
		
		/* if(binding.arg === 'fundo') {
		el.style.backgroundColor = binding.value		
		} else {
			el.style.color = binding.value
		} */
	}
})

Vue.directive('modificadores', {
	bind(el, binding, vnode) {

		let atraso = 0
		if(binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if(binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value		
				} else {
					el.style.color = binding.value
				}
		}, atraso)
		
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
