import { useState } from 'react'
import '../styles/modal.scss'
import { Link } from 'react-router-dom';

export default function modal({img, titre, outil, mission, lien}) {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <>
        <div className="img-btn-modal"
        onClick={toggleModal}
        // onMouseLeave={z}
        >
            <img src={img} alt="#" />
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
                        <div className="modal-mission">{mission}</div>
                            <div className="modal-outils">
                                {outil.map((item, index)=> {
                                    return  <div key={`outil-${index}`} className="modal-outil">{item}</div>
                                })}
                            </div>
                    </div>
                
                <button 
                className="close-modal"
                onClick={toggleModal}
                >Close</button>
                <a href={lien} target='_blank'>Découvrir</a>
                </div>
            </div>
        </div>
        )}
        
        </>
    )
}
