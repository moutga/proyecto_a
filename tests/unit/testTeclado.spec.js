import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
//import Vuex from 'vuex'
import Teclado from '@/components/Teclado.vue'
import Boton from '@/components/Boton.vue'



describe("Testeo de teclado y operaciones", function(){

    /*
    test("Botones de operadores e igual deshabilitados hasta entrar un valor",function(){

        // wrapper es el elemento a testear
        const w = shallowMount(Teclado,{
            propsData: {
            },
            mocks: {
                $store: {
                  state: {
                    operando1: '',
                    operando2: ''
                  }
                }
            }
        });

        const operadores = w.findComponent({ref:'operando'})

        //console.log(operadores.html());
        // Que el html del botón operador esté desactivado
        expect(operadores.html()).toContain('desactivado="true"')

    });

    test("Botones de igual habilitado al ingresar los dos valores",function(){

        // wrapper es el elemento a testear
        const w = shallowMount(Teclado,{
            propsData: {
            },
            mocks: {
                $store: {
                  state: {
                    operando1: '6',
                    operando2: '6'
                  }
                }
            },
        });

        const igual = w.findComponent({ref:'igual'})

        //console.log(igual.html());
        // Que el html del botón operador esté desactivado
        expect(igual.html()).not.toContain('desactivado="true"')

    });
    */

    test("Calcular se ejecuta al presionar =",function(){

        // wrapper es el elemento a testear
        const w = shallowMount(Teclado,{
            propsData: {
            },
            mocks: {
                $store: {
                  state: {
                    operando1: '6',
                    operando2: '6'
                  }
                }
            },
        });

        const value = '='
        const z = shallowMount(Boton,{
            propsData: {
                value: value
            }
        })
        z.vm.calcular = jest.fn()

        const igual = w.findComponent({ref:'igual'})

        igual.trigger('click')
        //console.log(igual.trigger('click'));

        // Que se haya llamado a la función alClick con value como parámetro
        expect(z.vm.calcular).toHaveBeenCalledWith({'6','6','sumar'})

    });

})