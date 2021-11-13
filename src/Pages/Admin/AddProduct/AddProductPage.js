import React from 'react';
import AddProduct from '../../../Components/Admin/AddProduct/AddProduct';
import Footer from '../../../Components/Shared/Footer/Footer';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import TopNav from '../../../Components/Shared/TopNav/TopNav';

const AddProductPage = () => {
    return (
        <>
            <TopNav></TopNav>
            <Navigation></Navigation>
            <AddProduct></AddProduct>
            <Footer></Footer>
        </>
    );
};

export default AddProductPage;