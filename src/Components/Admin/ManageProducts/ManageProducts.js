
import React, { useEffect, useState }  from 'react';
import { ToastContainer, toast } from 'react-toastify';


const ManageProducts = () => {



    const [allProducts, setAllProducts] = useState([]);

    // if status change
    const [idDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch('https://polar-brook-92580.herokuapp.com/products?admin=true')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    },[idDeleted]);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you want to delete');

        if(confirm){
            fetch(`https://polar-brook-92580.herokuapp.com/admin/product/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    notify();
                    setIsDeleted(true);
                }
            })
        }

    }


    //notificaion
    const notify = () => toast.success('Successfully Deleted Product', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    return (
        <section className="order-section">
            <ToastContainer limit={3} />
            <div className="order-wraper">
                <div className="page-title">
                    <h3 className="text-center py-2">MANAGE ALL PRODUCTS</h3>
                </div>
                <div className="order-list">
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {
                            allProducts.map(item => <tr>
                                <td>{item?.name}</td>
                                <td> <img src={item?.img} /> </td>
                                <td>{item?.price}</td>
                                <td><button onClick={() => { handleDelete(item?._id) }} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                            </tr>)
                        }

                    </table>
                </div>
            </div>

        </section>
    );
};

export default ManageProducts;