import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import CustomCursor from '../Components/CustomCursor/CustomCursor';
import ScrollToTopButton from '../Components/ScrollToTopButton/ScrollToTopButton';

const MainLayout = () => {
    return (
        <div>
            <CustomCursor />
            <Navbar />
            <Outlet />
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout;