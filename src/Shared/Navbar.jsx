import React from 'react';
import '../../src/index.css'

const Navbar = () => {
    const navItems = <>
        <li><a href="#" class="py-2 relative text-white font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            About Me
        </a></li>
        <li><a href="#" class="py-2 relative text-white font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Skills
        </a></li>
        <li><a href="#" class="py-2 relative text-white font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Experience
        </a></li>
        <li><a href="#" class="py-2 relative text-white font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Education
        </a></li>
        <li><a href="#" class="py-2 relative text-white font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Projects
        </a></li>
        <li><a href="#" class="py-2 relative text-white font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Contact Me
        </a></li>
    </>
    return (
        <div className="bg-black shadow-lg fixed top-0 left-0 right-0 z-50 w-full">
            <div className='w-11/12 mx-auto navbar'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-950 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-white text-2xl">SHARIF.</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        className="inline-block btn px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0c1db4] to-[#0b90cd] hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;