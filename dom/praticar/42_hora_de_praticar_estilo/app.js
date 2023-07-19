new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		//aqui o atributo 'classe3', vai armazenar o que o 
		//usuário irá digitar, o mesmo para a 'classe4'
		classe3: '',
		classe4: '',
		cor5: '',
		estilos5: {
			width: '100px',
			height: '100px',
		},
		width: '0'
	},
	methods: {
		//definimos um metodo 'iniciarEfeito', que recebe a função 'setInterval'
		iniciarEfeito() {
		//setInterval é uma função nativa do JS que executa um trecho de código 
		//repetidamente durante um período de tempo
		//setInterval recebe dois argumentos, uma função callback e um intervalo
		//de tempo em milissegundos
			setInterval(() => {
				/*atribuição ternária dentro de this.classe1.
				Aqui faremos 'this.classe1' refletir a ele mesmo, em seguida
				se this.classe1 der true, a função vai pegar a classe
				encolher, e se der false vai retornar 'destaque'*/
				this.classe1 = this.classe1 == 'destaque' 
				? 'encolher' : 'destaque'
			}, 1000)
		},//aqui vamos criar a lógica para a barra de progresso
		//sair de zero e ir até 100
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 5
				this.width = `${valor}%`
				if(valor == 100) clearInterval(temporizador)
			}, 500)
		},
		setPerigo(event) {
			if(event.target.value == "true") {
				this.perigo = true
			} else if(event.target.value == "false") {
				this.perigo = false
			}
		}
	}
})
