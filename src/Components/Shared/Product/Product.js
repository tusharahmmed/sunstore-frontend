import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const {_id,img,name,price,badge} = props?.data;
    return (
        <div className="product">
                    <div className="product-thumb">
                        <img src={img} alt="" />
                        <div className="product-label">
                            <span>{badge}</span>
                        </div>
                    </div>
                    <div className="product-description">
                        <p>{name}</p>
                        <h5>{price}</h5>
                    </div>
                    <div className="details-btn">
                    <Link to={`/order/${_id}`}><button>VIEW DETAILS</button></Link>
                    </div>
                </div>
    );
};

export default Product;