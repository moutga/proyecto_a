<template>
    <div>
        <input :style=style type="button" :value=value :disabled=desactivado />
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Boton',
    data: function(){
        return {
        }
    },
    props:{
        value: {
            type:String, 
            default: "Texto default"
        },
        // Defino las props para ancho y alto con tipo y valor por defecto
        spanX: {
            default: 1
        },
        spanY: {
            default: 1
        },
        // Props para identificar si es un operador o =
        deOperacion: {
            default: false
        },
        deResultado: {
            default: false
        },
        desactivado: {
            default: false
        }
       
    },
    computed:{
        // Acceder al contenido de la store
        ...mapState(['operando1','operando2','operador']),

        // Función que retorna el estilo calculado según las props
        style: function(){

            let spanX = parseInt(this.spanX) 
            let spanY = parseInt(this.spanY)

            if( spanX < 0 || spanY < 0 ){
                spanX = spanY = 1
            }

            if(spanX > 1){
                spanY = 1
            }

            if(spanY > 1){
                spanX = 1
            }
            
            // Cálculo de ancho y alto según fórmula
            let ancho = (45 * spanX) + (spanX * (spanX - 1))
            let alto = (45 * spanY) + (spanY * (spanY - 1))

            return `width:${ancho}px;height:${alto}px` 

        }
    },
    methods:{
        // Acceder a las mutaciones de la store
        ...mapMutations(['setOperando1','setOperando2','setOperador']),

        alClick: function(valor){
            //console.log('Apretaste ' + this.value, 'Es operacion? ' + this.deOperacion, 'Es resultado? ' + this.deResultado)

            // Objeto de traducción de botón a operación
            const queHacer = {
                '+' : 'sumar',
                '-' : 'restar',
                '*' : 'multiplicar',
                '/' : 'dividir',
                defecto : 'operacion'
            }

            // Si el botón no es de operación
            if( !this.deOperacion && !this.deResultado ){
                
                // Si la operación guardada ha cambiado entonces modifico el operando2
                if(this.operador != 'operacion'){

                    this.setOperando2( this.operando2 + valor )

                // Si la operación guardada NO ha cambiado entonces modifico el operando1
                } else {

                    this.setOperando1( this.operando1 + valor )

                }
                
            // Si el botón ES de operación cambio la operación guardada a la correspondiente
            } else {

                //this.setOperador( '' )
                this.setOperador( queHacer[valor] || this.operador )

            }

            // Si el botón es = calcula en base al operador y el objeto de soluciones
            // luego reinicia operandos y operador 
            if( this.deResultado ){
                this.calcular(this.operando1,this.operando2,this.operador)
            }

        }, 

        calcular: function(a,b,operador){

            // Objeto de operaciones
            const soluciones = {
                'o1': parseInt(a),
                'o2': parseInt(b),
                sumar(){
                    return this.o1+this.o2
                },
                restar(){
                    return this.o1-this.o2
                },
                multiplicar(){
                    return this.o1*this.o2
                },
                dividir(){
                    return this.o1/this.o2
                },
            }

            console.log('El resultado es: ' + soluciones[operador]() )
            this.setOperador('operacion')
            this.setOperando1('')
            this.setOperando2('')

        }
    }
}
</script>

<style scoped>
input{
    display:inline-block;
    font-size:18px;
    font-weight: bold;
    margin:2px;
}
</style>