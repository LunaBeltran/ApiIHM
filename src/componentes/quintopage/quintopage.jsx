// quintopage.jsx
import { Link } from "react-router-dom";
import './quintopage.css';
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

// Definición del componente funcional Quintopage
const Quintopage = () => {
    return (
        <div>
            <Navbar /> {/*componente Navbar */}
            <div className="containerrmpAgra"> {/* Contenedor principal centrado */}
                <div className="contentmpAgra"> {/* Contenedor de contenido principal */}
                    <h1 className="tituloAgra">Agradecimiento</h1> {/* Título principal */}
                    <br />
                    <div className="contentprinAgra"> {/* Contenedor de contenido secundario */}
                        <img className="imgp5" src="https://ucompensar.edu.co/wp-content/uploads/2023/06/IA-en-ingenieria-de-sistemas-scaled.jpg" alt="Flores" /> {/* Imagen centrada */}
                        {/* Texto descriptivo con agradecimiento */}
                        <p className="textAgra">Estimado Profesor Carrera,</p>
                        <p className="textAgra">Nos dirigimos a usted con el propósito de expresar nuestro más sincero agradecimiento y admiración por la clase de Interacción Hombre-Máquina que nos ha impartido. Durante este curso, no solo hemos adquirido conocimientos valiosos sobre el desarrollo de páginas web, sino que también hemos descubierto una verdadera pasión por esta materia.</p>
                        <p className="textAgra">Su dedicación y entusiasmo en la enseñanza han sido una fuente de inspiración constante. Cada lección ha sido cuidadosamente estructurada, y su capacidad para explicar conceptos complejos de manera clara y accesible ha hecho que el aprendizaje sea una experiencia gratificante. Su paciencia y disposición para responder nuestras dudas han creado un ambiente de aprendizaje positivo y estimulante.</p>
                        <p className="textAgra">Gracias a su guía, ahora tenemos una comprensión mucho más profunda del diseño y desarrollo web, y estamos decididos a seguir explorando y perfeccionando nuestras habilidades en este campo. Es por ello que deseamos manifestar nuestro más profundo deseo de que pueda continuar como nuestro docente. Su influencia ha sido fundamental en nuestra formación académica, y estamos seguros de que muchos de nuestros compañeros comparten este sentimiento.</p>
                        <p className="textAgra">Agradecemos de antemano su atención a esta carta y reiteramos nuestro agradecimiento por todo lo que nos ha enseñado. Esperamos con ansias la posibilidad de seguir aprendiendo bajo su tutela en el futuro.</p>
                        <br />
                        <p className="textAgra">Atentamente,</p>
                        <p className="textAgra">Juan Charris y Luna Beltrán</p>
                        <br />
                        <br />
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            <Footer /> {/*componente Footer */}
        </div>
    );
};

export { Quintopage };
