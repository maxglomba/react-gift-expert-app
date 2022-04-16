const apiKey = process.env.GIPHY_API_KEY || '';
const apiSearchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}`;


const getGifs = async (category, quantity = 1) => {

    const result = await fetch(`${apiSearchUrl}&q=${ encodeURI(category)}&limit=${quantity}&lang=es`);
    const { data } = await result.json();
    let imagesInfo = data.map(dataImage => {
        return {
            id: dataImage.id,
            url: dataImage.images?.downsized_medium.url,
            title: dataImage.title
        };
    })
    return imagesInfo;
}

export {
    getGifs
}