<template>
<div class="losBotones row justify-content-center">

    <div class="w-100">{{operando1}} y {{operando2}}</div>

    <div class="w-100"></div>
    <div class="row">
    <Boton value="1" spanX="1"  />
    <Boton value="2" spanX="1" />
    <Boton value="3" spanX="1" />
    <Boton value="+" spanX="1" deOperacion=true :disabled=isDisabled />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="4" spanX="1" />
    <Boton value="5" spanX="1" />
    <Boton value="6" spanX="1" />
    <Boton value="-" spanX="1" deOperacion=true :disabled=isDisabled />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="7" spanX="1" />
    <Boton value="8" spanX="1" />
    <Boton value="9" spanX="1" />
    <Boton value="*" spanX="1" deOperacion=true :disabled=isDisabled />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="0" spanX="1" />
    <Boton value="=" spanX="2" deResultado=true :disabled=isIgualDisabled />
    <Boton value="/" spanX="1" deOperacion=true :disabled=isDisabled />
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
            disabled : false
        }
    },
    props:{
        ooperando1:{
            default: 10
        },
        ooperando2:{
            default: 10
        }
    },
    computed:{
        ...mapState(['operando1','operando2']),

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