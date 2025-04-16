import './Style.css';
import Button from '../../components/Button/Button.jsx';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid' // Para generar ids unicos

function Form(props) {
    const [imageBase64, setImageBase64] = useState(''); // Estado para la imagen en Base64
    const [formulario, setFormulario] = useState({
        // estado inicial del formulario 
        titulo: '',
        director: '',
        año: '',
        genero: '',
        tipo: '',
        imagen: ''
    });

    // funcion que actualiza el estado cuando se escribe en los inputs
    const manejarCambio = evento => { 
        const elementoActual = evento.target;    // el input
        const campo = elementoActual.name;       // el nombre del input
        const nuevoValor = elementoActual.value; // lo que escribio en el input
    
        const nuevaData = { ...formulario };  // copiamos el formulario actual
        nuevaData[campo] = nuevoValor;        // actualizamos el campo que cambio
        setFormulario(nuevaData);             // actualizamos el estado
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageBase64(reader.result); // Guardar la imagen como Base64
            };
            reader.readAsDataURL(file); // Convertir la imagen a Base64
        }
    };

    // funcion que se ejecuta al enviar el formulario
    const manejarEnvio = e => {
        e.preventDefault();
        // se crea un nuevo objeto pelicula con los datos del formulario
        const peliculaNueva = {
            id: uuidv4(), // esto genera un ID unico
            titulo: formulario.titulo,
            director: formulario.director,
            año: formulario.año,
            genero: formulario.genero,
            tipo: formulario.tipo,
            visto: null, // por defecto no esta vista ni en por ver
            image: imageBase64
        };
        // se limpia formulario despues de enviar
        props.onSubmit(peliculaNueva);
        setFormulario({
            titulo: '',
            director: '',
            año: '',
            genero: '',
            tipo: ''
        });
    };
    return (
        <form className="formulario" onSubmit={manejarEnvio}>
            <input type="text" name="titulo" placeholder="Título" className="inputs" onChange={manejarCambio} value={formulario.titulo} />
            <input type="text" name="director" placeholder="Director" className="inputs" onChange={manejarCambio} value={formulario.director} />
            <input type="number" name="año" placeholder="Año" className="inputs" min='1900' onChange={manejarCambio} value={formulario.año} />
            <select
                name="genero"
                onChange={manejarCambio}
                value={formulario.genero}>
                <option value="">Seleccioná un género</option>
                <option value="Terror">Terror</option>
                <option value="Ciencia ficcion">Ciencia ficción</option>
                <option value="Drama">Drama</option>
                <option value="Comedia">Comedia</option>
            </select>
            <select
                name="tipo"
                onChange={manejarCambio}
                value={formulario.tipo}>
                <option value="">Seleccioná tipo</option>
                <option value="Película">Película</option>
                <option value="Serie">Serie</option>
            </select>
            <input type="file" accept="image/*" onChange={handleImageChange} className="inputs" />
            <Button text='Agregar' />
        </form>
    )
}
export default Form;