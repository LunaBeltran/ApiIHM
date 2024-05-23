import axios from 'axios';
import './tercerapage.css';
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react";

function Tercerapage() {
    // Definición de constantes para la API de películas
    const API_URL = 'https://api.themoviedb.org/3'; // URL base de la API
    const API_KEY = '4f5f43495afcc67e9553f6c684a82f84'; // Clave de la API
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'; // Ruta base para las imágenes de películas
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'; // Ruta base para las imágenes de películas (repetida, posible error)

    // Variables de estado
    const [movies, setMovies] = useState([]); // Estado para almacenar la lista de películas
    const [searchKey, setSearchKey] = useState(""); // Estado para almacenar la clave de búsqueda
    const [movie, setMovie] = useState(null); // Estado para almacenar la película seleccionada (inicialmente null)
    const [searched, setSearched] = useState(false); // Estado para indicar si se ha realizado una búsqueda

    // Función para realizar petición por GET a la API y obtener películas
    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover"; // Determina el tipo de búsqueda según si hay una clave de búsqueda o no
        try {
            const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, { // Realiza la solicitud GET a la API de películas
                params: {
                    api_key: API_KEY, // Agrega la clave de la API como parámetro
                    query: searchKey, // Agrega la clave de búsqueda como parámetro
                },
            });

            setMovies(results); // Establece el estado de las películas con los resultados obtenidos
            setMovie(null); // Resetea la película seleccionada
            setSearched(true); // Marca que se ha realizado una búsqueda
        } catch (error) {
            console.error("Error fetching movies:", error); // Manejo de errores en caso de que falle la solicitud
        }
    };

    // Función para obtener información detallada de una película específica
    const fetchMovie = async (id) => {
        try {
            const { data } = await axios.get(`${API_URL}/movie/${id}`, { // Realiza una solicitud GET para obtener información detallada de una película
                params: {
                    api_key: API_KEY, // Agrega la clave de la API como parámetro
                    append_to_response: "videos" // Solicita incluir los videos relacionados con la película
                }
            });
            setMovie(data); // Establece la película seleccionada con la información obtenida
        } catch (error) {
            console.error("Error fetching movie:", error); // Manejo de errores en caso de que falle la solicitud
        }
    }

    // Función para seleccionar una película y mostrar su información detallada
    const selectMovie = async (movie) => {
        fetchMovie(movie.id); // Obtiene la información detallada de la película seleccionada
        setMovie(movie); // Establece la película seleccionada
        window.scrollTo(0, 0); // Desplaza la ventana hacia arriba
    }

    // Función para realizar una búsqueda de películas
    const searchMovies = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario
        if (searchKey.trim() !== "") { // Verifica que la clave de búsqueda no esté vacía
            fetchMovies(searchKey); // Realiza la búsqueda de películas
        } else {
            setMovies([]); // Si la clave de búsqueda está vacía, vacía la lista de películas
            setMovie(null); // Resetea la película seleccionada
            setSearched(false); // Marca que no se ha realizado ninguna búsqueda
        }
    }

    useEffect(() => {
        // La búsqueda inicialmente estará vacía, por lo que no se realizará ninguna búsqueda al principio
    }, []);

    return (
        <div>
            <Navbar /> {/* componente Navbar */}
            <div className="containerrmp">
                <div className="contentmp">
                    <h1 className="tituloP">Películas</h1>
                    <p className="text-center">{searched && movies.length === 0 ? "No se encontraron películas" : ""}</p>
                    <br />
                    <form className="container mb-4" onSubmit={searchMovies}>
                        <input 
                            type="text" 
                            placeholder="Buscar películas..." 
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)} 
                            className="search-input"
                        /> {/* Entrada de texto para la búsqueda */}
                        <button type="submit" className="btn btn-primary search-button">Buscar</button>
                    </form>
                    <br/>
                    {/*banner e  informacion*/}
                    <div>
                        <main>
                             {/* Condicional para mostrar el banner con la información de la película o un mensaje */}
                            {movie ? (
                                <div className="banner-container" style={{ backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")` }}>
                                    {/* Contenedor del banner con imagen de fondo */}
                                    <div className="banner-overlay">
                                        <div className="banner-content">
                                            <h1 className="text-white">{movie.title}</h1> {/* Título de la película */}
                                            <p className="text-white">{movie.overview}</p>{/* Resumen o info. */}
                                        </div>
                                    </div>
                                </div> 
                            ) : ( 
                                searched && ( 
                                    <div className="containerTextP">
                                        <h1 className="textSearch">Selecciona una película</h1>
                                    </div>
                                )
                            )}
                            <br/>
                            <br/>
                        </main>
                    </div>

                    <div className="contentprin"></div>
                    <div className="containerTextP">
                        {/* Mapea cada película y renderiza una tarjeta con su información */}
                        {movies && movies.length > 0 && (
                            movies.map((movie) => (
                                <div key={movie.id} className="movie-cardPeli" onClick={() => selectMovie(movie)}>
                                    {/* Tarjeta de película con imagen y título */}
                                    <img src={`${URL_IMAGE + movie.poster_path}`} alt={movie.title} />
                                    <h4 className='textTitulo'>{movie.title}</h4>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export { Tercerapage };
