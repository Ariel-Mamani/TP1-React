import peliculasModule from './peliculas.module.css';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import Card from '../../components/Card/Card.jsx';
import { useState, useEffect } from 'react';

function Peliculas() {
    const [inputValue, setInputValue] = useState('');
    const [selectGeneroValue, setSelectGeneroValue] = useState('');
    const [selectTipoValue, setSelectTipoValue] = useState('');
    const [orden, setOrden] = useState('');

    const [peliculas, setPeliculas] = useState(() => {
        const guardado = JSON.parse(localStorage.getItem('peliculas')) || [];
        return guardado;
    });
    const [peliculasFiltradas, setPeliculasFiltradas] = useState(peliculas);

    useEffect(() => {
        let filtradas = peliculas;

        if (inputValue) {
            filtradas = filtradas.filter((item) =>
                item.titulo?.toLowerCase().includes(inputValue.toLowerCase())
            );
        }

        if (selectGeneroValue) {
            filtradas = filtradas.filter((item) =>
                item.genero?.toLowerCase().includes(selectGeneroValue.toLowerCase())
            );
        }

        if (selectTipoValue) {
            filtradas = filtradas.filter((item) =>
                item.tipo?.toLowerCase().includes(selectTipoValue.toLowerCase())
            );
        }

        if (orden) {
            filtradas = [...filtradas].sort((a, b) => {
                const añoA = parseInt(a.año, 10) || 0;
                const añoB = parseInt(b.año, 10) || 0;
                return orden === 'asc' ? añoA - añoB : añoB - añoA;
            });
        }

        setPeliculasFiltradas(filtradas);
    }, [peliculas, inputValue, selectGeneroValue, selectTipoValue, orden]);

    const manejarCambio = (busqueda) => {
        setInputValue(busqueda);
    };

    const manejarCambioGenero = (e) => {
        setSelectGeneroValue(e.target.value);
    };

    const manejarCambioTipo = (e) => {
        setSelectTipoValue(e.target.value);
    };

    const manejarCambioOrden = (e) => {
        setOrden(e.target.value);
    };

    return (
        <div className={peliculasModule.container} >
            <div className={peliculasModule.flex}>
                <Input className={peliculasModule.peliculasInputs} placeholder="Nombre"
                    value={inputValue}
                    onChange={manejarCambio} />
                <select className={peliculasModule.peliculasSelect} name="genero" onChange={(e) => manejarCambioGenero(e)}
                    value={selectGeneroValue}    >
                    <option value="">Todos los géneros</option>
                    <option value="Terror">Terror</option>
                    <option value="Ciencia ficcion">Ciencia ficción</option>
                    <option value="Drama">Drama</option>
                    <option value="Comedia">Comedia</option>
                </select>
                <select className={peliculasModule.peliculasSelect} name="tipo" onChange={(e) => manejarCambioTipo(e)}
                    value={selectTipoValue}    >
                    <option value="">Todos los tipos</option>
                    <option value="Película">Película</option>
                    <option value="Serie">Serie</option>
                </select>
                <select className={peliculasModule.peliculasSelect} name="orden"
                    onChange={manejarCambioOrden} value={orden} >
                    <option value="">Ordenar</option>
                    <option value="asc">Año (Ascendente)</option>
                    <option value="desc">Año (Descendente)</option>
                </select>
            </div>
            <hr></hr>
            <div className={peliculasModule.listaPeliculas}>
                {
                    peliculasFiltradas.map((pelicula) => (
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
                        peliculaPorVer={peliculaVista} 
                        />
                    ))
                }
            </div>
        </div>

    );
}
export default Peliculas;