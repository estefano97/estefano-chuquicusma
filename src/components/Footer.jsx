import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <p><i>Site made using React</i></p>
        <p>If you want more information about my freelancer website, visit: <a href="https://www.digitalarien.com" target="_blank" rel="noreferrer"><b>Digital Arien</b></a> </p>
    </div>
  )
}

export default Footer;