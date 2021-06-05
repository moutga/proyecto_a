<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>

      <div>
        
        <Pantalla />

        <Teclado /> 

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
import Pantalla from '@/components/Pantalla.vue'
//import {mapState} from 'vuex'

export default {
  name: 'Home',
  data:function(){
    return {}
  },
  computed:{

  },
  components: {
    //HelloWorld,
    //Boton,
    Teclado,
    Pantalla
  }
} 
</script>

<style>
.justify-content-center{justify-content: center;}
.row{display:flex;flex-wrap:wrap}
.w-100{width:100%}
</style>