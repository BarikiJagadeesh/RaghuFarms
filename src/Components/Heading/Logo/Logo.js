import React from 'react';
import styles from './Logo.module.css';
import LogoImg from "../../../Assets/Logo.jpg"

const Logo = () => {
  return (
    // <div className={styles.LogoContainer}>
    //   <img src={LogoImg} alt='Logo'/>
    //   <p>Raghu Forms</p>
    // </div>
    <>
        <span className={styles.LogoContainer}>
         <img src={LogoImg} alt='Logo'/>
         <p>Raghu Farms</p>
        </span>
    </>
  )
}

export default Logo
