import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

function AnimatedNumber({ value, startFromBigger = false, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    
    // For ranking, we start from a visually "worse" (higher) number
    const startValue = startFromBigger ? value + 500000 : 0;
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

const LeetCodeStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/manan01127');
                const data = await response.json();
                if (data.totalSolved !== undefined) {
                    setStats(data);
                }
            } catch (error) {
                console.error("Error fetching LeetCode stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section id="leetcode-stats" className="py-20 bg-[#fdfdfd] dark:bg-[#030303] flex items-center justify-center border-t border-gray-200 dark:border-white/10">
            <div className="max-w-5xl w-full mx-auto px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold tracking-widest text-[#FFA116] uppercase mb-3">
                        Problem Solving
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
                        LeetCode <span className="text-gray-400 dark:text-gray-600 italic font-serif font-light">Journey</span>
                    </h3>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFA116]"></div>
                    </div>
                ) : stats ? (
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {/* Total Solved Card */}
                        <motion.div variants={item} className="hover-trigger cursor-none p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <span className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Total Solved</span>
                            <AnimatedNumber value={stats.totalSolved} className="text-5xl font-black text-gray-900 dark:text-white group-hover:text-[#FFA116] transition-colors" />
                            <span className="text-xs text-gray-400 mt-2 block">out of {stats.totalQuestions}</span>
                        </motion.div>

                        {/* Easy Card */}
                        <motion.div variants={item} className="hover-trigger cursor-none p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <span className="text-[#00b8a3] text-sm font-bold uppercase tracking-widest mb-2">Easy</span>
                            <AnimatedNumber value={stats.easySolved} className="text-5xl font-black text-[#00b8a3] group-hover:scale-110 transition-transform" />
                            <span className="text-xs text-gray-400 mt-2 block">out of {stats.totalEasy}</span>
                        </motion.div>

                        {/* Medium Card */}
                        <motion.div variants={item} className="hover-trigger cursor-none p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <span className="text-[#ffc01e] text-sm font-bold uppercase tracking-widest mb-2">Medium</span>
                            <AnimatedNumber value={stats.mediumSolved} className="text-5xl font-black text-[#ffc01e] group-hover:scale-110 transition-transform" />
                            <span className="text-xs text-gray-400 mt-2 block">out of {stats.totalMedium}</span>
                        </motion.div>

                        {/* Hard Card */}
                        <motion.div variants={item} className="hover-trigger cursor-none p-8 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <span className="text-[#ff375f] text-sm font-bold uppercase tracking-widest mb-2">Hard</span>
                            <AnimatedNumber value={stats.hardSolved} className="text-5xl font-black text-[#ff375f] group-hover:scale-110 transition-transform" />
                            <span className="text-xs text-gray-400 mt-2 block">out of {stats.totalHard}</span>
                        </motion.div>

                        {/* Ranking Card */}
                        <motion.div variants={item} className="hover-trigger cursor-none md:col-span-2 lg:col-span-4 p-8 rounded-3xl bg-gradient-to-r from-[#FFA116]/10 to-transparent border border-[#FFA116]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mt-4">
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">Global Ranking</h4>
                                <p className="text-gray-500 dark:text-gray-400 mt-2 font-light">Consistent progress and dedication</p>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-[#FFA116] text-xl font-bold">#</span>
                                <AnimatedNumber 
                                    value={stats.ranking} 
                                    startFromBigger={true} 
                                    className="text-4xl md:text-5xl font-black text-[#FFA116] tracking-tighter" 
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <div className="text-center text-gray-500">Failed to load LeetCode statistics.</div>
                )}
            </div>
        </section>
    );
};

export default LeetCodeStats;
