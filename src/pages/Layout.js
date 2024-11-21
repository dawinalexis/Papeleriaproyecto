// src/pages/Layout.js
import React, { useState } from 'react';
import { Link,  Outlet } from 'react-router-dom';
import '../styles/Navbar.css';

const Layout = () => {
  const [searchActive, setSearchActive] = useState(false);
  return <div>
   <nav className="nav-wrapper blue darken-2">
      <div className="container nav-left">
        <Link to="/" className="brand-logo">
          <img 
            src="https://img.freepik.com/vector-gratis/plantilla-logotipo-tienda-papeleria_23-2149852417.jpg?semt=ais_hybrid" 
            alt="Logo" 
            className="logo" 
          />
        </Link>
        <ul className="left">
          <li>
            <Link to="/productos" className="btn-productos">
              PRODUCTOS
            </Link>
          </li>
          <li>
            <Link to="/promociones" className="btn-promociones">
              PROMOCIONES
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="link-quienes">
              Quiénes somos
            </Link>
          </li>
          <li className="Envios">¡Aprovecha incontables envíos gratis!</li>
        </ul>
        <div className="search-container">
          <div className={`search-bar ${searchActive ? 'expanded' : ''}`}>
            <input
              type="text"
              placeholder="Buscar productos..."
              className={`search-input ${searchActive ? 'active' : ''}`}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/45/45895.png"
              alt="Buscar"
              className="search-icon"
              onClick={() => setSearchActive(!searchActive)}
            />
          </div>
          <div className="cart-icon">
            <Link to="/">
              <img
                src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png"
                alt="Carrito de compras"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>

    
    
      <Outlet />


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

    
  
};

export default Layout;