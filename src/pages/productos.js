import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css'; // Materialize CSS
import 'materialize-css/dist/js/materialize.min.js';    // Para el JS
import '../styles/productos.css';

const Productos = () => {
  // Estado para manejar las cantidades de cada producto
  const [cantidades, setCantidades] = useState({});

  // Funciones para incrementar y decrementar cantidades
  const incrementarCantidad = (id) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrementarCantidad = (id, min = 1) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: Math.max(min, (prev[id] || 1) - 1),
    }));
  };

  return (
    <div className="container">
      <div className="row center-align">
        {/* Navbar de categorías */}
        <div className="col s3 m2 l2">
          <div className="categories-menu">
            <ul>
              <li className="collection-item">
                <a href="#featured" className="category-button">
                  Productos Destacados
                </a>
              </li>
              <li className="collection-item">
                <a href="#notebooks" className="category-button">
                  Cuadernos
                </a>
              </li>
              <li className="collection-item">
                <a href="#pens" className="category-button">
                  Lápices y Plumas
                </a>
              </li>
              <li className="collection-item">
                <a href="#art-supplies" className="category-button">
                  Material de Arte
                </a>
              </li>
              <li className="collection-item">
                <a href="#office-supplies" className="category-button">
                  Artículos de Oficina
                </a>
              </li>
            </ul>
            <img
              src="https://img.freepik.com/fotos-premium/objetos-papeleria-mini-carrito-supermercado-fondo_488220-3565.jpg?w=360"
              alt="Imagen descriptiva"
              className="category-image"
            />
          </div>
        </div>

        {/* Sección de productos */}
        <div className="product-content" id="product-list">
          {/* Categorías y productos */}
          <div id="featured" className="category-section">
            <h3>Productos Destacados</h3>
            <div className="row center-align">
              {/* Producto 1 */}
              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://images.cdn1.buscalibre.com/fit-in/360x360/d7/12/d712163e5d1d494366476cb1c4dd906e.jpg"
                      alt="Producto 1"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Cuaderno A5</h5>
                    <p>Cuaderno de hojas rayadas con diseño moderno.</p>
                    <p className="price">$9.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://panamericana.vtexassets.com/arquivos/ids/383511-1200-auto?v=637494409608630000&width=1200&height=auto&aspect=true"
                      alt="Producto 2"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Bolígrafos Coloridos</h5>
                    <p>Set de 10 bolígrafos de tinta suave en colores.</p>
                    <p className="price">$20.000</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://www.grafitos.com.co/wp-content/uploads/2023/02/Grafitos-Resaltadores.jpg"
                      alt="Producto 3"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Resaltadores</h5>
                    <p>Paquete de 5 resaltadores en colores brillantes.</p>
                    <p className="price">$10.750</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

       
          <div id="notebooks" className="category-section">
            <h3>Cuadernos</h3>
            <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://minisocol.vtexassets.com/arquivos/ids/215602/Cuaderno-Argollado-A5-Violeta-Azulado-100-Hojas-1-13373.jpg?v=637962040323200000"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Cuaderno Argollado</h5>
                    <p>Cuaderno de hojas rayadas con diseño moderno.</p>
                    <p className="price">$3.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://chedrauimx.vtexassets.com/arquivos/ids/38994641-800-auto?v=638671389621200000&width=800&height=auto&aspect=true"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Cuaderno Dietrix</h5>
                    <p>Cuaderno de hojas rayadas con diseño moderno.</p>
                    <p className="price">$3.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://production-tailoy-repo-magento-statics.s3.amazonaws.com/imagenes/265x265/productos/i/c/u/cuaderno-deluxe-100h-triple-renglon-sol-amarillo-justus-max-49539001-default-1.jpg"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Cuaderno Justus</h5>
                    <p>Cuaderno de hojas rayadas con diseño moderno.</p>
                    <p className="price">$3.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            
              
          </div>

          <div id="pens" className="category-section">
          <h3>Lapices y esferos</h3>
          <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://static.wixstatic.com/media/e3737c_e748b0221a1442458151b26d52f12e36~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e3737c_e748b0221a1442458151b26d52f12e36~mv2.jpg"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Colores SuperSoft A5</h5>
                    <p>Ideales para escribir y colorear.</p>
                    <p className="price">$7.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://publicitarcomco.b-cdn.net/wp-content/uploads/2024/06/LAPIZ-DE-PLASTICO-1.jpg"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Lápiz Plástico</h5>
                    <p>Ideales para escribir y colorear.</p>
                    <p className="price">$1.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://pelikancolombia.com/cdn/shop/files/Lapices-de-colores-x24.jpg?v=1704298017"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Lapices Colores</h5>
                    <p>Ideales para escribir y colorear.</p>
                    <p className="price">$5.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>



          </div>

          <div id="art-supplies" className="category-section">
          <h3>Material de Arte</h3>
          <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://exitocol.vtexassets.com/arquivos/ids/22919352/set-de-arte-metalico-generico-kb-6-168-piezas.jpg?v=638521676275770000"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Juego Arte</h5>
                    <p>Diseñado para hacer lindas pinturas.</p>
                    <p className="price">$30.800</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://http2.mlstatic.com/D_Q_NP_2X_625572-CBT51152979917_082022-E.webp"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Kit Material</h5>
                    <p>Para desarrollar el instinto del arte.</p>
                    <p className="price">$50.000</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://http2.mlstatic.com/D_Q_NP_2X_920264-MLU72756706552_112023-E.webp"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Tablero Tizas A5</h5>
                    <p>Para desarrollar el instinto del arte.</p>
                    <p className="price">$17.200</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

          </div>


          <div id="office-supplies" className="category-section">
          <h3>Articulos de oficina</h3>
          <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_776463-MLU75826871979_042024-O.webp"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Cinta Doble Faz</h5>
                    <p>Ideal para el buen trabajo en oficina.</p>
                    <p className="price">$9.500</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://ofigrup.mx/blog/wp-content/uploads/2024/01/Elementos-requeridos-para-el-funcionamiento-eficiente-de-una-oficina-300x300.jpg"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Silla Oficina</h5>
                    <p>Ideal para el buen trabajo en oficina.</p>
                    <p className="price">$70.000</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col s10 m6 l4 product-card-p">
                <div className="card hoverable">
                  <div className="card-image">
                    <img
                      src="https://www.mobiliario-escolar.es/wp-content/uploads/2023/06/Mesa-oficina-eco-gris-R9006-haya.jpg"
                      alt="Cuaderno A5"
                    />
                  </div>
                  <div className="card-content">
                    <h5>Mesa Oficina</h5>
                    <p>Ideal para el buen trabajo en oficina.</p>
                    <p className="price">$100.000</p>
                    <a className="waves-effect waves-light btn-small" id="button-product">
                      AGREGAR
                    </a>
                    <div className="quantity-input">
                      <button
                        className="btn-small btn-decrement waves-effect waves-light"
                        onClick={() => decrementarCantidad(1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="99"
                        value={cantidades[1] || 1}
                        readOnly
                        className="quantity-field"
                      />
                      <button
                        className="btn-small btn-increment waves-effect waves-light"
                        onClick={() => incrementarCantidad(1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>


          </div>





          {/* Repite lo mismo para las otras categorías */}
        </div>
      </div>
    </div>
  );
};

export default Productos;
