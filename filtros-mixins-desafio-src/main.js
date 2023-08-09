import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Exercício 2 -->
		Filtro global que conta o tamanho de cada palavra e adiciona o 
		valor na string final 
		"Pedro é legal" => "Pedro (5) é (1) legal (5)" */
Vue.filter('contarPalavras', function(valor) {
	return valor.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
