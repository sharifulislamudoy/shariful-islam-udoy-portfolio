import React from 'react';
import BackGroundImg from '../../assets/BackGround18.jpg';

const RentizoDetails = () => {
    return (
        <section
            style={{ backgroundImage: `url(${BackGroundImg})` }}
            className="p-6 text-white bg-center bg-cover min-h-screen flex items-center justify-center"
        >
            <div
                className="w-11/12 mt-15 mx-auto p-8 backdrop-blur-md 
                           grid grid-cols-1 md:grid-cols-2 gap-10 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
            >
                <div>
                    <h1 className="text-4xl font-bold mb-6 text-blue-400">
                        Rentizo – Car Rental App
                    </h1>

                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack Used</h2>
                    <p className="mb-4">
                        React, Tailwind CSS, DaisyUI, Firebase, MongoDB, Express, JWT, Framer Motion
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p className="mb-4">
                        A full-featured car rental web application with authentication, car booking, and wishlist system.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
                    <a
                        href="https://rentizo.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 underline mb-4 block"
                    >
                        https://rentizo.web.app
                    </a>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">GitHub Repository (Client)</h2>
                    <a
                        href="https://github.com/sharifulislamudoy/Rentizo-Client"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline mb-4 block"
                    >
                        https://github.com/sharifulislamudoy/Rentizo-Client
                    </a>

                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Integrating Firebase authentication securely with JWT tokens.</li>
                        <li>Ensuring real-time updates on the wishlist and booking systems.</li>
                        <li>Handling asynchronous data fetching and syncing with MongoDB backend.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <ul className="list-disc list-inside">
                        <li>Adding payment gateway integration for booking transactions.</li>
                        <li>Implementing admin dashboard for managing cars and bookings.</li>
                        <li>Adding mobile app support and offline caching.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default RentizoDetails;
