import { useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category, quantity) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () =>{
        getGifs(category, quantity).then(data => setState({
            data,
            loading: false
        }));
    }, [category, quantity])
   

    return state;
}