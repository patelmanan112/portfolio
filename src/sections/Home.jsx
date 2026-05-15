import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode, SiGmail } from 'react-icons/si';
import {Helmet} from 'react-helmet'
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
       <>
              <Helmet>
                <title>Manan | Full Stack Developer</title>
                <meta name='description' content="Welcome to Manan's portfolio, a passionate Full Stack (MERN) Developer specializing in building modern, scalable, and user-friendly web applications. Explore my projects, technical skills, certifications, and journey in software development."/>
                <meta name='keywords' content='MANAN PATEL | Full Stack Developer | Projects, React, Node.js, MongoDB, Full Stack Development, Problem-Solving, Modern Web Technologies'/>
                <meta name='author' content='Manan Patel'/>
            </Helmet>
        <section id="home" ref={ref} className="h-screen flex items-center justify-center relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-[#fdfdfd] dark:bg-[#030303] z-0">
                <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[150px] animate-blob"></div>
                <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>
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
                    <motion.h1 variants={item} className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight flex flex-wrap justify-center items-baseline gap-x-4">
                        MANAN <span className="text-slate-500 dark:text-slate-400 italic font-serif font-light">PATEL</span>
                    </motion.h1>
                </div>

                <motion.div variants={item} className="bg-transparent">
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                        Developing rapid, impactful solutions with <span className="text-gray-900 dark:text-white font-semibold">Node.js</span> &amp; <span className="text-gray-900 dark:text-white font-semibold">React</span>.
                    </p>
                </motion.div>

                <motion.div variants={item} className="flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
                    <a
                        href="https://drive.google.com/file/d/1xXiJmeI6XVfrMdlKwv1DXw8OV85gI9Wv/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-trigger cursor-none text-gray-900 dark:text-white text-sm md:text-xl uppercase tracking-widest font-bold border border-gray-200 dark:border-white/20 rounded-full px-8 py-4 md:px-12 md:py-6 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-105 flex items-center gap-4"
                    >
                        View Resume
                    </a>
                </motion.div>

                {/* Social Media Links */}
                <motion.div variants={item} className="flex justify-center items-center gap-4 md:gap-6 mt-10 flex-wrap">
                    {[
                        {
                            icon: <FaGithub />,
                            href: 'https://github.com/patelmanan112',
                            label: 'GitHub',
                            hoverColor: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white',
                        },
                        {
                            icon: <FaLinkedin />,
                            href: 'https://www.linkedin.com/in/manan-patel-557535390/',
                            label: 'LinkedIn',
                            hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]',
                        },
                        {
                            icon: <FaYoutube />,
                            href: 'https://www.youtube.com/@mananpatel-q6w',
                            label: 'YouTube',
                            hoverColor: 'hover:text-[#FF0000] hover:border-[#FF0000]',
                        },
                        {
                            icon: <FaXTwitter />,
                            href: 'https://x.com/man_an0112',
                            label: 'X',
                            hoverColor: 'hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white',
                        },
                        {
                            icon: <SiLeetcode />,
                            href: 'https://leetcode.com/u/manan01127/',
                            label: 'LeetCode',
                            hoverColor: 'hover:text-[#FFA116] hover:border-[#FFA116]',
                        },
                        {
                            icon: <SiGmail />,
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
                                w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                                border border-gray-300 dark:border-gray-700
                                text-gray-500 dark:text-gray-400
                                text-[20px] md:text-[24px]
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
        </section></>
    );
};

export default Home;
