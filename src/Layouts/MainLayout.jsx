import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet, useNavigation } from 'react-router';
import CustomCursor from '../Components/CustomCursor/CustomCursor';
import ScrollToTopButton from '../Components/ScrollToTopButton/ScrollToTopButton';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import SocialAside from '../Components/SocialAside-Component/SocialAside';

const MainLayout = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state !== 'idle';
    return (
        <div>
            {isLoading && <LoadingSpinner />}
            <CustomCursor />
            <Navbar />
            <div className='flex gap-2'>
                <SocialAside /> 
                <Outlet />
            </div>
            <ScrollToTopButton />
        </div>
    );
};

export default MainLayout;