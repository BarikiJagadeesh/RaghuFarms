
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import styles from './Animation.module.css';

const Animation = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5,    // 50% of the element should be visible to trigger
      });
    
      const animationProps = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(50px)',
      });

  return (
        <animated.div ref={ref} style={animationProps} className={styles.animated_section}>
          <h2>This content animates into view</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </animated.div>
  )
}

export default Animation
