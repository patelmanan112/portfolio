import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
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
                'service_aez74f9', // Add your Service ID here
                'template_ag9ciur', // Add your Template ID here
                {
                    from_name: form.name,
                    to_name: "Manan Patel",
                    from_email: form.email,
                    to_email: "manan.patel.cg@gmail.com",
                    message: form.message,
                },
                'Qb_fFG-ySA9dwuy1F' // Add your Public Key here
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

    return (
        <section id="contact" className="min-h-screen bg-white dark:bg-black relative flex flex-col justify-between pt-32 pb-10 overflow-hidden transition-colors duration-500">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>

            <div className="max-w-[90%] mx-auto w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

                    {/* Left: Massive Typography */}
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
                            <span className="text-gray-200 dark:text-gray-800">WORK</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-12 flex flex-col gap-8"
                        >
                            <a href="mailto:manan.patel.cg@gmail.com" className="group flex items-center gap-6 cursor-none hover-trigger">
                                <span className="w-16 h-16 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                                    <FaArrowRight className="text-2xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </span>
                                <div>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs mb-1 font-bold">Drop an Email</p>
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-gray-300 transition-colors">manan.patel.cg@gmail.com</h3>
                                </div>
                            </a>

                            <a href="tel:+919512628557" className="group flex items-center gap-6 cursor-none hover-trigger">
                                <span className="w-16 h-16 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                                    <FaArrowRight className="text-2xl -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </span>
                                <div>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs mb-1 font-bold">Call or Text</p>
                                    <h3 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-gray-300 transition-colors">+91 9512628557</h3>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                                <span className="w-16 h-16 rounded-full border border-gray-200 dark:border-white/20 flex items-center justify-center text-gray-900 dark:text-white">
                                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
                                </span>
                                <div>
                                    <p className="text-gray-500 uppercase tracking-widest text-xs mb-1 font-bold">Status</p>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-500 dark:text-gray-300 transition-colors">Available for Freelance</h3>
                                </div>
                            </div>
                        </motion.div>
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
                            <div className="group relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-6 text-2xl md:text-3xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                                />
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Your email address"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-6 text-2xl md:text-3xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                                />
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                            </div>
                            <div className="group relative">
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="1"
                                    placeholder="Tell me about your project"
                                    required
                                    className="w-full bg-transparent border-b border-gray-300 dark:border-gray-800 py-6 text-2xl md:text-3xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-700 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none"
                                ></textarea>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-900 dark:bg-white transition-all duration-500 group-hover:w-full"></span>
                            </div>

                            <div className="relative">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="text-gray-900 dark:text-white text-xl uppercase tracking-widest font-bold border border-gray-200 dark:border-white/20 rounded-full px-12 py-6 hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-4"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>

                                <AnimatePresence>
                                    {status.type && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className={`absolute -top-16 left-0 flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-bold ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                        >
                                            {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                                            {status.message}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>

            {/* Footer styled bottom bar */}
            <div className="mt-autow-full px-8 py-8 flex justify-between items-end border-t border-gray-200 dark:border-white/10 mt-20">
                <div className="flex gap-8">
                    <a href="https://www.instagram.com/man_an0112/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors uppercase text-sm tracking-widest">Instagram</a>
                    <a href="https://x.com/man_an0112" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors uppercase text-sm tracking-widest">Twitter</a>
                    <a href="https://www.linkedin.com/in/manan-patel-557535390" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors uppercase text-sm tracking-widest">LinkedIn</a>
                </div>
                <p className="text-gray-400 dark:text-gray-600 text-sm">© 2026 Manan Patel</p>
            </div>

        </section>
    );
};

export default Contact;

