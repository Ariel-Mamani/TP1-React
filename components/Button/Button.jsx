import './Styles.css';
import React from "react";

function Button({ icon: Icon, title, action, id, peliculas, setPeliculas, onClick }) {
    const handleClick = () => {
        if(onClick){
            onClick(); // ejecuta la funcion que vino desde Card (manejarEdicion)
            return; 
        }
        if(action !== undefined){
            const peliculasActualizadas = Object.values(peliculas).map(pelicula => {
                if(pelicula && pelicula.id === id){
                    if(action === "eliminar"){
                        pelicula.visto = null;
                    }else if(action === "porVer"){
                        pelicula.visto = false;
                    }else{ // action == "vista"
                        pelicula.visto = true;
                    }
                }
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