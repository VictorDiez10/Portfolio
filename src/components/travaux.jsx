import '../styles/travaux.scss';
import Modal from './modal';
import booki from '../assets/site/booki-r.png';
import nina from '../assets/site/nina-carducci-r.png';
import sophie from '../assets/site/sophie-bluel-r.png';
import kasa from '../assets/site/kasa-r.png';
import monvieuxgrimoire from '../assets/site/mon-vieux-grimoire-r.png'

export default function Travaux() {
  return (
    <section id="travaux">
      <h2>Mes Travaux</h2>
            <div className='travaux'>
              {works.map((work)=> (
                <Modal  key={work.titre} img={work.image} titre={work.titre} mission={work.mission} outil={work.outil} lien={work.lien}/>
                ))}
            </div>
        </section>
  )
}

const works = [
  {
    image: booki,
    titre: "Booki",
    lien: "https://github.com/VictorDiez10/Projet-2-html-css",
    mission: "Développement du front-end du site de location d’hébergements Booki.",
    outil: [
      "HTML", "CSS"
    ]
  },
  {
    image: sophie,
    titre: "Sophie-Bluel",
    lien: "https://github.com/VictorDiez10/Projet_3_javascript",
    mission: "Créer une page dynamiquement en utilisant JavaScript avec une API.",
    outil: [
      "HTML", "CSS", "JS"
    ]
  },
  {
    image: nina,
    titre: "Nina-Carducci",
    lien: "https://github.com/VictorDiez10/Projet_5",
    mission: "Débuggez et optimisez un site de photographe. ",
    outil: [
      "HTML", "CSS", "JS", "JQuery"
    ]
  },
  {
    image: kasa,
    titre: "Kasa",
    lien: "https://github.com/VictorDiez10/projet_6_Kasa",
    mission: "Créez une application web de location immobilière avec React. ",
    outil: [
      "React", "SCSS",
    ]
  },
  {
    image: monvieuxgrimoire,
    titre: "Mon Vieux Grimoire",
    lien: "https://github.com/VictorDiez10/p7-code",
    mission: "Développez le back-end d'un site de notation de livres. ",
    outil: [
      "NodeJS", "Express", "MongoDB"
    ]
  },
]