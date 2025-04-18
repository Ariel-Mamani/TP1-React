import generoModule from './genero.module.css';
import Card from '../../components/Card/Card.jsx';
import { useState, useEffect } from 'react';

function Genero() {
    const [peliculas, setPeliculas] = useState(() => {
        const guardado = JSON.parse(localStorage.getItem('peliculas')) || [];
        return guardado;
    });

    const terror = peliculas.filter(pelicula => pelicula.genero === "Terror");
    const cienciaficcion = peliculas.filter(pelicula => pelicula.genero === "Ciencia ficcion");
    const drama = peliculas.filter(pelicula => pelicula.genero === "Drama");
    const comedia = peliculas.filter(pelicula => pelicula.genero === "Comedia");

    const [peliculaslista, setPeliculaslista] = useState([[terror, "Terror"], [cienciaficcion, "Ciencia ficcion"]
        , [drama, "Drama"], [comedia, "Comedia"]]);

    return (
        <div className={generoModule.container} >
            {peliculaslista.map((pelicula) => (
                <div>
                    <h1>{pelicula[1]} ({pelicula[0].length})</h1>
                    <div className={generoModule.listaPeliculas}>
                        {pelicula[0].length > 0 ? (pelicula[0].map((pelicula) => (
                            <Card
                                key={pelicula.id}
                                id={pelicula.id}
                                titulo={pelicula.titulo}
                                director={pelicula.director}
                                año={pelicula.año}
                                peliculas={peliculas}
                                setPeliculas={setPeliculas}
                                genero={pelicula.genero}
                                tipo={pelicula.tipo}
                                visto={pelicula.visto}
                                peliculaVista={pelicula.peliculaVista}
                                image={pelicula.image}
                                rating={pelicula.rating}
                                peliculaPorVer={pelicula.peliculaPorVer}
                            />
                        ))) : (
                            <div>
                                <p>no se encontraron peliculas/series para este género</p>
                            </div>
                        )}
                    </div>
                </div>
            ))};
        </div>
    );
}
export default Genero;