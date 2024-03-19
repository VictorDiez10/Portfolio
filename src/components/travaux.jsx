import '../styles/travaux.scss';
import Modal from './modal';
import booki from '../assets/site/booki.png';

export default function Travaux() {
  return (
    <section id="travaux">
      <h2>Mes Travaux</h2>
            <div className='travaux'>
              {works.map((work)=> (
                <Modal img={work.image} titre={work.titre} mission={work.mission} outil={work.outil}/>
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
  }
]