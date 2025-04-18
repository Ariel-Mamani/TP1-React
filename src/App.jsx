import { useState } from 'react'
import Home from '../pages/Home/Home';
import Peliculas from '../pages/peliculas/Peliculas';
import Genero from '../pages/Genero/Genero';

import './App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';


function App() {
  const [count, setCount] = useState(0)
  const [navbar, setNavbar] = useState(['Home', 'Peliculas', 'Géneros']);
  const [activeTab, setActiveTab] = useState('Home');
  const tabComponents = {
    Home: <Home />,
    Peliculas: <Peliculas />,
    Géneros: <Genero />,
  };
  return (
    <div>
      <div className='scroll-bg'></div>
    <div className='App'>
      <Header />
      <Navbar list={navbar} onClick={setActiveTab} />
      {tabComponents[activeTab] || <Home />} 
      <Footer />
    </div>
    </div>
  )
}

export default App
