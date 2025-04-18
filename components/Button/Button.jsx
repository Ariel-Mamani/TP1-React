import './Styles.css';
import React from "react";

function Button({ icon: Icon, title, action, id, peliculas, setPeliculas }) {
    const handleClick = () => {
        if(peliculas === undefined ){
            console.log("peliculas es undefiend");
        }
        if (action === "eliminar") {
            const peliculasActualizadas = peliculas.filter(pelicula => pelicula.id !== id);
            setPeliculas(peliculasActualizadas);
            localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
        } else if (action === "porVer") {
            const peliculasActualizadas = peliculas.map(pelicula => {
                if (pelicula.id === id) pelicula.visto = false;
                return pelicula;
            });
            setPeliculas(peliculasActualizadas);
            localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
        } else if (action === "vista") {
            const peliculasActualizadas = peliculas.map(pelicula => {
                if (pelicula.id === id) pelicula.visto = true;
                return pelicula;
            });
            setPeliculas(peliculasActualizadas);
            localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
        }
    };

    return (
        <button className="icon-button" title={title} onClick={handleClick}>
            {Icon && <Icon />} {/* Renderiza el ícono si está definido */}
        </button>
    );
}

export default Button;