<!--Uso de diretivas-->
<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<!--as diretivas precisam receber um código javascript válido,
		neste caso está sendo interpolado um texto através de aspas simples ('')-->
		<h3 v-text="'Usando diretiva v-text'"></h3>
		<p v-text="`As diretivas precisam receber um código javascript válido,
		neste caso está sendo interpolado um texto através da crase`"></p>
		<h3 v-html="'Usando diretiva <strong>v-html</strong>'"></h3>
		<p v-text="`É necessário ter certeza da fonte que será usada dentro da diretiva
		v-html, pois ao interpretar algum código malicioso pode haver uma grave falha de segurança`"></p>
		<hr>
		<h3>Métodos Hooks (gatilhos)</h3>
		<p><strong>Uma introdução sobre os 5 métodos:</strong></p>
		<p>
			<ul>
				<li>
					<p><strong>bind(el, binding, vnode): </strong>usado quando a diretiva é interligada
					com elemento. Recebe três parâmetros (elemento, binding e vnode). O elemento 'el' pode ser alterado,
					porém 'biding' e 'vnode' devem ser tratados apenas como somente leitura</p>
				</li>
				<li>
					<p><strong>inserted(el, biding, vnode): </strong>elemento inserido no nó pai</p>
				</li>
				<li>
					<p><strong>update(el, biding, vnode, oldVNode): </strong>quando o componente é atualizado 
						(antes filhos)</p>
				</li>
				<li>
					<p><strong>componentUpdated(el, biding, vnode, oldVNode)</strong>quando o componente 
						é atualizado (depois filhos)</p>
				</li>
				<li>
					<p><strong>unbind(el, biding, vnode): </strong>quando a diretiva é desvinculada do elemento</p>
				</li>
			</ul>
		</p>
		<hr>
		<p v-destaque="cor"><strong>Diretiva simples: </strong>Usando diretiva personalizada através 
			de uma referencia que esta na instância do Vue.
			Dessa forma também é possível passar objetos, strings e arrays</p>
		<p v-destaque:fundo="'lightblue'"><strong>Diretiva com argumento: </strong>Usando diretiva personalizada, 
			com um argumento e recebendo um valor do tipo 'string'</p>
		
		<p v-teste:argumento.modificador1.modificador2.modificador3="'valor'">
			<li><strong>Diretiva personalizada com argumento e modificador: </strong>As diretivas recebem um argumento, 
				e podem receber ainda modificadores que podem receber valores.
				Não esquecer de colocar esses valores entre aspas simples ('valor') caso sejam do tipo 'string'
			</li></p>
		<hr>
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretivas personalizadas com modificador de atraso</p>
		<hr>

		<h3>Diretivas locais</h3>
		<p v-destaque-local:fundo.atrasar="'lightgreen'">Usando diretiva personalizada localmente.</p>
		<p v-destaque-local.atrasar="cor">Usando diretiva personalizada</p>
		<hr>

		<h3>Multiplos modificadores</h3>
		<p class="modificadores" v-modificadores:fundo.atrasar="'purple'">Usando multiplos modificadores</p>
		<p v-modificadores.atrasar.alternar="cor">Modificadores</p>
		<hr>

		<h3>Passando valores mais complexos</h3>
		<p v-modf-complexos:fundo.atrasar.alternar="{cor1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">
			<strong>Passando valores mais complexos</strong>
			Usando diretiva personalizada localmente.
		</p>
		<p v-modf-complexos.atrasar="{cor1: 'green', atraso: 5000}">Usando diretiva personalizada</p>
	</div>
</template>

<script>
/*Intância*/
export default {
	/*registrando componentes localmente*/
	components: { },
	directives: {
		/*diretiva definida localmente*/
		'destaque-local': {
			// el.style.backgroundColor = 'lightgreen'

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
		},
		'modificadores': {
			bind(el, binding, vnode) {
				/*criando função 'aplicarCor'*/
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = 3000
				
				const cor1 = binding.value
				const cor2 = 'purple'
				let corAtual = cor1
				
				/*chamando a função 'aplicarCor'*/
				/*definindo a função setTimeout, que recebe como parametro uma função arrow e um atraso*/
				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							/*se 'corAtual' for estritamente igual (===) a cor1, 
							então aplique (?) a cor2, senão (:) aplique cor1*/
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)	
					} else {
						aplicarCor(binding.value)
					}
				}, atraso)
			}
			
		},
		'modf-complexos': {
			bind(el, binding, vnode) {
	
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = binding.value.atraso
				
				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1
				
				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, binding.value.intervalo)	
					} else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso)
			}
			
		},
	},
	data() {
		return {
			cor: 'red'
		}
	}
}
</script>

<style>
li {
	text-align: left;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.modificadores, 
.modf-complexos{
	color: white;
}
</style>
