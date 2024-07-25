import React from 'react';
import styles from './About.module.css';
import Carasole from '../Carasole/Carasole';
import RaghuOx from '../../Assets/Raghu_Ox.jpg'
import Rose from '../../Assets/Rose.png';
import RedNefiyar from '../../Assets/RedNefiyar.png';
import Betal_leafe from '../../Assets/Betal_leafe.png';
import GroundNuts from '../../Assets/GroundNuts.png';

const About = () => {
  return (
    <div className={styles.AboutContainer}>
        <div className={styles.AboutHeading}>
            <p>About Us</p>
        </div>
        <div className={styles.AboutData}>
            <div className={styles.AboutFormer}>
                <div>
                    <p className={styles.FormerHeading}>Raghavendra Prasad Goud</p>

                    <p className={` ${styles.FromerIntro}`}>My name is <i><b>Raghavendra Prasad Goud.</b></i> I hold a Master's degree in Business Administration, a field that has equipped me with extensive knowledge and skills in the business sector. However, my passion for farming remains undiminished. Farming has always been close to my heart, and I believe it is a crucial aspect of our lives and society.</p>

                    <p className={styles.FromerIntro}>Every weekend, I make it a point to visit my village. There, I assist my parents with various farming tasks. This involvement not only keeps me grounded but also allows me to contribute to my family's livelihood. We are fortunate to own a tractor, which plays a vital role in our farming operations. The tractor significantly reduces the manual labor required, enhances productivity, and allows us to manage our land more effectively.</p>

                    <p className={styles.FromerIntro}>Balancing a professional career and a commitment to farming has its challenges, but it is immensely rewarding. This blend of business acumen and agricultural knowledge enables me to appreciate and understand the importance of sustainable farming practices. It also provides a unique perspective on how modern business strategies can be applied to traditional farming methods to improve efficiency and sustainability.</p>
                </div>
                <div className={styles.AboutformerImg}>
                    <img className={` img-thumbnail`} src={RaghuOx} alt='Raghu-photo'/>
                </div>
            </div>

            {/* what we caltivate */}

            <div className={`${styles.WhatCulcontainer}`}>
                <p className={`${styles.FormerHeading}`}>what we caltivate</p>

                <p className={styles.CulPara}>
                We cultivate roses, groundnuts, red nephiliyar, and betel leaves in our fields. Once the crops are harvested, we sell them in the nearby city.</p>

                <div className={`${styles.CultivateImg}`}>
                    <div className={styles.ImgContainer}>
                        <img className={`img-thumbnail`} src={Rose} alt='Rose'/>
                        <p>Rose Flower</p>
                    </div>
                    <div className={styles.ImgContainer}>
                        <img className={`img-thumbnail`} src={RedNefiyar} alt='RedNefiyar'/>
                        <p>Red Nefliyar </p>
                    </div>
                    <div className={styles.ImgContainer}>
                        <img className={`img-thumbnail`} src={Betal_leafe} alt='Betal_leafe'/>
                        <p>Betal leafe</p>
                    </div>
                    <div className={styles.ImgContainer}>
                        <img className={`img-thumbnail`} src={GroundNuts} alt='GroundNuts'/>
                        <p>Ground Nuts</p>
                    </div>
                </div>

            </div>
        </div>
        <p className={styles.CarasoleHeading}> Some Photos From Our Fieald</p>
      <Carasole/>
    </div>
  )
}

export default About
