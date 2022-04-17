import React from 'react';
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid';


describe('Pruebas en componente <GifGrid />', () => { 
    const wrapper = shallow(<GifGrid category='naruto'/>);

    test('Debe renderizar el componente correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe obtener mensaje Cargando...', () => { 
        const msg = wrapper.find('p').text();
        console.error({msg})
        expect(msg).toBe('Cargando...');
    })
 })