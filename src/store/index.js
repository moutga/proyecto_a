import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operando1: '',
    operando2: '',
    operador: 'operacion'
  },
  mutations: {
    setOperando1(state,valor){
      state.operando1 = valor;
      console.log('store ' + state.operando1, state.operando2, state.operador)
    },
    setOperando2(state,valor){
      state.operando2 = valor;
      console.log('store ' + state.operando1, state.operando2, state.operador)
    },
    setOperador(state,valor){
      state.operador = valor;
      console.log('store ' + state.operando1, state.operando2, state.operador)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getOperando1: function(state){
      return state.operando1
    },
    
    getOperando2: function(state){
      return state.operando2
    }
  }
})
