import './Styles.css';
import Input from '../Input/Input.jsx';
import { useState } from 'react';
import React from "react";
import { Search } from "lucide-react";

function Navbar(){
    const [inputValue, setInputValue]= useState('Buscar');
    return (
        <ul className="nav-list">
            <li><Input value={inputValue} onChange={setInputValue} /><Search size={20} /></li>
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#peliculas">Peliculas</a></li>
            <li className="nav-item"><a href="#generos">Géneros</a></li>
            <li className="nav-item"><a href="#año">año</a></li>
        </ul>
    );
}

export default Navbar;