import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {


    const [adminEmail, setAdminEmail] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        console.log(adminEmail)

        fetch('https://polar-brook-92580.herokuapp.com/user/admin', {
            method: 'PUT',
            body: JSON.stringify(adminEmail),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdminEmail({});
                    alert("admin added successfully")
                }
            })


    }
    const handleEmail = e => {
        const value = e.target.value;
        const adminUser = { email: value }
        setAdminEmail(adminUser);
    }



    return (
        <div className="make-admin">
            <h4>Create New Admin</h4>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input onBlur={handleEmail} required name="email" type="email" class="form-control" id="email" />
                </div>
                <button type="submit" className="form-submit-btn admin-btn">Create</button>

            </form>
        </div>
    );
};

export default MakeAdmin;