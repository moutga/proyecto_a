import { mount, shallowMount } from '@vue/test-utils'
import Boton from '@/components/Boton.vue'

describe("Testeo de Boton", function(){

  
  test('El texto del botón debe ser el que se pasa por propiedad value', function(){

    const value = '1'

    // wrapper es el elemento a testear
    const wrapper = shallowMount(Boton,{
      propsData: {
        value: value
      }
    });

    // input es el elemento input dentro del wrapper
    const input = wrapper.find('input')

    // Que el valor del input sea igual a value de las props del elemento
    //expect(input.attributes('value')).toBe(value)

    // Que el valor del atributo value del input renderizado coincida con la prop
    expect(input.html()).toContain('value="'+value+'"')
   
  });
  

  test("Al presionar el botón, se debe disparar un evento que pase como argumento el valor del propiedad value",async function(){

    const value = '9'

    const w = shallowMount(Boton,{
      propsData: {
        value: value,
      }
    });

    const boton = w.find('input')

    // Simulo la función alClick
    w.vm.alClick = jest.fn()
    
    // Simulo el click del botón
    await boton.trigger('click')

    // Que se haya llamado a la función alClick con value como parámetro
    expect(w.vm.alClick).toHaveBeenCalledWith(value)

  });

})
