import React from 'react';
import BackGroundImg from '../../assets/BackGround18.jpg';

const SecurePayDetails = () => {
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
                        SecurePay – Payment App
                    </h1>

                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack Used</h2>
                    <p className="mb-4">
                        React, Tailwind CSS, DaisyUI, Firebase, React Router, Framer Motion
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p className="mb-4">
                        A secure and modern payment management app with multi-provider authentication and account dashboard.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
                    <a
                        href="https://pay-c88ae.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 underline mb-4 block"
                    >
                        https://pay-c88ae.web.app/
                    </a>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">GitHub Repository (Client)</h2>
                    <a
                        href="https://github.com/sharifulislamudoy/Secure-Pay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline mb-4 block"
                    >
                        https://github.com/sharifulislamudoy/Secure-Pay
                    </a>

                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Implementing multiple authentication providers (email/password, Google, Facebook) using Firebase.</li>
                        <li>Protecting routes and managing user state securely.</li>
                        <li>Syncing real-time user data with Firebase and handling logout correctly.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <ul className="list-disc list-inside">
                        <li>Adding more payment options and integrations.</li>
                        <li>Enhancing UI/UX for better user engagement and accessibility.</li>
                        <li>Adding analytics dashboard to track user transactions and activities.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SecurePayDetails;
