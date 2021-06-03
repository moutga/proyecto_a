<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{operadores[0]}} 
    <div>

      <div>

        <Teclado :operando1=operadores[0] :operando2=operadores[1] />

      </div> 

    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import Boton from '@/components/Boton.vue'
import Teclado from '@/components/Teclado.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapState(['operadores']),

    operador1 : function(){
      return this.operadores[0]
    },
    operador2 : function(){
      return this.operadores[1]
    }
  },
  components: {
    //HelloWorld,
    //Boton,
    Teclado
  }
} 
</script>

<style>
.justify-content-center{justify-content: center;}
.row{display:flex;flex-wrap:wrap}
.w-100{width:100%}
</style>