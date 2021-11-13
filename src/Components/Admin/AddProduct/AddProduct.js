import './AddProduct.css';

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddProduct = () => {

    const [productData, setProductData] = useState({});

    const notify = () => toast.success('Successfully Added', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;



    // on submit form
    const handleSubmit = e => {
        e.preventDefault();

        // add product to db
        fetch('https://polar-brook-92580.herokuapp.com/products/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notify();
                }
            });

        // reset form
        e.target.reset();

    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);

        // current data 
        const newData = { ...productData };
        newData[field] = value;
        // set current data
        setProductData(newData);
    }

    return (
        <section className="add-product">
            <ToastContainer/>
            <div className="register">
                <h4>Product Description</h4>
                <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input required name="name" onChange={handleOnChange} class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label for="img" class="form-label">Image url</label>
                        <input required name="img" onChange={handleOnChange} class="form-control" id="img" />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input required name="price" onChange={handleOnChange} class="form-control" id="price" />
                    </div>
                    <div class="mb-3">
                        <label for="badge" class="form-label">Badge</label>
                        <input name="badge" onChange={handleOnChange} class="form-control" id="badge" />
                    </div>
                    <button type="submit" className="form-submit-btn">ADD PRODUCT</button>
                </form>
            </div>
        </section>

    );
};

export default AddProduct;