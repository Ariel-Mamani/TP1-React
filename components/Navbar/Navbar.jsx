import './Styles.css';

function Navbar(){
    return (
        <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#peliculas">Peliculas</a></li>
            <li className="nav-item"><a href="#generos">Géneros</a></li>
            <li className="nav-item"><a href="#año">año</a></li>
        </ul>
    );
}

export default Navbar;