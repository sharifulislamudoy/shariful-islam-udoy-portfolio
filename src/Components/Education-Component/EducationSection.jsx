import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackGroundImg from '../../assets/BackGround12.jpg';

const EducationSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section
            id="education"
            className="bg-center bg-cover text-white py-16 px-6"
            style={{ backgroundImage: `url(${BackGroundImg})` }}
        >
            <div className="w-11/12 mx-auto">
                <h2 data-aos="fade-right" className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-400 inline-block pb-2">
                    Education
                </h2>

                <div className="backdrop-blur-5xl rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex justify-between items-center flex-wrap mb-2">
                        <h3 data-aos="fade-right" className="text-2xl font-semibold text-blue-400">
                            B.Sc. Honours in Mathematics
                        </h3>
                        <span data-aos="fade-right" className="text-sm text-gray-400 italic">2021 – Present</span>
                    </div>
                    <div data-aos="fade-right" className="text-gray-300 mb-2">
                        <span className="font-medium">Dhaka College</span> — University of Dhaka (3rd Year Running)
                    </div>
                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                        <li data-aos="fade-right">Currently pursuing 3rd year with a strong focus on Pure and Applied Mathematics.</li>
                        <li data-aos="fade-right">Developed strong analytical, logical reasoning, and problem-solving skills.</li>
                        <li data-aos="fade-right">Balancing academic learning with hands-on experience in web development.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
