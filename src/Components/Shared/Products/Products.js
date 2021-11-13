import './Products.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://polar-brook-92580.herokuapp.com/products?n=8')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])






    return (
        <section className="products-container px-3 pt-5">
            <div className="section-title">
                <h4>POPULAR PRODUCT</h4>
            </div>
            <div className="products pt-3">


                {
                    products.map(item => <Product
                    key={item._id}
                    data={item}
                    ></Product>)
                }

               


            </div>
        </section>
    );
};

export default Products;