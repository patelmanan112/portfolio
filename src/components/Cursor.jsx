import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
    // Exact mouse position for the small dot
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring for the outer brackets
    const springConfig = { damping: 22, stiffness: 180 };
    const bracketX = useSpring(cursorX, springConfig);
    const bracketY = useSpring(cursorY, springConfig);

    const [hovered, setHovered] = useState(null); // { width, height }

    useEffect(() => {
        let currentTarget = null;

        const snapToTarget = (el) => {
            const rect = el.getBoundingClientRect();
            bracketX.set(rect.left + rect.width / 2);
            bracketY.set(rect.top + rect.height / 2);
            setHovered({ width: rect.width, height: rect.height });
        };

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (currentTarget) {
                snapToTarget(currentTarget);
            } else {
                bracketX.set(e.clientX);
                bracketY.set(e.clientY);
            }
        };

        const handleMouseOver = (e) => {
            // Prefer closest .hover-trigger ancestor
            const trigger = e.target.closest('.hover-trigger');
            if (trigger && trigger !== currentTarget) {
                currentTarget = trigger;
                snapToTarget(trigger);
                return;
            }
            if (!trigger) {
                // Fall back to native interactive elements
                const native = e.target.closest('a, button, input, textarea, select');
                if (native && native !== currentTarget) {
                    currentTarget = native;
                    snapToTarget(native);
                }
            }
        };

        const handleMouseOut = (e) => {
            const leaving =
                e.target.closest('.hover-trigger') ||
                e.target.closest('a, button, input, textarea, select');
            if (leaving && leaving === currentTarget) {
                // Only release if we truly left the element (not just moved to a child)
                if (!leaving.contains(e.relatedTarget)) {
                    currentTarget = null;
                    setHovered(null);
                }
            }
        };

        const handleScroll = () => {
            if (currentTarget) snapToTarget(currentTarget);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('scroll', handleScroll, true);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, [cursorX, cursorY, bracketX, bracketY]);

    const pad = 14;
    const bracketW = hovered ? hovered.width + pad : 40;
    const bracketH = hovered ? hovered.height + pad : 40;
    const isLocked = !!hovered;

    return (
        <>
            {/* Outer Brackets */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: bracketX,
                    y: bracketY,
                    mixBlendMode: 'difference',
                }}
            >
                <motion.div
                    className="relative"
                    animate={{
                        width: bracketW,
                        height: bracketH,
                        rotate: isLocked ? 0 : 45,
                        opacity: isLocked ? 1 : 0.85,
                    }}
                    transition={{ type: 'spring', stiffness: 160, damping: 22 }}
                    style={{ x: '-50%', y: '-50%' }}
                >
                    {/* Camera-focus corner brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white rounded-tl-sm" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white rounded-tr-sm" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white rounded-bl-sm" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-sm" />
                </motion.div>
            </motion.div>

            {/* Inner dot — always exact mouse position */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    mixBlendMode: 'difference',
                }}
                animate={{ scale: isLocked ? 0.6 : 1 }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
};

export default Cursor;
