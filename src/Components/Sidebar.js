import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=' bg-amber-500 h-10  sticky '>
            <ul className='flex justify-center py-2 '>
                <li className='mr-4 text-xl font-medium'><Link to={'/dashboard'}>Dashboard</Link></li>
                <li className='mr-4 text-xl font-medium'><Link to={'/users'}>Users</Link></li>
                <li className='text-xl font-medium' ><Link to={'/products '}>Products</Link></li>


            </ul>
        </div>
    );
};

export default Sidebar;