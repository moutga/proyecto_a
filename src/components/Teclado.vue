<template>
<div class="losBotones row justify-content-center">

	<div style="display:none" class="w-100">{{operando1}} y {{operando2}}</div>

    <div class="w-100"></div>
    <div class="row">
    <Boton value="1" v-bind:spanX="1" @click.native="getValue" />
    <Boton value="2" v-bind:spanX="1" @click.native="getValue" />
    <Boton value="3" v-bind:spanX="1" @click.native="getValue" />
    <Boton ref="operando" value="+" v-bind:spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="4" v-bind:spanX="1" @click.native="getValue" />
    <Boton value="5" v-bind:spanX="1" @click.native="getValue" />
    <Boton value="6" v-bind:spanX="1" @click.native="getValue" />
    <Boton ref="operando" value="-" v-bind:spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="7" v-bind:spanX="1" @click.native="getValue" />
    <Boton value="8" v-bind:spanX="1" @click.native="getValue" />
    <Boton value="9" v-bind:spanX="1" @click.native="getValue" />
    <Boton ref="operando" value="*" v-bind:spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="0" v-bind:spanX="1"  @click.native="getValue"/>
    <Boton id="igual" ref="igual" value="=" v-bind:spanX="2" deResultado=true :desactivado=isIgualDisabled @click.native="getValue" />
    <Boton ref="operando" value="/" v-bind:spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>

</div>
</template>

<script>
import Boton from '@/components/Boton.vue'

export default {
    name: 'Teclado', 
    data:function(){
        return {
            operando1: '',
            operando2: ''
        }
    },
    props: {},
    computed:{

        // Si operando1 tiene algún valor retorna verdadero la activación del operador
        isDisabled: function(){
            return (this.operando1.length)? false : true
        },
        
        // Si operando2 tiene algún valor retorna verdadero la activación del igual
        isIgualDisabled: function(){
            return (this.operando2.length)? false : true
        }
    },
    methods:{

        getValue: function(e){

			// Tomo el value del botón presionado
            let valor = e.target.defaultValue

            // Si se cliquea por fuera del input en si
            if(e.target.nodeName == "DIV"){
                valor = e.target.firstChild.defaultValue
            }

			// Emito el valor a Calculadora
            this.$emit('enviaValorUp',valor)

        }

    },
    components:{
        Boton
    }
}
</script>