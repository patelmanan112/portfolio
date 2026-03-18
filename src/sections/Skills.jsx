import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostman, SiNetlify, SiRender, SiExpress, SiNextdotjs, SiVercel, SiCplusplus, SiC } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'C', icon: SiC, color: '#A8B9CC' },
            { name: 'C++', icon: SiCplusplus, color: '#00599C' },
            { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        ]
    },
    {
        title: 'Frontend Development',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
            { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
            { name: 'CSS3', icon: FaCss3, color: '#1572B6' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        ]
    },
    {
        title: 'Backend & Database',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        ]
    },
    {
        title: 'Tools & Deployment',
        skills: [
            { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
            { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
            { name: 'Render', icon: SiRender, color: '#46E3B7' },
        ]
    }
];

const SkillCard = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.02, duration: 0.4 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/30 dark:hover:border-white/20 hover:shadow-xl shadow-sm"
    >
        <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${skill.color}10` }}
        >
            <skill.icon className="text-3xl" style={{ color: skill.color }} />
        </div>
        <h3 className="text-slate-900 dark:text-white font-semibold text-sm tracking-tight text-center">
            {skill.name}
        </h3>
        
        {/* Subtle Glow on Hover */}
        <div 
            className="absolute inset-x-0 bottom-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full blur-[1px]"
            style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
        />
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-[#030303]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Simplified Header */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter"
                    >
                        Technical Skills
                    </motion.h2>
                    <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        A comprehensive list of technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.title}>
                            <motion.h3 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 flex items-center gap-4"
                            >
                                {category.title}
                                <div className="h-px bg-slate-200 dark:bg-white/10 flex-1" />
                            </motion.h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6">
                                {category.skills.map((skill, index) => (
                                    <SkillCard key={skill.name} skill={skill} index={index + catIndex * 10} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
