// import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifElement from './GifElement';

const GifGrid = ({ category, quantity = 5 }) => {
    category = category.charAt(0).toUpperCase() + category.substring(1, category.length);

    const { data: images, loading } = useFetchGifs(category, quantity);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            <p className='animate__animated animate__flash'>{loading ? 'Cargando...' : !images.length && 'No se encontro ninguna imagen'}</p>
            <div className='card-grid'>
                {
                    images.map((imageData,k) => (
                        <GifElement
                            key={imageData.id}
                            {...imageData}
                            animation_delay={k}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;