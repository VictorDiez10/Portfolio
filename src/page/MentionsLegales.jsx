import React from 'react'
import Header from '.././components/header';
import Footer from '.././components/footer';
import '../styles/_settings.scss';

export default function MentionsLegales() {
    return (
        <>
        <Header/>
        <main className='mentions'>
            <div className="legales">
        <h2>MENTIONS LEGALES</h2>

<p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, il est précisé aux utilisateurs du site Victor Diez l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>

<h2>Edition du site</h2> 

<p>Le présent site, accessible à l’URL portfolio-theta-gray-79.vercel.app (le « Site »), est édité par :

Victor Diez, de nationalité Française (France), né(e) le 12/04/2003,</p> 


<h2>Hebergement</h2>

<p>Le Site est hébergé par la société Vercel, situé Vercel Inc. 440 N Barranca Ave #4133 Covina, CA 91723.</p>

<h2>Directeur de publication</h2> 

<p>Le Directeur de la publication du Site est Victor Diez.</p>

<h2>Nous contacter</h2> 

<p>
Par email : victordiez1@gmail.com
</p>

<h2>Generation des mentions legales par Legalstart.</h2>


</div>
        </main>
        <Footer/>
        </>
    )
}
