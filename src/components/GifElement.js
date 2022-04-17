import React from 'react';
import PropTypes from 'prop-types';

function GifElement({ id, url, title, animation_delay = 0 }) {
  
  return (
    <div className='thumbCard animate__animated animate__fadeIn animate__slow'>
        <img src={url} alt={title} />
        
        <p>{title}</p>
    </div>
  )
}

GifElement.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default GifElement
