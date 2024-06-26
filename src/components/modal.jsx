import { useState } from 'react'
import '../styles/modal.scss'

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

    return (
        <>

        <div className="img-btn-modal">  
        
            <img src={img} alt="#"
            />
            
        <div className='hover'>
            <div className="hover-titre">{titre}</div>
            <div className="hover-button">
                <button className="button-modal"
                onClick={toggleModal}
                >En Savoir Plus</button>
            </div>
        </div>
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
                    
                
                <div 
                
                className="close-modal"
                onClick={toggleModal}
                >×</div>
                <a href={lien} target='_blank'>Découvrir</a>
                </div>
                </div>
            </div>
        </div>
        )}
        
        </>
    )
}
