import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import curriculum  from '../videos/Estefano_Chuquicusma_Curriculum.pdf';
import linkedinIcon from '../assets/icon/linkedin.svg';
import githubIcon from '../assets/icon/github.svg';
import phoneIcon from '../assets/icon/phone.svg';

const Header = () => {
  return (
    <div>
        <header>
        <div className={styles.iconsHeader}>
            <a href="https://www.linkedin.com/in/estefano-chuquicusma-355a201a7/" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a href="https://github.com/estefano97" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="github" />
            </a>
            <a href="https://wa.me/+593990091326" target="_blank" rel="noreferrer">
                <img src={phoneIcon} alt="phone-number" />
            </a>
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
        <div className={styles.buttonContact}>
            <a href={curriculum} download={curriculum}>Descarga Mi CV</a>
        </div>
        </header>
    </div>
  );
};

export default Header;
