import './Styles.css';
import Input from '../Input/Input.jsx';
import { useState } from 'react';
import React from "react";
import { Search } from "lucide-react";

function Navbar({list, onClick}){
    const [inputValue, setInputValue]= useState('Buscar');
    return (
        <ul className="nav-list">
            <li><Input value={inputValue} onChange={setInputValue} /><Search size={20} /></li>
            {list.map((item) =>
                    <div className='flex'>
                        <li className="nav-item"><a onClick={() => onClick(item)}> {item} </a></li>                     
                    </div>
                )}  
        </ul>
    );
}

export default Navbar;