import '../styles/travaux.scss';
import Modal from './modal';
import booki from '../assets/site/booki.png';
import nina from '../assets/site/nina-carducci.png';
import sophie from '../assets/site/sophie-bluel.png';
import kasa from '../assets/site/kasa.png';
import monvieuxgrimoire from '../assets/site/mon-vieux-grimoire.png'

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
    mission: "",
    outil: [
      "HTML", "CSS"
    ]
  },
  {
    image: sophie,
    titre: "Sophie-Bluel",
    lien: "https://github.com/VictorDiez10/Projet_3_javascript",
    mission: "",
    outil: [
      "HTML", "CSS", "JS"
    ]
  },
  {
    image: nina,
    titre: "Nina-Carducci",
    lien: "https://github.com/VictorDiez10/Projet_5",
    mission: "",
    outil: [
      "HTML", "CSS", "JS", "JQuery"
    ]
  },
  {
    image: kasa,
    titre: "Kasa",
    lien: "https://github.com/VictorDiez10/projet_6_Kasa",
    mission: "",
    outil: [
      "React", "SCSS",
    ]
  },
  {
    image: monvieuxgrimoire,
    titre: "Mon Vieux Grimoire",
    lien: "https://github.com/VictorDiez10/p7-code",
    mission: "",
    outil: [
      "NodeJS", "Express", "MongoDB"
    ]
  },
]