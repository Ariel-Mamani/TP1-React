import './Style.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ onSubmit, peliculaAEditar, peliculas, setPeliculas, cerrarModal }) {
    const [imageBase64, setImageBase64] = useState('');
    const [formulario, setFormulario] = useState({
        titulo: '',
        director: '',
        año: '',
        genero: '',
        tipo: '',
        rating: ''
    });

    // se ejecuta cuando el valor de peliculaAEditar cambia
    useEffect(() => {
        if(peliculaAEditar){
            setFormulario({
                titulo: peliculaAEditar.titulo,
                director: peliculaAEditar.director,
                año: peliculaAEditar.año,
                genero: peliculaAEditar.genero,
                tipo: peliculaAEditar.tipo,
                rating: peliculaAEditar.rating
            });
            setImageBase64(peliculaAEditar.image || '');
        }
    }, [peliculaAEditar]);
    
    // escucha el cambio en el input y cambia el estado de los campos del formulario
    function manejarCambio(evento) {
        const campo = evento.target.name;  
        const valor = evento.target.value; 
        setFormulario((formularioActual) => {
            return {
                ...formularioActual,[campo]: valor
            };
        });
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const manejarEnvio = e => {
        e.preventDefault();
        const nuevaPelicula = {
            id: peliculaAEditar ? peliculaAEditar.id : uuidv4(),
            titulo: formulario.titulo,
            director: formulario.director,
            año: formulario.año,
            genero: formulario.genero,
            tipo: formulario.tipo,
            visto: peliculaAEditar ? peliculaAEditar.visto : null,
            image: imageBase64,
            rating: formulario.rating
        };

        if(peliculaAEditar){
            // si se edito una peli la busca y la cambia con los valores editados y despues setea el estado de las pelis
            const actualizadas = peliculas.map(pelicula =>
                pelicula.id === peliculaAEditar.id ? nuevaPelicula : pelicula
            );
            setPeliculas(actualizadas);
            localStorage.setItem("peliculas", JSON.stringify(Object.values(actualizadas)));
            cerrarModal();
        }else{
            // si la peli es nueva
            onSubmit(nuevaPelicula);
            setFormulario({
                titulo: '',
                director: '',
                año: '',
                genero: '',
                tipo: '',
                rating: ''
            });
            setImageBase64('');
        }
    };

    return (
        <form className="formulario" onSubmit={manejarEnvio}>
            <input type="text" name="titulo" placeholder="Título" className="inputs" onChange={manejarCambio} value={formulario.titulo}/>
            <input type="text" name="director" placeholder="Director" className="inputs" onChange={manejarCambio} value={formulario.director}/>
            <input type="number" name="año" placeholder="Año" className="inputs" min='1900' onChange={manejarCambio} value={formulario.año}/>
            <select name="genero" onChange={manejarCambio} value={formulario.genero}>
                <option value="">Seleccioná un género</option>
                <option value="Terror">Terror</option>
                <option value="Ciencia ficcion">Ciencia ficción</option>
                <option value="Drama">Drama</option>
                <option value="Comedia">Comedia</option>
            </select>
            <select name="tipo" onChange={manejarCambio} value={formulario.tipo}>
                <option value="">Seleccioná tipo</option>
                <option value="Película">Película</option>
                <option value="Serie">Serie</option>
            </select>
            <input type="number" placeholder=" Calificación (0 a 5)" className="inputs" name="rating" min="0" max="5" step="0.5" onChange={manejarCambio} value={formulario.rating}/>
            <input type="file" accept="image/*" onChange={handleImageChange} className="inputs"/>
            <div className="botones-formulario">
                <button className='boton-agregar' type="submit">
                    {peliculaAEditar ? 'Guardar cambios' : 'Agregar'}
                </button>
                {peliculaAEditar && (
                    <button type="button" className="boton-cancelar" onClick={cerrarModal}> Cancelar</button>
                )}
            </div>
        </form>
    );
}
export default Form;
