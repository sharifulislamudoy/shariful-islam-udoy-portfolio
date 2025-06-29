import React from 'react';
import BackGroundImg from '../../assets/BackGround18.jpg';

const RoomivioDetails = () => {
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
                        Roomivio – Roommate Finder App
                    </h1>

                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack Used</h2>
                    <p className="mb-4">
                        React, Tailwind CSS, DaisyUI, Firebase Authentication, MongoDB, Express, React Router
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p className="mb-4">
                        A roommate finder web application that allows users to post and browse roommate listings with authentication and booking features.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
                    <a
                        href="https://roomivio-auth.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 underline mb-4 block"
                    >
                        https://roomivio-auth.web.app/
                    </a>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">GitHub Repository (Client)</h2>
                    <a
                        href="https://github.com/sharifulislamudoy/Romivio-client"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline mb-4 block"
                    >
                        https://github.com/sharifulislamudoy/Romivio-client
                    </a>

                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Managing real-time updates and data syncing with MongoDB backend.</li>
                        <li>Implementing secure authentication and authorization with Firebase.</li>
                        <li>Handling complex booking and user interaction workflows.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <ul className="list-disc list-inside">
                        <li>Adding advanced search and filtering options for roommate listings.</li>
                        <li>Introducing chat functionality between users.</li>
                        <li>Developing a mobile-friendly responsive design and mobile app support.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default RoomivioDetails;
