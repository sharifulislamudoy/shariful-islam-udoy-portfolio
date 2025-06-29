import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import CustomCursor from '../Components/CustomCursor/CustomCursor';

const MainLayout = () => {
    return (
        <div>
            <CustomCursor />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;