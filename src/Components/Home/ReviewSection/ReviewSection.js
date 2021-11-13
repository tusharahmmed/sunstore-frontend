import './ReviewSection.css';

import React, { useEffect,useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';


const ReviewSection = () => {


    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://polar-brook-92580.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);


    

    console.log(reviews)

   


    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade testimonials-sec px-3" data-bs-ride="carousel">
            <div class="carousel-inner">
                
                {/* <div class="carousel-item item-height position-relative active">
                    <img src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=500&q=60" class="d-block w-100" alt="..." />
                    <div className="testimonials position-absolute">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque eum. Magnam consequatur voluptatem ipsam modi tenetur unde libero voluptatibus ut est maxime dolorem itaque, explicabo animi vero amet ratione.</p>
                        
                        <p className="testimonial-author"><span className="dash"></span>Tushar</p>
                    </div>
                </div> */}

                {
                    reviews.map(item => <Testimonial
                    key={item._id}
                    data={item}
                    ></Testimonial>)
                }

                {/* <div class="carousel-item item-height position-relative active">
                    <img src="https://media.istockphoto.com/photos/red-background-picture-id181091938?b=1&k=20&m=181091938&s=170667a&w=0&h=Wsr8U77qFBGVj7NzpnGnrBmX06L3vIVup4oBhWzEIiI=" class="d-block w-100" alt="..." />
                    <div className="testimonials position-absolute">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, itaque eum. Magnam consequatur voluptatem ipsam modi tenetur unde libero voluptatibus ut est maxime dolorem itaque, explicabo animi vero amet ratione.</p>
                        <p style={{display: 'flex',justifyContent: 'center'}}><ReactStars {...secondExample} /></p>
                        <p className="testimonial-author"><span className="dash"></span>Tushar</p>
                    </div>
                </div> */}
                
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default ReviewSection;