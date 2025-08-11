import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialAside = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-2xl" />,
            url: 'https://github.com/yourusername',
            color: 'hover:text-gray-400'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-2xl" />,
            url: 'https://linkedin.com/in/yourprofile',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Facebook',
            icon: <FaFacebook className="text-2xl" />,
            url: 'https://facebook.com/yourprofile',
            color: 'hover:text-blue-500'
        },
        {
            name: 'Gmail',
            icon: <SiGmail className="text-2xl" />,
            url: 'mailto:youremail@gmail.com',
            color: 'hover:text-red-400'
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp className="text-2xl" />,
            url: 'https://wa.me/yournumber',
            color: 'hover:text-green-400'
        }
    ];

    return (
        <aside className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
            <div className="flex flex-col items-center space-y-4 bg-black bg-opacity-70 p-3 rounded-r-lg shadow-xl border-l border-t border-b border-[#0b91ff] border-opacity-30 h-[70vh]">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-300 ${link.color} transition-colors duration-300 transform hover:scale-110`}
                        aria-label={link.name}
                        data-tip={link.name}
                    >
                        {link.icon}
                    </a>
                ))}
                <div className="h-16 w-0.5 bg-gradient-to-b from-[#0b91ff] to-[#059ee5] mt-2"></div>
            </div>
        </aside>
    );
};

export default SocialAside;