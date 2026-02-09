import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-scroll';

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
                        Developing rapid, impactful solutions with <span className="text-gray-900 dark:text-white font-semibold">Node.js</span> & <span className="text-gray-900 dark:text-white font-semibold">React</span>.
                    </p>
                </motion.div>

                <motion.div variants={item} className="flex justify-center gap-6">
                    <Link to="projects" smooth={true} duration={800}>
                        <button className=" group relative px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover-trigger cursor-none">
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200" />
                        </button>
                    </Link>
                    <Link to="contact" smooth={true} duration={800}>
                        <button className="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-sm font-medium hover-trigger cursor-none">
                            Contact Me
                        </button>
                    </Link>
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
