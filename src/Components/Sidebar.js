import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul><li><Link to={'/dashboard'}>Dashboard</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/products'}>Products</Link></li>

            </ul>
        </div>
    );
};

export default Sidebar;