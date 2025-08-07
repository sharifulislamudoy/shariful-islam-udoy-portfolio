import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackGroundImg from '../../assets/BackGround14.jpg';

const ExperienceSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const experiences = [
        {
            title: 'Full Stack Web Developer',
            company: 'ByteForge Web',
            date: 'Jan 2025 - Present',
            location: 'Remote',
            description: [
                'Built responsive web apps using React, Tailwind CSS, and Node.js.',
                'Integrated Firebase authentication and MongoDB database.',
                'Collaborated in a 3-person team using Git and GitHub.',
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'JWT'],
        },
        {
            title: 'Frontend Intern',
            company: 'Nova Academy',
            date: 'Aug 2024 - Dec 2024',
            location: 'Dhaka, BD',
            description: [
                'Worked on student dashboard UI using Tailwind and React Router.',
                'Improved page load speed by optimizing components.',
                'Participated in daily standups and team planning.',
            ],
            tech: ['React', 'Tailwind CSS', 'Figma', 'GitHub'],
        },
    ];

    return (
        <section
            id="experience"
            className="bg-center text-white py-16 px-6 bg-cover"
            style={{ backgroundImage: `url(${BackGroundImg})` }}
        >

            <div className="w-11/12 mx-auto">
                <h2 data-aos="fade-right" className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-500 inline-block pb-2">
                    Experience
                </h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            data-aos="fade-up"
                            key={index}
                            className="backdrop-blur-2xl rounded-lg p-6 hover:scale-[1.02] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                        >
                            <div className="flex justify-between items-center flex-wrap mb-2">
                                <h3 className="text-2xl font-semibold text-blue-400">
                                    {exp.title}
                                </h3>
                                <span className="text-sm text-gray-400 italic">{exp.date}</span>
                            </div>
                            <div className="text-gray-300 mb-2">
                                <span className="font-medium">{exp.company}</span> — {exp.location}
                            </div>
                            <ul className="list-disc list-inside text-gray-400 mb-3 space-y-1">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((techItem, j) => (
                                    <span
                                        key={j}
                                        className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
