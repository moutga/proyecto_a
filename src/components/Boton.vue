<template>
    <input :style=style type="button" :value=texto @click="alClick" />
</template>

<script>
export default {
    name: 'Boton',
    props:{
        texto: String,
        // Defino las props para ancho y alto con tipo y valor por defecto
        spanX: {
            type: Number,
            default: 1
        },
        spanY: {
            type: Number,
            default: 1
        }
       
    }
    /*['texto','spanX','spanY']*/,
    computed:{
        // Función que retorna el estilo calculado según las props
        style: function(){

            let spanX = parseInt(this.spanX)
            let spanY = parseInt(this.spanY)

            if( spanX < 0 || spanY < 0 || !Number.isInteger(spanX) || !Number.isInteger(spanY) ){
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
        alClick: function(){
            alert('Apretaste ' + this.texto)
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