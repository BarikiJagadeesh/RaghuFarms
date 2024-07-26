import React from 'react';
import styles from './Footer.module.css';
import Logo from '../Heading/Logo/Logo';
import MenuData from "../../Assets/MenuData.json";
import FollowData from '../../Assets/Follow.json';
import Dev from '../../Assets/Developer.json';

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.logo}>
          <a href='#home'><Logo /></a>
        </div>
      <div className={styles.ClientsDetails}>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {
              MenuData.map((obj, ind)=>{
                return <li key={ind}><a href={obj.link}>{obj.Name}</a></li>
              })
            }
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
            <ul>
              {
                FollowData.map((obj, ind)=>{
                  return <li key={ind}><a href={obj.href} target='_blank' rel='noreferrer'>{obj.name}</a></li>
                })
              }
            </ul>
        </div>
        <div>
          <h4>About Developer</h4>
            <ul>
              <li><a href='https://barikijagadeesh.github.io/JagaIt/' target='_blank' rel='noreferrer'>Jagadeesh IT Solution</a></li>
              {
                Dev.map((obj, ind)=>{
                  return <li key={ind}><a href={obj.href} target='_blank' rel='noreferrer'>{obj.value}</a></li>
                })
              }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
