import React from 'react';
import { shallow } from 'enzyme'
import GifElement from '../../components/GifElement';


describe('Pruebas en componente <GifElement />', () => { 
    const url = 'https://media4.giphy.com/media/yovOUEWBV2R46yrQ0B/giphy.gif?cid=b89f5553wrq1wehi68egkpgpghy2ab63egohqzk6t49644ym&rid=giphy.gif&ct=g';
    const title = 'Test title';
    const wrapper = shallow(<GifElement url={url} title={title} />);

    test('Debe renderizar el componente correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe colocar el titulo de imagen correctamente', () => { 
        const titleText = wrapper.find('p').text().trim();
        expect(titleText).toBe(title);
    })

    test('Debe colocar el url y alt de imagen correctamente', () => { 
        const {src, alt} = wrapper.find('img').props();
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe tener la animacion de fadeIn', () => { 
        const hasClass = wrapper.find('div').hasClass('animate__fadeIn');
        expect(hasClass).toBe(true);
    })

 })