import HomeSection from '../sections/Home';
import AboutSection from '../sections/About';
import SkillsSection from '../sections/Skills';
import GithubStats from '../components/GithubStats';
import LeetCodeStats from '../components/LeetCodeStats';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <GithubStats />
            <LeetCodeStats />
        </div>
    );
};

export default HomePage;
