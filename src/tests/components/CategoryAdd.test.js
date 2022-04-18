import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme"
import CategoryAdd from "../../components/CategoryAdd"

describe('Pruebas en componente <CategoryAdd />', () => { 
    const categories = [];
    const setCategories = jest.fn();
    let wrapper =  shallow(<CategoryAdd categories={categories} setCategories={setCategories} />);
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd categories={categories} setCategories={setCategories} />);
    })

    test('debe renderizarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar el state en base a la caja de texto', () => { 
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target:{value} });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    test('NO debe de postear la informacion en submit si tiene menos de 2 caracteres', () => { 
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect( setCategories ).not.toHaveBeenCalled()

     })

     test('debe de llamar el setCategories y limpiar la caja de texto', () => { 
         //simulo llenar el input
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target:{value} });
        expect(wrapper.find('p').text().trim()).toBe(value);

        //simulo el submit
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function));

        //controlo que se haya vaciado el input
        expect(wrapper.find('input').prop('value')).toBe('');
     })

})
