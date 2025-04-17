import React from "react";
import './Style.css';
import '../../services/localStorage.js';
import Formulario from '../../components/Formulario/Formulario.jsx';
import { useState, useEffect  } from 'react';
import Card from "../Card/Card.jsx";
import { Popcorn } from "lucide-react"; // Icono para "Por ver"

function ListaPyS() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [peliculas, setPeliculas] = useState([]); 

        useEffect(() => {
            const guardado = JSON.parse(localStorage.getItem('peliculas')) || [];
            setPeliculas(guardado);
    }, []);

    const peliculaPorVer = peliculas.filter(pelicula => pelicula.visto === false);
    const peliculasVistas = peliculas.filter(pelicula => pelicula.visto === true);

    // funcion para agregar una nueva pelicula/serie
    const agregarPelicula = pelicula => {
        if(pelicula.titulo.trim()){ 
            // busco las peliculas previas
            const peliculasPrevias = JSON.parse(localStorage.getItem('peliculas')) || [];
            const peliculasActualizadas = [pelicula, ...peliculasPrevias];
            setPeliculas(peliculasActualizadas);
            localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
            // mostrar modal
            setMostrarModal(true);
            setTimeout(() => {
                setMostrarModal(false);
            }, 2500);
        }
    };

    // funcion para eliminar pelicula/serie 
    const eliminarPelicula = id =>{
        const  peliculasActualizadas = peliculas.filter(pelicula =>pelicula.id !== id);
        setPeliculas(peliculasActualizadas);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
    }

     // agrega a la lista de peliculas/series 'por ver'
    const peliculaPorver = id => {
        const peliculasActualizadas = peliculas.map(pelicula=>{
            if(pelicula.id === id){
                pelicula.visto = false; // cambia el estado
            }
            return pelicula;
        });
        setPeliculas(peliculasActualizadas);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
    };

   // funcion para cambiar entre "Vista" y "Por ver"
    const peliculaVista = id =>{
        const peliculasActualizadas = peliculas.map(pelicula=>{
            if(pelicula.id === id){
                pelicula.visto = true; // cambia el estado
            }
            return pelicula;
        });
        setPeliculas(peliculasActualizadas);
        localStorage.setItem('peliculas', JSON.stringify(peliculasActualizadas));
    };

      // funcion editar pelicula
    const editarPelicula = id =>{
        const peliculasActualizadas = peliculas.map(pelicula=>{
            if(pelicula.id === id){
                
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
                {mostrarModal && (
                    <div className="modal-exito">
                        <Popcorn /> ¡Pelicula agregada con exito!
                    </div>
                )}
            </div>
            <div className='listaSection'>
                <h3>Por ver ({peliculaPorVer.length})</h3>
                <div className="cardGrid">
                    {peliculaPorVer.map(pelicula => (
                        <Card
                        key={pelicula.id}
                        id={pelicula.id}
                        titulo={pelicula.titulo}
                        director={pelicula.director}
                        año={pelicula.año}
                        genero={pelicula.genero}
                        tipo={pelicula.tipo}
                        visto={pelicula.visto}
                        rating={pelicula.rating}
                        peliculaVista={peliculaVista}
                        eliminarPelicula={eliminarPelicula}
                        image={"" ? null : pelicula.image}
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
                        rating={pelicula.rating}
                        peliculaVista={peliculaVista}
                        eliminarPelicula={eliminarPelicula}
                        image={"" ? null : pelicula.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ListaPyS;