import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackGroundImg from '../../assets/BackGround5.jpg';

const ContactPage = () => {
    const [emailData, setEmailData] = useState({ to: '', body: '' });

    const handleSend = () => {
        const mailtoLink = `mailto:${emailData.to}?body=${encodeURIComponent(emailData.body)}`;
        window.location.href = mailtoLink;
    };
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section
            id="contact"
            className="bg-cover bg-center text-white py-16 px-6"
            style={{ backgroundImage: `url(${BackGroundImg})` }}
        >
            <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Contact Info */}
                <div>
                    <h2 data-aos="fade-right" className="text-4xl font-bold mb-6 text-blue-700 border-b-4 border-blue-600 inline-block pb-2">
                        Get in Touch
                    </h2>
                    <p data-aos="fade-right" className="text-gray-400 mb-8">Feel free to reach out through any platform below or send me an email directly.</p>
                    <ul className="space-y-4 text-lg">
                        <li data-aos="fade-right">
                            <span className="text-blue-500 font-semibold">Facebook:</span>{' '}
                            <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                facebook.com/your-profile
                            </a>
                        </li>
                        <li data-aos="fade-right">
                            <span className="text-blue-500 font-semibold">GitHub:</span>{' '}
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                github.com/yourusername
                            </a>
                        </li>
                        <li data-aos="fade-right">
                            <span className="text-blue-500 font-semibold">LinkedIn:</span>{' '}
                            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                linkedin.com/in/your-profile
                            </a>
                        </li>
                        {/* Add other platforms as needed */}
                    </ul>
                </div>

                {/* Right: Email Form */}
                <div data-aos="fade-up" className="backdrop-blur-2xl p-8 rounded-xl w-full hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                    <h3 className="text-2xl font-semibold mb-6 text-green-400">Send Email</h3>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-300 mb-1">To</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={emailData.to}
                                onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
                                className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-1">Message</label>
                            <textarea
                                rows="6"
                                placeholder="Write your message here..."
                                value={emailData.body}
                                onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
                                className="w-full px-4 py-2 bg-transparent text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]"
                            ></textarea>
                        </div>
                        <button
                            onClick={handleSend}
                            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
                        >
                            Send Email
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
