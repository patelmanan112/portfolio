import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Ultra-smooth spring physics
    const springConfig = { damping: 30, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            // Check if element is interactive
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('.hover-trigger') ||
                target.closest('a') ||
                target.closest('button') ||
                target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main cursor circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block border-2 border-white"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    mixBlendMode: 'difference',
                }}
                animate={{
                    scale: isHovered ? 2 : 1,
                    opacity: isHovered ? 0.5 : 1,
                }}
                transition={{
                    scale: { duration: 0.3, ease: "easeOut" },
                    opacity: { duration: 0.3 }
                }}
            />

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    left: '6.25px',
                    top: '6.25px',
                    mixBlendMode: 'difference',
                }}
            />
        </>
    );
};

export default Cursor;
