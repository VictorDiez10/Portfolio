import PC from "../assets/logo/logo-pc-cercle-couleur.png";
import "../styles/header.scss";


export default function header() {
    return (
        <header className="header">
        <div className="sous-header">
            <img src={PC} alt="Logo-Victor" className="logo-victor"/>
            <nav className="nav-links">
                <ul>
                    <li>
                        <a className="link" href="">À propos</a>
                    </li>
                    <li>
                        <a className="link" href="">Mes services</a>
                    </li>
                    <li>
                        <a className="link" href="">Mes travaux</a>
                    </li>
                    <li>
                        <a className="link" href="">Me contacter</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
