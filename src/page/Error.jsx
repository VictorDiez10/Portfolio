import React from 'react'
import '../styles/error.scss';
import Header from '.././components/header';
import Footer from '.././components/footer';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
    <>
    <Header/>
    <div className="erreur">
        <h2 className="titre-error">Erreur</h2>
        <div className="info-error">Désolé cette page n'existe pas</div>
        <Link className="info-error" to="/">Veuillez revenir sur la page d'acceuil</Link>
    </div>
    <Footer/>
    </>
    )
}
