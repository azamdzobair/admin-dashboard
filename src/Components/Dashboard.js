import React from 'react';

import Featured from './Featured';
import Sidebar from './Sidebar';
import SellChart from './SellChart';

const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <h1>We are here</h1>
            <Featured></Featured>
            <SellChart></SellChart>

        </div>
    );
};

export default Dashboard;