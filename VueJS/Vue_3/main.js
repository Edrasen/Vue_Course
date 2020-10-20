const app = Vue.createApp({
    data(){
        return {
            titulo: "Banco Vue.js", 
            cantidad: 1000,
            enlace: "https://youtube.com/bluuweb",
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            btnQuit: false,
            monto: 0
        }
    },
    methods: {
        agregarSaldo(){
            let result = 0
            this.cantidad+=this.monto*1
            this.monto=0
        },
        quitarSaldo(){
            this.cantidad-=this.monto*1
            this.monto=0
            if (this.cantidad === 0) {
                this.btnQuit = true
                alert("Saldo en cero!")
                return
            }   
                       
        }
    },
    computed: {
        color(){
            return this.cantidad > 500 ? 'text-success' : 'text-danger' 
        }
    }
})