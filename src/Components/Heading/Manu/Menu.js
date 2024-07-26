import React from 'react';
import MenuData from '../../../Assets/MenuData.json';
import styles from './Menu.module.css';
import SideMenu from '../../SideMenu/SideMenu';
const Menu = () => {
  const [activeMenu, setActiveMenu] = React.useState(window.location.hash || '#home');
  const [showSideMenu, setShowSideMenu] = React.useState(false)

  const HandleClick=(MName)=>{
      setActiveMenu(MName);
  }

  const fnShowMenu=()=>{
    setShowSideMenu(true)
  }

  
  
  
  return (
    <div onClick={fnShowMenu} className={styles.MenuContainer}>
      <div className={styles.ShowMenuContainer}>
        <div className={styles.showMenuItem}></div>
        <div className={styles.showMenuItem}></div>
        <div className={styles.showMenuItem}></div>
      </div>
      <ul className={styles.MenuUl}>
        {
          MenuData.map((obj, ind)=>{
            return  (<li className={activeMenu === obj.link? styles.ActiveMenu:""} onClick={()=>HandleClick(obj.link)} key={ind}><a href={obj.link}>{obj.Name}</a></li>)
          })
        }
      </ul>
      {showSideMenu && <SideMenu showSideMenu={showSideMenu} SetOptions={setShowSideMenu}/>}
    </div>  
  )
}

export default Menu
