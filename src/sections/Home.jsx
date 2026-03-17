import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiGmail } from 'react-icons/si';

const Home = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    // Letter stagger animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { y: 100 },
        show: {
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

    return (
        <section id="home" ref={ref} className="h-screen flex items-center justify-center relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-gray-50 dark:bg-primary z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200/40 dark:bg-purple-900/30 rounded-full blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
                <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-gray-300/20 dark:bg-white/5 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
            </div>

            <motion.div
                style={{ y, opacity }}
                initial="hidden"
                animate="show"
                variants={container}
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                <div className="overflow-hidden mb-2">
                    <motion.h2 variants={item} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light tracking-widest uppercase">
                        Full Stack Developer
                    </motion.h2>
                </div>

                <div className="overflow-hidden mb-6">
                    <motion.h1 variants={item} className="text-6xl md:text-9xl font-bold text-gray-900 dark:text-white tracking-tighter">
                        MANAN <span className="italic font-serif font-light text-gray-600 dark:text-gray-400">PATEL</span>
                    </motion.h1>
                </div>

                <motion.div variants={item} className="bg-transparent">
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Developing rapid, impactful solutions with <span className="text-gray-900 dark:text-white font-semibold">Node.js</span> &amp; <span className="text-gray-900 dark:text-white font-semibold">React</span>.
                    </p>
                </motion.div>

                <motion.div variants={item} className="flex justify-center gap-6 mt-4">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover-trigger cursor-none shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            View Resume
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-800 to-black dark:from-gray-100 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </motion.div>

                {/* Social Media Links */}
                <motion.div variants={item} className="flex justify-center items-center gap-6 mt-6">
                    {[
                        {
                            icon: <FaGithub size={24} />,
                            href: 'https://github.com/patelmanan112',
                            label: 'GitHub',
                            hoverColor: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white',
                        },
                        {
                            icon: <FaLinkedin size={24} />,
                            href: 'https://www.linkedin.com/in/manan-patel-557535390/',
                            label: 'LinkedIn',
                            hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]',
                        },
                        {
                            icon: <FaYoutube size={24} />,
                            href: 'https://www.youtube.com/@mananpatel-q6w',
                            label: 'YouTube',
                            hoverColor: 'hover:text-[#FF0000] hover:border-[#FF0000]',
                        },
                        {
                            icon: <FaXTwitter size={24} />,
                            href: 'https://x.com/man_an0112',
                            label: 'X',
                            hoverColor: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white',
                        },
                        {
                            icon: <SiLeetcode size={24} />,
                            href: 'https://leetcode.com/u/manan01127/',
                            label: 'LeetCode',
                            hoverColor: 'hover:text-[#FFA116] hover:border-[#FFA116]',
                        },
                        {
                            icon: <SiGmail size={24} />,
                            href: 'mailto:manan.patel.cg@gmail.com',
                            label: 'Email',
                            hoverColor: 'hover:text-[#EA4335] hover:border-[#EA4335]',
                        },
                    ].map(({ icon, href, label, hoverColor }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={label}
                            title={label}
                            className={`
                                w-12 h-12 rounded-full flex items-center justify-center
                                border border-gray-300 dark:border-gray-700
                                text-gray-500 dark:text-gray-400
                                transition-all duration-300 ease-out
                                hover:scale-110 hover:-translate-y-1
                                hover:shadow-lg
                                cursor-none hover-trigger
                                ${hoverColor}
                            `}
                        >
                            {icon}
                        </a>
                    ))}
                </motion.div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-gray-400 dark:from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Home;
