const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre:'Pera', cantidad:0},
            {nombre:'Platano', cantidad:5},
            {nombre:'Manzana', cantidad:9},
        ],
        nuevaFruta: "",
        total: 0
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
            this.nuevaFruta = ''
        },
        quitarFruta() {
           this.frutas.forEach(element => {
               if (element.nombre == this.nuevaFruta) {
                   this.frutas.splice(this.frutas.indexOf(element),1)
               }
           });
           this.nuevaFruta = ''
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            this.frutas.forEach(fruta => {
                this.total += fruta.cantidad;
            });
            /*for(fruta of this.frutas){
                this.total+=fruta.cantidad;
            }*/ 
            return this.total;
        }
    }
})
