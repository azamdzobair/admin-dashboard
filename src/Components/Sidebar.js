import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul><li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/buy'}>Buy</Link></li>
                <li><Link to={'/user'}>User</Link></li>
                <li><Link to={'/userList'}>UserList</Link></li>

                <li><Link to={'/products'}>Products</Link></li>

            </ul>
        </div>
    );
};

export default Sidebar;