import React from 'react';
import MyOrder from '../../Components/MyOrders/MyOrder';
import Footer from '../../Components/Shared/Footer/Footer';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import TopNav from '../../Components/Shared/TopNav/TopNav';

const MyOrderPage = () => {
    return (
        <>
        <TopNav></TopNav>
        <Navigation></Navigation>
        <MyOrder></MyOrder>
        <Footer></Footer>
            
        </>
    );
};

export default MyOrderPage;