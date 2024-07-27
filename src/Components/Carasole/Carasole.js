import React from 'react';
import styles from './Carasole.module.css';
import Tractor from '../../Assets/TractorImgInWater.jpg';
import Farm from '../../Assets/FarmImg.png';
import TractorLoade from '../../Assets/TractorLoade.png';
import RaghuFather from '../../Assets/RaghuFather.png';
import Paddy from '../../Assets/PaddyPlanting.png';

const Carasole = () => {
  return (
    <>
        <div id="carouselExampleCaptions" className={`carousel slide ${styles.Carasolecontainer}`} data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={Tractor} className={`d-block w-100 ${styles.CarasoleImg}`} alt="Tractor" />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Our Tractor</h5>
                    <p className={``}>Without this tractor we are nothing</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={RaghuFather} className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Farming With Oxes</h5>
                    <p>Me Doing Work with the Ox</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Farm} className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={Paddy} className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Mango</h5>
                    <p>Eating Mango With My Friend</p>
                </div>
                </div>
                <div className="carousel-item">
                <img src={TractorLoade} className={`d-block w-100 ${styles.CarasoleImg}`} alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Loading...</h5>
                    <p>Loading the Ground Nuts to Tractor</p>
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
