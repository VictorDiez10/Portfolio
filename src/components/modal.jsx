import { useState } from 'react'
import '../styles/modal.scss'
import croix from "../assets/icon/fermer.png"

export default function modal({img, titre, outil, mission, lien}) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }

        const [isShown, setIsShown] = useState(false);
    return (
        <>

        <div className="img-btn-modal">  
        
            <img src={img} alt="#"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            />
            {/* {isShown && ( */}
        <div className='hover'>
            <div className="hover-titre">{titre}</div>
            <div className="hover-button">
                <button className="button-modal"
                onClick={toggleModal}
                >Voir plus</button>
            </div>
        </div>
        {/* )} */}
        </div>
         
        
        {modal && (
            <div className="modal">
            <div className="overlay"
            onClick={toggleModal}
            ></div>
            <div className="modal-content">
                <div className="modal-img" >
                    <img src={img} alt="" />
                </div>
                <div className="modal-flex">
                    <div className="modal-info">
                        <h3 className='modal-titre'>{titre}</h3>
                        <div className="modal-mission-title">Mission: </div>
                        <div className="modal-mission">{mission}</div>
                        <div className="modal-outils-title">Outils utilisés: </div>
                            <div className="modal-outils">
                                {outil.map((item, index)=> {
                                    return  <div key={`outil-${index}`} className="modal-outil">{item}</div>
                                })}
                            </div>
                    
                
                <img 
                src={croix}
                className="close-modal"
                onClick={toggleModal}
                ></img>
                <a href={lien} target='_blank'>Découvrir</a>
                </div>
                </div>
            </div>
        </div>
        )}
        
        </>
    )
}
