import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Data ─────────────────────────────────────────────────────────────────────

const hackathons = [
    {
        id: 'sangam',
        edition: '01',
        name: 'Sangam University',
        shortName: 'SU Hackathon',
        location: 'Bhilwara, Rajasthan',
        year: '2025',
        rank: '1st Place',
        tagline: 'Offline Hackathon Winner',
        color: 'amber',
        gradientFrom: 'from-amber-500/20',
        gradientTo: 'to-yellow-600/5',
        glowColor: 'rgba(245,158,11,0.25)',
        borderColor: 'border-amber-500/30',
        badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        highlight: 'text-amber-400',
        description: 'Secured 1st place at Sangam University Bhilwara by building an innovative full-stack solution under intense pressure. Demonstrated rapid system architecture, cross-domain collaboration, and effective problem pitching to a panel of expert judges.',
        photos: [
            { src: '/hackathons/sangam/WhatsApp Image 2026-04-07 at 3.44.17 PM.jpeg', caption: 'Team at Sangam University' },
            { src: '/hackathons/sangam/WhatsApp Image 2026-04-07 at 3.44.18 PM.jpeg', caption: 'Hackathon Day — Working Session' },
            { src: '/hackathons/sangam/WhatsApp Image 2026-04-07 at 3.44.18 PM (1).jpeg', caption: 'Presentation to Judges' },
            { src: '/hackathons/sangam/WhatsApp Image 2026-04-07 at 3.44.18 PM (2).jpeg', caption: 'Receiving the Trophy' },
            { src: '/hackathons/sangam/photo1.jpeg', caption: 'Winner Award Ceremony' },
        ],
    },
    {
        id: 'ganpat',
        edition: '02',
        name: 'Ganpat University',
        shortName: 'GU Hackathon',
        location: 'Mehsana, Gujarat',
        year: '2025',
        rank: '2nd Place',
        tagline: 'Offline Hackathon Winner',
        color: 'violet',
        gradientFrom: 'from-violet-500/20',
        gradientTo: 'to-purple-700/5',
        glowColor: 'rgba(139,92,246,0.25)',
        borderColor: 'border-violet-500/30',
        badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
        highlight: 'text-violet-400',
        description: 'Clinched 2nd place at Ganpat University Mehsana with a cutting-edge project that impressed judges across design, usability, and technical depth. A testament to teamwork, resilience, and the ability to deliver production-ready code in record time.',
        photos: [
            { src: '/hackathons/ganpat/certificate_GUNI.jpeg', caption: '🏆 Official Winner Certificate', isCertificate: true },
            { src: '/hackathons/ganpat/GUNI_award_video.mp4', caption: 'Award Winning Moment', isVideo: true },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.04 PM.jpeg', caption: 'Team at Ganpat University' },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.09 PM.jpeg', caption: 'Presenting Our Project' },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.16 PM.jpeg', caption: 'Receiving the Trophy' },
        ],
    },
];

// ─── Sub-component: Photo Carousel ────────────────────────────────────────────

const PhotoCarousel = ({ photos, color, highlight, borderColor }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const videoRef = useRef(null);

    const goTo = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };
    const prev = () => { setDirection(-1); setCurrent(c => (c === 0 ? photos.length - 1 : c - 1)); };
    const next = () => { setDirection(1);  setCurrent(c => (c === photos.length - 1 ? 0 : c + 1)); };

    const slide = {
        initial: (d) => ({ opacity: 0, x: d * 60 }),
        animate: { opacity: 1, x: 0 },
        exit: (d) => ({ opacity: 0, x: d * -60 }),
    };

    const photo = photos[current];

    return (
        <div className="flex flex-col gap-3">
            {/* Main Image / Video */}
            <div className={`relative aspect-[4/3] w-full rounded-2xl overflow-hidden border ${borderColor} bg-black/60 group`}>
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={slide}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        {photo.isPending ? (
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-yellow-500/10 via-black/60 to-yellow-600/5">
                                <div className="text-6xl animate-pulse">🔒</div>
                                <div className="text-center">
                                    <p className="text-yellow-400 font-bold text-lg tracking-wide">Certificate Coming Soon</p>
                                    <p className="text-white/30 text-xs font-mono mt-1">Will be updated once received</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-mono border border-yellow-500/30 uppercase tracking-widest">Pending</span>
                            </div>
                        ) : photo.isVideo ? (
                            <>
                                <video
                                    ref={videoRef}
                                    src={photo.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]"></div>
                                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                    ▶ Captured Memory
                                </div>
                            </>
                        ) : (
                            <>
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentNode.classList.add('flex','items-center','justify-center');
                                        const placeholder = e.target.parentNode.querySelector('.img-placeholder');
                                        if (placeholder) placeholder.style.display = 'flex';
                                    }}
                                />
                                <div className="img-placeholder absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-black/40">
                                    <span className="text-5xl">📸</span>
                                    <span className="text-white/40 text-sm font-mono">{photo.caption}</span>
                                    <span className="text-white/20 text-xs font-mono">(Add photo here)</span>
                                </div>
                                {photo.isCertificate && (
                                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/90 text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                                        🏆 Certificate
                                    </div>
                                )}
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Arrow buttons */}
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/10 transition-all opacity-0 group-hover:opacity-100">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>

            {/* Caption */}
            <p className={`text-center text-sm font-mono ${highlight} tracking-wide`}>{photo.caption}</p>

            {/* Thumbnail strip */}
            <div className="flex gap-2 justify-center mt-1">
                {photos.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${i === current ? borderColor.replace('border-', 'border-') + ' scale-105' : 'border-white/10 opacity-50 hover:opacity-80'}`}
                        style={{ borderColor: i === current ? undefined : undefined }}
                    >
                        {p.isPending ? (
                            <div className="w-full h-full flex items-center justify-center bg-yellow-500/10 text-yellow-400 text-lg">🔒</div>
                        ) : p.isVideo ? (
                            <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center relative">
                                <video src={p.src} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                                <span className="relative text-white text-[10px] z-10 px-1.5 py-0.5 rounded bg-blue-500/80 uppercase font-black">Play</span>
                            </div>
                        ) : (
                            <img src={p.src} alt={p.caption} className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display='none'; e.target.parentNode.style.background='rgba(255,255,255,0.05)'; }}
                            />
                        )}
                        {i === current && (
                            <div className="absolute inset-0 border-2 rounded-lg" style={{ borderColor: color === 'amber' ? '#f59e0b' : '#8b5cf6' }} />
                        )}
                    </button>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 justify-center mt-1">
                {photos.map((_, i) => (
                    <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2' : 'w-2 h-2 opacity-40'}`}
                        style={{ background: i === current ? (color === 'amber' ? '#f59e0b' : '#8b5cf6') : 'white' }}
                    />
                ))}
            </div>
        </div>
    );
};

// ─── Main Section ──────────────────────────────────────────────────────────────

const HackathonGallery = () => {
    return (
        <section id="hackathons" className="py-24 bg-[#020202] border-t border-white/5 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-white/50 text-xs font-mono tracking-widest uppercase mb-5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        Offline Hackathon Wins
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                        Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-violet-400">Gallery</span>
                    </h2>
                    <p className="mt-4 text-white/40 text-lg font-light max-w-xl mx-auto">
                        Two offline hackathon victories — built under pressure, won with excellence.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                    {hackathons.map((h, idx) => (
                        <motion.div
                            key={h.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className={`relative rounded-3xl border ${h.borderColor} bg-gradient-to-br ${h.gradientFrom} via-[#0f0f0f] ${h.gradientTo} p-6 md:p-8 overflow-hidden group`}
                        >
                            {/* Corner edition number */}
                            <div className="absolute top-6 right-8 text-7xl font-black text-white/4 select-none leading-none">
                                {h.edition}
                            </div>

                            {/* Glow */}
                            <div
                                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ boxShadow: `inset 0 0 60px ${h.glowColor}` }}
                            />

                            {/* Header info */}
                            <div className="flex items-start justify-between mb-6 relative z-10">
                                <div>
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border mb-3 ${h.badgeColor}`}>
                                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: h.color === 'amber' ? '#f59e0b' : '#8b5cf6' }} />
                                        {h.tagline}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">{h.name}</h3>
                                    <p className="text-white/40 font-mono text-sm mt-1">{h.location} · {h.year}</p>
                                </div>
                                <div className={`text-right shrink-0 ml-4`}>
                                    <div className="text-3xl mb-0.5">🏆</div>
                                    <div className={`text-xs font-bold font-mono uppercase tracking-wider ${h.highlight}`}>{h.rank}</div>
                                </div>
                            </div>

                            {/* Photo Carousel */}
                            <div className="relative z-10 mb-6">
                                <PhotoCarousel photos={h.photos} color={h.color} highlight={h.highlight} borderColor={h.borderColor} />
                            </div>

                            {/* Description */}
                            <p className="text-white/50 text-sm leading-relaxed relative z-10">
                                {h.description}
                            </p>

                            {/* Divider line with label */}
                            <div className="flex items-center gap-3 mt-5 relative z-10">
                                <div className="h-px flex-1 bg-white/5" />
                                <span className={`text-xs font-mono uppercase tracking-widest ${h.highlight} opacity-60`}>{h.shortName}</span>
                                <div className="h-px flex-1 bg-white/5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HackathonGallery;
