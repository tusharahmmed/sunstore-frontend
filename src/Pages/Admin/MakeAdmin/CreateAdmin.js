import React from 'react';
import MakeAdmin from '../../../Components/Admin/MakeAdmin/MakeAdmin';
import Footer from '../../../Components/Shared/Footer/Footer';
import Navigation from '../../../Components/Shared/Navigation/Navigation';
import TopNav from '../../../Components/Shared/TopNav/TopNav';

const CreateAdmin = () => {
    return (
        <>
        <TopNav></TopNav>
        <Navigation></Navigation>
        <MakeAdmin></MakeAdmin>
        <Footer></Footer>
            
        </>
    );
};

export default CreateAdmin;