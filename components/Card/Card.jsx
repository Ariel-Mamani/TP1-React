import React from "react";
import './Style.css';
import { Eye } from "lucide-react"; // icono para "Visto"
import { Bookmark } from "lucide-react"; // icono para "Por ver"
import { Trash2 } from "lucide-react"; // icono para "Por ver"

function Card({ id, titulo, director, año, genero, tipo, visto, peliculaVista, peliculaPorVer, eliminarPelicula, image}) {
    return (
        <div className={visto ? "contenedor-peliculas vista" : "contenedor-peliculas"}>
            <div className="contenedor-info">
                <h3 className="pelicula-titulo">{titulo}</h3>
                <p className="pelicula-detalle"><strong>Director:</strong> {director}</p>
                <p className="pelicula-detalle"><strong>Año:</strong> {año}</p>
                <p className="pelicula-detalle"><strong>Género:</strong> {genero}</p>
                <p className="pelicula-detalle"><strong>Tipo:</strong> {tipo}</p>
                <img src={image == "" ? null : image} />
            </div>
            <div className="iconos">
                <div title="marcar como 'Por ver'" className="icono-Novisto" onClick={() => peliculaPorVer(id)}>
                    <Bookmark />
                </div>
                <div title="marcar como 'Vista'" className="icono-visto" onClick={() => peliculaVista(id)}>
                    <Eye />
                </div>
                <div title="Eliminar pelicula" className="icono-visto" onClick={() => eliminarPelicula(id)}>
                    <Trash2 />
                </div>
            </div>
        </div>
    );
}
export default Card;