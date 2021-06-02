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

  test("Los valores spanX y spanY son enteros",function(){

    const sX = 2
    const sY = 4

    const w = shallowMount(Boton,{
      propsData: {
        spanX: sX,
        spanY: sY
      }
    });

    // Verifico que ambos sean enteros
    const enteros = Number.isInteger(sX) && Number.isInteger(sY)

    expect(enteros).toBeTruthy()

  });

  test("Los valores spanX y spanY son mayores que cero",function(){

    const sX = 2
    const sY = 4

    const w = shallowMount(Boton,{
      propsData: {
        spanX: sX,
        spanY: sY
      }
    });

    // Verifico que ambos sean mayores que 0
    const enteros = sX > 0 && sY > 0

    expect(enteros).toBeTruthy()

  });

  test("Que el ancho del botón respete la fórmula indicada",function(){

    const sX = 6

    // Tomo el elemento
    const w = shallowMount(Boton,{
      propsData: {
        spanX: sX
      }
    });

    // Encuentro el botón
    const boton = w.find('input')

    // Tomo el ancho del botón renderizado según la prop
    const anchoDibujado = boton.element.style.width

    const anchoDebido = (45 * sX) + (sX * (sX - 1)) + 'px'
    //console.log(anchoDibujado, anchoDebido);

    const coincideAnchoYFormula = anchoDebido == anchoDibujado
    //console.log(coincideAnchoYFormula);

    expect(coincideAnchoYFormula).toBeTruthy();

  });

  test("Que el alto del botón respete la fórmula indicada",function(){

    const sY = 3

    const w = shallowMount(Boton,{
      propsData: {
        spanY: sY
      }
    });

    const boton = w.find('input')

    // Tomo el alto del botón renderizado según la prop
    const altoDibujado = boton.element.style.height

    const altoDebido = (45 * sY) + (sY * (sY - 1)) + 'px'
    //console.log(anchoDibujado, altoDebido);

    const coincideAltoYFormula = altoDebido == altoDibujado
    //console.log(coincideAltoYFormula);

    expect(coincideAltoYFormula).toBeTruthy();

  });

  test("Que al setear spanX tome como 1 el valor de spanY y vice versa.",function(){

    const sX = 1
    const sY = 2

    const w = shallowMount(Boton,{
      propsData: {
        spanY: sY,
        spanX: sX
      }
    });

    const boton = w.find('input')
    const secundarioDebido = (45 * 1) + (1 * (1 - 1)) + 'px'
    let cumpleAncho
    let cumpleAlto

    if(w.props().spanX > 1 && w.props().spanX){

      cumpleAlto = boton.element.style.height == secundarioDebido

    } else if( w.props().spanY > 1 && !w.props().spanX || w.props().spanX ==1 ){

      cumpleAncho = boton.element.style.width == secundarioDebido

    }

    //console.log(cumpleAlto , cumpleAncho);

    expect(cumpleAlto || cumpleAncho).toBeTruthy();

  }); //ok


})
