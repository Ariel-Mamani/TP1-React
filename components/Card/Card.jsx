import React from "react";
import './Style.css';
import { Eye } from "lucide-react"; // Icono para "Visto"
import { Bookmark } from "lucide-react"; // Icono para "Por ver"
import { Trash2 } from "lucide-react"; // Icono para "Eliminar"
import Button from "../Button/Button"; // Importa tu nuevo componente Button
console.log("Button");

function Card({ id, titulo, director, año, genero, tipo, visto, peliculas, setPeliculas, image }) {
    // console.log("iconos:",Bookmark);
    
    return (
        <div className={visto ? "contenedor-peliculas vista" : "contenedor-peliculas"}>
            <div className="contenedor-info">
                <h3 className="pelicula-titulo">{titulo}</h3>
                <p className="pelicula-detalle"><strong>Director:</strong> {director}</p>
                <p className="pelicula-detalle"><strong>Año:</strong> {año}</p>
                <p className="pelicula-detalle"><strong>Género:</strong> {genero}</p>
                <p className="pelicula-detalle"><strong>Tipo:</strong> {tipo}</p>
                <img src={image === "" ? null : image} alt={`${titulo} Poster`} />
            </div>
            <div className="iconos">
                <Button 
                    icon={Bookmark} 
                    title="Marcar como 'Por ver'" 
                    action="porVer" 
                    id={id} 
                    peliculas={peliculas} 
                    setPeliculas={setPeliculas} 
                />
                <Button 
                    icon={Eye} 
                    title="Marcar como 'Vista'" 
                    action="vista" 
                    id={id} 
                    peliculas={peliculas} 
                    setPeliculas={setPeliculas} 
                />
                <Button 
                    icon={Trash2} 
                    title="Eliminar película" 
                    action="eliminar" 
                    id={id} 
                    peliculas={peliculas} 
                    setPeliculas={setPeliculas} 
                />
            </div>
        </div>
    );
}

export default Card;