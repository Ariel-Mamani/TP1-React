import './Styles.css';
import React from "react";

function Navbar({list, onClick}){
    return (
        <ul className="nav-list">
            <li  className="nav-item nombrePagina">
                <h1 className='nombrePagina'>Gestion.ar</h1>
            </li>
            {list.map((item, index) =>
                    // <div className='flex'>
                        <li key= {index} className="nav-item"><a onClick={() => onClick(item)}> {item} </a></li>                     
                    
                )}  
        </ul>
    );
}

export default Navbar;