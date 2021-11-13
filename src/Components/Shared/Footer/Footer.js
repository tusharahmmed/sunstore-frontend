import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top px-3">
                <div className="footer-item">
                    <h5>ABOUT OUR COMPANY</h5>
                    <p>We are offering you the unique goods because our product is the real treasure. If you are a true fan, you’ll love it. We have a tremendous variety in comparison to all of our competitors.</p>
                </div>
                <div className="footer-item">
                    <h5>CATEGORY</h5>
                    <p>ROUND</p>
                    <p>WAYFARER</p>
                    <p>CATS</p>
                    <p>SQUARED</p>
                    
                </div>
                <div className="footer-item">
                    <h5>ABOUT US</h5>
                    <p>CONTACT US</p>
                    <p>Privacy Policy</p>
                    <p>Blog</p>
                </div>
                <div className="footer-item">
                    <h5>MY ACCOUNT</h5>
                    <p>Log In</p>
                    <p>Sign Up</p>
                </div>
            </div>
            <div className="footer-bottom bg-dark text-white">
                <p  className="m-0 p-3 text-center">© 2021 - Powered by SUNSTORE and Developed by Tushar.</p>
            </div>
        </footer>
    );
};

export default Footer;