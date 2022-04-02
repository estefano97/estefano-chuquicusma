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
            <h1>My Works and Personal Proyects</h1>
            <p>A little resume of my works. That I develop for my clients and my personal proyects.</p>
            <video autoPlay muted loop className={styles.videoBackground} src={video}></video>
        </div>

        <h2 className={styles.titles}>Works Done</h2>
        <div className={styles.ProyectosContainer}>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>The Hat Factory</h2>
                    <p>Development of an e-commerce for sell american deportive leagues clothings, using in the frontend React, Redux and Axios. and in the backend use PHP with POO for create an API REST with it respective validations for process and serve information. and create API REST Based in future compatibility with a future mobile app.</p>
                    <a href='http://kaal1.000webhostapp.com/' target="_blank" rel="noreferrer">View site</a>
                </div>
                <img src={thf} alt="thf" />
                <a className={styles.mobileButton} href='http://kaal1.000webhostapp.com/' target="_blank" rel="noreferrer">View site</a>
            </div>
            <div className={styles.ProyectosItem}>
                <img src={siete2} alt="siete2" />
                <div className={styles.ProyectosText}>
                    <h2>Consultora Integral Siete - (Update)</h2>
                    <p>Update of the website of the "Consultora Integral Siete", and migration a pure code HTML, CSS and Javascript from WordPress Site, using GSAP animations and send mails with PHPMailer.</p>
                    <a href='https://consultorasiete.com/' target="_blank" rel="noreferrer">View site</a>
                </div>
                <a className={styles.mobileButton} href='https://consultorasiete.com/' target="_blank" rel="noreferrer">View site</a>
            </div>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>Consultora Integral Siete</h2>
                    <p>Security and Style Update in the Website base in wordPress of the principal website of the "Consultora Integral Siete".</p>
                    <button>Site not available</button>
                </div>
                <img src={siete1} alt="siete1" />
                <button className={styles.mobileButton}>Site not available</button>
            </div>
        </div>

        <h2 className={styles.titles}>Personal Proyects</h2>

        <div className={styles.ProyectosContainer}>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>Calculator of the compound interest</h2>
                    <p>I am create a tool for calculate te compound interest in base on an investment a long term, create using PHP and Javascript.</p>
                    <a href='https://github.com/estefano97/interes-compuesto' target="_blank" rel="noreferrer">View Repository</a>
                </div>
                <img className={styles.proyectsImages} src={interesCompuesto} alt="Interes-Compuesto" />
                <a className={styles.mobileButton} href='https://github.com/estefano97/interes-compuesto' target="_blank" rel="noreferrer">View Repository</a>
            </div>
            <div className={styles.ProyectosItem}>
                <div className={styles.ProyectosText}>
                    <h2>Crypto Price</h2>
                    <p>Addon of google for view price of the principal crypto-currencys in real time, made with Vanilla Javascript and AJAX.</p>
                    <a href='https://github.com/estefano97/crypto-real' target="_blank" rel="noreferrer">View Repository</a>
                </div>
                <img className={styles.proyectsImages} src={addonGoogle} alt="thf" />
                <a className={styles.mobileButton} href='https://github.com/estefano97/crypto-real' target="_blank" rel="noreferrer">View Repository</a>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;