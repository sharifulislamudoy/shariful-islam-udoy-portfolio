import React from 'react';
import MediHurtBgImg from '../../assets/Background18.jpg'; // Replace with your actual background image path

const MediHurtDetails = () => {
    return (
        <section
            style={{ backgroundImage: `url(${MediHurtBgImg})` }}
            className="p-6 text-white bg-center bg-cover min-h-screen flex items-center justify-center"
        >
            <div
                className="w-11/12 mt-15 mx-auto p-8 backdrop-blur-md 
                           grid grid-cols-1 md:grid-cols-2 gap-10 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)] rounded-lg"
            >
                <div>
                    <h1 className="text-4xl font-bold mb-6 text-blue-400">
                        Medi-Hurt – Multi-Vendor Medicine Selling Platform
                    </h1>

                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack Used</h2>
                    <p className="mb-4">
                        React, Tailwind CSS, DaisyUI, Firebase, MongoDB, Express, JWT, Stripe
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p className="mb-4">
                        A multi-vendor e-commerce platform specialized for medicines and healthcare products,
                        featuring secure authentication, payment integration, and detailed dashboards for admins, sellers, and users.
                    </p>

                    <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
                    <a
                        href="https://medi-hurt.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 underline mb-4 block"
                    >
                        https://medi-hurt.web.app/
                    </a>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">GitHub Repository (Client)</h2>
                    <a
                        href="https://github.com/sharifulislamudoy/Medi-Hurt-Client"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline mb-4 block"
                    >
                        https://github.com/sharifulislamudoy/Medi-Hurt-Client
                    </a>

                    <h2 className="text-2xl font-semibold mb-2">GitHub Repository (Server)</h2>
                    <a
                        href="https://github.com/sharifulislamudoy/Medi-Hurt-Server"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline mb-4 block"
                    >
                        https://github.com/sharifulislamudoy/Medi-Hurt-Server
                    </a>

                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Implementing multi-role authentication and authorization (admin, seller, user).</li>
                        <li>Integrating secure payment processing with Stripe.</li>
                        <li>Managing real-time inventory updates across multiple vendors.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements & Future Plans</h2>
                    <ul className="list-disc list-inside">
                        <li>Enhance reporting dashboards with advanced analytics.</li>
                        <li>Add live chat support between sellers and buyers.</li>
                        <li>Optimize mobile responsiveness and performance.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MediHurtDetails;
