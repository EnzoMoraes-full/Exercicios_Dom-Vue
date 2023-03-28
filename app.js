new Vue({
    el: '#desafio',

    data: {
        idademultiplicado: 18 * 3,
        nm: 0,
        nmIMG: 'https://wallpapercave.com/uwp/uwp2942424.jpeg',
        nome: ' Enzo Farias de Moraes',
        idade: 18,
        value:'',
        valueEnter: '',
        resultadoo: 'Aguardando entrada...',
        valorr: '',
        valorContagem: 5,
        valor: 0,
        resultado: 0,
        enteramostral: '                ...',
        inputValue: '',

        aplicarC1: false,
            aplicarC2: false,
            classeCSS: '',
            corEscolhida: '',


            classeEstilos: '',
            estiloSelecionado : '',
    },
    
    methods: {

        armazena:function(event){
            this.value = event.target.value
        },

        nmrom(){
            this.nm = Math.random(0,1)
        },

        alert(){
            window.alert('Alerta')
        },

        alterarTexto(){
                if(this.valorr == 37){
                   this.resultadoo = 'Valor Igual'
                    
                }else{
                    this.resultadoo = 'Valor Diferente' 
                }
        },

        ValorContagem(){
            setInterval(() => {
                if (this.valorContagem > 0) {
                  this.valorContagem--;

                  if(this.valorContagem == 0){
                    this.resultado = 0;
                  }
                } 
                else {
                  clearInterval();
                }
              }, 1000)
        },

        estilo1() {
            return {
                c1: this.aplicarC1,
                'cor-2': !this.aplicarC1
            }
        },

        dispararEnter(event) {
            // somente irá disparar o evento se a tecla pressionada for o ENTER
            if (event.keyCode === 13) {
                this.enteramostral = '  ENTER PRESSIONADO';
              console.log('ENTER PRESSIONADO');
            }
          },
    }
})
