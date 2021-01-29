import React from 'react';
import image11 from '../../assets/amandagoflow-img11.JPG'

import './index.css'


const BigImage = () => {
    return (
        <div className="img-div">
            <h1 className="youtube-vid-head">Flow with me on Youtube</h1>
            <iframe className="home-big-img"  src="https://www.youtube.com/embed/Gz8Xo5aCQEQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
        </div>
    );
};

export default BigImage;