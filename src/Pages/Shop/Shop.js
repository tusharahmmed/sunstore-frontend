import React from 'react';
import Footer from '../../Components/Shared/Footer/Footer';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Products from '../../Components/Shared/Products/Products';
import TopNav from '../../Components/Shared/TopNav/TopNav';

const Shop = () => {
    return (
        <>
        <TopNav></TopNav>
        <Navigation></Navigation>
        <Products></Products>
        <Footer></Footer>
            
        </>
    );
};

export default Shop;