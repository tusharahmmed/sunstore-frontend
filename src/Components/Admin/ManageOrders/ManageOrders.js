import React, { useEffect, useState }  from 'react';
import { ToastContainer, toast } from 'react-toastify';


const ManageOrders = () => {


    const [allOrders, setAllOrders] = useState([]);

    // if status change
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch('https://polar-brook-92580.herokuapp.com/admin/orders/')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [status]);

    const approveOrder = (id) => {
        console.log(id);
        fetch(`https://polar-brook-92580.herokuapp.com/admin/orders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.id) {
                    // notify
                    notify();
                    setStatus(true);
                }
            })

    }

    //notificaion
    const notify = () => toast.success('Updated Status', {
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
                    <h3 className="text-center py-2">MANAGE ALL ORDERS</h3>
                </div>
                <div className="order-list">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Product</th>
                            <th>Id</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        {
                            allOrders.map(item => <tr>
                                <td><span class="badge rounded-pill bg-primary">{item?.status}</span></td>
                                <td> <img src={item?.productImg} /> </td>
                                <td>{item?.productPrice}</td>
                                <td>{item?.email}</td>
                                <td><button onClick={() => { approveOrder(item?._id) }} type="button" class="btn btn-success btn-sm">Approve</button></td>
                            </tr>)
                        }

                    </table>
                </div>
            </div>

        </section>
    );
};

export default ManageOrders;