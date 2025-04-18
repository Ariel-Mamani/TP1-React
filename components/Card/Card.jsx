import React from "react";
import './Style.css';
import { Eye } from "lucide-react"; // Icono para "Visto"
import { Bookmark } from "lucide-react"; // Icono para "Por ver"
import { Trash2 } from "lucide-react"; // Icono para "Eliminar"
import { Pencil } from "lucide-react"; // Icono para "Editar"
import Button from "../Button/Button"; // Importa tu nuevo componente Button
import { useState } from "react";
// console.log("Button");


function Card({ id, titulo, director, año, genero, tipo, visto, rating, setPeliculas, peliculas, editarPelicula, image }) {
    // const peliculas = JSON.parse(localStorage.getItem('peliculas'));
    return (
        <div className={visto ? "contenedor-peliculas vista" : "contenedor-peliculas"}>
            <div className="contenedor-info">
                <img  className="img" src={image === "" ? null : image} alt={`${titulo} Poster`} />
                <h3 className="pelicula-titulo">{titulo}</h3>
                <p className="pelicula-detalle"><strong>Director:</strong> {director}</p>
                <p className="pelicula-detalle"><strong>Año:</strong> {año}</p>
                <p className="pelicula-detalle"><strong>Género:</strong> {genero}</p>
                <p className="pelicula-detalle"><strong>Tipo:</strong> {tipo}</p>
                <p className="pelicula-detalle"><strong>Calificación:</strong>{rating}</p>
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
                <Pencil className="icono" onClick={editarPelicula} />
            </div>
        </div>
    );
}

export default Card;