import React from 'react';
import styles from './About.module.css';
import Carasole from '../Carasole/Carasole';
import RaghuOx from '../../Assets/Raghu_Ox.jpg'
import Rose from '../../Assets/Rose.png';
import RedNefiyar from '../../Assets/RedNefiyar.png';
import Betal_leafe from '../../Assets/Betal_leafe.png';
import GroundNuts from '../../Assets/GroundNuts.png';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const About = () => {

    // This for Para1
    const [ref1, inView1] = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.5,    // 50% of the element should be visible to trigger
      });

      const [ref2, inView2] = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.5,    // 50% of the element should be visible to trigger
      });

      const [ref3, inView3] = useInView({
        triggerOnce: false, // Animation triggers only once
        threshold: 0.5,    // 50% of the element should be visible to trigger
      });

      const [refImg, inView4]=useInView({
        triggerOnce:false,
        threshold:0.5,

      })

      

      const [refHead, inView5]=useInView({
        triggerOnce:false,
        threshold:0.1,
      })

      const [refCropImg1, inView6] = useInView({
        triggerOnce:false,
        threshold:0.5
      })

      const [refCropImg2, inView7] = useInView({
        triggerOnce:false,
        threshold:0.5
      })
    
      const animationProps1 = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateX(0)' : 'translateX(-50px)',
      });

      const imgAnimatedProps =useSpring({
        opacity:inView4?1:0,
        transform:inView4?'translateX(0)': 'translateX(50px)'
      })

      const animationProps2 =useSpring({
        opacity:inView2?1:0,
        transform:inView2?'translateX(0)': 'translateX(50px)'
      })

      const animationProps3 =useSpring({
        opacity:inView3?1:0,
        transform:inView3?'translateX(0)': 'translateX(-50px)'
      })
     
      const AnimatedHeading=useSpring({
        opacity:inView5? 1: 0,
        transform:inView5? 'translateY(0)': 'translateY(50px)'
      })

     const animatedCropImg1=useSpring({
        opacity:inView6?1:0,
        transform:inView6?'translateX(0)':'translateX(-50px)'
     })

     const animatedCropImg2=useSpring({
        opacity:inView7?1:0,
        transform:inView7?'translateX(0)':'translateX(50px)'
     })


  return (
    <div  id='about' className={styles.AboutContainer}>
        <animated.div ref={refHead} style={AnimatedHeading} className={`${styles.AboutHeading} ${styles.Animated_section}`}>
            <p>About Us</p>
        </animated.div>
        <div className={styles.AboutData}>
            <div className={styles.AboutFormer}>
                <div>
                    <p className={styles.FormerHeading}>Raghavendra Prasad Goud</p>
                    
                    <animated.p ref={ref1} style={animationProps1} className={` ${styles.FromerIntro} ${styles.Animated_section}`}>My name is <i><b>Raghavendra Prasad Goud.</b></i> I hold a Master's degree in Business Administration, a field that has equipped me with extensive knowledge and skills in the business sector. However, my passion for farming remains undiminished. Farming has always been close to my heart, and I believe it is a crucial aspect of our lives and society.</animated.p>

                    <animated.p ref={ref2} style={animationProps2}  className={`${styles.FromerIntro} ${styles.Animated_section}`}>Every weekend, I make it a point to visit my village. There, I assist my parents with various farming tasks. This involvement not only keeps me grounded but also allows me to contribute to my family's livelihood. We are fortunate to own a tractor, which plays a vital role in our farming operations. The tractor significantly reduces the manual labor required, enhances productivity, and allows us to manage our land more effectively.</animated.p>

                    <animated.p ref={ref3} style={animationProps3} className={`${styles.FromerIntro} ${styles.Animated_section}`}>Balancing a professional career and a commitment to farming has its challenges, but it is immensely rewarding. This blend of business acumen and agricultural knowledge enables me to appreciate and understand the importance of sustainable farming practices. It also provides a unique perspective on how modern business strategies can be applied to traditional farming methods to improve efficiency and sustainability.</animated.p>
                </div>
                <animated.div ref={refImg} style={imgAnimatedProps} className={`${styles.AboutformerImg} ${styles.Animated_section}`}>
                    <img className={` img-thumbnail`} src={RaghuOx} alt='Raghu-photo'/>
                </animated.div>
            </div>

            {/* what we caltivate */}

            <div className={`${styles.WhatCulcontainer}`}>
                <p className={`${styles.FormerHeading}`}>what we caltivate?</p>

                <animated.p  ref={ref3} style={animationProps3} className={`${styles.CulPara} ${styles.Animated_section}`}>
                We cultivate roses, groundnuts, red nephiliyar, and betel leaves in our fields. Once the crops are harvested, we sell them in the nearby city.</animated.p>

                <div className={`${styles.CultivateImg}`}>
                    <animated.div ref={refCropImg1} style={animatedCropImg1} className={`${styles.ImgContainer} ${styles.Animated_section}`}>
                        <img className={`img-thumbnail`} src={Rose} alt='Rose'/>
                        <p>Rose Flower</p>
                    </animated.div>
                    <animated.div ref={refCropImg1} style={animatedCropImg1} className={`${styles.ImgContainer} ${styles.Animated_section}`}>
                        <img className={`img-thumbnail`} src={RedNefiyar} alt='RedNefiyar'/>
                        <p>Red Nefliyar </p>
                    </animated.div>
                    <animated.div ref={refCropImg2} style={animatedCropImg2}  className={`${styles.ImgContainer} ${styles.Animated_section}`}>
                        <img className={`img-thumbnail`} src={Betal_leafe} alt='Betal_leafe'/>
                        <p>Betal leafe</p>
                    </animated.div>
                    <animated.div ref={refCropImg2} style={animatedCropImg2} className={`${styles.ImgContainer} ${styles.Animated_section}`}>
                        <img className={`img-thumbnail`} src={GroundNuts} alt='GroundNuts'/>
                        <p>Ground Nuts</p>
                    </animated.div>
                </div>

            </div>
        </div>
        <p className={styles.CarasoleHeading}> Some Photos From Our Farm</p>
      <Carasole/>
    </div>
  )
}

export default About
