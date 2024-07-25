import React from 'react';
import styles from './Home.module.css';
import raghuV from '../../Assets/Raghu.mp4';
import NewImg from '../../Assets/NewImg.png'

const Home = () => {
  return (
    <div id='home' className={styles.HomeContainer}>
      <div className={styles.Scrollingcontainer}>
        <p className={styles.scrollingText}> <img src={NewImg} alt='NewImage' width='25px' height='20px'/>Natural Milk and vegetables Available Soon....!</p>
      </div>
      
      <div className={styles.HomeHeading}>
        <p>The soil is the great connector of our lives</p>
      </div>
      <div className={styles.Video}>
        <video loop autoPlay muted ><source src={raghuV} type='video/mp4'></source></video>
        
      </div>
    </div>
  )
}

export default Home
