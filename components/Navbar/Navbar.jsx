import { Link } from "react-router-dom";
import './Styles.css';

function Navbar(){
    return (
        <ul className="nav-list">
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/peliculas">Peliculas</Link></li>
            <li className="nav-item"><Link to="/Series">Series</Link></li>
            <li className="nav-item"><Link to="/Año">año</Link></li>
        </ul>
    );
}

export default Navbar;