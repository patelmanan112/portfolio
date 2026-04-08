import { motion } from 'framer-motion';

const certificates = [
    {
        name: 'RepoReboot Participation',
        issuer: 'IEEE SB DAIICT',
        date: "i.Fest'25",
        image: '/certificates/repo-reboot.png',
        description: 'Awarded for active participation and contribution in the RepoReboot hackathon organized by IEEE SB DAIICT.',
        link: '/certificates/repo-reboot.png'
    },
    {
        name: 'HTML, CSS & JavaScript Quiz',
        issuer: 'HRCalcy',
        grade: 'Grade A++',
        date: 'Feb 2026',
        image: '/certificates/html-quiz.png',
        description: 'Achieved Grade A++ in the HTML, CSS, and JavaScript certification quiz by HRCalcy.',
        link: '/certificates/html-quiz.png'
    },
    {
        name: 'DAIICT Certificate',
        issuer: 'DAIICT',
        date: '2025',
        image: '',
        description: 'Recognition of achievement/participation from DAIICT for technical excellence.',
        link: '/certificates/daiict-certificate.pdf'
    },
    {
        name: 'Dev-Heat Certification',
        issuer: 'Dev-Heat',
        date: '2025',
        image: '',
        description: 'Achieved certification for exceptional performance in the Dev-Heat event.',
        link: '/certificates/dev-heat-certificate.pdf'
    },
    {
        name: 'IIIT Pune Certificate',
        issuer: 'IIIT Pune',
        date: '2025',
        image: '',
        description: 'Certified recognition from IIIT Pune for participation in academic and technical events.',
        link: '/certificates/iiit-pune-certificate.pdf'
    },
    {
        name: 'SU Hackathon',
        issuer: 'SU_Hackathon',
        date: '2025',
        image: '/certificates/su_hackathon.jpeg',
        description: 'Participation in the SU Hackathon, showcasing innovative problem-solving and software development skills.',
        link: '/certificates/su_hackathon.jpeg'
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 bg-gray-100 dark:bg-primary border-t dark:border-white/5 border-gray-200 overflow-hidden">
            <style>
                {`
                .flip-card {
                    background-color: transparent;
                    perspective: 1000px;
                }
                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                }
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    border-radius: 0.75rem;
                }
                .flip-card-back {
                    transform: rotateY(180deg);
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center mb-16 text-center">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">Recognition</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flip-card aspect-video w-full h-[280px]"
                        >
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front bg-[#f9f9f9] dark:bg-secondary border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden flex flex-col">
                                    <div className="h-2/3 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-white/10">
                                        <img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4 flex-grow flex flex-col justify-center">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">{cert.name}</h3>
                                        <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 text-xs font-mono mt-2">
                                            <span>{cert.issuer}</span>
                                            <span>{cert.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="flip-card-back bg-white dark:bg-secondary border border-gray-200 dark:border-white/10 shadow-md p-6 flex flex-col justify-center items-center text-center">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{cert.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-4">
                                        {cert.description}
                                    </p>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-2 bg-amber-500 hover:bg-amber-600 dark:bg-accent dark:hover:bg-accent/80 text-white text-sm font-bold rounded-full transition-colors"
                                    >
                                        View Certificate
                                    </a>
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
