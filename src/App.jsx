import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Home from '../pages/Home/Home';
import Peliculas from '../pages/Peliculas/Peliculas';
import Series from '../pages/Series/Series';
/* 
IDEA: crear una página exclusivamente para el escenario donde no hayan peliculas/ items en la lista.
import NotFound from '../pages/NotFound/NotFound';
*/

import './App.css';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
// import Peliculas from '../components/Movie/Movie';

function App() {

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='/series' element={<Series />} />
        {/* Ruta por defecto si no se encuentran coincidencias:
        <Route path="*" element={<NotFound />} />
        */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

/* usar una ternaria para indicar que si el map no se pudo hacer, que se retorne, por ejemplo, un nodo con un mensaje de ERROR */

/* export default App/export App
la diferencia está en que default se utiliza cuando tenemos un solo export en el archivo. 
Cuando tenemos multiples export, no usamos default. 
No es buena práctica tener múltiples export en un mismo archivo. 
*/