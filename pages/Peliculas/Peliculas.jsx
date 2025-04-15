import pelisModule from './peliculas.module.css';
import Movie from '../../components/Movie/Movie';
/* 
ejemplo de aplicación de estilos condicionales (que podremos usar para el caso de peliculas marcadas como vistas): 

*/


function Peliculas(){
    return (
        <div className={pelisModule.global}>
            <Movie/>
        </div>
    );
}

export default Peliculas;