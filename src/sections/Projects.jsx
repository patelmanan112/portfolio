import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
    {
        title: 'American Tourister Clone',
        subTitle: 'E-commerce Redesign',
        tech: 'HTML/CSS/JS',
        features: [
            'A responsive clone of the American Tourister website featuring modern product showcases.',
            'Smooth navigation and user experience optimized for all devices.',
            'Detailed product pages with interactive UI elements.'
        ],
        image: 'https://img.youtube.com/vi/gFGsAYsIduE/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-1',
        live: 'https://american-tourister-clone.netlify.app/',
        youtube: 'https://youtu.be/gFGsAYsIduE'
    },
    {
        title: 'Indigo Airlines Clone',
        subTitle: 'Travel Booking UI',
        tech: 'HTML/CSS/JS',
        features: [
            'A detailed replica of the Indigo Airlines flight booking interface.',
            'Focuses on accessibility and layout precision for complex forms.',
            'Includes dynamic dropdowns and date-picker styling mimicking the original site.'
        ],
        image: 'https://img.youtube.com/vi/TVOr_8JVKjY/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-2',
        live: 'https://goindigo-clone.netlify.app/',
        youtube: 'https://youtu.be/TVOr_8JVKjY'
    },
    {
        title: 'Nooe Design Clone',
        subTitle: 'Aesthetic Landing Page',
        tech: 'GSAP / Animations / HTML / CSS',
        features: [
            'A pixel-perfect implementation of the Nøoe design specifically crafting high-end visual interactions.',
            'Powered by advanced GSAP scroll animations and parallax effects.',
            'Ensures cross-browser consistency in complex modern CSS layouts.'
        ],
        image: 'https://img.youtube.com/vi/lwISCTx0ZrI/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-3',
        live: 'https://nooe-clone.netlify.app/',
        youtube: 'https://youtu.be/lwISCTx0ZrI'
    },
    {
        title: 'Chainlink Clone',
        subTitle: 'Web3 Interface',
        tech: 'React / Tailwind CSS',
        features: [
            'Clone of the Chainlink homepage, demonstrating bold typography.',
            'Complex grid layouts commonly used in modern Web3 landing pages.',
            'Responsive design implementation using standard Tailwind utility classes.'
        ],
        image: 'https://img.youtube.com/vi/KmjeWpQ4sDo/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-4',
        live: 'https://chainlink-clone.netlify.app/',
        youtube: 'https://youtu.be/KmjeWpQ4sDo'
    }
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const project = projects[currentIndex];

    return (
        <section id="projects" className="py-32 bg-slate-50 dark:bg-[#020202] text-slate-900 dark:text-white min-h-screen flex items-center relative z-10 overflow-hidden transition-colors duration-700">
            {/* Carousel Navigation Arrows */}
            <button onClick={prevProject} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-[#1e2330] hover:bg-[#2a3040] border border-white/5 transition-all text-white/80 hover:text-white cursor-pointer shadow-xl">
                <FaArrowLeft />
            </button>
            <button onClick={nextProject} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-[#1e2330] hover:bg-[#2a3040] border border-white/5 transition-all text-white/80 hover:text-white cursor-pointer shadow-xl">
                <FaArrowRight />
            </button>

            <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-16 md:px-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
                    >
                        {/* Left Content Area */}
                        <div className="w-full lg:w-1/2 flex gap-4 md:gap-8 items-start">
                            {/* Number Index */}
                            <div className="text-6xl md:text-8xl font-bold text-gray-700/50 leading-none shrink-0 w-14 md:w-24 mt-1 md:mt-0 select-none">
                                {String(currentIndex + 1).padStart(2, '0')}
                            </div>

                            {/* Project Details */}
                            <div className="flex flex-col">
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-200 leading-tight mb-2 tracking-wide">
                                    {project.title}
                                </h2>
                                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 font-light">
                                    {project.subTitle}
                                </p>

                                <div className="mt-4 md:mt-8 tracking-wide">
                                    <h3 className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                                        TOOLS & FEATURES
                                    </h3>
                                    <p className="text-gray-800 dark:text-gray-300 mb-5 font-semibold text-sm md:text-base">
                                        {project.tech}
                                    </p>

                                    <ul className="space-y-4 mb-10 w-full lg:max-w-md">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                                                <span className="text-teal-600 dark:text-teal-500 mr-3 mt-1.5 text-xs opacity-80 shadow-[0_0_8px_rgba(20,184,166,0.4)] dark:shadow-[0_0_8px_rgb(20,184,166)]">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Action Links */}
                                    <div className="flex items-center gap-6 md:gap-8 mt-2 lg:mt-6">
                                        <a href={project.github} target="_blank" rel="noreferrer" title="GitHub / Code" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 hover:scale-110 transition-all duration-300">
                                            <FaGithub size={26} className="md:w-8 md:h-8" />
                                        </a>
                                        <a href={project.youtube} target="_blank" rel="noreferrer" title="YouTube Video" className="text-gray-900 dark:text-white hover:text-red-500 hover:scale-110 transition-all duration-300">
                                            <FaYoutube size={30} className="md:w-[36px] md:h-[36px]" />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" title="Live Site" className="text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 hover:scale-110 transition-all duration-300">
                                            <FaExternalLinkAlt size={22} className="md:w-6 md:h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Area - Mockup */}
                        <div className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 relative group">
                            {/* Optional subtle background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-teal-500/10 blur-[80px] rounded-full point-events-none transition-all duration-500 group-hover:bg-teal-500/20"></div>
                            
                            <div className="relative w-full max-w-[650px] mx-auto flex flex-col items-center">
                                {/* Monitor Screen Bezel */}
                                <div className="w-full bg-[#121316] p-2 md:p-3 rounded-xl border border-white/10 shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/5 mx-auto">
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                                        />
                                    </div>
                                    {/* Monitor Logo / Detail */}
                                    <div className="absolute bottom-1 md:bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/5 rounded-full"></div>
                                </div>

                                {/* Monitor Stand */}
                                <div className="hidden sm:block w-24 md:w-32 h-10 md:h-14 bg-gradient-to-b from-[#181a1f] to-[#0f1115] border-x border-white/5 relative z-0 -mt-2 transition-transform duration-500 group-hover:-translate-y-1"></div>
                                {/* Monitor Base */}
                                <div className="hidden sm:block w-32 md:w-48 h-2 md:h-3 bg-[#1f2329] rounded-t-sm shadow-xl relative z-10 transition-transform duration-500 group-hover:-translate-y-1"></div>
                                <div className="hidden sm:block w-40 md:w-56 h-1 bg-[#0a0f16] shadow-2xl relative z-20"></div>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
