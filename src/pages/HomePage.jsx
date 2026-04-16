import HomeSection from '../sections/Home';
import AboutSection from '../sections/About';
import SkillsSection from '../sections/Skills';
import ProjectsSection from '../sections/Projects';
import HackathonGallerySection from '../sections/HackathonGallery';
import EducationSection from '../sections/Education';
import CertificatesSection from '../sections/Certificates';
import GithubStats from '../components/GithubStats';
import LeetCodeStats from '../components/LeetCodeStats';
import ContactSection from '../sections/Contact';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <HackathonGallerySection />
            <EducationSection />
            <CertificatesSection />
            <GithubStats />
            <LeetCodeStats />
            <ContactSection />
        </div>
    );
};

export default HomePage;
