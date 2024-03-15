import React from 'react'
import '../styles/card.scss'

export default function card({title, img, outil}) {
    return (
        <div className="card">
            <h3 className="title">{title}</h3>
            <div className="container-img"><img src={img} alt={img} /></div>
            <div className="outils">
                <div className="outil">{outil}</div>
            </div>
        </div>
    )
}
