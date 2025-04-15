import './Style.css';
import Button from '../../components/Button/Button.jsx';
import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid' // Para generar ids unicos

function Form(props){

    const [formulario, setFormulario] = useState({
        // estado inicial del formulario 
        titulo: '',
        director: '',
        año: '',
        genero: '',
        tipo: ''
    });

    // funcion que actualiza el estado cuando escribes en los inputs
    const manejarCambio = e => {
        const { name, value } = e.target;
        setFormulario({
            ...formulario,
            [name]: value // actualiza solo el campo que cambio
        });
    };

    // funcion que se ejecuta al enviar el formulario
    const manejarEnvio = e => {
        e.preventDefault(); // para evitar que la pagina se recargue
        // se crea un nuevo objeto pelicula con los datos del formulario
        const peliculaNueva = {
            id: uuidv4(), // esto genera un ID unico
            titulo: formulario.titulo,
            director: formulario.director,
            año: formulario.año,
            genero: formulario.genero,
            tipo: formulario.tipo,
            visto: false // por defecto no esta vista
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
    return(
        <form className="formulario" onSubmit={manejarEnvio}>
            <input type="text" name="titulo"placeholder="Título" className="inputs" onChange={manejarCambio}value={formulario.titulo}/>
            <input type="text" name="director"placeholder="Director" className="inputs" onChange={manejarCambio}value={formulario.director}/>
            <input type="number" name="año"placeholder="Año" className="inputs"min='1900'onChange={manejarCambio}value={formulario.año}/>
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
            <Button text='Agregar'/>
        </form>
    )
}
export default Form;