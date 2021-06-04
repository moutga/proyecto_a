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
        disabled: {
            default: false
        }
       
    },
    computed:{
        // Acceder al contenido de la store
        ...mapState(['operando1','operando2','operacion']),

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
        ...mapMutations(['setOperando1','setOperando2','setOperacion']),

        alClick: function(){
            console.log('Apretaste ' + this.value, 'Es operacion? ' + this.deOperacion)

            const queHacer = {
                '+' : 'sumar',
                '-' : 'restar',
                '*' : 'multiplicar',
                '/' : 'dividir',
                '=' : 'resolver',
                defecto : 'operacion'
            }

            if( !this.deOperacion ){
                
                this.es = true
                this.setOperando1( this.operando1 + this.value )

            } else {

                this.setOperacion( '' )
                this.setOperacion( queHacer[this.value] || queHacer['defecto'] )

                this.setOperando2( this.operando2 + this.value )

                if( this.operacion == 'resolver' ){
                    console.log('El resultado es: ' + 0);
                }

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