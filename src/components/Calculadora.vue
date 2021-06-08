<template>
<div>{{operando1}} {{operacion}} {{operando2}} = {{resultado}}
    <Pantalla ref="pantalla" @subeOperando1="getOperando1" @subeOperando2="getOperando2" @igual="getIgual" />
    <Teclado ref="teclado" @enviaValorUp="getValorTecla" />
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

            // El valor desde Teclado
            //console.log(v);

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

			this.operacion = this.$refs.pantalla.acumulado[this.$refs.pantalla.acumulado.length-1]

        },

        getIgual: function(){

            this.$refs.teclado.operando2 = ''
            this.$refs.teclado.operando1 = ''
			this.operando1 = ''
			this.operando2 = ''

        }
    },
    computed: {},
    components: {
        Teclado,
        Pantalla
    }
}
</script>

<style scoped>

</style>