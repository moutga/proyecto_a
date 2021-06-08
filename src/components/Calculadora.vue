<template>
<div>
    <Pantalla />
    <Teclado />
</div>
</template>

<script>
import Teclado from '@/components/Teclado.vue'
import Pantalla from '@/components/Pantalla.vue'

export default {
    data: function(){
        return {

        }
    },
    props: {},
    methods: {},
    computed: {},
    components: {
        Teclado,
        Pantalla
    }
}
</script>

<style scoped>

</style>