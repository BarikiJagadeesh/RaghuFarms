import React from 'react';
import MenuData from '../../../Assets/MenuData.json';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div className={styles.MenuContainer}>
      {
        MenuData.map((obj, ind)=>{
            return <span className={styles.MenuItem} key={ind}>{obj.Name} </span>
        })
      }
    </div>
  )
}

export default Menu
