import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from '../pages/Home/Home';
import Peliculas from '../pages/peliculas/Peliculas';

import './App.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';


function App() {
  const [count, setCount] = useState(0)
  const [navbar, setNavbar] = useState(['Home', 'Peliculas', 'Géneros']);
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <div className='App'>
      <Header />
      <Navbar list={navbar} onClick={setActiveTab} />
      {activeTab == 'Home' ? <Home /> : <Peliculas />}
      <Footer />
    </div>
  )
}

export default App
