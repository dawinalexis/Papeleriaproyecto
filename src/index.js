import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import M from 'materialize-css'; // Importa Materialize JS
import 'materialize-css/dist/css/materialize.min.css'; // Importa Materialize CSS

function App() {
  useEffect(() => {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems, {
      fullWidth: false,
      indicators: true
    });

    // Flechas de navegación
    document.querySelector('.carousel-prev').addEventListener('click', () => {
      instances[0].prev(); // Retrocede una imagen en el carrusel
    });

    document.querySelector('.carousel-next').addEventListener('click', () => {
      instances[0].next(); // Avanza una imagen en el carrusel
    });
  }, []);

  const [searchActive, setSearchActive] = useState(false);


  return (
    <div>
     <nav className='nav-wrapper'>
        <div className="nav-wrapper blue darken-2">
          <div className="container nav-left">
            <a href="/" className="brand-logo">
              <img 
                src="https://img.freepik.com/vector-gratis/plantilla-logotipo-tienda-papeleria_23-2149852417.jpg?semt=ais_hybrid" 
                alt="Logo" 
                className="logo" 
              />
            </a>
            <ul className="left">
              <li><a href="/" className="btn-productos">PRODUCTOS</a></li>
              <li><a href="/" className="btn-promociones">PROMOCIONES</a></li>
              <li><a href="/" className="link-quienes">Quienes somos</a></li>
              <li className="Envios">¡Aprovecha incontables envíos gratis!</li>
            </ul>
            <div className="search-container">
  <div className={`search-bar ${searchActive ? "expanded" : ""}`}>
    <input
      type="text"
      placeholder="Buscar productos..."
      className={`search-input ${searchActive ? "active" : ""}`}
    />
    <img
      src="https://cdn-icons-png.flaticon.com/512/45/45895.png"
      alt="Buscar"
      className="search-icon"
      onClick={() => setSearchActive(!searchActive)}
    />
  </div>
  <div className="cart-icon">
    <a href="/">
      <img
        src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
        alt="Carrito de compras"
      />
    </a>
  </div>
</div>

          </div>
        </div>
      </nav>

      


    

<div className="carousel-container">
  <div className="carousel">
    <a className="carousel-item" href="#one!">
      <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Imagen 1" />
    </a>
    <a className="carousel-item" href="#two!">
      <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Imagen 2" />
    </a>
    <a className="carousel-item" href="#three!">
      <img src="https://sumi.com.co/wp-content/uploads/2023/10/Suministros-Pepeleria-2-1024x1024.jpg" alt="Imagen 3" />
    </a>
    <a className="carousel-item" href="#four!">
      <img src="https://paraisodistribuciones.com/wp-content/uploads/2023/05/productos-esenciales-portada.png" alt="Imagen 4" />
    </a>
  </div>
  <button className="carousel-prev">&#10094;</button>
  <button className="carousel-next">&#10095;</button>
  <div class="button-container">
    <a href="/" class="btn-large waves-effect waves-light blue">Comprar Ahora</a>
  </div>
</div>

<div class="center-align">
  <p class="rainbow-text">Descubre nuestros productos escolares y más.</p>
</div>

<div className="section">
  <div className="container banner-izq-prod-der">
    <div className="title-section">
      <a href="/"><h2 className="discount-title">Productos en Descuento</h2></a>
      <img src="https://cdn-icons-png.flaticon.com/512/2795/2795648.png" alt="Imagen del título" className="title-image" />
    </div>
    <div className="horizontal-scroll">
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      <div className="horizontal-scroll-item">
        <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
        <p>Producto 1</p>
        <p class="sold-amount">200 vendidos</p>
        <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
        <a href="/" class="btn-aprovecha">Aprovecha Ahora</a>
      </div>
      

      {/* Añade más productos aquí */}
    </div>
  </div>
</div>


<div className="section">
  <div className="container">
    <h2 className="center-align">Productos Destacados</h2>
    <div className="row">
      {/* Cards de productos */}
      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>


      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>
      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>
      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>


      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>


      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>
      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>
      <div className="col s12 m6 l3">
        <a href="/" className="card-link">
          <div className="product-card">
            <div className="card-image">
              <img src="https://panafargo.com/wp-content/uploads/2019/04/Papeleria-barata.jpg" alt="Producto 1" />
            </div>
            <div className="card-content">
              <span className="card-title">Cuaderno</span>
              <p>Cuadernos de la mejor calidad para tu escuela.</p>
              <span className="price">$12.00</span>
              <span className="sold">Vendidos: 150</span>
            </div>
          </div>
        </a>
      </div>
            {/* Más tarjetas... */}
          </div>
        </div>
      </div>
      <footer class="page-footer blue darken-2">
  <div class="container">
    <div class="row">
      <div class="col s12 m6 l3">
        <h5 class="white-text">Compañía</h5>
        <ul>
          <li><a href="#!" class="white-text">Sobre nosotros</a></li>
          <li><a href="#!" class="white-text">Carreras</a></li>
          <li><a href="#!" class="white-text">Blog</a></li>
          <li><a href="#!" class="white-text">Contacto</a></li>
        </ul>
      </div>

      <div class="col s12 m6 l3">
        <h5 class="white-text">Ayuda</h5>
        <ul>
          <li><a href="#!" class="white-text">Preguntas frecuentes</a></li>
          <li><a href="#!" class="white-text">Soporte</a></li>
          <li><a href="#!" class="white-text">Política de privacidad</a></li>
          <li><a href="#!" class="white-text">Términos y condiciones</a></li>
        </ul>
      </div>

      <div class="col s12 m6 l3">
        <h5 class="white-text">Tienda</h5>
        <ul>
          <li><a href="#!" class="white-text">Productos</a></li>
          <li><a href="#!" class="white-text">Ofertas</a></li>
          <li><a href="#!" class="white-text">Novedades</a></li>
          <li><a href="#!" class="white-text">Política de devoluciones</a></li>
        </ul>
      </div>

      <div class="col s12 m6 l3">
        <h5 class="white-text">Síguenos</h5>
        <ul>
          <li><a href="#" class="white-text"><i class="fab fa-facebook-f"></i> Facebook</a></li>
          <li><a href="#" class="white-text"><i class="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="#" class="white-text"><i class="fab fa-instagram"></i> Instagram</a></li>
          <li><a href="#" class="white-text"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-info">
    <div class="container">
      © 2024 Tu Tienda Online. Todos los derechos reservados.
    </div>
  </div>
</footer>


    </div>

    
  );
  
  
}

const arrowStyle = {
  position: 'absolute',
  top: '50%',
  fontSize: '3rem',
  color: '#000',
  background: 'rgba(255, 255, 255, 0.7)',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
