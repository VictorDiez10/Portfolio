import React, { useState } from 'react'
import '../styles/menuBurger.scss';


export default function menuBurger() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  }
  return (
    <>
    <div id="mySidenav" className={`sidenav ${isOpen ? "active" : ""}`}>
        <div id="closeBtn" className="close" onClick={toggleMenu}>×</div>
            <ul>
                <li><a href="#about" onClick={toggleMenu}>A propos</a></li>
                <li><a href="#services" onClick={toggleMenu}>Nos services</a></li>
                <li><a href="#travaux" onClick={toggleMenu}>Travaux</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </div>

<a href="#" id="openBtn" onClick={toggleMenu}>
  <span className="burger-icon">
    <span></span>
    <span></span>
    <span></span>
  </span>
</a>
</>
  )
}
