import React from 'react'
import '../styles/card.scss'

export default function card({title, img, outil}) {
    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <div className="container-img"><img src={img} alt={img} /></div>
            <div className="outils">
            {outil.map((item, index) => {
        return <div key={`outil-${index}`} className="outil">{item}</div>
    })}
            </div>
        </div>
    )
}
