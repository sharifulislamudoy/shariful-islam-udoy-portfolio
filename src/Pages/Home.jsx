import React from 'react';
import HeroSection from '../Components/Hero-Component/HeroSection';
import AboutSection from '../Components/About Me-Component/AboutSection';
import SkillsSection from '../Components/Skills-Component/SkillsSection';
import ExperienceSection from '../Components/Experience-Component/ExperienceSection';
import EducationSection from '../Components/Education-Component/EducationSection';
import ProjectsSection from '../Components/Projects-Component/ProjectsSection';
import ContactPage from '../Components/Contact-Component/ContactPage';

const Home = () => {
    return (
        <div >
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <ContactPage />
        </div>
    );
};

export default Home;