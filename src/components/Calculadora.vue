<template>
<div>

    <Pantalla ref="pantalla" @subeOperando1="getOperando1" @subeOperando2="getOperando2" @igual="getIgual" />
    <Teclado ref="teclado" @enviaValorUp="getValorTecla" />
<<<<<<< HEAD

=======
	
>>>>>>> 625fd6588e75f0fac669ecef94cd89e5ef9e7509
</div>
</template>

<script>
import Teclado from '@/components/Teclado.vue'
import Pantalla from '@/components/Pantalla.vue'

export default {
    data: function(){
        return {
            operando1: '',
            operando2: '',
            operacion: '',
            resultado: ''
        }
    },
    props: {},
    methods: {
        getValorTecla: function(v){

            // Accedo al método agregarTexto del elemento Pantalla
            this.$refs.pantalla.agregarTexto(v)

        },

        getOperando1: function(v){

            // Envío directamente v al data.operando1 de Teclado
            this.$refs.teclado.operando1 = v
            // Tambien lo guardo en Calculadora
            this.operando1 = v

        },

        getOperando2: function(v){

            // Envío directamente v al data.operando2 de Teclado
            this.$refs.teclado.operando2 = v
            // Tambien lo guardo en Calculadora
            this.operando2 = v

			// Filtro la operación a partir del acumulado de Pantalla (último caracter en este punto)
			this.operacion = this.$refs.pantalla.acumulado[this.$refs.pantalla.acumulado.length-1]

        },

        getIgual: function(){
			//console.log(v);

			// Guardo el cálculo solicitado en resultado
			this.resultado = this.calcular()

<<<<<<< HEAD
			// Guardo el cálculo solicitado en resultado
			this.resultado = this.calcular()

=======
>>>>>>> 625fd6588e75f0fac669ecef94cd89e5ef9e7509
			// Actualizo el acumulado de pantalla agregando el resultado luego del =
			this.$refs.pantalla.acumulado += this.resultado

			// Reseteo de operandos
            this.$refs.teclado.operando2 = ''
            this.$refs.teclado.operando1 = ''

        }, 

		calcular: function(){

			const soluciones = {
				'o1': parseInt(this.operando1),
				'o2': parseInt(this.operando2),
				'+': function(){
					return this.o1+this.o2
				},
				'-': function(){
					return this.o1-this.o2
				},
				'*': function(){
					return this.o1*this.o2
				},
				'/': function(){
					return this.o1/this.o2
				},
			}

			return soluciones[this.operacion]()

		}
    },
    computed: {},
    components: {
        Teclado,
        Pantalla
    }
}
</script>