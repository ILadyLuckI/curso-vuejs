<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>

		<div class="filtro-local">
			<h3>Criando um filtro local</h3>
			<!--para aplicar o filtro definido na função 'cpf', basta adicionar um 'pipe' ('|'), 
			e adicionar o nome do filtro, no caso 'cpf'-->
			<p>{{ cpf | cpf }}</p>
		</div>
		<hr>

		<div class="multiplos-filtros">
			<h3>Encadeando multiplos filtros</h3>
			<p>{{ cpf | cpf | inverter }}</p>
		</div>
		<hr>

		<div class="vbind">
			<p>Filtro com v-bind:</p>
			<!--o v-bind suporta encadeamento também-->
			<input type="text" :value="cpf | cpf | inverter">
		</div>
		<hr>

		<div class="duplicando">
			<p>Duplicando código para usar com mixins</p>
			<Frutas />
		</div>
		<hr>

		<div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
		
	</div>
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'
import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	mixins: [frutasMixin, usuarioMixin],
	filters: {
		Cpf(valor) {
			//cont array
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			//numeros que não precisam receber operações numericas podem ser tratados como string
			cpf: '10020030040',
			/* fruta: '',
            frutas: ['banana', 'maça', 'laranja'] */
		}
	},
	created() {
		console.log('Created - App.vue!')
	}
    /* methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        } 
    } */
}
</script>

<style>
h1 {
	background-color: blue;
	color: white;
}

input {
	font-size: 2.5rem;
	background-color: rgb(255, 190, 203);
}

.duplicando {
	background-color: rgb(193, 252, 193);
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

.filtro-local {
	background-color: rgb(221, 255, 255);
}

.multiplos-filtros {
	background-color: rgb(255, 221, 209);
}
</style>
