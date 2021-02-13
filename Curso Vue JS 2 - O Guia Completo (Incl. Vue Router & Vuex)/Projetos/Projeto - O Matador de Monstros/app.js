new Vue({
    el: '#app',
    data: {
        jogador: 'Jogador',
        monstro: 'Monstro',
        widthJogador: '500',
        widthMonstro: '500',
        porcentagemJogador: '100',
        porcentagemMonstro: '100',
        jogar: false,
        listaAtaques: [],
        corVidaJogador: 'green',
        corVidaMonstro: 'green',
        corMensagemFinal: '',
        fimJogo: false,
        mensagemFinal: '',
    },
    methods: {
        desistir: function () {
            this.jogar = false
            this.listaAtaques = []
            this.widthJogador = '500'
            this.widthMonstro = '500'
            this.porcentagemJogador = '100'
            this.porcentagemMonstro = '100'
            this.corVidaJogador = 'green'
            this.corVidaMonstro = 'green'
            this.fimJogo = false
            this.mensagemFinal = ''
            this.corMensagemFinal = ''
        },
        ataque: function () {
            var pontosMonstro = Math.floor(Math.random() * 10 + 3)
            var pontosJogador = Math.floor(Math.random() * 10 + 1)

            console.log('pontosJogador', pontosJogador)
            console.log('pontosMonstro', pontosMonstro)

            this.atualizaStatusLuta(pontosMonstro, pontosJogador)
            this.gravaLogLuta(pontosMonstro, pontosJogador)
        },

        ataqueEspecial: function () {
            var pontosMonstro = Math.floor(Math.random() * 10 + 1)
            var pontosJogador = Math.floor(Math.random() * 10 + 4)

            this.atualizaStatusLuta(pontosMonstro, pontosJogador)
            this.gravaLogLuta(pontosMonstro, pontosJogador)
        },

        curar: function () {
            var pontosMonstro = Math.floor(Math.random() * 10 + 2)
            var pontosJogador = Math.floor(Math.random() * 10 + 2)

            this.atualizaStatusLuta(pontosMonstro, pontosJogador, 'C')
            this.gravaLogLuta(pontosMonstro, pontosJogador, 'C')
        },

        atualizaStatusLuta: function (pontosMonstro, pontosJogador, tipoAcao) {
            if (pontosMonstro <= this.porcentagemJogador) this.porcentagemJogador -= pontosMonstro
            else this.porcentagemJogador = 0

            if (tipoAcao != 'C') {
                if (pontosJogador <= this.porcentagemMonstro) this.porcentagemMonstro -= pontosJogador
                else this.porcentagemMonstro = 0
            } else {
                if (this.porcentagemJogador > 0) this.porcentagemJogador += pontosJogador
                if (this.porcentagemJogador > 100) this.porcentagemJogador = 100
            }

            if ((pontosMonstro * 5).toString() <= this.widthJogador) {
                this.widthJogador -= (pontosMonstro * 5).toString()
            } else {
                this.widthJogador = '0'
            }

            if ((pontosJogador * 5).toString() <= this.widthMonstro) {
                this.widthMonstro -= (pontosJogador * 5).toString()
            } else {
                this.widthMonstro = '0'
            }

            if (this.widthJogador <= 0) {
                this.fimJogo = true
                this.corMensagemFinal = 'red'
                this.mensagemFinal = 'Você perdeu!:('
                this.widthJogador = '0'
                return
            }

            if (this.widthMonstro <= 0) {
                this.fimJogo = true
                this.corMensagemFinal = 'green'
                this.mensagemFinal = 'Você ganhou!:)'
                this.widthMonstro = '0'
                return
            }

            if (this.widthJogador < '100') this.corVidaJogador = 'red'
            if (this.widthMonstro < '100') this.corVidaMonstro = 'red'
        },

        gravaLogLuta: function (pontosMonstro, pontosJogador, tipoAcao) {
            this.listaAtaques.push('MONSTRO ATINGIU JOGADOR COM ' + pontosMonstro.toString())

            if (tipoAcao != 'C') this.listaAtaques.push('JOGADOR ATINGIU MONSTRO COM ' + pontosJogador.toString())
            else this.listaAtaques.push('JOGADOR GANHOU FORÇA DE ' + pontosJogador.toString())
        },
    },
})
