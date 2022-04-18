import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en funcion useFetchGifs', () => {
    
    const params = { category: 'naruto', quantity: 10 };



    test('debe inicializarse con arreglo de imagenes vacio y loading en true', async () => {
        const { result, waitForNextUpdate} = renderHook(() => useFetchGifs(params.category, params.quantity))
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('debe retornar un arreglo de imagenes y loading en false', async ( ) => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( params.category, params.quantity) );
        await waitForNextUpdate();

        const { data, loading } = result.current;
        expect( data.length ).toBe( params.quantity );
        expect( loading ).toBe( false );
    })


})
