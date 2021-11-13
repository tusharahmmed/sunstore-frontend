import React from 'react';
import Account from '../../Components/Login/Account';
import Footer from '../../Components/Shared/Footer/Footer';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import TopNav from '../../Components/Shared/TopNav/TopNav';

const MyAccount = () => {
    return (
        <>
            <TopNav></TopNav>
            <Navigation></Navigation>
            <Account></Account>
            <Footer></Footer>            
        </>
    );
};

export default MyAccount;