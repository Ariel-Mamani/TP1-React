import React from "react";
import './Style.css';
import Formulario from '../../components/Formulario/Formulario.jsx';
import { useState } from 'react';
import Card from "../Card/Card.jsx";


function ListaPyS() {
    // estado que guarda todas las peliculas/series
    const [peliculas, setPeliculas] = useState(() => {
        // Cargar películas guardadas al inicio
        const guardado = JSON.parse(localStorage.getItem('peliculas')) || [];
        return guardado;
    });

    // funcion para agregar una nueva pelicula/serie
    const agregarPelicula = pelicula => {
        // se verifica que el titulo no este vacio
        if (pelicula.titulo.trim()) {
            // se agrega la nueva pelicula al inicio del array
            const peliculasActualizadas = [pelicula, ...peliculas];
            setPeliculas(peliculasActualizadas);
            localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
        }
    };

    // const peliculaVista = id =>{
    //     const  peliculasActualizadas = peliculas.filter(pelicula =>pelicula.id !== id);
    //     setPeliculas(peliculasActualizadas);
    // }

    // funcion para cambiar entre "Vista" y "Por ver"
    const peliculaVista = id => {
        const peliculasActualizadas = peliculas.map(pelicula => {
            if (pelicula.id === id) {
                pelicula.visto = !pelicula.visto; // cambia el estado
            }
            return pelicula;
        });
        setPeliculas(peliculasActualizadas);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
    };

    return (
        <div>
            <Formulario onSubmit={agregarPelicula} />
            <h2 >Peliculas y Series</h2>
            <div className="pelicula-lista-contenedor">
                {
                    peliculas.map((pelicula) => (
                        <Card
                            key={pelicula.id}
                            id={pelicula.id}
                            titulo={pelicula.titulo}
                            director={pelicula.director}
                            año={pelicula.año}
                            genero={pelicula.genero}
                            tipo={pelicula.tipo}
                            visto={pelicula.visto}
                            peliculaVista={peliculaVista}
                            image={pelicula.image}
                        // peliculaPorVer={peliculaVista} 
                        />
                    ))
                }
            </div>
        </div>
    );
}
export default ListaPyS;