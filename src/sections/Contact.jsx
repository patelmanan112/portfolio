import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { 
    SiReact, SiNodedotjs, SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript, 
    SiJavascript, SiFramer, SiPython, SiVite, SiExpress, SiPostgresql, 
    SiDocker, SiPrisma, SiRedux, SiGit, SiGithub, SiLinkedin, SiX
} from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: null, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_aez74f9',
                'template_ag9ciur',
                {
                    from_name: form.name,
                    to_name: "Manan Patel",
                    from_email: form.email,
                    to_email: "manan.patel.cg@gmail.com",
                    message: form.message,
                },
                'Qb_fFG-ySA9dwuy1F'
            )
            .then(
                () => {
                    setLoading(false);
                    setStatus({ type: 'success', message: 'Thank you! I will get back to you soon.' });
                    setForm({ name: '', email: '', message: '' });
                    setTimeout(() => setStatus({ type: null, message: '' }), 5000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
                    setTimeout(() => setStatus({ type: null, message: '' }), 5000);
                }
            );
    };

    // Tech stack for LinkedIn Marquee
    const techStack = [
        { icon: <SiReact />, color: '#61DAFB' },
        { icon: <SiJavascript />, color: '#F7DF1E' },
        { icon: <SiNodedotjs />, color: '#339933' },
        { icon: <SiNextdotjs />, color: '#fff' },
        { icon: <SiTailwindcss />, color: '#06B6D4' },
        { icon: <SiTypescript />, color: '#3178C6' },
        { icon: <SiMongodb />, color: '#47A248' },
        { icon: <SiExpress />, color: '#fff' },
        { icon: <SiFramer />, color: '#BB4DCE' },
        { icon: <SiPython />, color: '#3776AB' },
        { icon: <SiVite />, color: '#646CFF' },
        { icon: <SiPostgresql />, color: '#4169E1' },
    ];

    return (
        <section id="contact" className="min-h-screen bg-white dark:bg-black relative flex flex-col pt-32 pb-10 overflow-hidden transition-colors duration-500">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

            <div className="max-w-[90%] mx-auto w-full z-10 mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                    {/* Left: Typography */}
                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[12vw] leading-[0.85] font-black text-gray-900 dark:text-white tracking-tighter"
                        >
                            LET'S
                            <br />
                            <span className="text-gray-400 dark:text-gray-600">WORK</span>
                        </motion.h2>
                    </div>

                    {/* Right: Minimal Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col justify-end"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
                            <div className="hover-trigger cursor-none group relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-6 text-2xl md:text-3xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors cursor-none"
                                />
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                            </div>
                            <div className="hover-trigger cursor-none group relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-6 text-2xl md:text-3xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors cursor-none"
                                />
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                            </div>
                            <div className="hover-trigger cursor-none group relative">
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="1"
                                    placeholder="Tell me about your project"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-6 text-2xl md:text-3xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none cursor-none"
                                ></textarea>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="hover-trigger cursor-none text-gray-900 dark:text-white text-xl uppercase tracking-widest font-bold border border-gray-200 dark:border-white/20 rounded-full px-12 py-6 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* ── Bento Social Grid ──────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-[90%] mx-auto w-full z-10"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">

                    {/* ROW 1 */}
                    {/* 1. Contact Title (1x1) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="col-span-1 flex items-center justify-center py-8 relative group h-full"
                    >
                        {/* 4 Corner Accents */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white transition-all duration-300 group-hover:w-6 group-hover:h-6" />
                        
                        <h3 className="text-white text-3xl font-black tracking-[0.3em] font-sans uppercase">
                            Contact
                        </h3>
                    </motion.div>

                    {/* 2. Email Card (2x1) */}
                    <motion.a
                        href="mailto:manan.patel.cg@gmail.com"
                        initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="hover-trigger cursor-none col-span-2 flex items-center justify-center gap-6 bg-[#121212] border border-white/10 rounded-3xl px-10 py-8 group transition-all duration-300 hover:bg-[#1a1a1a] h-full"
                        aria-label="Send me an email"
                    >
                        <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 shadow-sm border border-white/10">
                             <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </span>
                        <p className="text-white font-medium text-xl md:text-2xl tracking-tight truncate">manan.patel.cg@gmail.com</p>
                    </motion.a>

                    {/* 3. LinkedIn Card (1x2) - Starts in Row 1 */}
                    <motion.a
                        href="https://www.linkedin.com/in/manan-patel-557535390/"
                        target="_blank" rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="hover-trigger cursor-none col-span-1 row-span-2 bg-[#121212] border border-white/10 rounded-3xl relative overflow-hidden group min-h-[300px] flex flex-col pt-8 h-full"
                        aria-label="Visit my LinkedIn profile"
                    >
                         <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity flex justify-around">
                             {[0, 1, 2].map((col) => (
                                 <div key={col} className={`flex flex-col gap-6 animate-marquee-up ${col % 2 === 0 ? '' : 'animate-marquee-up-reverse'}`}
                                      style={{ animationDuration: `${15 + col * 3}s` }}>
                                     {[...techStack, ...techStack].map((tech, i) => (
                                         <div key={i} className="text-4xl text-white/40">
                                             {tech.icon}
                                         </div>
                                     ))}
                                 </div>
                             ))}
                         </div>
                         <div className="z-10 px-6">
                              <SiLinkedin className="text-3xl text-[#0A66C2] mb-3 shadow-sm bg-white/10 p-1 rounded-lg" />
                         </div>
                         <div className="mt-auto p-6 z-10 flex flex-col gap-3">
                              <p className="text-white font-bold text-lg leading-tight">Manan Patel</p>
                              <span className="w-fit px-6 py-2 bg-white text-black text-xs font-bold rounded-lg hover:scale-105 transition-transform">
                                  Connect
                              </span>
                         </div>
                    </motion.a>

                    {/* ROW 2 & 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="col-span-1 row-span-2 bg-[#121212] border border-white/10 rounded-3xl flex flex-col items-center justify-center group overflow-hidden relative min-h-[400px] h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        
                        <div className="flex items-center justify-center h-full">
                            <h2 className="text-white text-3xl md:text-3xl font-black tracking-widest -rotate-90 whitespace-nowrap select-none transition-transform duration-500 group-hover:scale-110">
                                MANAN PATEL
                            </h2>
                        </div>
                    </motion.div>

                    {/* 5. GitHub Card (2x2) - Starts in Row 2 */}
                    <motion.a
                        href="https://github.com/patelmanan112"
                        target="_blank" rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
                        className="hover-trigger cursor-none col-span-2 row-span-2 bg-[#121212] border border-white/10 rounded-3xl p-8 group transition-all duration-300 hover:bg-[#1a1a1a] overflow-hidden flex flex-col justify-between min-h-[400px] h-full"
                        aria-label="Visit my GitHub profile"
                    >
                        <div className="flex items-center justify-between mb-8 px-2">
                             <div className="flex items-center gap-3">
                                 <div className="p-3 bg-white/5 rounded-2xl shadow-sm border border-white/10">
                                     <SiGithub className="text-3xl text-white" />
                                 </div>
                                 <div className="z-10">
                                     <p className="text-white font-bold text-xl leading-none">github/patelmanan112</p>
                                     <p className="text-white/40 text-xs mt-1">Full Stack Developer</p>
                                 </div>
                             </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Slider 1: Right to Left */}
                            <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <div className="flex gap-4 animate-marquee whitespace-nowrap">
                                    {['portfolio', 'KisanDost', 'Nooe-Clone', 'Chainlink', 'NextAuth'].map((repo) => (
                                        <div key={repo} className="px-6 py-5 bg-black/40 border border-white/5 rounded-2xl text-white text-xs font-bold shadow-sm flex flex-col gap-2 min-w-[180px]">
                                            <span className="text-white font-black text-sm">{repo}</span>
                                            <span className="text-white/40 font-normal text-[10px] whitespace-normal line-clamp-2">Featured professional repository and source code.</span>
                                        </div>
                                    ))}
                                    {['portfolio', 'KisanDost', 'Nooe-Clone', 'Chainlink', 'NextAuth'].map((repo) => (
                                        <div key={repo+'-dup'} className="px-6 py-5 bg-black/40 border border-white/5 rounded-2xl text-white text-xs font-bold shadow-sm flex flex-col gap-2 min-w-[180px]">
                                            <span className="text-white font-black text-sm">{repo}</span>
                                            <span className="text-white/40 font-normal text-[10px] whitespace-normal line-clamp-2">Featured professional repository and source code.</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slider 2: Left to Right */}
                            <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <div className="flex gap-4 animate-marquee2 whitespace-nowrap">
                                    {['E-commerce', 'Dashboard', 'WeatherApp', 'ChatBot', 'Tasker'].map((repo) => (
                                        <div key={repo} className="px-6 py-5 bg-black/40 border border-white/5 rounded-2xl text-white text-xs font-bold shadow-sm flex flex-col gap-2 min-w-[180px]">
                                            <span className="text-white font-black text-sm">{repo}</span>
                                            <span className="text-white/40 font-normal text-[10px] whitespace-normal line-clamp-2">High performance scalable application module.</span>
                                        </div>
                                    ))}
                                    {['E-commerce', 'Dashboard', 'WeatherApp', 'ChatBot', 'Tasker'].map((repo) => (
                                        <div key={repo+'-dup'} className="px-6 py-5 bg-black/40 border border-white/5 rounded-2xl text-white text-xs font-bold shadow-sm flex flex-col gap-2 min-w-[180px]">
                                            <span className="text-white font-black text-sm">{repo}</span>
                                            <span className="text-white/40 font-normal text-[10px] whitespace-normal line-clamp-2">High performance scalable application module.</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto px-2 flex justify-between items-center text-white/40 text-[10px] font-mono font-bold uppercase tracking-wider pt-8 border-t border-white/5">
                             <button 
                                className="px-6 py-3 bg-white text-black rounded-xl text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                                aria-label="Follow me on GitHub"
                             >
                                 Follow <FaArrowRight className="text-xs" />
                             </button>
                             <span>24 Repositories</span>
                        </div>
                    </motion.a>

                    {/* 6. X Card (1x1) - Fills Row 3, Col 4 */}
                    <motion.a 
                        href="https://x.com/man_an0112"
                        target="_blank" rel="noreferrer"
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
                        className="hover-trigger cursor-none col-span-1 bg-white border border-transparent rounded-3xl p-8 flex flex-col justify-between group transition-all duration-300 min-h-[180px] relative overflow-hidden"
                        aria-label="Visit my X (Twitter) profile"
                    >
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                             <SiX className="text-6xl text-black" />
                         </div>
                         <SiX className="text-3xl text-black z-10" />
                         <div className="z-10">
                            <p className="text-black font-black text-lg">Manan Patel</p>
                            <p className="text-black/40 text-[10px] font-mono mt-1 font-bold">@manan_0112</p>
                         </div>
                    </motion.a>


                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                     <p className="text-white/20 text-[10px] font-mono uppercase tracking-widest">© 2026 Crafted with precision</p>
                     <div className="flex gap-6">
                         <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-widest hover-trigger cursor-none" aria-label="View Sitemap">Sitemap</a>
                         <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] font-mono uppercase tracking-widest hover-trigger cursor-none" aria-label="View Privacy Policy">Privacy</a>
                     </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
