import React from 'react';

import Featured from './Featured';

import SellChart from './SellChart';


const Dashboard = () => {
    return (
        <div className=' mt-20'>

            <h1 className='flex justify-center text-4xl font-extrabold'>Our Dashboard</h1>
            <Featured></Featured>
            <SellChart></SellChart>


        </div>
    );
};

export default Dashboard;