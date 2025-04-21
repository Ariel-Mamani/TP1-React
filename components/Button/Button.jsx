import './Styles.css';
import React from "react";

function Button({ icon: Icon, title, action, id, peliculas, setPeliculas, onClick }) {
    const handleClick = () => {
        if(onClick){
            onClick(); // ejecuta la funcion que vino desde Card (manejarEdicion)
            return; 
        }
        if(action !== undefined){
            let peliculasActualizadas;
            if(action === "eliminar") {
                peliculasActualizadas = peliculas.filter(pelicula => {
                    if (pelicula.id === id) {
                        if (pelicula.visto !== null) {
                            pelicula.visto = null;
                            alert("película eliminada de la lista.");
                            return true; // la mantenemos en el catálogo, pero sin estar en ninguna lista
                        } else {
                            alert("película eliminada del catálogo.");
                            return false; // la eliminamos completamente del catálogo
                        }
                    }
                    return true; // otras películas no se modifican
                });
            }else{
                peliculasActualizadas = Object.values(peliculas).map(pelicula => {
                    if(pelicula && pelicula.id === id){
                        if(action === "porVer"){
                            pelicula.visto = false;
                        }else{
                            pelicula.visto = true;
                        }
                    }
                    return pelicula;
                });
            }
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