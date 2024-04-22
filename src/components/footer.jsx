import React from 'react';
import "../styles/footer.scss";
import { Link } from 'react-router-dom';

export default function footer() {
  return (<>
    <footer className='footer'>
      <div className='realised'>Réalisé par Victor Diez</div>
      <div className="point"></div>
      <Link className="mentions-legal" to='Mentions-legales'>Mentions Légales</Link>
    </footer>
    </>
  )
}
