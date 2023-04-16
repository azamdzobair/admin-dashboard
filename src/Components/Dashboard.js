import React from 'react';

import Featured from './Featured';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <h1>We are here</h1>
            <Featured></Featured>

        </div>
    );
};

export default Dashboard;