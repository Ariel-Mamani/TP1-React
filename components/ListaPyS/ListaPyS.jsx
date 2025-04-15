import React from "react";
import './Style.css';
import Formulario from '../../components/Formulario/Formulario.jsx';
import { useState, useEffect  } from 'react';
import Card from "../Card/Card.jsx";

function ListaPyS() {
    const [peliculas, setPeliculas] = useState([]); 
    
        useEffect(() => {
            const guardado = JSON.parse(localStorage.getItem('peliculas')) || [];
            setPeliculas(guardado);
    }, []);

    const peliculasPorVer = peliculas.filter(p => !p.visto);
    const peliculasVistas = peliculas.filter(p => p.visto);

    // funcion para agregar una nueva pelicula/serie
    const agregarPelicula = pelicula => {
        if(pelicula.titulo.trim()){ 
            const peliculasActualizadas = [pelicula, ...peliculas];
            setPeliculas(peliculasActualizadas);
            localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
        }
    };

    // funcion para eliminar pelicula/serie 
    const eliminarPelicula = id =>{
        const  peliculasActualizadas = peliculas.filter(pelicula =>pelicula.id !== id);
        setPeliculas(peliculasActualizadas);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
    }

   // funcion para cambiar entre "Vista" y "Por ver"
    const peliculaVista = id =>{
        const peliculasActualizadas = peliculas.map(pelicula=>{
            if(pelicula.id === id){
                pelicula.visto = !pelicula.visto; // cambia el estado
            }
            return pelicula;
        });
        setPeliculas(peliculasActualizadas);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
    };
    return (
        <div>
            <div className="peliculasLista">
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
                                peliculaPorVer={peliculaVista}
                                eliminarPelicula={eliminarPelicula}
                                image={pelicula.image}
                            />
                        ))
                    }
                </div>
            </div>
                <div className='listaSection'>
                    <h3>Por ver ({peliculasPorVer.length})</h3>
                    <div className="cardGrid">
                        {peliculasPorVer.map(pelicula => (
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
                            eliminarPelicula={eliminarPelicula}
                            image={pelicula.image}
                            />
                        ))}
                    </div>  
                </div>
                <div className='listaSection'>
                    <h3>Vistas ({peliculasVistas.length})</h3>
                    <div className="cardGrid">
                        {peliculasVistas.map(pelicula => (
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
                            eliminarPelicula={eliminarPelicula}
                            image={pelicula.image}
                            />
                        ))}
                    </div>
                </div>
        </div>
    );
}
export default ListaPyS;