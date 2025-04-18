import React from "react";
import './Style.css';
import '../../services/localStorage.js';
import Formulario from '../../components/Formulario/Formulario.jsx';
import { useState, useEffect  } from 'react';
import Card from "../Card/Card.jsx";
import { Popcorn } from "lucide-react"; // Icono para "Por ver"

function ListaPyS() {
    // modal notificacion pelicula agregada
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
            // mostrar modal pelicula agregada
            setMostrarModal(true);
            setTimeout(() => {
                setMostrarModal(false);
            }, 2500);
        }
    };
    
    const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);
    const [peliculaAEditar, setPeliculaAEditar] = useState(null);
    // recibe un id y busca ese id en las peliculas
    const manejarEdicion = (id) => {
        const pelicula = peliculas.find(p => p.id === id); //recorre el array hasta encontrar el primer elemento que cumple la condicion
        if (pelicula) {
            setPeliculaAEditar(pelicula);
            setMostrarModalEdicion(true); // abrir el modal
            console.log("AAAAAACAAAA");   // PROBANDO
        }
    };
    return (
        <div>
            {mostrarModalEdicion && peliculaAEditar && (
                <div className="modal-edicion">
                    <div className="modal-contenido">
                        <Formulario
                            peliculaAEditar={peliculaAEditar}
                            setPeliculas={setPeliculas}
                            peliculas={peliculas}
                            cerrarModal={() => {
                                setMostrarModalEdicion(false);
                                setPeliculaAEditar(null);
                            }}
                        />
                    </div>
                </div>
            )}
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
                        setPeliculas={setPeliculas}
                        peliculas = {peliculas}
                        image={"" ? null : pelicula.image}
                        onEditar={manejarEdicion}
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
                        setPeliculas={setPeliculas}
                        peliculas = {peliculas}
                        image={"" ? null : pelicula.image}
                        onEditar={manejarEdicion}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ListaPyS;