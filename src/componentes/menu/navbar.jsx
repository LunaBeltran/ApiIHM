import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    return (
        <div className="Menu">
            <div className="LogoIcon">
                <div className="Imagen">
                <Link to="/"><img className="logo" src="https://cdn-icons-png.flaticon.com/128/1038/1038100.png" alt="" /></Link></div>
                <div className="LinksLog"><p>Luju's Movie</p></div>
            </div>

            <div className="Links">
            <Link to='/'>Inicio</Link>
            <Link to='/segundo'>Tienda</Link>
            <Link to='/tercera'>Buscador (api1)</Link>
            <Link to='/cuarto'>Cartelera (api2)</Link>
            <Link to='/quinto'>Agradecimiento</Link>
            </div>

        </div>
    );
}

export {Navbar} ;