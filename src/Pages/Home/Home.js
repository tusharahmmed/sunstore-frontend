import React from 'react';
import BrandStyle from '../../Components/Home/BrandStyle/BrandStyle';
import Category from '../../Components/Home/Category/Category';
import Hero from '../../Components/Home/Hero/Hero';
import ReviewSection from '../../Components/Home/ReviewSection/ReviewSection';
import Footer from '../../Components/Shared/Footer/Footer';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Products from '../../Components/Shared/Products/Products';
import TopNav from '../../Components/Shared/TopNav/TopNav';

const Home = () => {
    return (
        <>
            <TopNav></TopNav>
            <Navigation></Navigation>
            <Hero></Hero>
            <Category></Category>
            <Products></Products>
            <BrandStyle></BrandStyle>
            <ReviewSection></ReviewSection>
            <Footer></Footer>
        </>
    );
};

export default Home;