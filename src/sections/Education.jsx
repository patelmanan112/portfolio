import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBook } from 'react-icons/fa';

const education = [
    {
        school: 'Swaminarayan University',
        degree: 'Bachelor of Technology',
        field: 'Computer Science',
        date: '2025 - 2029',
        location: 'Kalol, Gujarat',
        status: 'Pursuing',
        description: 'Focused on modern web technologies, software engineering practices, and full-stack development',
        color: '#3b82f6'
    },
    {
        school: 'Vidhyadhish Vidhya Sankul',
        degree: 'Higher Secondary',
        field: 'Science Stream',
        date: '2023 - 2025',
        location: 'Bhavnagar, Gujarat',
        status: 'Completed',
        description: 'Strong foundation in Physics, Chemistry, Mathematics and Computer Science',
        color: '#8b5cf6'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-32 bg-white dark:bg-primary relative overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] animate-blob" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-blob animation-delay-2000" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block text-sm font-mono text-blue-400 uppercase tracking-[0.3em] mb-4 px-4 py-2 border border-blue-400/30 rounded-full"
                    >
                        Academic Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        Education
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
                    />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

                    <div className="space-y-24">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 50
                                }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -ml-[7px] z-20">
                                    <div className="w-4 h-4 rounded-full border-4 border-primary bg-white shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
                                </div>

                                {/* Content card */}
                                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="group relative bg-white/40 dark:bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-white/20 transition-all duration-700 overflow-hidden hover-trigger cursor-none shadow-sm hover:shadow-[0_30px_80px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
                                    >
                                        {/* Animated gradient overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                            style={{
                                                background: `radial-gradient(circle at ${index % 2 === 0 ? 'top left' : 'top right'}, ${edu.color}20, transparent 70%)`
                                            }}
                                        />

                                        <div className="relative z-10">
                                            {/* Status badge */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <span
                                                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                                                    style={{
                                                        backgroundColor: `${edu.color}20`,
                                                        color: edu.color,
                                                        border: `1px solid ${edu.color}40`
                                                    }}
                                                >
                                                    {edu.status}
                                                </span>
                                                <span className="text-gray-500 text-sm font-mono">{edu.date}</span>
                                            </div>

                                            {/* School name */}
                                            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                                                {edu.school}
                                            </h3>

                                            {/* Degree */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <FaGraduationCap className="text-xl" style={{ color: edu.color }} />
                                                <div>
                                                    <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{edu.degree}</p>
                                                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.field}</p>
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center gap-2 text-gray-400 mb-4">
                                                <FaMapMarkerAlt className="text-sm" />
                                                <span className="text-sm">{edu.location}</span>
                                            </div>

                                            {/* Description */}
                                            <div className="flex items-start gap-3 mt-6 pt-6 border-t border-white/10">
                                                <FaBook className="text-gray-500 mt-1 shrink-0" />
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{edu.description}</p>
                                            </div>
                                        </div>

                                        {/* Corner accent */}
                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity"
                                            style={{
                                                background: `radial-gradient(circle at top right, ${edu.color}, transparent 70%)`
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
