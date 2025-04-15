import peliculasModule from './peliculas.module.css';
import Title from '../../components/Title/Title.jsx';
import Button from '../../components/Button/Button.jsx';
import Input from '../../components/Input/Input.jsx';
import Card from '../../components/Card/Card.jsx';
import { useState, useEffect } from 'react';

function Peliculas() {
    const [inputValue, setInputValue] = useState('');
    const [peliculas, setPeliculas] = useState(() => {
        const guardado = JSON.parse(localStorage.getItem('peliculas')) || [];
        return guardado;
    });
    const [peliculasFiltradas, setPeliculasFiltradas] = useState(peliculas);

    // Sincronizar peliculasFiltradas al cargar el componente
    useEffect(() => {
        setPeliculasFiltradas(peliculas);
    }, [peliculas]);

    const manejarCambio = (busqueda) => {
        setInputValue(busqueda);
        setPeliculasFiltradas(
            peliculas.filter((item) =>
                item.titulo?.toLowerCase().includes(busqueda.toLowerCase())
            )
        );
    };

    return (
        <div className={peliculasModule.container} >
            <Title text="Peliculas y Series" />
            <div className={peliculasModule.peliculasInputs}>
                <Input placeholder="Filtrar por Nombre" value={inputValue}
                    onChange={manejarCambio} />
            </div>
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
                            // peliculaVista={peliculaVista}
                            image={pelicula.image}
                            // peliculaPorVer={peliculaVista} 
                        />
                    ))
                }
            </div>
        </div>

    );
}
export default Peliculas;