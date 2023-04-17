import React from 'react';

import Featured from './Featured';

import SellChart from './SellChart';
import AdminUser from './AdminUser';

const Dashboard = () => {
    return (
        <div>

            <h1>We are here</h1>
            <Featured></Featured>
            <SellChart></SellChart>
            <AdminUser></AdminUser>

        </div>
    );
};

export default Dashboard;