import React from 'react';
import styles from './Contact.module.css';
import ContactData from '../../Assets/Contact.json';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const Contact = () => {

  const [refConDetails, inView1] = useInView({
    triggerOnce:false,
    threshold:0.5
  })

  const [refMap, inView2] = useInView({
    triggerOnce:false,
    threshold:0.5
  })

  const animatedContDetails = useSpring({
    opacity:inView1? 1:0,
    transform:inView1?'translateX(0px)':'translateX(-50px)'
  })

  const animatedMap = useSpring({
    opacity:inView2? 1:0,
    transform:inView2?'translateX(0px)':'translateX(50px)'
  })

  

  return (
    <div id='contact' className={styles.ContactContainer}>
      <div className={styles.ContactHeading}>
        <p>Contact Us</p>
      </div>
      <div className={styles.ContactData}>

          <animated.div ref={refConDetails} style={animatedContDetails} className={`${styles.ContactDetails} ${styles.Animated_section}`}>
              {
                ContactData.map((obj, ind)=>{
                  return  <div key={ind} className={styles.ContactItem}>
                      
                      <img src={obj.icon} className={styles.Icons} alt={obj.name}/>
                      <p>{obj.name} : <a href={obj.href} target='_blank' rel="noreferrer">{obj.value}</a></p>
                      
                  </div>
                })
              }
          </animated.div>
          <animated.div ref={refMap} style={animatedMap} className={`${styles.Map } ${styles.Animated_section}`}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.3202286734186!2d78.1735684527891!3d14.034731473128412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3cd5dcf54b89d%3A0x358f8fc885c84d5f!2sDarling%20farm!5e1!3m2!1sen!2sin!4v1721986788885!5m2!1sen!2sin"  style={{border:0}} allowFullScreen="" title='Darling Farm' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </animated.div>
        </div>
    </div>
  )
}

export default Contact
