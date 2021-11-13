import './PlaceOrder.css';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';



const PlaceOrder = () => {

    const params = useParams();
    const id = params.id;

    const [product, setProduct] = useState({});

    const { user } = useAuth();

    //notificaion
    const notify = () => toast.success('Successfully Placed Order', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    // get product by _id
    useEffect(() => {
        fetch(`https://polar-brook-92580.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    // field ref
    const nameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');

    // current date
    const today = new Date();
    today.toLocaleDateString("en-US")


    // on submit form
    const handleSubmit = e => {
        e.preventDefault();

        // get field value
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;

        const order = {
            displayName: name,
            email: email,
            address: address,
            producId: product?._id,
            productName: product?.name,
            productPrice: product?.price,
            productImg: product?.img,
            status: 'pending',
            date: today.toLocaleDateString("en-US")
        }

        // add product to db
        fetch('https://polar-brook-92580.herokuapp.com/order/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify();
                }
            })

        // reset form
        e.target.reset();

    }


    return (
        <section className="place-order">
            <ToastContainer />
            <div className="register">
                <h4>Place Order</h4>
                <span className="order-container">


                    <div className="porduct-info">
                        <div className="order-thumb">
                            <img src={product?.img} alt="" />
                        </div>
                        <div className="product-info">
                            <h5>{product?.name}</h5>
                            <p>Price: {product?.price}</p>
                        </div>
                    </div>
                    <form className="order-form" onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input required name="name" ref={nameRef} defaultValue={user?.displayName} class="form-control" id="name" />
                        </div>
                        <div class="mb-3">
                            <label for="img" class="form-label">Email</label>
                            <input required name="email" type="email" ref={emailRef} class="form-control" id="img" defaultValue={user?.email} />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input required name="address" ref={addressRef} class="form-control" id="address" />
                        </div>
                        <button type="submit" className="form-submit-btn">PLACE ORDER</button>
                    </form>
                </span>
            </div>
        </section>
    );
};

export default PlaceOrder;