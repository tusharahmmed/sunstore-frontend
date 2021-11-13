import React from 'react';
import PlaceOrder from '../../Components/PlaceOrder/PlaceOrder';
import Footer from '../../Components/Shared/Footer/Footer';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import TopNav from '../../Components/Shared/TopNav/TopNav';

const OrderPlacement = () => {
    return (
        <>
            <TopNav></TopNav>
            <Navigation></Navigation>
            <PlaceOrder></PlaceOrder>
            <Footer></Footer>
        </>
    );
};

export default OrderPlacement;