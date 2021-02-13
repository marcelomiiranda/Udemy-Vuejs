new Vue({
    el: '#desafio',
    data: {
        nome: 'Marcelo',
        idade: 26,
        linkImagem: 'https://cdn.espn.com.br/image/wide/622_08a02a0f-e8d5-3692-9140-d8c24daaa9f5.jpg'
    },
    methods: {
        numeroAleatorio: function(){
            return Math.random()
        }
    },
})
