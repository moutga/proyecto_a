<template>
  <div class="laPantalla" @click="focusInput">
    <div class="acumulado">{{ acumulado }}</div>
    <div class="operando">{{ operando }}</div>
    <input ref="input" :value="operando" @keyup="agregarTexto" />
  </div>
</template>

<script>

export default {
  name: "Pantalla",
  data: function() {
    return {
      operando: "0",
      acumulado: "",
      permitidas: "0123456789+-*/=",
      operandos: "+-*/=",
    };
  },
  props: {},
  computed: {},
  methods: {

    agregarTexto: function(texto) {

      // Filtro si la entrada es de teclado o Teclado
		if(texto.keyCode){
			texto = texto.key
		}

      // Si el caracter existe dentro de los permitidos...
		if (this.permitidas.indexOf(texto) >= 0) {
        //console.log(texto.key)

			// Si se ingresa un operando o =
			if (this.operandos.indexOf(texto) >= 0) {

				// Cuando la tecla sea = concateno el acumulado con operando + =
				if (texto == "=") {

					// al acumulado añado operando actual más el =
					this.acumulado += this.operando + texto;

					// en segundo lugar le añado el resultado calculado sobre acumulado
					this.acumulado += this.resultado()

					// Emito que entró el =
					this.$emit('igual',this.acumulado)
					//this.acumulado = ''

				// Si no es el = reemplazo el valor del acumulado
				} else {

					this.acumulado = this.operando + texto;

				}

				// Reseteo el operando
				this.operando = "0";

			// Si no es un operador
			} else {

				this.operando += texto;

				// Emite el operando1 a la calculadora si no hay nada acumulado
				// o si el acumulado presenta un = (prueba que ya se resolvió)
				// operación previa e inicia una nueva. Caso contrario emite el
				// operando2
				if( this.acumulado.length > 0 && this.acumulado.indexOf('=') < 0 ){
					this.$emit('subeOperando2',this.operando)
				} else {
					this.$emit('subeOperando1',this.operando)
				}
				

				// Si el primer caracter del operando es 0 lo quito
				if (this.operando[0] === "0") {
					this.operando = this.operando.substring(1);
				}

			}

      // Tirar error si se tipea un símbolo no permitido
		} else {
			// Descarto las teclas especiales
			const teclasEspeciales = [
			"Shift",
			"Enter",
			"Control",
			"Alt",
			"AltGraph",
			];

			if (teclasEspeciales.indexOf(texto) < 0) {

				throw new Error("Caracter no permitido (" + texto + ")");

			}
		}
    },

    // Enfocar el input al clickear la pantalla
    focusInput: function() {

		this.$refs.input.focus();

    },

    resultado: function(){

      // cadena de acumulado previo al =
      let operacion = this.acumulado.split('=')[0]
      let operando = ''

      // Rescato el operando de la cadena acumulado
      for( let i = 0; i<operacion.length; i++ ){

        if( this.operandos.indexOf(operacion[i]) >= 0 ){
          operando = operacion[i]
        }

      }

      let ambosOperadores = operacion.split(operando)

      const soluciones = {
        'o1': parseInt(ambosOperadores[0]),
        'o2': parseInt(ambosOperadores[1]),
        '+': function(){
            return this.o1+this.o2
        },
        '-': function(){
            return this.o1-this.o2
        },
        '*': function(){
            return this.o1*this.o2
        },
        '/': function(){
            return this.o1/this.o2
        },
      }

      return soluciones[operando]()

    }

  },
  
  // Enfocar el input al montarse el componente
  mounted: function() {
    //console.log(this.$refs.input);
    this.$refs.input.focus();
  }

};
</script>

<style scoped>
.laPantalla {
  position: relative;
  border-radius: 0.1em;
  background: #999;
  color: white;
  padding: 0 0.4em 0.4em;
  font-family: consolas;
  border: 1px solid #888;
  width: 180px;
  margin: 0 auto 4px;
  text-align: right;
}
.acumulado {
  height: 20px;
}
.operando {
  font-size: 2em;
  background: none;
  border: none;
  color: white;
  text-align: right;
  width: 100%;
  font-family: inherit;
}
input {
  outline: none;
  opacity: 0;
  height: 1px;
  position: absolute;
  width: 1px;
  left: 0;
}
</style>
