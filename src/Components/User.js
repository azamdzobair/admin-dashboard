import React, { useState } from 'react';

import Sidebar from './Sidebar';
import UserList from './UserList';
import AdminUser from './AdminUser';


const User = () => {
    const [show, setShow] = useState(true);
    const [admin, setAdmin] = useState([]);


    const handleClick = (user) => {
        let isPresent = false;
        admin.forEach((product) => {
            if (user.id === product.id)
                isPresent = true;
        })
        if (isPresent)
            // setWarning(true);
            // setTimeout(() => {
            //     setWarning(false);
            // }, 2000);
            return;

        setAdmin([...admin, user]);
    }

    // const handleChange = (user, d) => {
    //     let ind = -1;
    //     admin.forEach((userData, index) => {
    //         if (userData.id === user.id)
    //             ind = index;
    //     });
    //     const tempArr = admin;
    //     tempArr[ind].amount += d;

    //     if (tempArr[ind].amount === 0)
    //         tempArr[ind].amount = 1;
    //     setAdmin([...tempArr])
    // }

    return (
        <div>

            <Sidebar></Sidebar>
            <AdminUser setShow={setShow} ></AdminUser>
            {
                show ? <UserList handleClick={handleClick} ></UserList> : <AdminUser admin={admin} setAdmin={setAdmin} handleChange={handleChange} ></AdminUser>
            }
        </div >
    );
};

export default User;