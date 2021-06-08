import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    soperando1: '',
    soperando2: '',
    soperador: 'operacion'
  },
  mutations: {
    setOperando1(state,valor){
      state.soperando1 = valor;
      // console.log('store ' + state.operando1, state.operando2, state.operador)
    },
    setOperando2(state,valor){
      state.soperando2 = valor;
      // console.log('store ' + state.operando1, state.operando2, state.operador)
    },
    setOperador(state,valor){
      state.soperador = valor;
      // console.log('store ' + state.operando1, state.operando2, state.operador)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
  }
})
