<template>
    <div>
        <input :style=style type="button" :value=value @click="alClick()" :disabled=disabled />
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Boton',
    data: function(){
        return {
            es: false
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
        deOperacion: {
            default: false
        },
        deResultado: {
            default: false
        },
        disabled: {
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

        alClick: function(){
            console.log('Apretaste ' + this.value, 'Es operacion? ' + this.deOperacion, 'Es resultado? ' + this.deResultado)

            const queHacer = {
                '+' : 'sumar',
                '-' : 'restar',
                '*' : 'multiplicar',
                '/' : 'dividir',
                defecto : 'operacion'
            }

            let soluciones = {
                'o1': parseInt(this.operando1),
                'o2': parseInt(this.operando2),
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

            // Si el botón no es de operación
            if( !this.deOperacion && !this.deResultado ){
                
                // Si la operación guardada ha cambiado entonces modifico el operando2
                if(this.operador != 'operacion'){

                    this.setOperando2( this.operando2 + this.value )

                // Si la operación guardada NO ha cambiado entonces modifico el operando1
                } else {

                    this.setOperando1( this.operando1 + this.value )

                }
                
            // Si el botón ES de operación cambio la operación guardada a la correspondiente
            } else {

                //this.setOperador( '' )
                this.setOperador( queHacer[this.value] || this.operador )

            }

            if( this.deResultado ){
                console.log('El resultado es: ' + soluciones[this.operador]() )
                this.setOperador('operacion')
                this.setOperando1('')
                this.setOperando2('')
            }

            
            
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