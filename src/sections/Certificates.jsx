import { motion } from 'framer-motion';

const certificates = [
    {
        name: 'RepoReboot Participation',
        issuer: 'IEEE SB DAIICT',
        date: 'i.Fest\'25',
        image: '/certificates/repo-reboot.png'
    },
    {
        name: 'HTML, CSS & JavaScript Quiz',
        issuer: 'HRCalcy',
        grade: 'Grade A++',
        date: 'Feb 2026',
        image: '/certificates/html-quiz.png'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-gray-100 dark:bg-primary border-t dark:border-white/5 border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Recognition</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative bg-white dark:bg-secondary rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover-trigger shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-amber-500 dark:group-hover:text-accent transition-colors">{cert.name}</h3>
                                <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm font-mono mt-2">
                                    <span>{cert.issuer}</span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
