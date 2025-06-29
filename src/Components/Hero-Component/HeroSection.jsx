import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import BackGroundImg from '../../assets/BackgroundImg.jpg';
import HeroImg from '../../assets/Shariful_islam_udoy-dark-image3.png';

const HeroSection = () => {
    const developerText = [
        "Frontend-focused MERN Developer",
        "JavaScript | React | Node.js",
        "Clean UI & Responsive Design",
        "Scalable Web App Solutions",
        "Modern Dev | Always Learning",
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            id="hero"
            className="min-h-screen hero"
            style={{ backgroundImage: `url(${BackGroundImg})` }}
        >
            <div className='w-11/12 mx-auto'>
                <div className="flex gap-5 justify-center items-center flex-col lg:flex-row">
                    <div className='flex-1' data-aos="fade-right">
                        <img
                            src={HeroImg}
                            className="rounded-lg shadow-2xl w-full"
                            alt="Hero"
                        />
                    </div>
                    <div className='flex-1' data-aos="fade-left">
                        <h1 className="lg:text-4xl text-3xl font-extrabold bg-gradient-to-r from-[#0b91ff] to-[#059ee5] bg-clip-text text-transparent tracking-wide animate-pulse drop-shadow-lg">
                            I'm Shariful Islam Udoy
                        </h1>
                        <div className="mt-4">
                            <p className="text-md lg:text-xl text-white font-mono min-h-[2.5rem]">
                                <Typewriter
                                    options={{
                                        strings: developerText,
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 40,
                                        delay: 80,
                                        pauseFor: 2500,
                                        cursor: '|',
                                        cursorClassName: 'text-gray-500',
                                    }}
                                />
                            </p>
                        </div>

                        <p className="mt-4 text-base lg:text-lg text-gray-200">
                            A dedicated MERN Stack Developer focused on building clean, user-friendly web applications.
                            I specialize in crafting responsive interfaces and robust backend solutions to deliver seamless digital experiences.
                        </p>

                        <a
                            href="#"
                            className="inline-block btn mt-4 px-6 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0c1db4] to-[#0b90cd] hover:opacity-90 hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
