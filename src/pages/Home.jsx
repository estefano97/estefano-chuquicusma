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
                <p>A creative developer web frontend and backend.</p>
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
              <h2>About me</h2>
              <hr/>
            </div>
            <div className={styles.sobreMiDescripcion}>
              <p>Hello!, my name is Estefano Chuquicusma, I am a FullStack Developer living in Guayaquil, Ecuador. I started in the world of the software development and graphic design making a freelancer proyects when i was 17 years old with Web Tecnologies(HTML, CSS, JS), WordPress and Photoshop. <br/>
              But i actually domain a lot tecnologies in the frontend and the backend side. I love create atractive, modern and innovate, web interfaces for all kind of dispositives for the user experience comodity. <br/> In the backend, I have a most inclination a the create API REST for serve information and
              process with respectives validations and respect the REST parameters. <br/>
              My hobbies are related with the tecnologie and the financial world. I like actualice with the new innovations in the hardware area and also watch videos and read blogs relationed with the macroecnomy, geopolitics decisions, blockchain and crypto world, investment and savings methods. In summary, whatever economy o tecnology is mi stream :D.</p>
              <h3>Skills:</h3>
              <div className={styles.sobreMiSkills}>
                <ul>
                  <li><span>Knowledge in Agile Methologies</span></li>
                  <li><span>Capacity of the constant learn.</span></li>
                  <li><span>Remote work is posibility.</span></li>
                  </ul>
                  <ul>
                    <li><span>Social and Intrapersonal comunication</span></li>
                    <li><span>willing to share knowledges.</span></li>
                    <li><span>Capacity of focus on goals.</span></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className={styles.tecnologiasDomino}>
            <div className={styles.tecnologiasTitle}>
              <h2>My main tecnologies: </h2>
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
                <h2>CMS & Extra</h2>
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
