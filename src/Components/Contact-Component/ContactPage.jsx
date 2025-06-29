import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import BackGroundImg from '../../assets/BackGround5.jpg';

const ContactPage = () => {
    const [emailData, setEmailData] = useState({ from: '', body: '' });
    const [sending, setSending] = useState(false);

    const handleSend = async () => {
        if (!emailData.from || !emailData.body) {
            return alert('Please fill in both fields');
        }

        setSending(true);

        const templateParams = {
            from_email: emailData.from,
            message: emailData.body,
        };

        try {
            await emailjs.send(
                'service_6tsukyj', // your Service ID
                'template_jlvarab', // your Template ID
                templateParams,
                'zuZo7fy02LzGTazcc' // your Public Key
            );
            alert('Email sent successfully!');
            setEmailData({ from: '', body: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to send email. Please try again later.');
        } finally {
            setSending(false);
        }
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
                    <ul data-aos="fade-right" className="space-y-4 text-lg">
                        <li>
                            <span className="text-blue-500 font-semibold">Facebook:</span>{' '}
                            <a href="https://www.facebook.com/sharifulislamudoy56/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                facebook.com/sharifulislamudoy56/
                            </a>
                        </li>
                        <li>
                            <span className="text-blue-500 font-semibold">GitHub:</span>{' '}
                            <a href="https://github.com/sharifulislamudoy" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                github.com/sharifulislamudoy
                            </a>
                        </li>
                        <li>
                            <span className="text-blue-500 font-semibold">LinkedIn:</span>{' '}
                            <a href="https://www.linkedin.com/in/shariful-islam-940248372/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                linkedin.com/in/shariful-islam-940248372/
                            </a>
                        </li>
                        <li>
                            <span className="text-blue-500 font-semibold">WhatsApp:</span>{' '}
                            <a href="https://wa.me/8801609359736" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                                +8801609359736
                            </a>
                        </li>
                        <li>
                            <span className="text-blue-500 font-semibold">Phone:</span>{' '}
                            <span className="text-gray-300">+8801609359736</span>
                        </li>
                    </ul>

                </div>

                {/* Right: Email Form */}
                <div data-aos="fade-up" className="backdrop-blur-2xl p-8 rounded-xl w-full hover:scale-[1.01] transition-transform duration-300 border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                    <h3 className="text-2xl font-semibold mb-6 text-green-400">Send Email</h3>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-300 mb-1">From</label>
                            <input
                                type="email"
                                placeholder="example@email.com"
                                value={emailData.from}
                                onChange={(e) => setEmailData({ ...emailData, from: e.target.value })}
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
                            disabled={sending}
                            className={`mt-2 px-6 py-2 rounded-lg font-medium transition ${sending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        >
                            {sending ? 'Sending...' : 'Send Email'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
