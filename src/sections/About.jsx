import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 bg-gray-100 dark:bg-secondary relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Column: Intro */}
                    <div className="w-full md:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4 block"
                        >
                            About Me
                        </motion.span>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
                        >
                            Developing impactful solutions with code.
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-400 space-y-6 text-lg leading-relaxed"
                        >
                            <p>
                                I'm a passionate Full Stack Developer and data enthusiast dedicated to building efficient, scalable web applications. I thrive in high-pressure environments like hackathons and enjoy the process of turning complex problems into elegant solutions.
                            </p>
                            <p>
                                My journey involves continuous experimentation with emerging technologies, always seeking to expand my skillset in the JavaScript ecosystem.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Photo */}
                    <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Outer glow ring */}
                            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-gray-700/30 via-gray-400/10 to-transparent dark:from-white/20 dark:via-white/10 dark:to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-95 group-hover:scale-105 pointer-events-none"></div>

                            {/* Photo frame */}
                            <div className="relative w-72 h-80 sm:w-80 sm:h-88 md:w-96 md:h-[26rem] lg:w-[26rem] lg:h-[30rem] rounded-3xl overflow-hidden
                                border border-gray-200 dark:border-white/10
                                shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
                                transition-all duration-500 ease-out
                                group-hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] dark:group-hover:shadow-[0_30px_80px_-15px_rgba(255,255,255,0.12)]
                                group-hover:-translate-y-2 group-hover:scale-[1.02]"
                            >
                                <img
                                    src="/profile.jpg"
                                    alt="Manan Patel"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Shimmer gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                {/* Live dot */}
                                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/40 dark:bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                    <span className="text-white text-xs font-medium">Available</span>
                                </div>
                            </div>

                            {/* Floating info badge */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-xl"
                            >
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Full Stack</p>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">Developer ✦</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
