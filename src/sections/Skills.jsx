import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostman, SiNetlify, SiRender, SiExpress, SiNextdotjs } from 'react-icons/si';

const skillCategories = [
    {
        title: 'Frontend Development',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB', level: 90 },
            { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF', level: 85 },
            { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 95 },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 80 },
            { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
            { name: 'CSS3', icon: FaCss3, color: '#1572B6', level: 90 },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
        ]
    },
    {
        title: 'Backend & Database',
        skills: [
            { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
            { name: 'Express', icon: SiExpress, color: '#FFFFFF', level: 85 },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
        ]
    },
    {
        title: 'Tools & Deployment',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
            { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 80 },
            { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', level: 80 },
            { name: 'Render', icon: SiRender, color: '#46E3B7', level: 75 },
        ]
    }
];

const SkillCard = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05, duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ y: -5, scale: 1.05 }}
        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover-trigger cursor-default overflow-hidden"
    >
        {/* Animated glow */}
        <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
                background: `radial-gradient(circle at top left, ${skill.color}30, transparent 70%)`,
            }}
        />

        <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
                <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    style={{ backgroundColor: `${skill.color}20`, boxShadow: `0 4px 20px ${skill.color}20` }}
                >
                    <skill.icon className="text-3xl" style={{ color: skill.color }} />
                </div>
                <div className="flex-1">
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{skill.name}</h3>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{
                                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                                }}
                            />
                        </div>
                        <span className="text-xs font-mono text-gray-400 min-w-[35px]">{skill.level}%</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity">
            <div
                className="w-full h-full"
                style={{
                    background: `radial-gradient(circle at top right, ${skill.color}, transparent 70%)`
                }}
            />
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-white dark:bg-secondary relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[150px] animate-blob" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[150px] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block text-sm font-mono text-blue-400 uppercase tracking-[0.3em] mb-4 px-4 py-2 border border-blue-400/30 rounded-full"
                    >
                        Technical Arsenal
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Skills
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Comprehensive expertise across modern web development technologies
                    </motion.p>
                </div>

                {/* Skills Grid by Category */}
                <div className="space-y-16">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1, duration: 0.6 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pl-4 border-l-4 border-blue-500">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {category.skills.map((skill, index) => (
                                    <SkillCard key={skill.name} skill={skill} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
