<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>

      <div>
        
        <Teclado :ooperando1=a :ooperando2=b /> 

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
//import {mapState} from 'vuex'

export default {
  name: 'Home',
  data:function(){
    return {
      a : 4,
      b : 2
    }
  },
  computed:{

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