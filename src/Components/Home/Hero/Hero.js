import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide px-3" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active position-relative">
                    <img src="https://i.ibb.co/smGF0jK/slide-04-2048x900-crop-center.jpg" className="d-block w-100" alt="..." />
                    <div className="hero-text text-white">
                        <h2>Designer frames<br/> 50% off</h2>
                        <p>Save your eyes from sunbeams in summer!</p>
                        <button className="hero-btn-light">Shop Now</button>
                    </div>
                </div>
                <div className="carousel-item position-relative">
                    <img src="https://i.ibb.co/xY3Cd05/slide-05-2048x900-crop-center.jpg" className="d-block w-100" alt="..." />
                    <div className="hero-text text-white">
                        <h2>New Dita <br/> Sunglasses</h2>
                        <p>Precision, Quality & Longevity</p>
                        <button className="hero-btn-light">Shop Now</button>
                    </div>
                </div>
                <div className="carousel-item position-relative">
                    <img src="https://i.ibb.co/8x3xMtK/slide-06-2048x900-crop-center.jpg" className="d-block w-100" alt="..." />
                    <div className="hero-text ">
                        <h2>We love the beach!</h2>
                        <p>Best Women Sunglasses</p>
                        <button className="hero-btn-dark">Shop Now</button>
                    </div>
                </div>
                
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Hero;