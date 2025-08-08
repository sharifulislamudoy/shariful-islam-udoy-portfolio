import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet, useNavigation } from 'react-router';
import CustomCursor from '../Components/CustomCursor/CustomCursor';
import ScrollToTopButton from '../Components/ScrollToTopButton/ScrollToTopButton';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state !== 'idle';
    return (
        <div>
            {isLoading && <LoadingSpinner />}
            <CustomCursor />
            <Navbar />
            <Outlet />
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout;