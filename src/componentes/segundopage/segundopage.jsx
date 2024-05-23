// segundopage.jsx
import React, { useState } from 'react';
import './segundopage.css';
import { Navbar } from "../menu/navbar";
import { Footer } from "../footer/footer";

// Definición del componente funcional Segundopage
const Segundopage = () => {
  // Define un estado para el plan seleccionado
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Función para manejar la selección del plan
  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <Navbar /> {/*el componente Navbar */}
      <div className="containerrmp"> {/* Contenedor principal */}
        <div className="contentmp"> {/* Contenedor de contenido principal */}
          <h1 className="tituloTienda">Combos de Películas</h1> {/* Título principal */}
          <br/>
          <div className="pricing-page"> {/* Página de precios */}
            <div className="card-container"> {/* Contenedor de tarjetas */}
              <div className="card"> {/* Tarjeta del Combo Básico */}
                <img className="imgTienda" src="https://www.granma.cu/file/img/2020/08/medium/f0175895.jpg" alt="Combo Básico" />
                <div className="container">
                  <h2 className='subtituloCombo'>Combo Básico</h2>
                  <p className="description">Incluye películas de acción y comedia.</p>
                  <p className="price">Precio: $9.99</p>
                </div>
              </div>

              <div className="card"> {/* Tarjeta del Combo Estándar */}
                <img className="imgTienda" src="https://poptv.orange.es/wp-content/uploads/sites/3/2023/01/blue-monday-peliculas-alegrarte-dia-scaled.jpg" alt="Combo Estándar" />
                <div className="container">
                  <h2 className='subtituloCombo'>Combo Estándar</h2>
                  <p className="description">Incluye películas de acción, comedia y drama.</p>
                  <p className="price">Precio: $14.99</p>
                </div>
              </div>

              <div className="card"> {/* Tarjeta del Combo Premium */}
                <img className="imgTienda" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEW3wVfsEO1Ufl32a8DsrfiJ4Akpg1U5MbRArFaQmtVQ&s" alt="Combo Premium" />
                <div className="container">
                  <h2 className='subtituloCombo'>Combo Premium</h2>
                  <p className="description">Incluye películas de acción, comedia, romance y drama.</p>
                  <p className="price">Precio: $19.99</p>
                </div>
              </div>
            </div>
            <br/>
            <br/>

            <h1 className="tituloTienda">Selecciona tu plan</h1> {/* Título de selección de plan */}
            <div className="plan-container"> {/* Contenedor de planes */}
              <div className="plan"> {/* Plan Mensual */}
                <h3 className='subtituloCombo'>Plan Mensual</h3>
                <p className="price">Precio: $9.99</p>
                <button className='btnTienda' onClick={() => handleSelectPlan('Mensual')}>Seleccionar</button> {/* Botón de selección */}
              </div>
              <div className="plan"> {/* Plan Anual */}
                <h3 className='subtituloCombo'>Plan Anual</h3>
                <p className="price">Precio: $99.99</p>
                <button className='btnTienda' onClick={() => handleSelectPlan('Anual')}>Seleccionar</button> {/* Botón de selección */}
              </div>
            </div>
            <br/>
            {selectedPlan && <p className='description'>Plan seleccionado: {selectedPlan}</p>} {/* Muestra el plan seleccionado */}
          </div>
        </div>
      </div>
      <Footer /> {/* componente Footer */}
    </div>
  );
};
export { Segundopage };
