import React from 'react';
import HeroSection from '../Components/Hero-Component/HeroSection';
import AboutSection from '../Components/About Me-Component/AboutSection';
import SkillsSection from '../Components/Skills-Component/SkillsSection';
import ExperienceSection from '../Components/Experience-Component/ExperienceSection';
import EducationSection from '../Components/Education-Component/EducationSection';

const Home = () => {
    return (
        <div >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
        </div>
    );
};

export default Home;