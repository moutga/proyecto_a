<template>
    <div>
        <input :style=style type="button" :value=value @click="alClick(value)" />
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
    name: 'Boton',
    data: function(){
        return {
            test: 'sólo un test de data'
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
        }
       
    }
    /*['texto','spanX','spanY']*/,
    computed:{
        // Acceder al contenido de la store
        ...mapState(['operadores']),

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
        ...mapMutations(['cambiaOperador']),

        alClick: function(texto){
            console.log('Apretaste ' + texto)

            this.cambiaOperador({operador: 0,valor: parseInt(texto)});

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