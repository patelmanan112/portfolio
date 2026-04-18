import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';
import { SiReact, SiHtml5, SiFirebase, SiGreensock, SiFigma } from 'react-icons/si';
import { TbCodeCircle } from "react-icons/tb";
import {Helmet} from 'react-helmet'

const projectsData = [
  {
    title: 'Figma Project-1',
    category: 'Figma',
    techTags: [{ name: 'Figma', icon: <SiFigma /> }, { name: 'UI/UX Design', icon: <TbCodeCircle /> }],
    description: 'A modern UI/UX design and interactive prototype created in Figma, focusing on user experience and aesthetic visual layouts.',
    image: 'https://res.cloudinary.com/dxzo7jfbn/image/upload/v1776525576/figma1_hhlxf4.jpg',
    figma: 'https://www.figma.com/design/xpWC4tlj3KSbLjvKCF4ceZ/untitled?node-id=57-2&m=dev&t=5JKE2shpp8Slo8Nr-1',
    live: 'https://www.figma.com/proto/xpWC4tlj3KSbLjvKCF4ceZ/untitled?node-id=57-2&t=5JKE2shpp8Slo8Nr-1'
  },
  {
    title: 'Figma Project-2',
    category: 'Figma',
    techTags: [{ name: 'Figma', icon: <SiFigma /> }, { name: 'UI/UX Design', icon: <TbCodeCircle /> }],
    description: 'An advanced interactive design prototype with structured components and responsive web design concepts in Figma.',
    image: 'https://res.cloudinary.com/dxzo7jfbn/image/upload/v1776525576/figma2_d92tyh.jpg',
    figma: 'https://www.figma.com/design/xpWC4tlj3KSbLjvKCF4ceZ/untitled?node-id=361-208&m=dev&t=5JKE2shpp8Slo8Nr-1',
    live: 'https://www.figma.com/proto/xpWC4tlj3KSbLjvKCF4ceZ/untitled?node-id=361-208&t=5JKE2shpp8Slo8Nr-1'
  },
  {
    title: 'Kisan Dost',
    category: 'Full Stack',
    techTags: [{ name: 'Next.js', icon: <SiReact /> }, { name: 'Python FastAPI', icon: <TbCodeCircle /> }],
    description: 'An AI-powered agricultural platform featuring predictive tools, crop management, and specialized services for farmers.',
    image: 'https://res.cloudinary.com/dxzo7jfbn/image/upload/v1776301451/kisanDost-thumbnail_dj5ljd.png',
    github: 'https://github.com/patelmanan112/ganpat-University',
    live: 'https://kisan-dost.netlify.app/'
  },
  {
    title: 'FleetEdge',
    category: 'Full Stack',
    techTags: [{ name: 'React', icon: <SiReact /> }, { name: 'Node.js', icon: <TbCodeCircle /> }],
    description: 'A comprehensive fleet management platform designed for operational efficiency, real-time tracking, and analytics.',
    image: 'https://img.youtube.com/vi/NbGgWTHVNwY/maxresdefault.jpg',
    github: 'https://github.com/PalDPathak404/OdooXGJVidhyaPith',
    live: '#',
    youtube: 'https://www.youtube.com/watch?v=NbGgWTHVNwY'
  },
  {
    title: 'CG LMS Clone',
    category: 'Frontend',
    techTags: [{ name: 'React', icon: <SiReact /> }, { name: 'Tailwind CSS', icon: <TbCodeCircle /> }],
    description: 'A responsive frontend clone of the CG Learning Management System (LMS) with modernized UI/UX components.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000',
    github: 'https://github.com/patelmanan112/lms-clone',
    live: 'https://papaya-cucurucho-d673a6.netlify.app/'
  },
  {
    title: 'Mealawe Clone',
    category: 'Frontend',
    techTags: [{ name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }, { name: 'Responsive', icon: <TbCodeCircle /> }],
    description: 'A modern, responsive portfolio website featuring smooth animations, dark theme design, and interactive components.',
    image: 'https://res.cloudinary.com/dxzo7jfbn/image/upload/v1776273777/mealawe_k2kihe.png',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-5',
    live: 'https://mealawe-clone.netlify.app/'
  },
  {
    title: 'Chainlink Clone',
    category: 'Frontend',
    techTags: [{ name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }, { name: 'Responsive', icon: <TbCodeCircle /> }],
    description: 'Clone of the Chainlink homepage demonstrating complex grid layouts commonly used in modern Web3 landing pages.',
    image: 'https://img.youtube.com/vi/KmjeWpQ4sDo/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-4',
    live: 'https://chainlink-clone.netlify.app/',
    youtube: 'https://www.youtube.com/watch?v=KmjeWpQ4sDo'
  },
  {
    title: 'Nooe Design Clone',
    category: 'Frontend',
    techTags: [ { name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }],
    description: 'A pixel-perfect implementation of the Nøoe design powered by advanced GSAP scroll animations and parallax effects.',
    image: 'https://img.youtube.com/vi/lwISCTx0ZrI/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-3',
    live: 'https://nooe-clone.netlify.app/',
    youtube: 'https://www.youtube.com/watch?v=lwISCTx0ZrI'
  },
  {
    title: 'Indigo Airlines Clone',
    category: 'Frontend',
    techTags: [{ name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }, { name: 'JavaScript', icon: <TbCodeCircle /> }],
    description: 'A detailed replica of the Indigo Airlines flight booking interface with functional, accessible dynamic form layouts.',
    image: 'https://img.youtube.com/vi/TVOr_8JVKjY/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-2',
    live: 'https://goindigo-clone.netlify.app/',
    youtube: 'https://www.youtube.com/watch?v=TVOr_8JVKjY'
  },
  {
    title: 'American Tourister Clone',
    category: 'Frontend',
    techTags: [{ name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }, { name: 'JavaScript', icon: <TbCodeCircle /> }],
    description: 'A responsive clone featuring modern product showcases, smooth navigation, and optimized interactive UI elements.',
    image: 'https://img.youtube.com/vi/gFGsAYsIduE/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-1',
    live: 'https://american-tourister-clone.netlify.app/',
    youtube: 'https://www.youtube.com/watch?v=gFGsAYsIduE'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      layout
      viewport={{ once: true }}
      className="hover-trigger cursor-none bg-[#0e0e0e] hover:bg-[#131313] transition-colors border border-white/5 rounded-2xl p-4 flex flex-col group relative"
    >
      {/* Project Image */}
      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1a1a] mb-5 border border-white/5 relative">
         <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
         />
         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>

      {/* Project Details */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-100 tracking-tight">
          {project.title}
        </h3>
        <a 
          href={project.live} 
          target="_blank" 
          rel="noreferrer" 
          className="text-white hover:text-green-400 transition-colors cursor-none hover-trigger"
        >
          <FaExternalLinkAlt size={16} />
        </a>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techTags.map((tag, idx) => (
          <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] border border-white/10 rounded text-xs font-mono text-gray-300">
            <span className="text-gray-400">{tag.icon}</span> {tag.name}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Links Overlay */}
      <div className="mt-auto flex flex-wrap justify-between items-center gap-2">
        {project.github ? (
          <a 
             href={project.github} 
             target="_blank" 
             rel="noreferrer"
             className="text-xs font-mono uppercase tracking-widest text-green-400/80 hover:text-green-400 cursor-none hover-trigger"
          >
             View Repository →
          </a>
        ) : project.figma ? (
          <a 
             href={project.figma} 
             target="_blank" 
             rel="noreferrer"
             className="text-xs font-mono uppercase tracking-widest text-[#0acf83]/80 hover:text-[#0acf83] cursor-none hover-trigger"
          >
             View Design →
          </a>
        ) : <div />}
        {project.youtube && (
          <a 
             href={project.youtube} 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-500/80 hover:text-red-500 cursor-none hover-trigger"
          >
             <FaYoutube size={16} /> WATCH VIDEO
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Frontend', 'Full Stack', 'Figma'];

    const filteredProjects = projectsData.filter(proj => {
        if (filter === 'All') return true;
        return proj.category === filter;
    });

    // Split projects for staggered masonry layout
    const leftColumn = filteredProjects.filter((_, i) => i % 2 === 0);
    const rightColumn = filteredProjects.filter((_, i) => i % 2 !== 0);

    return (
      <>
          <div>
            <Helmet>
                <title>Featured Projects | Manan</title>
                <meta name='description' content='Explore a collection of real-world projects developed by Manan, showcasing expertise in full stack development, problem-solving, and modern web technologies including React, Node.js, and MongoDB.'/>
                <meta name='keywords' content='MANAN PATEL | SOFTWARE ENGINEER | Projects, React, Node.js, MongoDB, Full Stack Development, Problem-Solving, Modern Web Technologies'/>
                <meta name='author' content='Manan Patel'/>
            </Helmet>
        </div>
        <section id="projects" className="py-32 bg-[#020202] text-white min-h-screen">
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-16 md:gap-24">
                    
                    {/* Top Centered Header */}
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <div className="flex flex-col items-start text-left w-full">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-5">
                                Showcasing some of my<br className="hidden md:block" />
                                creative works.
                            </h2>
                            <p className="text-lg md:text-xl text-[#7a8896] mb-6 font-light">
                                Here are some projects I've worked on.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-6">
                                {/* Categories Filter */}
                                <div className="flex flex-wrap gap-3">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setFilter(cat)}
                                            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 cursor-none hover-trigger ${
                                                filter === cat 
                                                ? 'bg-white text-black border-white' 
                                                : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>

                                <a 
                                    href="https://github.com/patelmanan112/Website" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-[#00e573] hover:text-[#00c965] md:text-lg font-medium transition-colors cursor-none hover-trigger group whitespace-nowrap"
                                >
                                    View archive 
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Masonry Grid Container */}
                    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start min-h-[500px]">
                        <AnimatePresence>
                            {filteredProjects.length === 0 && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full text-center text-gray-500 py-20 italic"
                                >
                                    More {filter} projects coming soon!
                                </motion.div>
                            )}
                        </AnimatePresence>
                        
                        {filteredProjects.length > 0 && (
                            <>
                                {/* Column 1 */}
                                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
                                    <AnimatePresence mode="popLayout">
                                        {leftColumn.map((proj) => (
                                            <ProjectCard key={`left-${proj.title}`} project={proj} />
                                        ))}
                                    </AnimatePresence>
                                </div>
                                {/* Column 2 (Offset slightly to mimic masonry pattern perfectly on large screens) */}
                                <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pt-0 md:pt-16">
                                    <AnimatePresence mode="popLayout">
                                        {rightColumn.map((proj) => (
                                            <ProjectCard key={`right-${proj.title}`} project={proj} />
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </section>
      </>
    );
};

export default Projects;
