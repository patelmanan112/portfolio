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
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}
        >
            <div
                className={`
            backdrop-blur-md border dark:border-white/10 border-gray-200 rounded-full px-8 py-3 
            flex items-center gap-8 transition-all duration-300
            ${scrolled ? 'dark:bg-black/50 bg-white/80 shadow-2xl scale-90' : 'dark:bg-transparent bg-white/60'}
        `}
            >
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={1000}
                            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-none hover-trigger"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-all hover-trigger cursor-none"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <span className="text-gray-900 dark:text-white text-sm font-bold">Menu</span>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <FaSun size={14} /> : <FaMoon size={14} />}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
