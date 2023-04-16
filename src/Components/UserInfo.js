import React from 'react';

const UserInfo = ({ user, handleClick }) => {
    const { name, username, email, img, phone } = user;
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
                <button onClick={() => handleClick(user)} >Add to User</button>
            </div>
        </div>
    );
};

export default UserInfo;