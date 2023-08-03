<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>

</template>

<script>
export default {
    //criando uma função data
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar() {
            this.contador++
        },
        subtrair() {
            this.contador--
        }
    }

}
//apos terminar, registrar o componente dentro de main.js (se quiser que seja de forma global)
</script>

<style>
    .contador span {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>