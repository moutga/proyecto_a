<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>

      <Calculadora />

    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Calculadora from '@/components/Calculadora.vue'

export default {
  name: 'Home',
  data:function(){
    return {}
  },
  computed:{},
  components: {
    Calculadora
  }
} 
</script>

<style>
.justify-content-center{justify-content: center;}
.row{display:flex;flex-wrap:wrap}
.w-100{width:100%}
</style>