<template>
<div class="losBotones row justify-content-center">

    <div style="" class="w-100">{{operando1}} {{(operador!='operacion')?operador:null}} {{operando2}} = {{resultado}}</div>

    <div class="w-100"></div>
    <div class="row">
    <Boton value="1" spanX="1" @click.native="getValue" />
    <Boton value="2" spanX="1" @click.native="getValue" />
    <Boton value="3" spanX="1" @click.native="getValue" />
    <Boton ref="operando" value="+" spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="4" spanX="1" @click.native="getValue" />
    <Boton value="5" spanX="1" @click.native="getValue" />
    <Boton value="6" spanX="1" @click.native="getValue" />
    <Boton ref="operando" value="-" spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="7" spanX="1" @click.native="getValue" />
    <Boton value="8" spanX="1" @click.native="getValue" />
    <Boton value="9" spanX="1" @click.native="getValue" />
    <Boton ref="operando" value="*" spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
    </div>
    <div class="w-100"></div>
    <div class="row">
    <Boton value="0" spanX="1"  @click.native="getValue"/>
    <Boton id="igual" ref="igual" value="=" spanX="2" deResultado=true :desactivado=isIgualDisabled @click.native="getValue" />
    <Boton ref="operando" value="/" spanX="1" deOperacion=true :desactivado=isDisabled @click.native="getValue" />
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
            operando2: '',
            operador: 'operacion',
            resultado: 0
        }
    },
    props:{
    },
    computed:{

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

        deOperacion: function(caracter){
            const operadores = {
                '+': true,
                '-': true,
                '*': true,
                '/': true
            }
            return operadores[caracter] || false
        },

        deResultado: function(caracter){
            return caracter == '='
        },

        getValue: function(e){
            //console.log('Apretaste ' + this.value, 'Es operacion? ' + this.deOperacion, 'Es resultado? ' + this.deResultado)
            //console.log(e.target)
            const valor = e.originalTarget.defaultValue

            // Objeto de traducción de botón a operación
            const queHacer = {
                '+' : 'sumar',
                '-' : 'restar',
                '*' : 'multiplicar',
                '/' : 'dividir',
                defecto : 'operacion'
            }

            // Si el botón no es de operación ni de resultado
            if( !this.deOperacion(valor) && !this.deResultado(valor) ){
                
                // Si la operación guardada ha cambiado entonces modifico el operando2
                if(this.operador != 'operacion'){

                    //this.seoperando2( this.operando2 + valor )
                    this.operando2 += valor

                // Si la operación guardada NO ha cambiado entonces modifico el operando1
                } else {

                    // this.seoperando1( this.operando1 + valor )
                    this.operando1 += valor

                }
                
            // Si el botón ES de operación cambio la operación guardada a la correspondiente
            } else {

                this.operador = queHacer[valor] || this.operador

            }

            // Si el botón es = calcula en base al operador y el objeto de soluciones
            // luego reinicia operandos y operador 
            if( this.deResultado(valor) ){

                this.calcular(this.operando1,this.operando2,this.operador)

            }

        }, 

        calcular: function(a,b,operador){

            // Objeto de operaciones
            const soluciones = {
                'o1': parseInt(a),
                'o2': parseInt(b),
                sumar(){
                    return this.o1+this.o2
                },
                restar(){
                    return this.o1-this.o2
                },
                multiplicar(){
                    return this.o1*this.o2
                },
                dividir(){
                    return this.o1/this.o2
                },
            }

            //console.log('El resultado es: ' + soluciones[operador]() )
            this.operando1 = ''
            this.operando2 = ''
            this.operador = 'operacion'
            this.resultado = soluciones[operador]()

        }

    },
    components:{
        Boton
    }
}
</script>