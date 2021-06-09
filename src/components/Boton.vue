<template>
    <div>
        <input :style=style type="button" :value=value :disabled=desactivado />
    </div>
</template>

<script>

export default {
    name: 'Boton',
    data: function(){
        return {
        }
    },
    props:{
        value: {
            type: String, 
            default: "Texto por defecto"
        },
        // Defino las props para ancho y alto con tipo y valor por defecto
        spanX: {
            default: 1,
			type: Number
        },
        spanY: {
            default: 1,
			type: Number
        },
        // Props para identificar si es un operador o símbolo igual
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

        // Función que retorna el estilo calculado según las props
        style: function(){

            let spanX = this.spanX 
            let spanY = this.spanY

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