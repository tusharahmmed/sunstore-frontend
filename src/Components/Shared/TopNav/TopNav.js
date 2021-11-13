import './TopNav.css';

import React from 'react';

const TopNav = () => {
    return (
        <div className="top-nav px-1">
            <nav className="navbar py-1  navbar-light">
            <div className="container-fluid sm-center">
                <a className="">ORDER ONLINE OR CALL US (1800) 000 8808</a>
                <form className="d-flex">
                    <p className="me-4 my-auto"><i class="fas fa-search me-1"></i> SEARCH</p>
                    <p className="me-4 my-auto"><i class="far fa-heart me-1"></i> WISHLIST</p>
                    <p className=" my-auto"><i class="far fa-user"></i> MY ACCOUNT</p>
                </form>
            </div>
        </nav>
        </div>
    );
};

export default TopNav;