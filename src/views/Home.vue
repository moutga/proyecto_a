<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div>

      <div>
        <Boton spanX="3.5" spanY="1" value="6" /> 
        <Boton spanX="3.5" spanY="1" value="8" /> 
      </div>

    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Boton from '@/components/Boton.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld,
    Boton
  }
} 
</script>