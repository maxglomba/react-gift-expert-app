import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategoryAdd = ( {categories, setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!categories.includes(inputValue.toLowerCase()) && inputValue.trim().length >2){
            setCategories([inputValue, ...categories]);
            setInputValue('');
        }
    }
    return (
        <form  onSubmit={handleSubmit}>
            <input 
                type='text'
                value= {inputValue}
                placeholder='Ingrese su busqueda' 
                id='searchText'
                onChange={handleChange}
            />
        </form>
    )


}

CategoryAdd.propTypes = {
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired,
}

export default CategoryAdd;