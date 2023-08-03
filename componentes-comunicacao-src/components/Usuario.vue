<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Meu nome é <strong>{{ nome }}</strong></p>
        <p>A minha idade é <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Alterar Nome</button>
        <hr>
        <!--fazendo comunicação indireta com função callback-->
        <div class="componentes">
            <app-usuario-info 
                v-bind:nome="nome"
                v-bind:idade="idade"
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome"/>
            <app-usuario-editar 
                :idade="idade" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Daiana Koblitz',
            idade: 37
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Izabella'
        },
        reiniciarNome() {
            this.nome = 'Daiana'
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
