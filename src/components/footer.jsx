import React from 'react';
import "../styles/footer.scss";

export default function footer() {
  return (<>
    <footer className='footer'>
      <div className='realised'>Réalisé par Victor Diez</div>
      <div className="point"></div>
      <div className="mentions-legal"><a href="">Mention légales</a></div>
    </footer>
    </>
  )
}
