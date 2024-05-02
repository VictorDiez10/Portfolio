import '../styles/presentation.scss';
import grand from '../assets/images/grand.jpg';
import moyen from '../assets/images/moyen.jpg';
import petit from '../assets/images/petit.jpg';

export default function presentation() {
  return (
    <div className='main-content'>
        {/* <picture> */}
          {/* <source srcSet={` ${petit} 640w, ${moyen} 1280w, ${grand} 1920w`}
          sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
          /> */}
          
          {/* <source media="(max-width: 1280px)" srcSet={moyen}/>
          <source media="(max-width: 640px)" srcSet={petit}/> */}
          <img src={grand} alt="#" srcSet={` ${petit} 640w, ${moyen} 1280w, ${grand} 1920w`}/>
          
        {/* </picture> */}
        <div className="titre-p">
          <h1>Bonjour je suis Victor developeur Front-end</h1>
          </div>
    </div>
  )
}
