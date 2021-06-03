import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operadores: [0,0,999]
  },
  mutations: {
    // El segundo parámetro es un objeto para ampliar la cantidad permitida
    cambiaOperador(state,{operador,valor}){
      state.operadores[operador] = valor;
      console.log(state.operadores[0], state.operadores[1]);
    }
  },
  actions: {
  },
  modules: {
  }
})
