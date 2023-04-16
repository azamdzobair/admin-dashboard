import React from 'react';
import userData from '../UserData';
import UserInfo from './UserInfo';


const UserList = ({ handleClick }) => {
    return (
        <section>
            {
                userData.map((user) => (
                    <UserInfo user={user} key={user.id} handleClick={handleClick} ></UserInfo>
                ))
            }
        </section>
    );
};

export default UserList;