import './BrandStyle.css';
import React from 'react';

const BrandStyle = () => {
    return (
        <section className="style-container px-3">
            <div className="style-item position-relative">
                <img src="https://i.ibb.co/1bkYmgq/banner-15-980x700-crop-center.jpg" alt="" />
                <div className="style-info text-white">
                    <h2>Brands you love</h2>
                    <p>Find the sunglasses that make you unique in our incredible collection of authentic designer shades.</p>
                    <button className="hero-btn-light">Shop Now</button>
                </div>
            </div>
            <div className="style-item position-relative">
                <img src="https://i.ibb.co/zXdt18K/banner-16-980x700-crop-center.jpg" alt="" />
                <div className="style-info text-white">
                    <h2>Find your style</h2>
                    <p>So many styles, so many brands!</p>
                    <button className="hero-btn-light">Shop Now</button>
                </div>
            </div>

        </section>
    );
};

export default BrandStyle;