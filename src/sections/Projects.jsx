import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiHtml5, SiFirebase, SiGreensock } from 'react-icons/si';
import { TbCodeCircle } from "react-icons/tb";

const projectsData = [
  {
    title: 'Chainlink Clone',
    techTags: [{ name: 'React', icon: <SiReact /> }, { name: 'Tailwind CSS', icon: <TbCodeCircle /> }],
    description: 'Clone of the Chainlink homepage demonstrating complex grid layouts commonly used in modern Web3 landing pages.',
    image: 'https://img.youtube.com/vi/KmjeWpQ4sDo/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-4',
    live: 'https://chainlink-clone.netlify.app/'
  },
  {
    title: 'Nooe Design Clone',
    techTags: [{ name: 'GSAP', icon: <SiGreensock /> }, { name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }],
    description: 'A pixel-perfect implementation of the Nøoe design powered by advanced GSAP scroll animations and parallax effects.',
    image: 'https://img.youtube.com/vi/lwISCTx0ZrI/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-3',
    live: 'https://nooe-clone.netlify.app/'
  },
  {
    title: 'Indigo Airlines Clone',
    techTags: [{ name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }, { name: 'JavaScript', icon: <TbCodeCircle /> }],
    description: 'A detailed replica of the Indigo Airlines flight booking interface with functional, accessible dynamic form layouts.',
    image: 'https://img.youtube.com/vi/TVOr_8JVKjY/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-2',
    live: 'https://goindigo-clone.netlify.app/'
  },
  {
    title: 'American Tourister Clone',
    techTags: [{ name: 'HTML', icon: <SiHtml5 /> }, { name: 'CSS', icon: <TbCodeCircle /> }, { name: 'JavaScript', icon: <TbCodeCircle /> }],
    description: 'A responsive clone featuring modern product showcases, smooth navigation, and optimized interactive UI elements.',
    image: 'https://img.youtube.com/vi/gFGsAYsIduE/maxresdefault.jpg',
    github: 'https://github.com/patelmanan112/Website/tree/main/website-1',
    live: 'https://american-tourister-clone.netlify.app/'
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
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
      <a 
         href={project.github} 
         target="_blank" 
         rel="noreferrer"
         className="mt-auto text-xs font-mono uppercase tracking-widest text-green-400/80 hover:text-green-400 cursor-none hover-trigger"
      >
         View Repository →
      </a>
    </motion.div>
  );
};

const Projects = () => {
    // Split projects for staggered masonry layout
    const leftColumn = projectsData.filter((_, i) => i % 2 === 0);
    const rightColumn = projectsData.filter((_, i) => i % 2 !== 0);

    return (
        <section id="projects" className="py-32 bg-[#020202] text-white min-h-screen">
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 lg:px-20">
                <div className="flex flex-col gap-16 md:gap-24">
                    
                    {/* Top Centered Header */}
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <div className="flex flex-col items-start text-left">
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-5">
                                Showcasing<br className="hidden md:block" />
                                some of my<br className="hidden md:block" />
                                creative works.
                            </h2>
                            <p className="text-lg md:text-xl text-[#7a8896] mb-8 font-light">
                                Here are some projects I've worked on.
                            </p>
                            <a 
                                href="https://github.com/patelmanan112/Website" 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-[#00e573] hover:text-[#00c965] font-medium transition-colors cursor-none hover-trigger group"
                            >
                                View archive 
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>

                        {/* Animated circle icon from the user's screenshot */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="mt-28 w-14 h-14 rounded-full border-[2.5px] border-white/60 relative"
                        >
                            <div className="absolute top-[2px] left-[6px] w-[9px] h-[9px] rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"></div>
                        </motion.div>
                    </div>

                    {/* Bottom Masonry Grid Container */}
                    <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        {/* Column 1 */}
                        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
                            {leftColumn.map((proj, i) => (
                                <ProjectCard key={`left-${i}`} project={proj} />
                            ))}
                        </div>
                        {/* Column 2 (Offset slightly to mimic masonry pattern perfectly on large screens) */}
                        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 pt-0 md:pt-16">
                            {rightColumn.map((proj, i) => (
                                <ProjectCard key={`right-${i}`} project={proj} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
