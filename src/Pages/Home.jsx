import React from 'react';
import HeroSection from '../Components/Hero-Component/HeroSection';
import AboutSection from '../Components/About Me-Component/AboutSection';
import SkillsSection from '../Components/Skills-Component/SkillsSection';
import ExperienceSection from '../Components/Experience-Component/ExperienceSection';

const Home = () => {
    return (
        <div >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
        </div>
    );
};

export default Home;