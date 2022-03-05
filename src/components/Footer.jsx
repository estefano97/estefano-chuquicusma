import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <p><i>Sitio Realizado Utilizando React</i></p>
        <p>Si desea más información acerca de mi desarrollo freelance, visite <a href="https://www.digitalarien.com" target="_blank" rel="noreferrer"><b>Digital Arien</b></a></p>
    </div>
  )
}

export default Footer;