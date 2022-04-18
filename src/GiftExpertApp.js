import React, { useState } from 'react'
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid';
import PropTypes from 'prop-types'

const GiftExpertApp = ( {defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories);

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

GiftExpertApp.propTypes = {
    defaultCategories: PropTypes.array
}

export default GiftExpertApp;
