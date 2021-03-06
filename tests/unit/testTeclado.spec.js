import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
//import Vuex from 'vuex'
import Teclado from '@/components/Teclado.vue'
import Boton from '@/components/Boton.vue'



describe("Testeo de teclado y operaciones", function(){
  
    xit("Botones de operadores e igual deshabilitados hasta entrar un valor",function(){

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

    xit("Botones de igual habilitado al ingresar los dos valores",function(){

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
    
    xit("Calcular se ejecuta al presionar =", function(){

        const value = '='
        const deResultado = true
        const z = shallowMount(Boton,{
            propsData: {
                value: value,
                deResultado: deResultado
            },
            mocks: {
                $store: {
                  state: {
                    operando1: '6',
                    operando2: '6',
                    operador: 'sumar'
                  }
                }
            }
        })

        //const alClick = jest.fn()
        const calcular = jest.fn()
        z.vm.calcular = calcular

        //z.setMethods({ calcular });

        //const igual = w.findComponent({ref:'igual'})
        //const igual = z
        //console.log(igual)

        z.find('input').trigger('click')
        //console.log(igual.trigger('click'));

        // Que se haya llamado a la función alClick con value como parámetro
        expect(calcular).toHaveBeenCalled()

    });
    

})