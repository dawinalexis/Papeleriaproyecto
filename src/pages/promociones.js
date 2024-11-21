// src/promociones.js
import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import '../styles/promociones.css'; // Estilo específico de promociones
import M from 'materialize-css'; // Materialize JS
import 'materialize-css/dist/js/materialize.min.js'; // Asegúrate de incluir el JS de Materialize


const Promociones = () => {
  useEffect(() => {
    // Inicializar el carrusel
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      duration: 500,
      numVisible: 5,
    });

    // Lógica para los botones de incremento y decremento
    const decrementButtons = document.querySelectorAll('.btn-decrement');
    const incrementButtons = document.querySelectorAll('.btn-increment');

    decrementButtons.forEach(button => {
      button.addEventListener('click', function () {
        const input = this.nextElementSibling;
        const currentValue = parseInt(input.value);
        if (currentValue > parseInt(input.min)) {
          input.value = currentValue - 1;
        }
      });
    });

    incrementButtons.forEach(button => {
      button.addEventListener('click', function () {
        const input = this.previousElementSibling;
        const currentValue = parseInt(input.value);
        if (currentValue < parseInt(input.max)) {
          input.value = currentValue + 1;
        }
      });
    });
  }, []);

  return (
    <div>
      <h1>PROMOCIONES</h1>
      <div className="carousel-container carousel-small">
  <div className="carousel carousel-small">
    <a className="carousel-item" href="#one!"><img src="image/Captura de pantalla 2024-11-20 225509.png" alt="Promo 1" /></a>
    <a className="carousel-item" href="#two!"><img src="image/Captura de pantalla 2024-11-20 225614.png" alt="Promo 2" /></a>
    <a className="carousel-item" href="#three!"><img src="image/Captura de pantalla 2024-11-20 231244.png" alt="Promo 3" /></a>
    <a className="carousel-item" href="#four!"><img src="image/Captura de pantalla 2024-11-20 231336.png" alt="Promo 4" /></a>
    <a className="carousel-item" href="#five!"><img src="image/Captura de pantalla 2024-11-20 233132.png" alt="Promo 5" /></a>
  </div>
  </div>


      {/* Sección de productos */}
      <div className="container-items">
        <div className="item">
          <figure>
            <img src="../image/Captura de pantalla 2024-11-20 235305.png" alt="Promo 1" />
          </figure>
          <div className="card-content">
            <h5>Combo regreso a clases</h5>
            <p>Todo lo que necesitas para un regreso a clases espectacular, lleva 7 cuadernos, una caja de colores, juego de reglas.</p>
            <p className="price">$5.500</p>
            <a className="waves-effect waves-light btn-small" id="button-product">AGREGAR</a>
            <div className="quantity-input">
              <button className="btn-small btn-decrement waves-effect waves-light">-</button>
              <input type="number" min="1" max="99" value="1" className="quantity-field" />
              <button className="btn-small btn-increment waves-effect waves-light">+</button>
            </div>
          </div>
        </div>

        <div className="item">
          <figure>
            <img src="../image/Captura de pantalla 2024-11-20 235320.png" alt="Promo 1" />
          </figure>
          <div className="card-content">
            <h5>Combo regreso a clases</h5>
            <p>Todo lo que necesitas para un regreso a clases espectacular, lleva 7 cuadernos, una caja de colores, juego de reglas.</p>
            <p className="price">$10.500</p>
            <a className="waves-effect waves-light btn-small" id="button-product">AGREGAR</a>
            <div className="quantity-input">
              <button className="btn-small btn-decrement waves-effect waves-light">-</button>
              <input type="number" min="1" max="99" value="1" className="quantity-field" />
              <button className="btn-small btn-increment waves-effect waves-light">+</button>
            </div>
          </div>
        </div>
        <div className="item">
          <figure>
            <img src="../image/Captura de pantalla 2024-11-20 235305.png" alt="Promo 1" />
          </figure>
          <div className="card-content">
            <h5>Combo regreso a clases</h5>
            <p>Todo lo que necesitas para un regreso a clases espectacular, lleva 7 cuadernos, una caja de colores, juego de reglas.</p>
            <p className="price">$12.000</p>
            <a className="waves-effect waves-light btn-small" id="button-product">AGREGAR</a>
            <div className="quantity-input">
              <button className="btn-small btn-decrement waves-effect waves-light">-</button>
              <input type="number" min="1" max="99" value="1" className="quantity-field" />
              <button className="btn-small btn-increment waves-effect waves-light">+</button>
            </div>
          </div>
        </div>


        
        

        {/* Agregar más productos de manera similar */}

      </div>

      {/* Sección general con contenido */}
      <section class="general">

        <div class="general-1">
            <h2>Vuelve a clases con todo listo y al mejor precio</h2>
            <p>
                En nuestra papelería encontrarás todo lo que necesitas para iniciar el ciclo escolar: mochilas, libretas, colores, lápices y más. Aprovecha nuestras promociones especiales: ¡hasta un 20% de descuento en compras mayores a $500 y kits escolares desde $199! Porque sabemos lo importante que es comenzar con el pie derecho, te ofrecemos calidad y precios que se ajustan a tu bolsillo. ¡Visítanos hoy mismo y equipa a tus pequeños con lo mejor!
            </p>
            <a href="#" class="btn-1">Comprar</a>
        </div>
        <div class="general-2"></div>

    </section>

      <section class="general">

<div class="general-3"></div>

<div class="general-1">
    <h2>Compra inteligente para tus proyectos y oficina</h2>
    <p>
        Mantén tus proyectos organizados y tu oficina equipada con nuestras increíbles ofertas. Esta semana, obtén el segundo artículo al 50% en productos seleccionados como folders, plumas y agendas. Además, disfruta de descuentos exclusivos en artículos de impresión y papelería premium. No importa si es para el trabajo, el hogar o la escuela, en nuestra papelería siempre encuentras lo que necesitas a precios irresistibles. ¡Te esperamos!
    </p>
    <a href="#" class="btn-1">Comprar</a>
</div>    
</section>
<section class="general">

        <div class="general-1">
            <h2>Todo para la oficina, en un solo lugar</h2>
            <p>
                Equipa tu espacio de trabajo con nuestras ofertas especiales en papelería y suministros de oficina. Desde hojas y bolígrafos hasta organizadores y material de impresión, tenemos todo lo que necesitas para ser más productivo. Aprovecha nuestros combos ejecutivos y descuentos exclusivos en compras por volumen. Calidad, variedad y precios accesibles: ¡todo está aquí para hacer que tu día laboral sea más eficiente!
            </p>
            <a href="#" class="btn-1">Comprar</a>
        </div>
        <div class="general-4"></div>

    </section>

    <section class="general">

<div class="general-5"></div>

<div class="general-1">
    <h2>Creatividad sin límites, precios increíbles</h2>
    <p>
        Descubre nuestra amplia gama de materiales para manualidades y arte, desde pinceles y pinturas hasta papeles de diseño y accesorios. Esta temporada, lleva tus proyectos al siguiente nivel con un 40% de descuento en materiales seleccionados. Ya sea que seas un artista apasionado o un aficionado en busca de inspiración, en nuestra papelería encontrarás todo lo que necesitas para dar vida a tus ideas. ¡Aprovecha nuestras promociones y crea sin límites!
    </p>
    <a href="#" class="btn-1">Comprar</a>
</div>    
</section>


      {/* Más secciones de productos o promociones */}
    </div>
  );
};

export default Promociones;
