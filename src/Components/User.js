import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { name, username, email, img, phone, id } = user;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div className="cards">
            <div className="image_box">
                <img src={img} alt="Image" />
            </div>
            <div className="details">
                <p>{name}</p>
                <p>{username}</p>
                <p>email : {email}</p>
                <p>{phone}</p>
                <button onClick={handleNavigate} >Add to User</button>
            </div>
        </div>
    );
};

export default User;