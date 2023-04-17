import React from 'react';

import User from './User';
import { useLoaderData, } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            {
                users.map(user =>
                    <User user={user} key={user.id} ></User>
                )

            }
        </div>
    );
};

export default Users;