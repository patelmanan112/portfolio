import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Hackathon Data ────────────────────────────────────────────────────────────

const hackathons = [
    {
        id: 'sangam',
        name: 'Sangam University',
        subtitle: 'Bhilwara, Rajasthan',
        year: '2025',
        rank: '1st Place',
        theme: {
            accent: '#f59e0b',
            glow: 'rgba(245,158,11,0.15)',
            badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
            dot: 'bg-amber-400',
            btn: 'hover:border-amber-500/50 hover:text-amber-400 hover:bg-amber-500/10',
        },
        tagline: 'Offline Hackathon · Winner',
        description: 'Secured 1st place by building a scalable full-stack solution under intense time pressure — demonstrating rapid architecture, domain collaboration & compelling pitching.',
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
        name: 'Ganpat University',
        subtitle: 'Mehsana, Gujarat',
        year: '2025',
        rank: '1st Place',
        theme: {
            accent: '#8b5cf6',
            glow: 'rgba(139,92,246,0.15)',
            badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
            dot: 'bg-violet-400',
            btn: 'hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/10',
        },
        tagline: 'Offline Hackathon · Winner',
        description: 'Clinched 1st at Ganpat University with a project that impressed judges across design, usability & technical depth — a showcase of teamwork and production-ready code delivery.',
        photos: [
            { src: '', caption: '🏆 Official Winner Certificate', isCertificate: true, isPending: true },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.04 PM.jpeg', caption: 'Team at Ganpat University' },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.06 PM.jpeg', caption: 'Live Coding Session' },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.09 PM.jpeg', caption: 'Presenting Our Project' },
            { src: '/hackathons/ganpat/WhatsApp Image 2026-04-07 at 3.44.16 PM.jpeg', caption: 'Receiving the Trophy' },
        ],
    },
];

// ─── Small photo-strip carousel inside popup ───────────────────────────────────

const PopupCarousel = ({ photos, theme }) => {
    const [current, setCurrent] = useState(0);
    const [dir, setDir] = useState(1);

    const go = (i) => { setDir(i > current ? 1 : -1); setCurrent(i); };
    const prev = () => { setDir(-1); setCurrent(c => (c === 0 ? photos.length - 1 : c - 1)); };
    const next = () => { setDir(1);  setCurrent(c => (c === photos.length - 1 ? 0 : c + 1)); };

    const photo = photos[current];

    return (
        <div className="flex flex-col h-full">
            {/* Main photo frame */}
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-black group">
                {/* bg glow */}
                <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 80%, ${theme.glow} 0%, transparent 70%)` }} />

                <AnimatePresence custom={dir} mode="wait">
                    <motion.div
                        key={current}
                        custom={dir}
                        initial={{ opacity: 0, x: dir * 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: dir * -50 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        {photo.isPending ? (
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-yellow-500/10 via-black to-yellow-600/5">
                                <div className="text-5xl animate-pulse">🔒</div>
                                <div className="text-center">
                                    <p className="text-yellow-400 font-bold text-base tracking-wide">Certificate Coming Soon</p>
                                    <p className="text-white/30 text-xs font-mono mt-1">Will be updated once received</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-mono border border-yellow-500/30 uppercase tracking-widest">Pending</span>
                            </div>
                        ) : (
                            <>
                                <img
                                    src={photo.src}
                                    alt={photo.caption}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        const fb = e.target.parentNode.querySelector('.fallback-photo');
                                        if (fb) fb.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback */}
                                <div className="fallback-photo absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-[#111]">
                                    <span className="text-5xl">{photo.isCertificate ? '📜' : '📸'}</span>
                                    <span className="text-white/30 text-sm font-mono text-center px-4">{photo.caption}</span>
                                    <span className="text-white/20 text-xs font-mono">Place photo at: {photo.src}</span>
                                </div>
                                {/* Certificate badge */}
                                {photo.isCertificate && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-yellow-400/90 text-black text-xs font-black uppercase tracking-wider shadow-xl flex items-center gap-1.5"
                                    >
                                        🏆 Winner Certificate
                                    </motion.div>
                                )}
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 border border-white/10 text-white transition-all hover:bg-black/90 opacity-0 group-hover:opacity-100">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 border border-white/10 text-white transition-all hover:bg-black/90 opacity-0 group-hover:opacity-100">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </button>

                {/* Slide counter */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-white/60 text-xs font-mono border border-white/10">
                    {current + 1} / {photos.length}
                </div>
            </div>

            {/* Caption */}
            <p className="text-center text-xs font-mono mt-2 mb-2 truncate" style={{ color: theme.accent }}>{photo.caption}</p>

            {/* Thumbnail dots */}
            <div className="flex gap-2 justify-center">
                {photos.map((p, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        title={p.caption}
                        className="relative w-12 h-8 rounded-lg overflow-hidden border-2 transition-all duration-300"
                        style={{ borderColor: i === current ? theme.accent : 'rgba(255,255,255,0.08)', opacity: i === current ? 1 : 0.4 }}
                    >
                        {p.isPending ? (
                            <div className="w-full h-full flex items-center justify-center bg-yellow-500/10 text-yellow-400 text-base">🔒</div>
                        ) : (
                            <img src={p.src} alt={p.caption} className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display='none'; e.target.parentNode.style.background='rgba(255,255,255,0.05)'; }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

// ─── Main Popup ────────────────────────────────────────────────────────────────

const HackathonPopup = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState(0);
    const h = hackathons[activeTab];

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
                onClick={onClose}
            >
                {/* Modal */}
                <motion.div
                    initial={{ scale: 0.93, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.93, opacity: 0, y: 30 }}
                    transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                    className="bg-[#0a0a0a] w-full max-w-5xl rounded-[2rem] border border-white/8 shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden relative"
                    style={{ maxHeight: '92vh' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Dynamic accent glow top */}
                    <div
                        className="absolute top-0 left-0 right-0 h-1 transition-all duration-700"
                        style={{ background: `linear-gradient(90deg, transparent, ${h.theme.accent}, transparent)` }}
                    />

                    <div className="flex flex-col md:flex-row h-full overflow-hidden" style={{ maxHeight: '92vh' }}>

                        {/* ── LEFT: Photo Carousel ──────────────────────────── */}
                        <div className="w-full md:w-[52%] h-64 md:h-auto p-5 md:p-6 flex flex-col bg-black/40 border-b md:border-b-0 md:border-r border-white/5 overflow-hidden">
                            <PopupCarousel key={activeTab} photos={h.photos} theme={h.theme} />
                        </div>

                        {/* ── RIGHT: Info ───────────────────────────────────── */}
                        <div className="w-full md:w-[48%] flex flex-col p-6 md:p-10 overflow-y-auto relative bg-gradient-to-b from-[#0f0f0f] to-[#080808]">
                            {/* Close button */}
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ delay: 0.4 }}
                                onClick={onClose}
                                className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/40 hover:text-white transition-all group"
                            >
                                <svg className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </motion.button>

                            {/* Tab switcher */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-2 mb-8 mt-2"
                            >
                                {hackathons.map((hack, i) => (
                                    <button
                                        key={hack.id}
                                        onClick={() => setActiveTab(i)}
                                        className="relative flex-1 px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border"
                                        style={{
                                            background: activeTab === i ? `${hack.theme.accent}18` : 'rgba(255,255,255,0.03)',
                                            borderColor: activeTab === i ? `${hack.theme.accent}50` : 'rgba(255,255,255,0.06)',
                                            color: activeTab === i ? hack.theme.accent : 'rgba(255,255,255,0.35)',
                                        }}
                                    >
                                        {i === 0 ? 'SU Hackathon' : 'GU Hackathon'}
                                        {activeTab === i && (
                                            <motion.div
                                                layoutId="tab-indicator"
                                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                                                style={{ background: hack.theme.accent }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </motion.div>

                            {/* Content with AnimatePresence for smooth tab switch */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-6 flex-1"
                                >
                                    {/* Badge */}
                                    <div className={`inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border ${h.theme.badge}`}>
                                        <span className={`w-2 h-2 rounded-full ${h.theme.dot} animate-pulse`} />
                                        {h.tagline}
                                    </div>

                                    {/* Title block */}
                                    <div>
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight">
                                            {h.name}
                                        </h2>
                                        <p className="text-white/30 font-mono text-sm mt-1">{h.subtitle} · {h.year}</p>
                                    </div>

                                    {/* Rank badge */}
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">🏆</span>
                                        <div>
                                            <div className="text-white font-bold text-lg leading-none">{h.rank}</div>
                                            <div className="text-white/30 text-xs font-mono mt-0.5">Offline Hackathon</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-white/55 text-sm md:text-base leading-relaxed">{h.description}</p>

                                    {/* Spacer */}
                                    <div className="flex-1" />

                                    {/* CTA Button */}
                                    <button
                                        onClick={onClose}
                                        className={`relative group w-full inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 bg-white/4 border border-white/10 rounded-full overflow-hidden ${h.theme.btn} focus:outline-none`}
                                    >
                                        <span className="relative z-10 flex items-center gap-3 text-sm uppercase tracking-widest font-mono transition-all duration-300 group-hover:gap-5">
                                            Continue to Portfolio
                                            <svg className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                            </svg>
                                        </span>
                                    </button>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default HackathonPopup;
