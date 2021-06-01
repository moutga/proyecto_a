<template>
    <input :style=style type="button" :value=texto />
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

            // Cálculo de ancho y alto según fórmula
            let ancho = (45 * this.spanX) + (this.spanX * (this.spanX - 1));
            let alto = (45 * this.spanY) + (this.spanY * (this.spanY - 1));

            return `width:${ancho}px;height:${alto}px`;

        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
input{
    display:inline-block
}
</style>