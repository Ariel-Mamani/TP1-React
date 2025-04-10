import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from '../pages/Home/Home';
import './App.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
