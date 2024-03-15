import PC from "../assets/logo/Logo-pc-cercle.png";
import "../styles/header.scss";


export default function header() {
    return (
        <header className="header">
        <div className="sous-header">
            <img src={PC} alt="Logo-Victor" className="logo-victor"/>
            <nav className="nav-links">
                <ul>
                    <li>
                        <a class="link" href="">À propos</a>
                    </li>
                    <li>
                        <a class="link" href="">Mes services</a>
                    </li>
                    <li>
                        <a class="link" href="">Mes travaux</a>
                    </li>
                    <li>
                        <a class="link" href="">Me contacter</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
