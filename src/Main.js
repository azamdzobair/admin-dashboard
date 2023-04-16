import React from 'react';

import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
// import Sidebar from './Sidebar';

const Main = () => {
    return (
        <div>

            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;