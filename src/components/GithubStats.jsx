import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

function AnimatedNumber({ value, startFromBigger = false, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    
    // For ranking/downwards, start visually higher
    const startValue = startFromBigger ? value + 500 : 0;
    const motionValue = useMotionValue(startValue);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (inView) {
            const controls = animate(motionValue, value, {
                duration: 2.5,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [inView, value, motionValue]);

    return <motion.span ref={ref} className={`inline-block ${className}`}>{rounded}</motion.span>;
}
import { GitHubCalendar } from 'react-github-calendar';
import { FaBookBookmark, FaStar } from 'react-icons/fa6';
import { BiGitCommit, BiCodeAlt } from 'react-icons/bi';
import { MdBolt } from 'react-icons/md';

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    Python: '#3572A5',
    'C++': '#f34b7d',
    Dart: '#00B4AB',
    Default: '#8b949e'
};

const GithubStats = () => {
    const [repos, setRepos] = useState([]);
    const [stats, setStats] = useState({
        repoCount: 0,
        languagesCount: 0,
        topLanguages: [],
        contributions: 540, // Estimated or fetched from GitHub calendar scraper
        activityEvents: 124 // Mocked or fetched from events API
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                // Fetch user data
                const userRes = await fetch('https://api.github.com/users/patelmanan112');
                const userData = await userRes.json();

                // Fetch repositories
                const reposRes = await fetch('https://api.github.com/users/patelmanan112/repos?sort=updated&per_page=100');
                const reposData = await reposRes.json();

                if (Array.isArray(reposData)) {
                    // Extract Languages
                    const languagesMap = {};
                    reposData.forEach(repo => {
                        if (repo.language) {
                            languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
                        }
                    });
                    
                    const langsArray = Object.entries(languagesMap)
                        .map(([name, count]) => ({ name, count }))
                        .sort((a, b) => b.count - a.count);

                    setStats(prev => ({
                        ...prev,
                        repoCount: userData.public_repos || reposData.length,
                        languagesCount: langsArray.length,
                        topLanguages: langsArray.slice(0, 8).map(l => l.name)
                    }));

                    setRepos(reposData.slice(0, 4)); // Get 4 most recent
                }
            } catch (error) {
                console.error("Error fetching GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    
    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="github-stats" className="py-24 bg-[#0A0A0B] text-white flex items-center justify-center border-t border-white/5">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20">
                            <img src="https://github.com/patelmanan112.png" alt="GitHub Avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                @patelmanan112
                            </h2>
                            <p className="text-sm text-gray-400">Open Source Contributor & Developer</p>
                        </div>
                    </div>
                </motion.div>

                {/* Top Stat Cards Grid */}
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
                >
                    {[
                        { icon: <FaBookBookmark className="text-purple-400" size={20} />, label: "Repositories", value: stats.repoCount, border: "border-purple-500/30" },
                        { icon: <BiGitCommit className="text-blue-400" size={24} />, label: "Contributions", value: 500, suffix: "+", border: "border-blue-500/30" },
                        { icon: <MdBolt className="text-yellow-400" size={24} />, label: "Activity Events", value: stats.activityEvents, border: "border-yellow-500/30" },
                        { icon: <BiCodeAlt className="text-green-400" size={22} />, label: "Languages", value: stats.languagesCount, border: "border-green-500/30" }
                    ].map((stat, idx) => (
                        <motion.div key={idx} variants={item} className={`hover-trigger cursor-none bg-[#121214] p-6 rounded-2xl border ${stat.border}`}>
                            <div className="flex items-center gap-3 mb-2">
                                {stat.icon}
                                <span className="text-3xl font-bold text-white">
                                    {loading ? '-' : <><AnimatedNumber value={stat.value} />{stat.suffix || ""}</>}
                                </span>
                            </div>
                            <span className="text-sm text-gray-400 pl-8">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Top Languages Tags */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-3 mb-10"
                >
                    <span className="text-sm font-semibold text-gray-300 mr-2">Top languages</span>
                    {loading ? (
                         <span className="text-gray-500 text-sm">Loading languages...</span>
                    ) : stats.topLanguages.map((lang) => (
                        <div key={lang} className="flex items-center gap-2 bg-[#1C1C1F] px-4 py-2 rounded-full border border-white/10 hover:border-white/30 transition-colors">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: languageColors[lang] || languageColors.Default }}></span>
                            <span className="text-xs font-medium text-gray-300">{lang}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Main Content Layout (Split) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Left: Recent Repositories */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#121214] border border-white/10 rounded-3xl p-6"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-white">Recent Repositories</h3>
                            <a href="https://github.com/patelmanan112?tab=repositories" target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:underline">View all →</a>
                        </div>

                        <div className="flex flex-col gap-5">
                            {loading ? (
                                <div className="text-gray-500 text-sm py-4">Loading repositories...</div>
                            ) : repos.map((repo) => (
                                <a 
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover-trigger cursor-none group pb-5 border-b border-white/5 border-dashed last:border-0 last:pb-0"
                                >
                                    <h4 className="text-md font-bold text-gray-200 group-hover:text-blue-400 transition-colors mb-1 truncate">
                                        {repo.name}
                                    </h4>
                                    <p className="text-xs text-gray-400 line-clamp-1 mb-3">
                                        {repo.description || 'No description provided.'}
                                    </p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: languageColors[repo.language] || languageColors.Default }}></span>
                                            {repo.language || 'Markdown'}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-500/70" />
                                            {repo.stargazers_count}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contribution Activity Graph */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#121214] border border-white/10 rounded-3xl p-6 flex flex-col"
                    >
                        <h3 className="text-lg font-bold text-white mb-6">Contribution Activity</h3>
                        <div className="flex-1 w-full flex items-center justify-center overflow-x-auto custom-scrollbar pb-4 -mx-2 px-2">
                            <div className="min-w-max p-4 bg-[#0A0A0B]/80 rounded-xl border border-white/5">
                                <GitHubCalendar 
                                    username="patelmanan112"
                                    colorScheme="dark"
                                    fontSize={12}
                                    blockSize={12}
                                    blockMargin={4}
                                    theme={{
                                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                                        dark: ['#161b22', '#39235e', '#6638b6', '#8e58f5', '#a67af4'], // Purple theme based on second photo
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-white/5 flex justify-center">
                            <a 
                                href="https://github.com/patelmanan112"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-gray-300 transition-colors"
                            >
                                <BiGitCommit />
                                View GitHub Profile
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GithubStats;
