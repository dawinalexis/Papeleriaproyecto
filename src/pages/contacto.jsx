import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroSection from './HeroSection';
import AboutUsCard from './AboutUsCard';
import 'materialize-css/dist/css/materialize.min.css'; // Importar CSS de Materialize
import 'materialize-css/dist/js/materialize.min.js';  // Importar JS de Materialize
import M from 'materialize-css';  // Importar la funcionalidad JS de Materialize
import "./contacto.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Importar los componentes necesarios

const Contacto = () => {
  const form = useRef();
  const [cardRevealed, setCardRevealed] = useState(false); // Estado para manejar la tarjeta revelada

  // Inicialización de componentes de Materialize al montar el componente
  useEffect(() => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems); // Inicializa los modales de Materialize
  }, []);

  // Función para enviar el formulario de contacto mediante EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o8wl8f1', 'template_80zld3r', form.current, 'A12JMpmfqJ5KKX2-p') // Corregido el template y el ID de servicio
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  // Función para manejar el clic en la tarjeta y revelar el contenido
  const handleCardReveal = () => {
    setCardRevealed(!cardRevealed); // Alterna el estado de la tarjeta revelada
  };

  // Coordenadas de Neiva, Huila, Colombia
  const center = {
    lat: 2.9376,  // Latitud de Neiva
    lng: -75.2810  // Longitud de Neiva
  };

  // Estilo del contenedor del mapa
  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  return (
    <>
      <HeroSection />
      
      {/* Sección sobre nosotros */}
      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Sobre Nosotros</h1>
            <p className="text-center">
              Bienvenidos a Papelería El Orejas, el lugar ideal para encontrar productos de calidad para el trabajo, estudio y tus proyectos más creativos. En nuestra papelería nos enorgullece ofrecer una amplia variedad de artículos pensados para satisfacer todas tus necesidades. Nuestro compromiso con el servicio al cliente es lo que nos ha convertido en una de las papelerías más queridas y confiables en Neiva.
            </p>
          </Col>
        </Row>
        
        {/* Tarjetas de información */}
        <Row className="g-4 text-center">
          <AboutUsCard
            title="Nuestra Misión"
            text="En Papelería El Orejas, nuestra misión es proporcionar a nuestros clientes productos de papelería de la más alta calidad, además de brindarles el mejor servicio para que puedan realizar sus actividades diarias de manera más eficiente. Nos apasiona ayudar a nuestros clientes a lograr sus metas creativas y profesionales."
          />
          <AboutUsCard
            title="Nuestra Historia"
            text="Fundada en 2001, Papelería El Orejas comenzó como un pequeño negocio familiar. Con los años, hemos crecido y nos hemos consolidado como un referente en el mercado local, manteniendo siempre un enfoque en la calidad y el servicio al cliente. Hoy, ofrecemos una amplia gama de productos para oficina, escuela y creatividad."
          />
        </Row>

        {/* Botón para ir a la página principal */}
        <Row className="text-center mt-4">
          <Col>
            <Button variant="primary">
              Ir a la página principal
            </Button>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Empleados Destacados</h1>
          </Col>
        </Row>
      </Container>

      {/* Tarjetas de Empleados */}
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="image/avat-2.jpg" alt="Empleado del mes" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" onClick={handleCardReveal}>
            Empleado del Mes: Carlos Gómez <i className="material-icons right"></i>
          </span>
        </div>
        {cardRevealed && (
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Empleado del Mes <i className="material-icons right"></i>
            </span>
            <p><strong>Nombre:</strong> Carlos Gómez</p>
            <p><strong>Tiempo en la empresa:</strong> 3 años</p>
            <p><strong>Aporte a la empresa:</strong> Carlos ha liderado la mejora en la atención al cliente y ha implementado un sistema de inventario que ha mejorado significativamente nuestra eficiencia operativa. Su dedicación y su actitud positiva son ejemplares.</p>
          </div>
        )}
      </div>

      {/* Otra tarjeta de Empleado */}
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src="image/pa.avif" alt="Empleado más longevo" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" onClick={handleCardReveal}>
            Empleado más Longevo: Jesús Pérez <i className="material-icons right"></i>
          </span>
        </div>
        {cardRevealed && (
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Empleado más Longevo <i className="material-icons right"></i>
            </span>
            <p><strong>Nombre:</strong> Jesús Pérez</p>
            <p><strong>Tiempo en la empresa:</strong> 15 años</p>
            <p><strong>Aporte a la empresa:</strong> Jesús es un pilar fundamental en nuestra papelería. Desde el principio, ha sido clave en la gestión de compras y el establecimiento de relaciones con proveedores. Su experiencia ha sido crucial para mantener la calidad de nuestros productos y la satisfacción de nuestros clientes.</p>
          </div>
        )}
      </div>

      {/* Ubicación */}
      <Container className="my-5">
        <h1 className="text-center">¿Dónde nos ubicamos?</h1>
      </Container>

      {/* Mapa de Google con la ubicación */}
      <Container className="my-5">
        <LoadScript googleMapsApiKey="AIzaSyC6ifAANYnMRDc_D3cPAO_DrVBrlQFV9MI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            {/* Agregar un marcador en la ubicación de Neiva */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>

        <Container className="my-5">
          <p className="text-center">
            Papelería El Orejas está ubicada en el corazón de Neiva, Huila, Colombia. Nos encontrarás en la siguiente dirección:
            <br />
            <strong>Avenida Las Palmas #35-78, Barrio San Luis, Neiva, Huila.</strong>
            <br />
            Contamos con una ubicación accesible y fácil de encontrar, cerca de puntos estratégicos de la ciudad. Si vienes desde el centro de Neiva, estamos a tan solo 10 minutos en automóvil. ¡Te esperamos!
          </p>
        </Container>
      </Container>

      {/* Formulario de contacto */}
      <Container className="my-5">
        <h1 className="text-center">Contáctanos</h1>
        <Container className="my-5">
          <p className="text-center">
            Si tienes alguna pregunta, inquietud o sugerencia, no dudes en ponerte en contacto con nosotros. Estaremos encantados de atenderte y resolver cualquier duda que tengas. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </Container>
        <form ref={form} onSubmit={sendEmail} className="field">
        <div className="row">
          {/* Campo de Nombre */}
          <div className="input-field col s12 md-6 mb-4">
            <input id="user_name" type="text" name="user_name" className="validate" required />
            <label htmlFor="user_name">Nombre</label>
          </div>
          
          {/* Campo de Email */}
          <div className="input-field col s12 md-6 mb-4">
            <input id="user_email" type="email" name="user_email" className="validate" required />
            <label htmlFor="user_email">Email</label>
          </div>
        </div>
        
        {/* Campo de Mensaje */}
        <div className="row">
          <div className="input-field col s12 mb-4">
            <textarea id="message" name="message" className="materialize-textarea" required></textarea>
            <label htmlFor="message">Mensaje</label>
          </div>
        </div>

        {/* Botón de Enviar */}
        <div className="row">
          <div className="col s12 text-center">
            <Button type="submit" variant="success" className="btn btn-success waves-effect waves-light">
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </Container>
    </>
  );
};

export default Contacto;