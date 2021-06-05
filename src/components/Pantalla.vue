<template >
<div class="laPantalla" @click="focusInput" >
    <div class="acumulado">{{acumulado}}</div>
    <div class="operando">{{operando}}</div>
    <input :value=operando @keyup="agregarTexto"  />
</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Pantalla',
    data: function(){
        return {
            operando: '0',
            acumulado: '',
            permitidas: '0123456789+-*/=',
            operandos: '+-*/='
        }
    },
    props:{},
    computed:{},
    methods:{
        ...mapMutations(['setOperando1','setOperando2','setOperador']),

        agregarTexto: function(texto){
            
            // Si el caracter existe dentro de los permitidos...
            if( this.permitidas.indexOf(texto.key) >= 0 ){
                //console.log(texto.key)

                // Si se ingresa un operando o =
                if(this.operandos.indexOf(texto.key) >= 0){

                    // Cuando la tecla sea = concateno el acumulado con operando + =
                    if(texto.key == '='){

                        this.acumulado += this.operando + texto.key
                        //this.setOperando2(this.operando)

                    // Si no es el = reemplazo el valor del acumulado
                    } else {

                        this.acumulado = this.operando + texto.key

                    }

                    // Reseteo el operando
                    this.operando = '0'

                // Si no es un operando
                } else {

                    this.operando += texto.key

                    // Si el primer caracter del operando es 0 lo quito
                    if(this.operando[0] === '0'){                
                        this.operando = this.operando.substring(1)
                    }

                    //this.setOperando1(this.operando)

                }

            // Tirar error si se tipea un símbolo no permitido
            } else {

                // Descarto las teclas especiales
                const teclasEspeciales = ['Shift','Enter','Control','Alt','AltGraph']
                if( teclasEspeciales.indexOf(texto.key) < 0 ){

                    console.log(texto.key)
                    throw new Error('Caracter no permitido');
                }

            }

        },

        // Enfocar el input al clickear la pantalla
        focusInput: function(){
            //console.log(this.$el.querySelector('input'));
            this.$el.querySelector('input').focus()
        }
    },
    mounted: function(){
       this.$el.querySelector('input').focus()
    }
}
</script>

<style scoped>
.laPantalla{position:relative;border-radius:0.1em;background:#999;color:white;padding: 0 0.4em 0.4em;font-family:consolas;border:1px solid #888;width:180px;margin:0 auto 4px;text-align: right;}
.acumulado{}
.operando{font-size: 2em;background: none;border:none;color:white;text-align:right;width:100%;font-family: inherit;}
input{outline:none;opacity:0;height: 1px;position:absolute;width: 1px;left: 0;}
</style>