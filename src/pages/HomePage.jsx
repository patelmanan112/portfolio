import HomeSection from '../sections/Home';
import AboutSection from '../sections/About';
import GithubStats from '../components/GithubStats';
import LeetCodeStats from '../components/LeetCodeStats';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HomeSection />
            <AboutSection />
            <GithubStats />
            <LeetCodeStats />
        </div>
    );
};

export default HomePage;
