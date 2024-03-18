import '../styles/services.scss';
import Card from './card';
import logiciel from '../assets/icon/logiciel.png';
import server from '../assets/icon/serveur.png';
import crayon from '../assets/icon/crayon.png'

export default function Services() {
    return (
        <section id="services">
            <div className="border-section"></div>
            <h2>Mes Services</h2>
            <div className='services'>
                {data.map((item)=> (
                    <Card key={item.title} title={item.title} img={item.img} outil={item.outil}/>
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
            "HTML", "CSS", "JS", "React"
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
