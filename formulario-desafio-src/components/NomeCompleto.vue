<!--Criando componente personalizado-->
<template>
    <div>
        <Rotulo nome="Nome">
			<input type="text" @input="alterarNome"
                :value="value.nome">
			</Rotulo>
		<Rotulo nome="Sobrenome">
			<input type="text" @input="alterarSobrenome"
                :value="value.sobrenome">
		</Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    /*Iremos passar um objeto para que esse componente funcione*/
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    components: { Rotulo },
    methods: {
        alterarNome(event) {
            this.$emit('input', { 
                nome: event.target.value, 
                sobrenome: this.value.sobrenome
             })
        },
        alterarSobrenome(event) {
            this.$emit('input', { 
                /*o this.value.nome é recebido a partir das props*/
                nome: this.value.nome, 
                sobrenome: event.target.value
            })
        }
    }
}
</script>

<style>

</style>