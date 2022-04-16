import React from 'react'

function GifElement({ id, url, title, animation_delay = 0 }) {
  
  return (
    <div className='thumbCard animate__animated animate__fadeIn animate__slow'>
        <img src={url} alt={title} />
        
        <p>{title}</p>
    </div>
  )
}

export default GifElement
