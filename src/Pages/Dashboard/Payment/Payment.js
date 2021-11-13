import React from 'react';
import Pay from '../../../Components/Dashboard/Pay/Pay';
import Footer from '../../../Components/Shared/Footer/Footer';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import TopNav from '../../../Components/Shared/TopNav/TopNav';

const Payment = () => {
    return (
        <>
        <TopNav></TopNav>
        <Navigation></Navigation>
        <Pay></Pay>
        <Footer></Footer>
        </>
    );
};

export default Payment;