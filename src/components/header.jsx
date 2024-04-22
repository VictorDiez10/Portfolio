import PC from "../assets/logo/logo-pc-cercle-couleur.png";
import "../styles/header.scss";
import MenuBurger from "./MenuBurger";


export default function header() {
    
    return (
        <header className="header">
        <div className="sous-header">
            
            <img src={PC} alt="Logo-Victor" className="logo-victor"/>
            <MenuBurger />
            <nav className="nav-links" >
                <ul>
                    <li>
                        <a className="link" href="#about">À propos</a>
                    </li>
                    <li>
                        <a className="link" href="#services">Mes services</a>
                    </li>
                    <li>
                        <a className="link" href="#travaux">Mes travaux</a>
                    </li>
                    <li>
                        <a className="link" href="#contact">Me contacter</a>
                    </li>
                </ul>
                
            </nav>
        </div>
    </header>
    )
}
