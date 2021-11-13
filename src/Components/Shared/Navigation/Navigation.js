import './Navigation.css';

import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {

    const {logOut,user,admin} = useAuth();
    // console.log(admin)


    return (
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-white px-1">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"> <h3 className="logo-title">SUNSTORE</h3></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 py-4">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop" className="nav-link">Shop</Link>
                        </li>
                        {
                            !user.email && <li className="nav-item">
                            <Link to="/account" className="nav-link">Login</Link>
                        </li>
                        }
                        {
                            user.email && <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dashboard
                            </a> 
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* admin access only */}
                            {
                                admin && <>
                                <li><Link to="/admin/add-product" className="dropdown-item">Add A Product</Link></li>
                                <li><Link to="/admin/manage-orders" className="dropdown-item">Manage Orders</Link></li>
                                <li><Link to="/admin/manage-products" className="dropdown-item">Manage Products</Link></li>
                                <li><Link to="/admin/create" className="dropdown-item">Make Admin</Link></li>
    
                                <li><hr className="dropdown-divider" /></li>
                                </>
                            }

                                <li><Link to="/payment" className="dropdown-item">Pay</Link></li>
                                <li><Link to="/my-orders" className="dropdown-item">My Order</Link></li>
                                <li><Link to="/review" className="dropdown-item">Review</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><span onClick={logOut} className="dropdown-item logout-btn" >Log out</span></li>
                            </ul>
                        </li>
                        }
                    </ul>
                    <div className="cart-item">
                    <i className="fas fa-shopping-cart me-2"></i>
                    <p className="m-0">MY CART: <span className="color-gray">0 items(s)</span></p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;