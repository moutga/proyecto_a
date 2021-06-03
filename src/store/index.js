import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operadores: ['','','operacion']
  },
  mutations: {
    // El segundo parámetro es un objeto para ampliar la cantidad permitida
    cambiaOperador(state,{operador,valor}){
      state.operadores[operador] = valor;
      console.log(state.operadores[0], state.operadores[1]);
    }
  },
  actions: {
    actionCambiaOperador(context,payload){
      context.commit("cambiaOperador", payload);
    }
  },
  modules: {
  },
  getters: {
    getOperador1: function(state){
      return state.operadores[0]
    },
    
    getOperador2: function(state){
      return state.operadores[1]
    }
  }
})
