import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackGroundImg from '../../assets/BackGround13.jpg';
import RentizoImg from '../../assets/Rentizo-Mockup.png'
import SecurePayImg from '../../assets/SecurePay-Mockup.png'
import RoomivioImg from '../../assets/Roomivio-Mockup.png'
import MediHurtImg from '../../assets/Medi-Hurt-Mockup.png'

const ProjectsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            id="projects"
            className=" bg-cover bg-center text-white py-16 px-6"
            style={{ backgroundImage: `url(${BackGroundImg})` }}
        >
            <div className="w-11/12 mx-auto">
                <h2
                    data-aos="fade-right"
                    className="text-4xl font-bold mb-12 text-center border-b-4 border-blue-500 inline-block pb-2"
                >
                    Projects
                </h2>
                <div className='space-y-6'>
                    {/* ===== Project 1 - Medi-Hurt ===== */}
                    <div
                        data-aos="fade-up"
                        className="flex flex-col md:flex-row gap-8 mb-16 items-center backdrop-blur-2xl p-6 rounded-xl hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                    >
                        {/* Project Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={MediHurtImg} // Import MediHurtImg: import MediHurtImg from '/path/to/medi-hurt.png';
                                alt="Medi-Hurt – Multi-Vendor Medicine Selling Platform"
                                className="rounded-lg w-full h-full object-cover shadow-md"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="md:w-1/2 w-full space-y-4">
                            <h3 className="text-2xl font-semibold text-blue-400">Medi-Hurt – Multi-Vendor Medicine Selling Platform</h3>
                            <p className="text-gray-300">
                                A comprehensive medicine e-commerce platform featuring multi-vendor support, secure authentication, and dynamic sales reporting.
                            </p>

                            {/* Features */}
                            <ul className="list-disc list-inside text-gray-400 pl-2">
                                <li>Multi-vendor marketplace with admin, seller, and user roles</li>
                                <li>Secure login & payment integration</li>
                                <li>Dashboard for sales, orders, and advertisement management</li>
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">React</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">DaisyUI</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Firebase</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">MongoDB</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Express</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">JWT</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Stripe</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://medi-hurt.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Live Site
                                </a>
                                <a
                                    href="https://github.com/sharifulislamudoy/Medi-Hurt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="/projects/medi-hurt"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ===== Project 2 - Rentizo ===== */}
                    <div
                        data-aos="fade-up"
                        className="flex flex-col md:flex-row gap-8 mb-16 items-center backdrop-blur-2xl p-6 rounded-xl hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                    >
                        {/* Project Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={RentizoImg}
                                alt="Rentizo – Car Rental App"
                                className="rounded-lg w-full h-full object-cover shadow-md"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="md:w-1/2 w-full space-y-4">
                            <h3 className="text-2xl font-semibold text-blue-400">Rentizo – Car Rental App</h3>
                            <p className="text-gray-300">
                                A full-featured car rental web application with authentication, car booking, and wishlist system.
                            </p>

                            {/* Features */}
                            <ul className="list-disc list-inside text-gray-400 pl-2">
                                <li>Secure login with Firebase & JWT</li>
                                <li>Interactive car listing and filtering</li>
                                <li>Add to Wishlist with persistent database storage</li>
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">React</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">DaisyUI</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Firebase</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">MongoDB</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Express</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">JWT</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Framer Motion</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://rentizo.web.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Live Site
                                </a>
                                <a
                                    href="https://github.com/sharifulislamudoy/Rentizo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="/projects/rentizo"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ===== Project 3 - Roomivio ===== */}
                    <div
                        data-aos="fade-up"
                        className="flex flex-col md:flex-row gap-8 mb-16 items-center backdrop-blur-2xl p-6 rounded-xl hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                    >
                        {/* Project Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={RoomivioImg} // Make sure to import this image: import RoomivioImg from '/path/to/roomivio.png';
                                alt="Roomivio – Roommate Finder App"
                                className="rounded-lg w-full h-full object-cover shadow-md"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="md:w-1/2 w-full space-y-4">
                            <h3 className="text-2xl font-semibold text-blue-400">Roomivio – Roommate Finder App</h3>
                            <p className="text-gray-300">
                                A smart roommate listing platform with search, filter, authentication, and personalized booking dashboard.
                            </p>

                            {/* Features */}
                            <ul className="list-disc list-inside text-gray-400 pl-2">
                                <li>Secure login with Firebase & JWT</li>
                                <li>Dynamic listing with location-based filtering</li>
                                <li>User dashboard with booking and wishlist management</li>
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">React</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">DaisyUI</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Firebase</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">MongoDB</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Express</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">JWT</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://roomivio-auth.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Live Site
                                </a>
                                <a
                                    href="https://github.com/sharifulislamudoy/roomivio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="/projects/roomivio"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ===== Project 4 - SecurePay ===== */}
                    <div
                        data-aos="fade-up"
                        className="flex flex-col md:flex-row gap-8 mb-16 items-center backdrop-blur-2xl p-6 rounded-xl hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                    >
                        {/* Project Image */}
                        <div className="md:w-1/2 w-full">
                            <img
                                src={SecurePayImg} // Make sure to import this image at the top: import SecurePayImg from '/path/to/securepay.png';
                                alt="SecurePay – Payment App"
                                className="rounded-lg w-full h-full object-cover shadow-md"
                            />
                        </div>

                        {/* Project Info */}
                        <div className="md:w-1/2 w-full space-y-4">
                            <h3 className="text-2xl font-semibold text-blue-400">SecurePay – Payment App</h3>
                            <p className="text-gray-300">
                                A secure and modern payment management app with multi-provider authentication and account dashboard.
                            </p>

                            {/* Features */}
                            <ul className="list-disc list-inside text-gray-400 pl-2">
                                <li>Email/Password & Social Login via Firebase</li>
                                <li>Protected routes and user dashboard</li>
                                <li>Realtime user data sync and logout</li>
                            </ul>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">React</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Firebase</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">React Router</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Framer Motion</span>
                                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">DaisyUI</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-4 flex-wrap">
                                <a
                                    href="https://pay-c88ae.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Live Site
                                </a>
                                <a
                                    href="https://github.com/sharifulislamudoy/Secure-Pay"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    GitHub
                                </a>
                                <a
                                    href="/projects/securepay"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
