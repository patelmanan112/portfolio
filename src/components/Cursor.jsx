import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Cursor = () => {
    const location = useLocation();
    const outerRef = useRef(null);  // bracket wrapper  (positioned)
    const innerRef = useRef(null);  // bracket itself   (sized + rotated)
    const dotRef   = useRef(null);  // dot              (positioned)

    // Using a ref for mutable state to survive re-renders and be accessible in the RAF loop
    const state = useRef({
        mouse:   { x: -300, y: -300 },   // raw mouse pos
        lerped:  { x: -300, y: -300 },   // smoothed bracket pos
        size:    { w: 40,   h: 40   },   // current rendered size
        tgt:     { cx: -300, cy: -300, w: 40, h: 40 }, // target
        rotDeg:   0,
        locked:   false,
        lockedEl: null,
        hasMoved: false,
        lastTime: 0
    });

    // Visibility guard: Hide cursor on mount and only show when mouse moves
    // This combined with the snapshot in onMove prevents the "top-left" pop
    useEffect(() => {
        if (outerRef.current) outerRef.current.style.opacity = '0';
        if (dotRef.current) dotRef.current.style.opacity = '0';
    }, []);

    // Reset locked state and force position sync on route change
    useEffect(() => {
        const s = state.current;
        s.locked = false;
        s.lockedEl = null;
    }, [location.pathname]);

    useEffect(() => {
        const outer = outerRef.current;
        const inner = innerRef.current;
        const dot   = dotRef.current;
        if (!outer || !inner || !dot) return;

        const s = state.current;
        let raf;

        const lerp = (a, b, f) => a + (b - a) * f;

        /* ── RAF animation loop ───────────────────────────────────────── */
        const tick = (now) => {
            const dt = s.lastTime ? Math.min(now - s.lastTime, 50) : 16;
            s.lastTime = now;

            // Update Visibility
            if (s.hasMoved) {
                outer.style.opacity = '1';
                dot.style.opacity = '1';
            }

            /* 1. Dot follows mouse instantly — subtract half its size to centre */
            dot.style.transform = `translate(${s.mouse.x - 3}px, ${s.mouse.y - 3}px)`;

            /* 2. Bracket target: element centre or mouse */
            if (s.locked && s.lockedEl) {
                // If element was unmounted (e.g. on page change), break the lock
                if (!s.lockedEl.isConnected) {
                    s.locked   = false;
                    s.lockedEl = null;
                    s.tgt.cx   = s.mouse.x;
                    s.tgt.cy   = s.mouse.y;
                    s.tgt.w    = 40;
                    s.tgt.h    = 40;
                } else {
                    const r = s.lockedEl.getBoundingClientRect();
                    // If element has no size (hidden during transition), break lock
                    if (r.width === 0 && r.height === 0) {
                        s.locked = false;
                        s.lockedEl = null;
                        s.tgt.cx = s.mouse.x;
                        s.tgt.cy = s.mouse.y;
                    } else {
                        s.tgt.cx = r.left + r.width  / 2;
                        s.tgt.cy = r.top  + r.height / 2;
                        s.tgt.w  = r.width  + 18;
                        s.tgt.h  = r.height + 18;
                    }
                }
            } 
            
            if (!s.locked) {
                s.tgt.cx = s.mouse.x;
                s.tgt.cy = s.mouse.y;
                s.tgt.w  = 40;
                s.tgt.h  = 40;
            }

            /* 3. Smooth follow (lerp) */
            const speed = s.locked ? 0.22 : 0.16;
            s.lerped.x = lerp(s.lerped.x, s.tgt.cx, speed);
            s.lerped.y = lerp(s.lerped.y, s.tgt.cy, speed);
            s.size.w   = lerp(s.size.w, s.tgt.w, 0.13);
            s.size.h   = lerp(s.size.h, s.tgt.h, 0.13);

            /* 4. Rotation: spin when free, snap to 0 when locked */
            if (!s.locked) {
                s.rotDeg = (s.rotDeg + dt * (360 / 1500)) % 360;
            } else {
                s.rotDeg = lerp(s.rotDeg, 0, 0.14);
                if (Math.abs(s.rotDeg) < 0.3) s.rotDeg = 0;
            }

            /* 5. Apply to DOM — outer positions, inner sizes + rotates */
            outer.style.transform = `translate(${s.lerped.x}px, ${s.lerped.y}px)`;
            inner.style.width     = `${s.size.w}px`;
            inner.style.height    = `${s.size.h}px`;
            inner.style.transform = `translate(-50%, -50%) rotate(${s.rotDeg}deg)`;

            raf = requestAnimationFrame(tick);
        };

        /* ── Event listeners ──────────────────────────────────────────── */
        const onMove = (e) => {
            if (!s.hasMoved) {
                s.hasMoved = true;
                // Instant sync on first movement to prevent drift from initial -300 pos
                s.lerped.x = e.clientX;
                s.lerped.y = e.clientY;
                s.tgt.cx   = e.clientX;
                s.tgt.cy   = e.clientY;
            }
            s.mouse.x = e.clientX;
            s.mouse.y = e.clientY;
        };

        const onOver = (e) => {
            const el =
                e.target.closest('.hover-trigger') ||
                e.target.closest('a, button, input, textarea, select');
            if (el && el !== s.lockedEl) {
                s.lockedEl = el;
                s.locked   = true;
                s.rotDeg   = 0; // instant snap
            }
        };

        const onOut = (e) => {
            const el =
                e.target.closest('.hover-trigger') ||
                e.target.closest('a, button, input, textarea, select');
            if (el && el === s.lockedEl && !el.contains(e.relatedTarget)) {
                s.lockedEl = null;
                s.locked   = false;
            }
        };

        /* ── Start ────────────────────────────────────────────────────── */
        raf = requestAnimationFrame(tick);
        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mouseover', onOver);
        window.addEventListener('mouseout',  onOut);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onOver);
            window.removeEventListener('mouseout',  onOut);
        };
    }, []);

    /* Corner bracket arm length */
    const A = 10; // px

    return (
        <>
            {/* ── Bracket ───────────────────────────────────────────────── */}
            <div
                ref={outerRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block opacity-0"
                style={{ willChange: 'transform, opacity', transition: 'opacity 0.3s ease' }}
            >
                <div
                    ref={innerRef}
                    style={{
                        position:   'absolute',
                        top:         0,
                        left:        0,
                        width:       40,
                        height:      40,
                        willChange: 'transform, width, height',
                    }}
                >
                    {/* Top-left */}
                    <div style={{ position:'absolute', top:0, left:0,
                        width:A, height:A,
                        borderTop:'2px solid white', borderLeft:'2px solid white' }} />
                    {/* Top-right */}
                    <div style={{ position:'absolute', top:0, right:0,
                        width:A, height:A,
                        borderTop:'2px solid white', borderRight:'2px solid white' }} />
                    {/* Bottom-left */}
                    <div style={{ position:'absolute', bottom:0, left:0,
                        width:A, height:A,
                        borderBottom:'2px solid white', borderLeft:'2px solid white' }} />
                    {/* Bottom-right */}
                    <div style={{ position:'absolute', bottom:0, right:0,
                        width:A, height:A,
                        borderBottom:'2px solid white', borderRight:'2px solid white' }} />
                </div>
            </div>

            {/* ── Dot (always exactly on the pointer) ───────────────────── */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block opacity-0"
                style={{
                    width:           6,
                    height:          6,
                    borderRadius:   '50%',
                    backgroundColor: 'white',
                    willChange:     'transform, opacity',
                    mixBlendMode:   'difference',
                    transition:     'opacity 0.3s ease',
                }}
            />
        </>
    );
};

export default Cursor;
