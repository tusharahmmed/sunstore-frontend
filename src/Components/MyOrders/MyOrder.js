import './MyOrders.css';
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {

    const [myOrders,setMyOrders] = useState([]);

    const {user} = useAuth();

    // get all orders
    useEffect(()=>{
        fetch(`https://polar-brook-92580.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[]);

    // cancle order
    const cancelOrder = id => {
       const confirm = window.confirm('You want to cancel order');
       if(confirm){
        fetch(`https://polar-brook-92580.herokuapp.com/order/cancel/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            const id = data.id;
            // notify
            notify();
            // delete form ui
            const newOrders = myOrders.filter(item => item._id != id);
            setMyOrders(newOrders);
        })
       }
    }

       //notificaion
       const notify = () => toast.success('Successfully Cancel Order', {
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
            <div className="order-wraper">
                <div className="page-title">
                    <h3 className="text-center py-2">MY ORDERS</h3>
                    <ToastContainer limit={3} />
                </div>
                <div className="order-list">
                     <table>
                        <tr>
                            <th>Status</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {
                            myOrders.map(item => <tr>
                                <td><span class="badge rounded-pill bg-primary">{item.status}</span></td>
                                <td> <img src={item.productImg} /> </td>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td><button onClick={()=> cancelOrder(item._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                            </tr>)
                        }
                        
                    </table>
                    
                </div>
                </div>
            
        </section>
    );
};

export default MyOrder;