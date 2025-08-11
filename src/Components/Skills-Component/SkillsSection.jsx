import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
    FaDatabase, FaServer, FaGitAlt, 
    FaFigma, FaCode, FaFire, FaBrain, FaUsers, 
    FaClock, FaLightbulb 
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, 
    SiFirebase, SiPostman, SiNetlify, SiJavascript, 
    SiVercel
} from 'react-icons/si';

const SkillsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const skillsData = [
        {
            category: "Frontend",
            color: "text-blue-400",
            icon: <FaReact className="text-blue-400 text-2xl" />,
            items: [
                { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
                { name: "React.js", icon: <FaReact className="text-blue-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> }
            ]
        },
        {
            category: "Backend",
            color: "text-green-400",
            icon: <FaServer className="text-green-400 text-2xl" />,
            items: [
                { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
                { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
                { name: "RESTful APIs", icon: <FaDatabase className="text-blue-300" /> },
                { name: "Firebase Auth", icon: <SiFirebase className="text-yellow-500" /> },
                { name: "JWT Auth", icon: <FaFire className="text-orange-400" /> }
            ]
        },
        {
            category: "Tools",
            color: "text-yellow-400",
            icon: <FaCode className="text-yellow-400 text-2xl" />,
            items: [
                { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600" /> },
                { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
                { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
                { name: "Vercel", icon: <SiVercel className="text-orange-500" /> },
                { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
                { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> }
            ]
        },
        {
            category: "Soft Skills",
            color: "text-pink-400",
            icon: <FaBrain className="text-pink-400 text-2xl" />,
            items: [
                { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-300" /> },
                { name: "Teamwork", icon: <FaUsers className="text-blue-300" /> },
                { name: "Agile & Scrum", icon: <FaClock className="text-green-300" /> },
                { name: "Time Management", icon: <FaClock className="text-purple-300" /> },
                { name: "Adaptability", icon: <FaBrain className="text-pink-300" /> },
                { name: "Communication", icon: <FaUsers className="text-cyan-300" /> }
            ]
        }
    ];

    return (
        <section
            id="skills"
            className="text-white py-16 px-6 bg-black"
        >
            <div className="max-w-5xl mx-auto">
                <h2 data-aos="fade-right" className="text-4xl backdrop-blur-md font-bold mb-8 text-center border-b-4 border-blue-500 inline-block pb-2">
                    My Skills
                </h2>
                <p data-aos="zoom-in" className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    A blend of modern web technologies and development skills that I master to build high-quality applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((category, index) => (
                        <div 
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="skill-card p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 backdrop-blur-2xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                        >
                            <div className="flex items-center mb-6 gap-3">
                                <div className="p-2 rounded-full bg-blue-500/20">
                                    {category.icon}
                                </div>
                                <h3 className={`text-xl font-semibold ${category.color}`}>
                                    {category.category}
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex} 
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900/20 transition-colors duration-200"
                                    >
                                        <div className="text-2xl">
                                            {skill.icon}
                                        </div>
                                        <span className="text-gray-300">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;