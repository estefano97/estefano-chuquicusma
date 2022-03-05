import React from 'react';
import styles from '../styles/Home.module.css';
import video from '../videos/banff-background.mp4';
import videoGif  from '../videos/gif.gif';
import estefano from '../assets/estefano-photo.png';
import html from '../assets/tecnologies/html.png';
import css from '../assets/tecnologies/css.png';
import js from '../assets/tecnologies/js.png';
import react from '../assets/tecnologies/react.png';
import tailwindcss from '../assets/tecnologies/tailwindcss.png';
import php from '../assets/tecnologies/php.png';
import asp from '../assets/tecnologies/asp.net.png';
import csharp from '../assets/tecnologies/csharp.png';
import mysql from '../assets/tecnologies/mysql.png';
import sqlserver from '../assets/tecnologies/sqlserver.png';
import wordpress from '../assets/tecnologies/wordpress.png';
import git from '../assets/tecnologies/git.png';
import photoshop from '../assets/tecnologies/photoshop.png';
import npm from '../assets/tecnologies/npm.png';

const Home = () => {

  return (
    <main>
        <div className={styles.sombraVideo}>
            <div className={styles.textoSombra}>
                <img src={estefano} alt="estefano2" />
                <h1>Estefano Chuquicusma</h1>
                <p>Un Creativo Programador Web Frontend y Backend </p>
            </div>
        </div>
        <video autoPlay muted loop className={styles.videoBackground} src={video}></video>
        <div className={styles.sobreMi}>
          <div className={styles.sobreMiImg}>
            <img src={videoGif} alt="me" />
          </div>
          <div
          className={styles.sobreMiTexto}>
            <div className={styles.sobreMiTitle}>
              <h2>Sobre mí</h2>
              <hr/>
            </div>
            <div className={styles.sobreMiDescripcion}>
              <p>Mi nombre es Estefano Chuquicusma, soy un programador FullStack nacido en Roma, Italia, que actualmente reside en Guayaquil, Ecuador, Comencé en el mundo del desarrollo de software y diseño grafico siendo freelancer a mis 15 años con WordPress y Photoshop. Aunque actualmente domino muchas tecnologías tanto del lado del cliente, como del servidor.</p>
              <p>Me encanta crear interfaces webs que sean atractivas, modernas, innovadoras y que sean adaptables a todo tipo de dispositivos para la comodidad de los usuarios. <br /> En cuanto a backend, tengo una fuerte inclinación a la creación de API REST que proporcionen información y lleven a cabo procesos  interesantes que puedan aportar información ordenada, y respetando los parámetros REST, a los creadores de interfaces dinámicas.</p>
              <h3>Skills:</h3>
              <div className={styles.sobreMiSkills}>
                <ul>
                  <li><span>Conocimiento de metodologias agiles.</span></li>
                  <li><span>Capacidad de aprendizaje constante.</span></li>
                  <li><span>Dispuesto a trabajar en remoto.</span></li>
                  </ul>
                  <ul>
                    <li><span>Ser muy comunicativo y social con el entorno.</span></li>
                    <li><span>Dispuesto a compartir conocimiento.</span></li>
                    <li><span>Capacidad de reconocer y focalizarme en objetivos.</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.tecnologiasDomino}>
            <div className={styles.tecnologiasTitle}>
              <h2>Tecnologías Que Domino: </h2>
            </div>
              <div className={styles.tecnologiesContainer}>
                <h2>Frontend</h2>
                <div className={styles.tecnologiasItems}>
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                  <img src={js} alt="" />
                  <img src={react} alt="" />
                  <img src={tailwindcss} alt="" />
                </div>
              </div>

              <div className={styles.tecnologiesContainer}>
                <h2>Backend</h2>
                <div className={styles.tecnologiasItems}>
                  <img src={php} alt="" />
                  <img src={asp} alt="" />
                  <img src={csharp} alt="" />
                  <img src={mysql} alt="" />
                  <img src={sqlserver} alt="" />
                </div>
              </div>

              <div className={styles.tecnologiesContainer}>
                <h2>CMS & Extras</h2>
                <div className={styles.tecnologiasItems}>
                  <img src={wordpress} alt="" />
                  <img src={git} alt="" />
                  <img src={photoshop} alt="" />
                  <img src={npm} alt="" />
                </div>
              </div>
        </div>
    </main>
  );
};

export default Home;
