<template>
<div class="losBotones row justify-content-center">

    <div class="w-100">{{operando1}} {{(operador!='operacion')?operador:null}} {{operando2}}</div>

    <div class="w-100"></div>
    <div class="row">
    <Boton value="1" spanX="1"  />
    <Boton value="2" spanX="1" />
    <Boton value="3" spanX="1" />
    <Boton ref="operando" value="+" spanX="1" deOperacion=true :desactivado=isDisabled />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="4" spanX="1" />
    <Boton value="5" spanX="1" />
    <Boton value="6" spanX="1" />
    <Boton ref="operando" value="-" spanX="1" deOperacion=true :desactivado=isDisabled />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="7" spanX="1" />
    <Boton value="8" spanX="1" />
    <Boton value="9" spanX="1" />
    <Boton ref="operando" value="*" spanX="1" deOperacion=true :desactivado=isDisabled />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="0" spanX="1" />
    <Boton id="igual" ref="igual" value="=" spanX="2" deResultado=true :desactivado=isIgualDisabled />
    <Boton ref="operando" value="/" spanX="1" deOperacion=true :desactivado=isDisabled />
    </div>
</div>
</template>

<script>
import Boton from '@/components/Boton.vue'
import { mapState } from 'vuex'

export default {
    name: 'Teclado', 
    data:function(){
        return {
        }
    },
    props:{
    },
    computed:{
        ...mapState(['operando1','operando2','operador']),

        // Si operando1 de la store tiene algún valor retorna verdadero la activación del operador
        isDisabled: function(){
            return (this.operando1.length) ? false : true
        },
        
        // Si operando2 de la store tiene algún valor retorna verdadero la activación del igual
        isIgualDisabled: function(){
            return (this.operando2.length) ? false : true
        }
    },
    methods:{
    },
    components:{
        Boton
    }
}
</script>