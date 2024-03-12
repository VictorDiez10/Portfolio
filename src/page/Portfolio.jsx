import React from 'react'
import Header from '../components/header'
import Presentation from '../components/presentation'
import About from '../components/about'
import Services from '../components/services'
import Travaux from '../components/travaux'
import Contact from '../components/contact'
import Footer from'../components/footer'
import "../styles/portfolio.scss"

export default function Portfolio() {

    return (
        <>
            <Header/>
            <main>
                <Presentation/>
                <About/>
                <Services/>
                <Travaux/>
                <Contact/>
            </main>
            
        </>
    )
}
