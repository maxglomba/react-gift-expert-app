import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en helper getGifs', () => {
    let images, emptyImages;
    const cantidad = 3;
    beforeAll(async () => {
        images = await getGifs('naruto', cantidad);
        emptyImages = await getGifs('', cantidad);
    })
    test('debo obtener imagenes con funcion getGifs', () => {
        expect(images.length > 0).toBe(true);
    })
    test('debo obtener la cantidad indicada por parametro', () => {
        expect(images.length).toBe(cantidad);
    })

    test('debo recibir 0 elementos si no envio categoria', () => {
        expect(emptyImages.length).toBe(0);
    })
})