<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>

</template>

<script>
import frutasMixin from '@/frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
    mixins: [frutasMixin, usuarioMixin],
    created() {
        console.log('Created - Frutas.vue!')
    }
    /* data() {
        return {
            fruta: '',
            frutas: ['banana', 'maça', 'laranja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    } */
}
</script>

<style>

</style>