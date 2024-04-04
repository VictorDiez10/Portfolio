import React from 'react'
import '../styles/card.scss';
import Tilt from './tilt.jsx';

export default function card({title, img, outil}) {
    const options = {
        speed: 1000,
    };
        
    return (
        <Tilt className="card" data-tilt options={options}>
            <h3 className="title">{title}</h3>
            <div className="container-img"><img src={img} alt={img} /></div>
            <h4 className="outil-titre">Outils utilisés :</h4>
            <div className="outils">
            {outil.map((item, index) => {
        return <img key={`outil-${index}`} className="outil" src={item} />
    })}
            </div>
        </Tilt>
    )
}
