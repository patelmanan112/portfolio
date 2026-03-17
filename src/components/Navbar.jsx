import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Education', to: 'education' },
        { name: 'Projects', to: 'projects' },
        { name: 'Certificates', to: 'certificates' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-8 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
        >
            <div
                className={`
            w-full max-w-6xl backdrop-blur-md border dark:border-white/10 border-gray-200 rounded-full px-6 py-3 md:px-8 
            flex justify-between items-center transition-all duration-300
            ${scrolled ? 'dark:bg-[#050505]/80 bg-white/80 shadow-2xl md:scale-[0.98]' : 'dark:bg-transparent bg-white/60'}
        `}
            >
                {/* Logo */}
                <div className="flex items-center group cursor-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <span className="text-white dark:text-black font-serif font-bold text-lg tracking-tighter">MP</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 justify-end">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={1000}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-none hover-trigger relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black dark:bg-white transition-all duration-300 group-hover:w-full rounded-full"></span>
                        </Link>
                    ))}

                    <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

                    {/* Premium Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`
                            relative w-16 h-8 rounded-full overflow-hidden transition-all duration-500 ease-in-out hover-trigger cursor-none shadow-inner
                            ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-black border border-white/20' : 'bg-gradient-to-r from-blue-100 to-blue-200 border border-gray-300'}
                        `}
                        aria-label="Toggle theme"
                    >
                        {/* Background Details */}
                        <div className={`absolute inset-0 transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="absolute top-[6px] left-[8px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_#fff]"></div>
                            <div className="absolute top-[16px] left-[18px] w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_2px_#fff]"></div>
                            <div className="absolute top-[22px] left-[10px] w-[1.5px] h-[1.5px] bg-white rounded-full shadow-[0_0_2px_#fff]"></div>
                        </div>

                        {/* Toggle Thumb */}
                        <div className={`
                            absolute top-[3px] left-[3px] w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out shadow-lg
                            ${theme === 'dark' ? 'translate-x-8 bg-zinc-900 border border-gray-700' : 'translate-x-0 bg-white border border-gray-200'}
                        `}>
                            <motion.div
                                animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {theme === 'dark' ? (
                                    <FaMoon size={11} className="text-blue-100" />
                                ) : (
                                    <FaSun size={12} className="text-amber-500" />
                                )}
                            </motion.div>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-4">
                    <span className="text-gray-900 dark:text-white text-sm font-bold tracking-wide">MENU</span>
                    <button
                        onClick={toggleTheme}
                        className={`
                            relative w-14 h-7 rounded-full overflow-hidden transition-all duration-500
                            ${theme === 'dark' ? 'bg-gradient-to-r from-gray-800 to-black border border-white/20' : 'bg-gradient-to-r from-blue-100 to-blue-200 border border-gray-300'}
                        `}
                    >
                        <div className={`
                            absolute top-[2.5px] left-[2.5px] w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 
                            ${theme === 'dark' ? 'translate-x-[26px] bg-zinc-900' : 'translate-x-0 bg-white'}
                        `}>
                            {theme === 'dark' ? <FaMoon size={10} className="text-white" /> : <FaSun size={10} className="text-amber-500" />}
                        </div>
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
