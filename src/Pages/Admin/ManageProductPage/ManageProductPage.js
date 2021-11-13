import React from 'react';
import ManageProducts from '../../../Components/Admin/ManageProducts/ManageProducts';
import Footer from '../../../Components/Shared/Footer/Footer';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import TopNav from '../../../Components/Shared/TopNav/TopNav';

const ManageProductPage = () => {
    return (
        <>
        <TopNav></TopNav>
        <Navigation></Navigation>
        <ManageProducts></ManageProducts>
        <Footer></Footer>
            
        </>
    );
};

export default ManageProductPage;