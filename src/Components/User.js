import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { name, username, email, img, phone, id } = user;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div className=" mt-20 bg-lime-100 border-8 rounded-3xl border-lime-200 py-8 px-8 ">

            <img src={img} alt="Img" />


            <p className='text-xl font-semibold'>{name}</p>
            <p className='text-lg'>{username}</p>
            <p>email : {email}</p>
            <p>{phone}</p>
            <button onClick={handleNavigate} >Add to User</button>

        </div>
    );
};

export default User;