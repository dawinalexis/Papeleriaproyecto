import React from "react";
import TypeWriter from "typewriter-effect";
import "./Hero.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>
                    <TypeWriter
                        options={{
                            strings: ['Tu papelería creativa de confianza', 'Encuentra todo para tu oficina, escuela y proyectos'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50, // Opcional, para borrar las palabras un poco más rápido
                        }}
                    />
                </h1>
                <p>En Papelería El Orejas, ofrecemos una amplia gama de productos de alta calidad para cada necesidad. ¡Haz que tu creatividad no tenga límites!</p>
                <button onClick={() => console.log('Ver Productos Clicked')}>Explorar Productos</button>
            </div>
        </div>
    );
};

export default HeroSection;
