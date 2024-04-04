import '../styles/services.scss';
import Card from './card';
import logiciel from '../assets/icon/logiciel-r.png';
import server from '../assets/icon/serveur-r.png';
import crayon from '../assets/icon/crayon-r.png';
import html from '../assets/icon/html.png';
import css from '../assets/icon/cssz.png';
import js from '../assets/icon/js.png';
import react from '../assets/icon/React.png';

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
            "Node", "Express", "NoSQL", "MongoDB"
        ]
    },
    {
        title: "Design",
        img: crayon,
        outil: [
            "GIMP", "Figma"
        ]
    }
]
