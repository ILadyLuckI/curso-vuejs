new Vue({
    el: '#desafio',
    data: {
        saudacao: 'Olá, eu sou a ',
        nome: 'Daiana Koblitz',
        frase: ' e tenho ',
        idade: 37,
        anos: ' anos!',
        imagem: 'https://files.tecnoblog.net/wp-content/uploads/2021/03/como-mudar-de-skin-no-fortnite-001-700x394.jpg'
    },
    methods: {
        multiplicacao: function () {
            return this.idade * 3
        },
        geraNumeroAleatorio: function () {
            return Math.random()
        }
    }
})