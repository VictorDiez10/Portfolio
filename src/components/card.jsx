import React from 'react'
import '../styles/card.scss';
import VanillaTilt from 'vanilla-tilt';
import { useEffect, useRef } from 'react';

export default function card({title, img, outil}) {

        
    return (
        <div className="card" data-tilt >
            <h3 className="title">{title}</h3>
            <div className="container-img"><img src={img} alt={img} /></div>
            <h4 className="outil-titre">Outils utilisés :</h4>
            <div className="outils">
            {outil.map((item, index) => {
        return <div key={`outil-${index}`} className="outil">{item}</div>
    })}
            </div>
            <script type="text/javascript" src="./src/components/vanilla-tilt.min.js"></script>
    <script>
	{VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 400
	})}
    </script>
        </div>
    )
}
