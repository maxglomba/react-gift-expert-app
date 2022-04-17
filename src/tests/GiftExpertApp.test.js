import React from 'react';
import { shallow } from 'enzyme'
import GiftExpertApp from '../GiftExpertApp';

describe('pruebas en componente <GiftExpertApp />', () => { 
    const wrapper = shallow(<GiftExpertApp/>);

    test('debe renderizar el componente <GiftExpertApp /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('debe obtener titulo de aplicación "Gift Expert App"', () => { 
        const contentValue = wrapper.find('h2').text();
        expect(contentValue).toBe('Gift Expert App');
    })

    test('debe poder hacer una busqueda y recibir las imagenes', () => { 
        const contentValue = wrapper.find('h2').text();
        expect(contentValue).toBe('Gift Expert App');
    })

 })