import React from 'react';

import User from './User';
import { useLoaderData, } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1 className='flex justify-center text-4xl font-extrabold mt-20'>Our User</h1>

            <div className='flex justify-center'>


                <div className=' grid grid-cols-3 gap-8'>
                    {
                        users.map(user =>
                            <User user={user} key={user.id} ></User>
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Users;