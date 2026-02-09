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

                    {/* Right Column: Experience Card */}
                    <div className="w-full md:w-1/2 mt-12 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:border-gray-300 dark:hover:border-white/20 transition-colors shadow-sm"
                        >
                            {/* Decorative Gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full pointer-events-none"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Freelance Developer</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Kalol, Gujarat</p>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                                    Current
                                </div>
                            </div>

                            <p className="font-mono text-sm text-gray-500 mb-6">2025 - Present</p>

                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-blue-600 dark:text-accent mt-1">▹</span>
                                    Built an in-house collaboration web app using the MERN stack.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 dark:text-accent mt-1">▹</span>
                                    Optimized data retrieval speeds by 30% through efficient API integrations.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-600 dark:text-accent mt-1">▹</span>
                                    Delivered responsive, cross-browser compatible websites for diverse clients.
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
