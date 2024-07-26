import React from 'react';
import styles from './SideMenu.module.css';
import menuData from '../../Assets/MenuData.json';


const SideMenu = ({showSideMenu, SetOptions}) => {
    // const [showMenu, setShowMenu] = React.useState(SetOptions);

    const fnClick =(event)=>{
        
        SetOptions(false)
        event.stopPropagation(); 
    }
    

  return (
    <div className={`${styles.SideMenuContainerr} ${showSideMenu? styles.Show: " "}`}>
        <div className={styles.SideMenuHeading}>
            <p>Menu</p>
            <img onClick={fnClick} className={styles.closebtn} src='https://cdn-icons-png.flaticon.com/128/1828/1828778.png' alt='Close' width='25px' height='25px'/>
        </div>
      <ul>
        {
            menuData.map((obj, ind)=>{
                return <li onClick={fnClick} key={ind}><a href={obj.link}><img src={obj.icon} alt='Icon' width='20px'/> {obj.Name}</a></li>
            })
        }
      </ul>
      
    </div>
  )
}

export default SideMenu
