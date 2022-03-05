import React from 'react';
import styles from '../styles/Portfolio.module.css';
import video from "../videos/coding-background.mp4";
import thf from "../assets/portfolio/thf.png";
import siete1 from "../assets/portfolio/consultora-siete.png";
import siete2 from "../assets/portfolio/consultora-siete-2.png";
import interesCompuesto from "../assets/portfolio/calculadora-interes.png";
import addonGoogle from "../assets/portfolio/addon-google.PNG";

const Portfolio = () => {
  return (
    <div>
        <div className={styles.background}>
            <h1>Mis Proyectos Realizados</h1>
            <p>Un pequeño resumen de trabajos que eh desarrollado para mis  clientes y proyectos personales.</p>
            <video autoPlay muted loop className={styles.videoBackground} src={video}></video>
        </div>

        <h2 className={styles.titles}>Trabajos Realizados</h2>
        <div className={styles.ProyectosContainer}>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>The Hat Factory</h2>
                    <p>Desarrollo de un e-commerce para la venta de gorras deportivas estadounidenses, utilizando un Frontend en React y un Backend en PHP, conectado mediante una API Rest, para generar una futura compatibilidad con una App Mobile.</p>
                    <a href='http://kaal1.000webhostapp.com/' target="_blank" rel="noreferrer">Ver Sitio</a>
                </div>
                <img src={thf} alt="thf" />
            </div>
            <div className={styles.ProyectosItem}>
                <img src={siete2} alt="thf" />
                <div className={styles.ProyectosText}>
                    <h2>Consultora Integral Siete - (Actualización)</h2>
                    <p>Actualización del sitio web de la consultora integral siete, y migración a codigo puro HTML CSS y Javascript, usando animaciones GSAP y con envio de correos mediante PHPMailer y con imagenes Optimizadas.</p>
                    <a href='https://consultorasiete.com/' target="_blank" rel="noreferrer">Ver Sitio</a>
                </div>
            </div>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>Consultora Integral Siete</h2>
                    <p>Soluciones de Seguridad de WordPress y de actualización de versión y estilos en la pagina principal de la consultora estudiantil SIETE.</p>
                    <button>Sitio No Disponible</button>
                </div>
                <img src={siete1} alt="thf" />
            </div>
        </div>

        <h2 className={styles.titles}>Proyectos Personales</h2>

        <div className={styles.ProyectosContainer}>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>Calculadora De Interes Compuesto</h2>
                    <p>Creación de una herramienta que permita calcular el interes compuesto en base a una inversion a largo plazo, hecho utilizando vanilla PHP.</p>
                    <a href='https://github.com/estefano97/interes-compuesto' target="_blank" rel="noreferrer">Ver Proyecto</a>
                </div>
                <img className={styles.proyectsImages} src={interesCompuesto} alt="thf" />
            </div>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>Crypto Price</h2>
                    <p>Addon de google que permite ver el precio de varias criptomonedas en tiempo real, hecho utilizando AJAX, API REST y JSON.</p>
                    <a href='https://github.com/estefano97/crypto-real' target="_blank" rel="noreferrer">Ver Proyecto</a>
                </div>
                <img className={styles.proyectsImages} src={addonGoogle} alt="thf" />
            </div>
        </div>
    </div>
  );
};

export default Portfolio;