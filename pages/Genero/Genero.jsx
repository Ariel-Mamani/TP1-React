import generoModule from './genero.module.css';
import Card from '../../components/Card/Card.jsx';
import { useState} from 'react';
import Formulario from '../../components/Formulario/Formulario.jsx';

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

    const [mostrarModalEdicion, setMostrarModalEdicion] = useState(false);
    const [peliculaAEditar, setPeliculaAEditar] = useState(null);
    const manejarEdicion = (id) => {
        const pelicula = peliculas.find(p => p.id === id);
        if(pelicula){
            setPeliculaAEditar(pelicula);
            setMostrarModalEdicion(true); // abrir el modal
            console.log("AAAAAACAAAA"); // PROBANDO
        }
    };
    return (
        <div className={generoModule.container} >
            {peliculaslista.map((pelicula) => (
                <div>
                    <h1>{pelicula[1]} ({pelicula[0].length})</h1>
                    <div className={generoModule.listaPeliculas}>
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
                        {pelicula[0].length > 0 ? (pelicula[0].map((pelicula) => (
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
                                image={pelicula.image}
                                onEditar={manejarEdicion}
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