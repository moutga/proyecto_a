<template>
<div class="losBotones row justify-content-center">

    <div class="w-100">{{operadores[0]}} / {{operadores[1]}}</div>

    <div class="w-100"></div>
    <div class="row">
    <Boton value="1" spanX="1"  />
    <Boton value="2" spanX="1" />
    <Boton value="3" spanX="1" />
    <Boton value="+" spanX="1" deOperacion=true />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="4" spanX="1" />
    <Boton value="5" spanX="1" />
    <Boton value="6" spanX="1" />
    <Boton value="-" spanX="1" deOperacion=true />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="7" spanX="1" />
    <Boton value="8" spanX="1" />
    <Boton value="9" spanX="1" />
    <Boton value="*" spanX="1" deOperacion=true />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="0" spanX="1" />
    <Boton value="=" spanX="2" deOperacion=true />
    <Boton value="/" spanX="1" deOperacion=true />
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
        operando1:{
            default: 10
        },
        operando2:{
            default: 10
        }
    },
    computed:{
        ...mapState(['operadores']),
    },
    methods:{
    },
    components:{
        Boton
    }
}
</script>