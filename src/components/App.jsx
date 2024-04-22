import '../styles/reset.scss';
import Error from '../page/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from '../page/Portfolio';
import '../styles/app.scss';
import '../styles/_settings.scss';
import '../styles/responsive.scss';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
