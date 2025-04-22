import './Styles.css';
import React from "react";

function Button({ icon: Icon, title, action, id, peliculas, setPeliculas, onClick }) {
    
    const mostrarToast = (mensaje) => {
        const toast = document.createElement("div");
        toast.textContent = mensaje;
        Object.assign(toast.style, {
          position: "fixed",
          top: "100px",
          right: "50px",
          background: "#333",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          zIndex: 9999,
          opacity: 1,
          transition: "opacity 0.5s ease",
        });
      
        document.body.appendChild(toast);
      
        setTimeout(() => {
          toast.style.opacity = 0;
          setTimeout(() => document.body.removeChild(toast), 500);
        }, 3000);
      };
      
    
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
                            mostrarToast("🎬 Película eliminada de la lista. Presione el ícono nuevamente para eliminarla del catálogo.");
                            return true; // la mantenemos en el catálogo, pero sin estar en ninguna lista
                        } else {
                            mostrarToast("🗑️ Película eliminada del catálogo.");
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
            localStorage.setItem("peliculas", JSON.stringify(Object.values(peliculasActualizadas)));
        }
    };
    return (
        <button className="icon-button" title={title} onClick={handleClick}>
            {Icon && <Icon />} {/* Renderiza el ícono si está definido */}
        </button>
    );
}
export default Button;