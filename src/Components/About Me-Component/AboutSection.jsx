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
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {/* Main Content */}
                    <div data-aos="fade-up" className="w-full bg-black/40 backdrop-blur-md p-6 rounded-xl border-l-4 border-blue-500 shadow-[0_0_15px_0_rgba(59,130,246,0.7)]">
                        <h2 className="text-4xl font-bold mb-8 text-center border-b-4 border-blue-500 inline-block pb-2">
                            About Me
                        </h2>
                        <div className="space-y-4">
                            <p className="text-base leading-relaxed">
                                Hello! I'm a passionate full-stack developer who fell in love with coding during my college days. My journey began with simple HTML pages and has evolved into building complex web applications. What started as curiosity has become my career and my creative outlet.
                            </p>
                            
                            <p className="text-base leading-relaxed">
                                I particularly enjoy working on projects that solve real-world problems. There's nothing more satisfying than seeing my code make someone's life easier or more enjoyable. Whether it's crafting intuitive user interfaces or designing efficient backend systems, I love the entire process of bringing ideas to life.
                            </p>
                            
                            <p className="text-base leading-relaxed">
                                When I'm not coding, you'll find me hiking in nature (perfect for clearing my mind), experimenting with photography (another form of creative problem-solving), or losing myself in a good sci-fi book. I believe these diverse interests help me bring fresh perspectives to my development work.
                            </p>
                            
                            <p className="text-base leading-relaxed">
                                People describe me as a curious, persistent problem-solver with a dash of humor. I approach coding challenges like puzzles - the tougher they are, the more rewarding the solution. I thrive in collaborative environments but also enjoy deep, focused work sessions with my headphones on and coffee nearby.
                            </p>
                        </div>

                        {/* CountUp Section */}
                        <div ref={ref} className="grid grid-cols-3 gap-6 text-center mt-8">
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