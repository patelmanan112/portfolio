import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FiSearch, FiX, FiCalendar, FiExternalLink, FiAward } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';

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
        name: 'Walmart Forge',
        issuer: 'Walmart',
        date: '2026',
        image: '/certificates/walmart-forge_page-0001.jpg',
        description: 'Walmart Forge certification for completing the tech accelerator program focused on practical skills and industry exposure.',
        link: '/certificates/walmart-forge_page-0001.jpg'
    },
    {
        name: 'GenAI Powered Data Analytics',
        issuer: 'Analytics Vidhya',
        date: '2026',
        image: '/certificates/GenAI Powered Data Analytics.jpg',
        description: 'Completed comprehensive training on GenAI-powered data analytics, mastering AI-driven insights and visualization techniques.',
        link: '/certificates/GenAI Powered Data Analytics.jpg'
    },
    {
        name: 'DAIICT Certificate',
        issuer: 'DAIICT',
        date: '2025',
        image: '/certificates/daiict-certificate_page-0001.jpg',
        description: 'Recognition of achievement/participation from DAIICT for technical excellence.',
        link: '/certificates/daiict-certificate_page-0001.jpg'
    },
    {
        name: 'Dev-Heat Certification',
        issuer: 'Dev-Heat',
        date: '2026',
        image: '/certificates/dev-heat-certificate_page-0001.jpg',
        description: 'Achieved certification for exceptional performance in the Dev-Heat event.',
        link: '/certificates/dev-heat-certificate_page-0001.jpg'
    },
    {
        name: 'IIIT Pune Certificate',
        issuer: 'IIIT Pune',
        date: '2026',
        image: '/certificates/iiit-pune-certificate_page-0001.jpg',
        description: 'Certified recognition from IIIT Pune for participation in academic and technical events.',
        link: '/certificates/iiit-pune-certificate_page-0001.jpg'
    },
    {
        name: 'SU Hackathon',
        issuer: 'SU_Hackathon',
        date: '2026',
        image: '/certificates/su_hackathon.jpeg',
        description: '1st Place - Participation in the SU Hackathon, showcasing innovative problem-solving and software development skills.',
        link: '/certificates/su_hackathon.jpeg'
    },
    {
        name: 'GU Hackathon',
        issuer: 'Ganpat University',
        date: '2026',
        image: '/certificates/certificate_GUNI.jpeg',
        description: '2nd Place - Clinched 2nd at Ganpat University with a cutting-edge project that impressed judges across design, usability, and technical depth.',
        link: '/certificates/certificate_GUNI.jpeg'
    }
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedCert]);

    return (
        <>
            <Helmet>
                <title>Certifications & Achievements | Manan</title>
                <meta name='description' content='Browse certifications and achievements earned by Manan, demonstrating continuous learning, technical expertise, and commitment to professional growth in software development.' />
                <meta name='keywords' content='MANAN PATEL | SOFTWARE ENGINEER | Projects, React, Node.js, MongoDB, Full Stack Development, Problem-Solving, Modern Web Technologies' />
                <meta name='author' content='Manan Patel' />
            </Helmet>
            
            <section id="certificates" className="py-20 bg-gray-50 dark:bg-primary border-t dark:border-white/5 border-gray-200 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <span className="text-sm font-bold text-blue-600 dark:text-[#4d82f7] uppercase tracking-widest mb-2">Recognition</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {certificates.map((cert, index) => {
                            // Some items don't have images in the data, adding a fallback placeholder visual
                            const hasImage = cert.image && !cert.image.endsWith('.pdf');
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="hover-trigger cursor-none group flex flex-col bg-white dark:bg-[#0f1115] border border-gray-200 dark:border-white/10 rounded-[20px] overflow-hidden hover:shadow-2xl transition-all duration-300"
                                    onClick={() => setSelectedCert(cert)}
                                >
                                    <div className="p-5">
                                        <div className="w-full aspect-[4/3] rounded-[12px] overflow-hidden bg-gray-100 dark:bg-[#1a1c23] border border-gray-200 dark:border-white/5 relative group-hover:border-blue-500/30 transition-colors duration-300">
                                            {hasImage ? (
                                                <img 
                                                    src={cert.image} 
                                                    alt={cert.name} 
                                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                                                />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-700">
                                                    <FiAward size={48} className="mb-2 opacity-50" />
                                                    <span className="text-sm font-semibold truncate w-full">{cert.name}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="px-6 pb-6 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start gap-4 mb-2">
                                            <h3 className="text-[22px] font-bold text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-[#4d82f7] transition-colors duration-300">
                                                {cert.name}
                                            </h3>
                                            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#1a1c23] px-2.5 py-1 rounded-md whitespace-nowrap mt-1">
                                                {cert.date}
                                            </span>
                                        </div>
                                        
                                        <p className="text-[11px] font-bold text-blue-600 dark:text-[#4d82f7] uppercase tracking-widest mb-4">
                                            {cert.issuer}
                                        </p>
                                        
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow leading-relaxed">
                                            {cert.description}
                                        </p>
                                        
                                        <div className="flex justify-between items-center mt-auto pt-5 border-t border-gray-100 dark:border-white/5">
                                            <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                                Digital Credential
                                            </span>
                                            <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-[#1a1c23] text-gray-500 dark:text-gray-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-[#4d82f7] dark:group-hover:text-white shadow-sm group-hover:shadow-blue-500/25 transition-all duration-300">
                                                <FiSearch size={15} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
                    >
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
                            onClick={() => setSelectedCert(null)}
                        ></div>
                        
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full max-w-6xl bg-white dark:bg-[#0f1115] rounded-[2rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[95vh] md:max-h-[85vh] border border-gray-200 dark:border-white/10"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setSelectedCert(null)}
                                className="hover-trigger cursor-none absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 bg-gray-200/80 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 dark:text-white transition-colors"
                            >
                                <FiX size={20} />
                            </button>
                            
                            {/* Left side - Certificate Image */}
                            <div className="w-full md:w-1/2 bg-gray-100 dark:bg-[#15171b] border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/5 p-6 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-0 relative">
                                {/* Decorative elements in background of image */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
                                
                                {selectedCert.image && !selectedCert.image.endsWith('.pdf') ? (
                                    <img 
                                        src={selectedCert.image} 
                                        alt={selectedCert.name} 
                                        className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-2xl relative z-10" 
                                    />
                                ) : (
                                    <div className="w-full max-w-md aspect-[4/3] flex flex-col items-center justify-center p-12 text-center text-gray-400 bg-white dark:bg-[#0f1115] rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 relative z-10">
                                        <FiAward size={80} className="mb-6 opacity-30" />
                                        <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">{selectedCert.name}</h3>
                                        <p className="text-gray-500">Document available via external link</p>
                                    </div>
                                )}
                            </div>
                            
                            {/* Right side - Certificate Details */}
                            <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center overflow-y-auto">
                                <div className="flex items-center gap-2 mb-4">
                                    <FiAward className="text-blue-600 dark:text-[#4d82f7]" size={20} />
                                    <span className="text-sm font-bold text-blue-600 dark:text-[#4d82f7] uppercase tracking-widest">{selectedCert.issuer}</span>
                                </div>
                                
                                <h2 className="text-3xl md:text-[44px] font-extrabold text-gray-900 dark:text-white mb-10 leading-[1.1] tracking-tight">
                                    {selectedCert.name}
                                </h2>
                                
                                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-10">
                                    <div>
                                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Issue Date</p>
                                        <div className="flex items-center gap-2 text-gray-900 dark:text-white font-semibold text-lg">
                                            <FiCalendar className="text-blue-600 dark:text-[#4d82f7]" />
                                            <span>{selectedCert.date}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Authenticity</p>
                                        <div className="flex items-center gap-2 text-green-600 dark:text-[#22c55e] font-semibold text-lg">
                                            <MdVerified size={20} />
                                            <span>Global Verified</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 dark:text-gray-400 mb-12 text-lg leading-relaxed">
                                    {selectedCert.description}
                                </p>
                                
                                <a 
                                    href={selectedCert.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover-trigger cursor-none inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-[#4d82f7] dark:hover:bg-blue-500 text-white rounded-2xl font-bold transition-all duration-300 w-full sm:w-fit shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
                                >
                                    <span>VERIFY CREDENTIALS</span>
                                    <FiExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Certificates;
