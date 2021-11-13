import React from 'react';
import ReactStars from "react-rating-stars-component";


const Testimonial = (props) => {

    const {rating,name,message,_id} = props?.data;

    let active = '';
    if(_id === '618f9bc2c83165abd7a84cb5'){
        active = 'active';
    }

    const secondExample = {
        size: 30,
        count: 5,
        value: rating,
        edit: false,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />
        
        }
    

    return (
        <div class={`carousel-item item-height position-relative ${active}`}>
            <img src="https://media.istockphoto.com/photos/red-background-picture-id181091938?b=1&k=20&m=181091938&s=170667a&w=0&h=Wsr8U77qFBGVj7NzpnGnrBmX06L3vIVup4oBhWzEIiI=" class="d-block w-100" alt="..." />
            <div className="testimonials position-absolute">
                <p>{message}</p>
                <p style={{ display: 'flex', justifyContent: 'center' }}><ReactStars {...secondExample} /></p>
                <p className="testimonial-author"><span className="dash"></span>{name}</p>
            </div>
        </div>
    );
};

export default Testimonial;