import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Skills', to: '/skills' },
    { name: 'Education', to: '/education' },
    { name: 'Projects', to: '/projects' },
    { name: 'Certificates', to: '/certificates' },
    { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
            >
                <div className={`w-full max-w-6xl backdrop-blur-md border dark:border-white/10 border-gray-200 rounded-full px-6 py-3 md:px-8 flex justify-between items-center transition-all duration-300 ${scrolled ? 'dark:bg-[#050505]/80 bg-white/80 shadow-2xl md:scale-[0.98]' : 'dark:bg-transparent bg-white/60'}`}>
                    {/* Logo */}
                    <div className="hover-trigger cursor-none flex items-center group">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <span className="text-2xl md:text-3xl font-black tracking-tighter text-gray-900 dark:text-white group-hover:opacity-70 transition-opacity duration-300" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                M<span className="text-gray-400 dark:text-gray-500">P.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 justify-end">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className={`text-sm font-medium transition-colors cursor-none hover-trigger relative group ${
                                    location.pathname === link.to
                                        ? 'text-black dark:text-white'
                                        : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                                }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-black dark:bg-white transition-all duration-300 rounded-full ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-4">
                        <span className="text-gray-900 dark:text-white text-sm font-bold tracking-wide">MENU</span>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="hover-trigger cursor-none flex flex-col gap-[5px] justify-center items-center w-8 h-8"
                            aria-label="Toggle menu"
                        >
                            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} className="block w-5 h-[2px] bg-gray-900 dark:bg-white rounded-full origin-center" />
                            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-5 h-[2px] bg-gray-900 dark:bg-white rounded-full" />
                            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} className="block w-5 h-[2px] bg-gray-900 dark:bg-white rounded-full origin-center" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
                        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white/95 dark:bg-[#030303]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.07 }}
                            >
                                <Link
                                    to={link.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`hover-trigger cursor-none text-4xl font-black tracking-tighter transition-colors duration-300 ${
                                        location.pathname === link.to
                                            ? 'text-black dark:text-white'
                                            : 'text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="absolute bottom-10 text-gray-400 dark:text-gray-600 text-xs tracking-widest font-mono uppercase">Manan Patel © 2026</motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
