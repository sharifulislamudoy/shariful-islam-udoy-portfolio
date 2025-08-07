import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import BackGroundImg from '../../assets/BackGround14.jpg';

const SkillsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section
            id="skills"
            className="text-white py-16 px-6 bg-cover bg-center bg-black"
            // style={{ backgroundImage: `url(${BackGroundImg})` }}
        >
            <div className="max-w-5xl mx-auto">
                <h2 data-aos="fade-right" className="text-4xl backdrop-blur-md font-bold mb-8 text-center border-b-4 border-blue-500 inline-block pb-2">
                    My Skills
                </h2>
                <p data-aos="zoom-in" className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    A blend of modern web technologies and development skills that I master to build high-quality applications.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Frontend */}
                    <div data-aos="fade-up" className="skill-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 backdrop-blur-2xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Tailwind CSS</li>
                            <li>Next.js</li>
                        </ul>
                    </div>

                    {/* Backend */}
                    <div data-aos="fade-up" className="skill-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 backdrop-blur-2xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                        <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Node.js & Express</li>
                            <li>MongoDB & Mongoose</li>
                            <li>RESTful APIs</li>
                            <li>Firebase Auth</li>
                            <li>JWT Authentication</li>
                        </ul>
                    </div>

                    {/* Tools & Platforms */}
                    <div data-aos="fade-up" className="skill-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 backdrop-blur-2xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Tools & Platforms</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Git & GitHub</li>
                            <li>VS Code</li>
                            <li>Figma (UI/UX)</li>
                            <li>Postman</li>
                            <li>Firebase & Netlify</li>
                        </ul>
                    </div>

                    {/* Soft Skills */}
                    <div data-aos="fade-up" className="skill-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 backdrop-blur-2xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                        <h3 className="text-xl font-semibold mb-4 text-pink-400">Soft Skills</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>Problem Solving</li>
                            <li>Team Collaboration</li>
                            <li>Agile & Scrum</li>
                            <li>Time Management</li>
                            <li>Adaptability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
