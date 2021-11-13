import React from 'react';
import ManageOrders from '../../../Components/Admin/ManageOrders/ManageOrders';
import Footer from '../../../Components/Shared/Footer/Footer';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import TopNav from '../../../Components/Shared/TopNav/TopNav';

const MangeOrder = () => {
    return (
        <>
        <TopNav></TopNav>
        <Navigation></Navigation>
        <ManageOrders></ManageOrders>
        <Footer></Footer>
            
        </>
    );
};

export default MangeOrder;