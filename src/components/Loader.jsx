import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 600); // Hold briefly at 100%
                    return 100;
                }
                const increment = Math.floor(Math.random() * 4) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 30); 

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ clipPath: 'inset(100% 0 0 0)' }} // Elegant vertical wipe-out effect
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-16 bg-[#0a0a0a] text-white overflow-hidden pointer-events-none"
        >
            {/* Top Section */}
            <div className="flex justify-between items-start w-full">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xs md:text-sm font-mono tracking-widest uppercase text-gray-500"
                >
                    Loading Experience
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-xs md:text-sm font-mono tracking-widest text-gray-500"
                >
                    Est. wait {'< 2s'}
                </motion.div>
            </div>

            {/* Center Section: Huge Premium Logo filling up */}
            <div className="flex-1 flex items-center justify-center relative w-full h-full">
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-[30vw] md:text-[25rem] font-black tracking-tighter leading-none"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}
                >
                    MP.
                </motion.h1>
                {/* Solid Fill overlay based on progress */}
                <motion.h1
                    className="text-[30vw] md:text-[25rem] font-black tracking-tighter leading-none absolute text-white"
                    style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
                >
                    MP.
                </motion.h1>
            </div>

            {/* Bottom Section */}
            <div className="flex items-end justify-between w-full pb-4">
                <div className="w-1/3 md:w-1/4">
                    <div className="h-[1px] w-full bg-white/20 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-white transition-all duration-75"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
                
                <div className="flex items-baseline overflow-hidden">
                    <motion.span 
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-light tabular-nums tracking-tighter"
                    >
                        {progress}
                    </motion.span>
                    <span className="text-xl md:text-2xl text-gray-500 ml-2 font-mono">%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
