import {Link} from "react-router-dom"
import './primerpage.css'
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

// Definición del componente funcional Primerpage
const Primerpage = () => {
    return (
        <div>
            <Navbar /> {/* componente Navbar */}
            <div className="containerrmpPrincipal"> {/* Contenedor principal centrado */}
                <div className="contentmpPrincipal"> {/* Contenedor de contenido principal */}
                    <h1 className="tituloPrincipal">Luju's movie</h1> {/* Título principal */}
                    <div className="contentprinPrincipal"> {/* Contenedor de contenido secundario */}
                        {/* Imagen principal con una fuente especificada */}
                        <img className="imgmain" src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/01/cabecera_pel%C3%ADculas_m%C3%A1s_taquilleras.jpg?fit=1800%2C665" width={20} height={15} alt="Cartelera de películas"></img>
                        <br/>
                        {/* Texto descriptivo principal */}
                        <p className="textPrincipal">Bienvenido a Luju's Movie, tu destino cinematográfico definitivo. Sumérgete en un universo lleno de emocionantes historias, intrigantes tramas y personajes inolvidables. En Luju's Movie, nos apasiona el séptimo arte y nos comprometemos a brindarte una experiencia cinematográfica incomparable.</p>
                        <p className="textPrincipal">Explora nuestra extensa biblioteca de películas que abarca géneros que van desde el drama hasta la comedia, pasando por la acción, el romance y mucho más. Ya sea que estés buscando clásicos atemporales, los últimos estrenos de Hollywood o gemas cinematográficas independientes, Luju's Movie tiene algo para cada amante del cine.</p>
                        <p className="textPrincipal">En Luju's Movie, la diversión no se detiene con la visualización. Mantente actualizado con las últimas actualizaciones de cartelera de la industria del cine, con directores y actores, y contenido que te lleva al corazón de la creación cinematográfica.</p>
                        <br/>
                        {/* Segunda imagen con una fuente especificada */}
                        <img className="imgmain" src="https://www.teleadhesivo.com/blog/wp-content/uploads/2022/06/los-mejores-posters-de-pel%C3%ADculas-1024x640.jpg" width={20} height={15} alt="Pósters de películas"></img>
                        <br/>
                        {/* Frase destacada */}
                        <p className="textfrasePrincipal">En Luju's Movie, cada película es una puerta hacia infinitas emociones y experiencias. ¡Explora, sueña, vive el cine!</p>
                        <br/>
                        {/* Texto final */}
                        <p className="textPrincipal">Únete a nosotros en este viaje cinematográfico emocionante y descubre por qué Luju's Movie es tu destino definitivo para todo lo relacionado con el cine. ¡Prepárate para vivir la magia del cine como nunca antes!🎫🎥</p>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            <Footer /> {/* componente Footer */}
        </div>
    );
}


export { Primerpage };