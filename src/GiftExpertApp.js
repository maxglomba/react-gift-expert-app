import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2>Gift Expert App</h2>
            <hr />
            <CategoryAdd categories={categories} setCategories={setCategories} />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;
