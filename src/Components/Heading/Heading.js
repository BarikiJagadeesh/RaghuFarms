import React from 'react';
import styles from './Heading.module.css';
import Logo from './Logo/Logo';
import Menu from './Manu/Menu';

const Heading = () => {
  return (
    <div className={styles.HeadingContainer}>
      <div className={styles.Heading}>
        <Logo/>
        <Menu/>
      </div>
    </div>
  )
}

export default Heading
