import React from 'react';
import { shallow } from 'enzyme'
import GiftExpertApp from '../GiftExpertApp';

describe('pruebas en componente <GiftExpertApp />', () => { 
    const categories = ['naruto', 'samurai x'];
    const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);

    test('debe renderizar el componente <GiftExpertApp /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('debe obtener titulo de aplicación "Gift Expert App"', () => { 
        const contentValue = wrapper.find('h2').text();
        expect(contentValue).toBe('Gift Expert App');
    })

    test('enviarse a <CategoryAdd /> las categorias actuales y la funcion de agregar', () => { 
        expect(wrapper.find('CategoryAdd').prop('categories')).toBe(categories);
        expect(typeof wrapper.find('CategoryAdd').prop('setCategories')).toBe('function');
    })

    test('debe obtener las listas de imagenes de todas las categorias buscadas', () => { 
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })

 })