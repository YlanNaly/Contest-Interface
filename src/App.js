import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import Login from './scripts/page/Login';
import Dashboard from './scripts/page/DashBoard';
import Bourse from './scripts/page/Bourse';
import HomePage from './scripts/page/Accueil';
import Inscrit from './scripts/page/Apropos';
import LandingPage from './scripts/page/LandingPage';
function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/accueil' element={<HomePage/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/bourse' element={<Bourse/>}/>
      <Route path='/apropos' element={<Inscrit/>}/>
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;