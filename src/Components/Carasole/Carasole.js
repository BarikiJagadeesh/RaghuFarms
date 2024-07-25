import React from 'react';
import styles from './Carasole.module.css';
import Tractor from '../../Assets/TractorImgInWater.jpg';
import Raghu from '../../Assets/Raghu_ox2.jpg';


const Carasole = () => {
  return (
    <>
        <div id="carouselExampleCaptions" className={`carousel slide ${styles.Carasolecontainer}`} data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Tractor} className={`d-block w-100 ${styles.CarasoleImg}`} alt="Tractor" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Our Tractor</h5>
                    <p className={` bg-secondary`}>Without this tractor we are nothing</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Raghu} className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Farming With Oxes</h5>
                    <p>Me Doing Work with the Ox</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhacdDJX9XilloGIyY87GCyYHwNeCSCyfd10MtKDOT8N_4_TLmzcxGZm17UDa6v7MRq8&usqp=CAU" className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carasole
