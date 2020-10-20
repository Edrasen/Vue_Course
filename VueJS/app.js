const app = new Vue({
    el: '#app',
    data:{
        mensaje: 'hola xD', 
        contador: 0
    },
    methods:{
        incremento(){
            this.contador+=1
        },
        decremento() {
            this.contador-=1
        }
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('')
        },
        color() {
            return {
                'bg-danger' : this.contador <= 25,
                'bg-warning' :this.contador > 25 && this.contador < 76,
                'bg-success' :this.contador >= 76,
            }
        },
        anuncio() {
            if (this.contador == 100) {
                      
            }
        }
    }
})