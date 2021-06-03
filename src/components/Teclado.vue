<template>
<div class="losBotones row justify-content-center" >

    <div class="w-100">de data: {{operando1}} y {{operando2}} = {{sumados}}</div>

    <div class="w-100">directo store: {{operadores[0]}} y {{operadores[1]}} = {{sumados}}</div>

    <div class="w-100">computed en template: {{op1}} y {{operadores[1]}} = {{sumados}}</div>

    <div class="w-100"></div>
    <div class="row">
    <Boton value="1" spanX="1" />
    <Boton value="2" spanX="1" />
    <Boton value="3" spanX="1" />
    <Boton value="+" spanX="1" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="4" spanX="1" />
    <Boton value="5" spanX="1" />
    <Boton value="6" spanX="1" />
    <Boton value="-" spanX="1" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="7" spanX="1" />
    <Boton value="8" spanX="1" />
    <Boton value="9" spanX="1" />
    <Boton value="*" spanX="1" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="0" spanX="1" />
    <Boton value="=" spanX="2" />
    <Boton value="/" spanX="1" />
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Boton from '@/components/Boton.vue'

export default {
    name: 'Teclado', 
    data:function(){
        return {
            bg : false
        }
    },
    props:{
        operando1:{
            default: 10
        },
        operando2:{
            default: 10
        }
    },
    computed:{ 
        // Acceder al contenido de la store
        ...mapState(['operadores']),

        op1: function(){
            //console.log(this.operadores[0])
            //alert('op1')
            return this.operadores[0]

        },

        sumados: function(){
            return this.operando1 + this.operando2
        }
    },
    methods:{
        
    },
    components:{
        Boton
    }
}
</script>


<style scoped>
.bg-red{background: red;}
</style>