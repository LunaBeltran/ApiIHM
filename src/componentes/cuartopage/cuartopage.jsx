import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cuartopage.css';
import { Navbar } from '../menu/navbar';
import { Footer } from '../footer/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Definición de la clave API y la URL para obtener las películas desde la API de The Movie Database
const API_KEY = '4f5f43495afcc67e9553f6c684a82f84';
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`;

function Cuartopage() {
  
  const [movies, setMovies] = useState([]); // Estado para almacenar las películas obtenidas de la API
  const sliderRef = useRef(null); // Referencia para el componente Slider, permite acceder a métodos del Slider


  // useEffect se ejecuta cuando el componente se monta por primera vez
  useEffect(() => {
    // Función asincrónica para obtener datos de la API
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);// Realiza una solicitud GET a la URL de la API
        setMovies(response.data.results);// Actualiza el estado con los resultados de la API
      } catch (error) {
        // Manejo de errores 
        console.error('Error fetching the movies', error);
      }
    };

    fetchData();
  }, []); 

  // Componente para la flecha siguiente del carrusel
  const NextArrow = (props) => {
    const { onClick } = props; // Extrae la función onClick de las props
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <i className="fas fa-chevron-right"></i> 
      </div>
    );
  };

  // Componente para la flecha anterior del carrusel
  const PrevArrow = (props) => {
    const { onClick } = props; // Extrae la función onClick de las props
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <i className="fas fa-chevron-left"></i> 
      </div>
    );
  };

  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra los puntos de navegación
    infinite: true, // Permite el desplazamiento infinito
    speed: 500, // Velocidad de la animación en milisegundos
    slidesToShow: 3, // Número de diapositivas a mostrar al mismo tiempo
    slidesToScroll: 1, // Número de diapositivas a desplazar en cada movimiento
    nextArrow: <NextArrow />, // Componente personalizado para la flecha siguiente
    prevArrow: <PrevArrow />, // Componente personalizado para la flecha anterior
    responsive: [
      {
        breakpoint: 1024, // Configuración para pantallas
        settings: {
          slidesToShow: 2, // Muestra 2 diapositivas
          slidesToScroll: 1, // Desplaza 1 diapositiva
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600, // Configuración para pantallas
        settings: {
          slidesToShow: 1, // Muestra 1 diapositiva
          slidesToScroll: 1 // Desplaza 1 diapositiva
        }
      }
    ]
  };

  // Funciones para controlar manualmente el carrusel
  const slideNext = () => {
    sliderRef.current.slickNext(); // Llama al método slickNext del componente Slider
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev(); // Llama al método slickPrev del componente Slider
  };

  return (
    <div className="CuartoPage">
      <Navbar /> {/*componente Navbar */}
      <div className="containerrmp">
        <div className="contentmp">
          <div className="Cartelera">
            <h1 className='tituloCuartoP'>Cartelera de Estrenos</h1> {/* Título principal */}
            <Slider ref={sliderRef} {...settings}>
              {movies.map(movie => (
                <div key={movie.id} className="movie-cardCart"> {/*cada tarjeta de película */}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // Imagen de la película
                    alt={movie.title}
                  />
                  <h3 className='tituloCart'>{movie.title}</h3> {/* Título de la película */}
                  <p className='fechaCart'>{movie.release_date}</p> {/* Fecha de estreno */}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Footer /> {/*componente Footer */}
    </div>
  );
}

export { Cuartopage };
