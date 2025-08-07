import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackGroundImg from '../../assets/BackGround21.jpg';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <div
            id="about-me"
            className="w-full bg-cover bg-center py-16 text-white"
            style={{ backgroundImage: `url(${BackGroundImg})` }}
        >
            <div className="w-5/6 mx-auto">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
                    {/* Left Content */}
                    {/* border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)] */}
                    <div data-aos="fade-up" className="flex-1 bg-black/40 backdrop-blur-md p-6 rounded-xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                            <ul className="grid grid-cols-2 gap-y-2 list-disc list-inside">
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Tailwind CSS</li>
                                <li>Firebase</li>
                                <li>Express.js</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div data-aos="fade-down" className="flex-1 bg-black/40 backdrop-blur-md p-6 rounded-xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                        <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-400 inline-block">
                            About Me
                        </h2>
                        <p className="text-base mb-6 leading-relaxed">
                            I’m a passionate full stack web developer specializing in the MERN stack. I love turning ideas into reality through code. Whether it's crafting interactive UIs or building robust backend systems, I strive to deliver clean, efficient, and scalable solutions.
                        </p>

                        {/* CountUp Section */}
                        <div ref={ref} className="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <h3 className="text-4xl font-bold text-blue-400">
                                    {inView && <CountUp end={1} duration={5} />}+
                                </h3>
                                <p className="text-sm mt-2">Years of Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-blue-400">
                                    {inView && <CountUp end={10} duration={5} />}+
                                </h3>
                                <p className="text-sm mt-2">Happy Clients</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-bold text-blue-400">
                                    {inView && <CountUp end={20} duration={5} />}+
                                </h3>
                                <p className="text-sm mt-2">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
