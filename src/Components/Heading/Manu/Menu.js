import React from 'react';
import MenuData from '../../../Assets/MenuData.json';
import styles from './Menu.module.css';

const Menu = () => {
  const [activeMenu, setActiveMenu] = React.useState(window.location.hash || '#home');

  const HandleClick=(MName)=>{
      setActiveMenu(MName);
  }

  
  return (
    <div className={styles.MenuContainer}>
      <ul>
        {
          MenuData.map((obj, ind)=>{
            return  (<li className={activeMenu === obj.link? styles.ActiveMenu:""} onClick={()=>HandleClick(obj.link)} key={ind}><a href={obj.link}>{obj.Name}</a></li>)
          })
        }
      </ul>
    </div>
  )
}

export default Menu
