import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en componente <GifGrid />', () => {
    const category = 'naruto';

    test('Debe renderizar el componente correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe obtener mensaje Cargando...', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />);
        const msg = wrapper.find('p').text().trim();
        expect(msg).toBe('Cargando...');
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{ id: '1', title: 'Naruto test', url: 'http://localhost:3000/naruto.png' }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);

        //que exista un elemento de imagen renderizado
        expect(wrapper.find('GifElement').length).toBe(gifs.length);

        //que no exista el parrafo con el texto de cargando...
        expect(wrapper.find('p').exists()).toBe(false);

    })

})