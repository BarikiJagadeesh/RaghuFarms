import React from 'react';
import styles from './Carasole.module.css';
import Tractor from '../../Assets/Tractor1.jpg'
const Carasole = () => {
  return (
    <>
        <p className={styles.CarasoleHeading}>Home</p>
        <div id="carouselExample" className={`carousel slide ${styles.Carasolecontainer}`}>
            <div className={`carousel-inner `}>
                <div className="carousel-item active">
                <img src={Tractor} className={`d-block w-100 ${styles.CarasoleImg}`} alt="Former"/>
                </div>
                <div className="carousel-item">
                <img src="https://www.shutterstock.com/image-photo/rural-indian-farming-countryside-india-260nw-2396719453.jpg" className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://i0.wp.com/cjp.org.in/wp-content/uploads/2021/11/traditional-farming11111.jpg?fit=1020%2C534&ssl=1" className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carasole
