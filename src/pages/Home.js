// src/pages/Home.js
import React, { useEffect } from 'react';
import '../styles/index.css';            // Ruta corregida
import { Link } from 'react-router-dom';

import M from 'materialize-css'; // Importa Materialize JS
import 'materialize-css/dist/css/materialize.min.css'; // Importa Materialize CSS

const Home = () => {
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
    
      
    
    
      return (
<div>
        
    
    
        
    
<div className="carousel-container">
  <div className="carousel">
    <a className="carousel-item">
      <img src="https://papelesprimavera.vteximg.com.br/arquivos/ids/216456/banner-black-friday-noviembre-primavera-movil.jpg?v=638677219209400000" alt="Imagen 1" />
    </a>
    <a className="carousel-item" >
      <img src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/fcb8584d-091b-4955-ae78-8ba6619f0024___52d51541c50d380dd77d4426dc1fcc91.jpg" alt="Imagen 2" />
    </a>
    <a className="carousel-item" >
      <img src="https://panafargo.com/wp-content/uploads/2024/08/BANNER-MOVIL-1.png" alt="Imagen 3" />
    </a>
    <a className="carousel-item" >
      <img src="https://extranet.elimparcial.com/clubsuscriptoresgh/imagenes/comercios/mochilandia-4147/mochilandia-promocion-5-1240x529px.jpg" alt="Imagen 4" />
    </a>
  </div>
  <button className="carousel-prev">&#10094;</button>
  <button className="carousel-next">&#10095;</button>
  <div class="button-container">
    <a >
    <Link to="/productos" class="btn-large waves-effect waves-light blue">
    Comprar Ahora
            </Link>
            </a>
  </div>
</div>

<div class="center-align">
  <p class="rainbow-text">Descubre nuestros productos escolares y más.</p>
</div>

    
    <div className="section">
      <div className="container banner-izq-prod-der">
        <div className="title-section">
          <a> <Link to="/promociones">
            <h2 className="discount-title">Productos en Descuento</h2></Link></a>
          <img src="./image/Captura de pantalla 2024-11-20 235305.png" alt="Imagen del título" className="title-image" />
        </div>
        <div className="horizontal-scroll">
          <div className="horizontal-scroll-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Yor7c1HiKGskbE0YvIwykU88zPMlVFEax2EviHAoAhkTbxZ4lLrOS5NqRWjIbr9vibA&usqp=CAU" alt="Producto 1" />
            <p>Bolso Totto</p>
            <p class="sold-amount">43 vendidos</p>
            <p class="price"><span class="original-price">$60</span> <span class="discount-price">$25</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
          </div>
          <div className="horizontal-scroll-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbUXu4FQ9ycjPbX5zILqHMcIH5jcKkn2Gyw&s" alt="Producto 1" />
            <p>Marcadores</p>
            <p class="sold-amount">15 vendidos</p>
            <p class="price"><span class="original-price">$20</span> <span class="discount-price">$15</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
          </div>
          <div className="horizontal-scroll-item">
            <img src="https://www.aprendum.com/cdn/13/images/curso-online-venta-en-librerias-y-papelerias_l_primaria_1.jpg" alt="Producto 1" />
            <p>kit escolar</p>
            <p class="sold-amount">34 vendidos</p>
            <p class="price"><span class="original-price">$40</span> <span class="discount-price">$25</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
          </div>
          <div className="horizontal-scroll-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSS8F5E3bv1FFst-Q9EeW2cwP0VIP8tOKrQUmJ04h08S9YOKyxw1lMydL4iqIC_sOUDE&usqp=CAU" alt="Producto 1" />
            <p>kit de bolsos</p>
            <p class="sold-amount">30 vendidos</p>
            <p class="price"><span class="original-price">$100</span> <span class="discount-price">$65</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
          </div>
          <div className="horizontal-scroll-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_hzaJOIX1NPf_qFT860IyJf4lOyI5APTHg&s" alt="Producto 1" />
            <p>kit cuadernos</p>
            <p class="sold-amount">0 vendidos</p>
            <p class="price"><span class="original-price">$50</span> <span class="discount-price">$35</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
          </div>
          <div className="horizontal-scroll-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgvZzw6-USwGOttKs4b4sV3YzqHuDXnofrg&s" alt="Producto 1" />
            <p>Cuadernos</p>
            <p class="sold-amount">2 vendidos</p>
            <p class="price"><span class="original-price">$20</span> <span class="discount-price">$15</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
          </div>
          <div className="horizontal-scroll-item">
            <img src="https://milcacharros.com/cdn/shop/files/6907605791348_2220117261716865741.jpg?v=1726248751" alt="Producto 1" />
            <p>Cartucheras</p>
            <p class="sold-amount">30 vendidos</p>
            <p class="price"><span class="original-price">$30</span> <span class="discount-price">$15</span></p>
            <a>
            <Link to="/promociones" className="btn-aprovecha">
              Aprovecha Ahora
            </Link>
            </a>
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
            <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://cdn1.totalcommerce.cloud/normaco/product-thumb/es/cuaderno-argollado-tapa-dura-platino-grande-80-hojas-cuadriculado-jean-book-tela-real-_-rojo-1.webp" />
                </div>
                <div className="card-content">
                  <span className="card-title">Cuaderno Deluxe</span>
                  <p>Cuaderno de hojas rayadas con diseño moderno.</p>
                  <span className="price">$12.000</span>
                  <span className="sold">Vendidos: 15</span>
                </div>
              </div>
              
            
            </Link>
            </a>
          </div>
    
    
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://acdn.mitiendanube.com/stores/399/204/products/cuaderno-cosido-economico-211-a613324c5ef7f85a1415474132881303-640-0.png" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Cuaderno Fabrifolder</span>
                  <p>Cuaderno de hojas rayadas con diseño moderno.</p>
                  <span className="price">$7.000</span>
                  <span className="sold">Vendidos: 20</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://image.made-in-china.com/202f0j00rCAiJfvzAMRP/Factory-Direct-Price-Hot-Selling-144-Colored-Pencils-with-White-Strips-in-Plastic-Box.webp" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Colores Pencils</span>
                  <p>Ideales para escribir y colorear.</p>
                  <span className="price">$21.999</span>
                  <span className="sold">Vendidos: 54</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://www.grafitos.com.co/wp-content/uploads/2021/07/tijeras-punta-roma-grafito-1.jpg" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Tijeras punta roma</span>
                  <p>Material: Metálicas, mango de pasta, 12 cm de largo.</p>
                  <span className="price">$5.000</span>
                  <span className="sold">Vendidos: 150</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
    
    
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://elchiquitindelospreciosbajos.com/wp-content/uploads/2021/12/Sacapuntas-Metalico-Cod.-6580901071018-min-1.jpg" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Sacapuntas</span>
                  <p>Sacapuntas Metálico. Cuchillas Duraderas.</p>
                  <span className="price">$500</span>
                  <span className="sold">Vendidos: 17</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
    
    
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://pelikancolombia.com/cdn/shop/products/420-cuerpos.jpg?v=1701201963" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Marcadores</span>
                  <p>Marca en la mayoría de las superficies con precisión.</p>
                  <span className="price">$14.000</span>
                  <span className="sold">Vendidos: 12</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://www.industriasfusioncolor.com/wp-content/uploads/2024/01/set2015020x206201.webp" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Set de Pinceles</span>
                  <p>Pinceles Planos King Diamond viene con 6 pinceles.</p>
                  <span className="price">$25.000</span>
                  <span className="sold">Vendidos: 10</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
          <div className="col s12 m6 l3">
          <a href="/" className="card-link">
          <Link to="/productos">
              <div className="product-card">
                <div className="card-image">
                  <img src="https://medios.papeleriamodelo.com/wp-content/uploads/2015/06/CLQPMPMETAL_2.jpg" alt="Producto 1" />
                </div>
                <div className="card-content">
                  <span className="card-title">Liquid Paper</span>
                  <p>Lapiz corrector marca Liquid Paper, calidad buena.</p>
                  <span className="price">$11.000</span>
                  <span className="sold">Vendidos: 6</span>
                </div>
              </div>
              </Link>
            </a>
          </div>
                {/* Más tarjetas... */}
              </div>
            </div>
          </div>
          
    
    
 </div>
    
        
      );
};

export default Home;