import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

const projects = [
    {
        title: 'American Tourister Clone',
        category: 'E-commerce Redesign',
        description: 'A responsive clone of the American Tourister website featuring modern product showcases and smooth navigation.',
        tech: 'HTML/CSS/JS',
        image: 'https://img.youtube.com/vi/gFGsAYsIduE/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-1',
        live: 'https://american-tourister-clone.netlify.app/',
        youtube: 'https://youtu.be/gFGsAYsIduE'
    },
    {
        title: 'Indigo Airlines Clone',
        category: 'Travel Booking UI',
        description: 'A detailed replica of the Indigo Airlines flight booking interface, focusing on accessibility and layout precision.',
        tech: 'HTML/CSS/JS',
        image: 'https://img.youtube.com/vi/TVOr_8JVKjY/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-2',
        live: 'https://goindigo-clone.netlify.app/',
        youtube: 'https://youtu.be/TVOr_8JVKjY'
    },
    {
        title: 'Nooe Design Clone',
        category: 'Aesthetic Landing Page',
        description: 'A pixel-perfect implementation of the Nøoe design specifically crafting high-end visual interactions.',
        tech: 'GSAP / Animations',
        image: 'https://img.youtube.com/vi/lwISCTx0ZrI/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-3',
        live: 'https://nooe-clone.netlify.app/',
        youtube: 'https://youtu.be/lwISCTx0ZrI'
    },
    {
        title: 'Chainlink Clone',
        category: 'Web3 Interface',
        description: 'Clone of the Chainlink homepage, demonstrating bold typography and complex grid layouts used in Web3 sites.',
        tech: 'React / Tailwind',
        image: 'https://img.youtube.com/vi/KmjeWpQ4sDo/maxresdefault.jpg',
        year: '2024',
        github: 'https://github.com/patelmanan112/Website/tree/main/website-4',
        live: 'https://chainlink-clone.netlify.app/',
        youtube: 'https://youtu.be/KmjeWpQ4sDo'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative w-full h-[500px] md:h-[600px] overflow-hidden border-b border-white/10 hover-trigger cursor-none"
        >
            {/* Content Container */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-12 transition-all duration-500 group-hover:translate-x-4">
                <div className="flex justify-end items-start font-mono">
                    <span className="text-sm text-gray-400 dark:text-white/60 border border-gray-300 dark:border-white/20 px-3 py-1 rounded-full backdrop-blur-md">{project.tech}</span>
                </div>

                <div className="max-w-2xl transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm dark:drop-shadow-lg">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-medium">
                        {project.description}
                    </p>
                </div>
            </div>

            {/* Background Image / Thumbnail */}
            <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

            {/* Action Buttons */}
            <div className="absolute bottom-12 right-12 z-30 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-200">
                <a href={project.github} target="_blank" rel="noreferrer" title="View Code" className="bg-white/10 backdrop-blur-md text-white p-4 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110">
                    <FaGithub size={20} />
                </a>
                <a href={project.youtube} target="_blank" rel="noreferrer" title="Watch Demo" className="bg-red-600 text-white p-4 rounded-full hover:bg-red-500 transition-all hover:scale-110">
                    <FaYoutube size={20} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" title="Live Site" className="bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-all hover:scale-110">
                    <FaExternalLinkAlt size={20} />
                </a>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-gray-100 dark:bg-secondary relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20 border-b border-gray-200 dark:border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-4"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">Selected Works</h2>
                    <span className="text-gray-500 dark:text-gray-400 font-mono text-sm max-w-sm text-right">
                        Collection of clones and experiments highlighting precision and attention to detail.
                    </span>
                </motion.div>

                <div className="flex flex-col gap-0 border-t border-white/10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
