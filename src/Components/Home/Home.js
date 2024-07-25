import React from 'react';
import styles from './Home.module.css';
import raghuV from '../../Assets/Raghu.mp4'

const Home = () => {
  return (
    <div className={styles.HomeContainer}>
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
