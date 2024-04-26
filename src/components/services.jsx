import '../styles/services.scss';
import Card from './card';
import logiciel from '../assets/icon/n-pc.png';
import server from '../assets/icon/n-serveur.png';
import crayon from '../assets/icon/crayon-r.png';
import html from '../assets/icon/htmlt.png';
import css from '../assets/icon/cssz.png';
import js from '../assets/icon/js.png';
import react from '../assets/icon/React.png';
import express from '../assets/icon/expressnt.png';
import mongodb from '../assets/icon/mongodbt.png';
import node from '../assets/icon/node-js.png';
import gimp from '../assets/icon/gimp.png';
import figma from '../assets/icon/Figma-logo.png';

export default function Services() {

    return (
        <section id="services">
            <h2>Mes Services</h2>
            <div className='services'>
                {data.map((item)=> (
                    <Card key={item.title} title={item.title} img={item.img} outil={item.outil} />
                ))}
            </div>
        </section>
    )
}

const data = [
    {
        title: "Front-end",
        img: logiciel,
        outil: [
            html, css, js, react
        ]
    },
    {
        title: "Back-end",
        img: server,
        outil: [
            node, express, mongodb
        ]
    },
    {
        title: "Design",
        img: crayon,
        outil: [
            gimp, figma
        ]
    }
]
