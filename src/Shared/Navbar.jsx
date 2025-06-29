import React, { useEffect, useState } from 'react';
import '../../src/index.css';
import { Link } from 'react-router';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const handleScroll = () => {
        const sections = ['hero', 'about-me', 'skills', 'experience', 'education', 'projects', 'contact'];
        for (let id of sections) {
            const element = document.getElementById(id);
            if (element) {
                const top = element.getBoundingClientRect().top;
                if (top >= 0 && top < window.innerHeight / 2) {
                    setActiveSection(id);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = (
        <>
            {[
                { id: 'about-me', label: 'About Me' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact Me' },
            ].map(({ id, label }) => (
                <li key={id}>
                    <a
                        href={`#${id}`}
                        className={`py-2 relative font-medium text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${activeSection === id ? 'after:w-full text-blue-400' : 'after:w-0 hover:after:w-full'
                            }`}
                        onClick={() => setActiveSection(id)}
                    >
                        {label}
                    </a>
                </li>
            ))}
        </>
    );
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Shariful_Islam_Udoy.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className="bg-black shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
            <div className="w-11/12 mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-gray-950 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-white text-2xl">SHARIF.</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button
                        onClick={handleDownload}
                        className="inline-block btn px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0c1db4] to-[#0b90cd] hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg">
                        Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
