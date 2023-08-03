<template>
	<div id="app">
		<h1>Desafio</h1>
		<hr>
		<p>Cada botão deve retornar sua respectiva cor!</p>
		<span>
			<button class="vermelho"
				@click="componente = 'Vermelho'">Carregar Componente Vermelho</button>
			<button class="verde"
				@click="componente = 'Verde'">Carregar Componente Verde</button>
			<button class="azul"
				@click="componente = 'Azul'">Carregar Componente Azul</button>
			<button class="amarela"
				@click="componente = 'Amarelo'">Carregar Componente Amarelo</button>
			<button class="roxo"
				@click="componente = 'Roxo'">Carregar Componente Roxo</button>
		</span>
		
		<h3>Retornando:</h3>
		<!--Aqui temos os elementos sendo alterados dinâmicamente via tag slot-->
		<component :is="componente">
			<span slot="conteudo">Conteúdo do Componente <strong>{{ componente }}</strong></span>
		</component>
	</div>
</template>

<script>
import Vermelho from './components/Vermelho.vue'
import Verde from './components/Verde.vue'
import Azul from './components/Azul.vue'
import Amarelo from './components/Amarelo.vue'
import Roxo from './components/Roxo.vue'

export default {
	name: 'app',
	components: { Vermelho, Verde, Azul, Amarelo, Roxo },
	data() {
		return {
			componente: 'Vermelho'
		}
	}
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }

	.amarela {
		border: 2px solid orangered;
		background-color: yellow;
		color: black;
	}

	.roxo {
		border: 2px solid purple;
		background-color: purple;
	}
</style>
