import React from 'react'
import styles from '../styles/Contacto.module.css';

const Contacto = () => {
  return (
    <div>
        <div className={styles.titleContact}>
            <h1>Contáctame!</h1>
            <hr color='#161925'/>
        </div>
        <div className={styles.bodyContact}>
            <div>
                <h2>Whatsapp</h2>
                <p>+593 990091326</p>
            </div>

            <div>
                <h2>Ubicación</h2>
                <p>Guayaquil, Ecuador, Parroquia Urdaneta</p>
            </div>
            
            <div>
                <h2>Correo Electrónico</h2>
                <p>kaliestefano@gmail.com</p>
            </div>
        </div>

        <div className={styles.arienContact}>
            <h2>Mi Sitio Web Para Servicios y Proyectos:</h2>
            <a href="https://www.digitalarien.com/" target="_blank" rel='noreferrer'>-&#62; Digital Arien &#60;-</a>
        </div>
    </div>
  )
}

export default Contacto;
