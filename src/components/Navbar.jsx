import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { name: 'Home',         to: '/' },
    { name: 'Skills',       to: '/skills' },
    { name: 'Education',    to: '/education' },
    { name: 'Projects',     to: '/projects' },
    { name: 'Certificates', to: '/certificates' },
    { name: 'Contact',      to: '/contact' },
];

// Slight rotation angles for each card — gives the "splayed" look from the image
const cardRotations = [-2, 1.5, -1, 2, -1.5, 1];

const Navbar = () => {
    const [scrolled, setScrolled]     = useState(false);
    const [menuOpen, setMenuOpen]     = useState(false);
    const location                    = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu and scroll to top on route change
    useEffect(() => {
        setMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Prevent body scroll when overlay is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            {/* ── Top Bar ── */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-[60] flex justify-center px-4 md:px-8 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
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

                    {/* Menu Toggle Button */}
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        className="hover-trigger cursor-none w-11 h-11 rounded-xl border border-gray-200 dark:border-white/20 flex flex-col items-center justify-center gap-[5px] transition-all duration-300 dark:bg-white/5 bg-black/5 hover:bg-black/10 dark:hover:bg-white/10"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-[2px] bg-gray-900 dark:bg-white rounded-full origin-center"
                        />
                        <motion.span
                            animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-5 h-[2px] bg-gray-900 dark:bg-white rounded-full"
                        />
                        <motion.span
                            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="block w-5 h-[2px] bg-gray-900 dark:bg-white rounded-full origin-center"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* ── Fullscreen Overlay ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6 md:p-12"
                    >
                        {/* Close hint */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute top-8 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-[0.3em] uppercase font-mono"
                        >
                            Click anywhere to close
                        </motion.p>

                        {/* Card Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 60, rotate: cardRotations[i] * 2 }}
                                    animate={{ opacity: 1, y: 0, rotate: cardRotations[i] }}
                                    exit={{ opacity: 0, y: 40, rotate: cardRotations[i] * 2 }}
                                    transition={{
                                        delay: i * 0.07,
                                        duration: 0.55,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    whileHover={{
                                        rotate: 0,
                                        scale: 1.04,
                                        transition: { duration: 0.25 }
                                    }}
                                >
                                    <Link
                                        to={link.to}
                                        onClick={() => setMenuOpen(false)}
                                        className={`
                                            hover-trigger cursor-none
                                            group block w-full aspect-[4/2.4] md:aspect-[4/2.8]
                                            rounded-2xl border border-white/10
                                            flex items-center justify-center
                                            transition-all duration-300
                                            ${location.pathname === link.to
                                                ? 'bg-white'
                                                : 'bg-[#111] hover:bg-white'
                                            }
                                        `}
                                    >
                                        <span className={`
                                            text-2xl md:text-4xl font-black tracking-tighter lowercase
                                            transition-colors duration-300
                                            ${location.pathname === link.to
                                                ? 'text-black'
                                                : 'text-white group-hover:text-black'
                                            }
                                        `}>
                                            {link.name.toLowerCase()}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer inside overlay */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65 }}
                            className="absolute bottom-8 text-white/20 text-xs tracking-widest font-mono uppercase"
                        >
                            Manan Patel © 2026
                        </motion.p>

                        {/* Background click to close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setMenuOpen(false)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
