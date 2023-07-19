new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            return this.valor == 37 ? 'Valor igual' : 'Valor diferente'
        }
    },
    //monitora alterações
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
                //apos 5 segundos ele zera o contador
            }, 5000)
        }
    }
});