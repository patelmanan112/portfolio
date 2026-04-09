import { useEffect, useRef } from 'react';

const Cursor = () => {
    const outerRef = useRef(null);  // bracket wrapper  (positioned)
    const innerRef = useRef(null);  // bracket itself   (sized + rotated)
    const dotRef   = useRef(null);  // dot              (positioned)

    useEffect(() => {
        const outer = outerRef.current;
        const inner = innerRef.current;
        const dot   = dotRef.current;
        if (!outer || !inner || !dot) return;

        /* ── mutable state (never causes re-renders) ─────────────────── */
        const mouse   = { x: -300, y: -300 };   // raw mouse pos
        const lerped  = { x: -300, y: -300 };   // smoothed bracket pos
        const size    = { w: 40,   h: 40   };   // current rendered size
        const tgt     = { cx: -300, cy: -300, w: 40, h: 40 }; // target

        let rotDeg   = 0;
        let locked   = false;
        let lockedEl = null;
        let lastTime = 0;
        let raf;

        const lerp = (a, b, f) => a + (b - a) * f;

        /* ── RAF animation loop ───────────────────────────────────────── */
        const tick = (now) => {
            const dt = lastTime ? Math.min(now - lastTime, 50) : 16;
            lastTime = now;

            /* 1. Dot follows mouse instantly — subtract half its size to centre */
            dot.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`;

            /* 2. Bracket target: element centre or mouse */
            if (locked && lockedEl) {
                const r = lockedEl.getBoundingClientRect();
                tgt.cx = r.left + r.width  / 2;
                tgt.cy = r.top  + r.height / 2;
                tgt.w  = r.width  + 18;
                tgt.h  = r.height + 18;
            } else {
                tgt.cx = mouse.x;
                tgt.cy = mouse.y;
                tgt.w  = 40;
                tgt.h  = 40;
            }

            /* 3. Smooth follow (lerp) */
            const speed = locked ? 0.22 : 0.16;
            lerped.x = lerp(lerped.x, tgt.cx, speed);
            lerped.y = lerp(lerped.y, tgt.cy, speed);
            size.w   = lerp(size.w, tgt.w, 0.13);
            size.h   = lerp(size.h, tgt.h, 0.13);

            /* 4. Rotation: spin when free, snap to 0 when locked */
            if (!locked) {
                rotDeg = (rotDeg + dt * (360 / 1500)) % 360;
            } else {
                rotDeg = lerp(rotDeg, 0, 0.14);
                if (Math.abs(rotDeg) < 0.3) rotDeg = 0;
            }

            /* 5. Apply to DOM — outer positions, inner sizes + rotates */
            outer.style.transform = `translate(${lerped.x}px, ${lerped.y}px)`;
            inner.style.width     = `${size.w}px`;
            inner.style.height    = `${size.h}px`;
            inner.style.transform = `translate(-50%, -50%) rotate(${rotDeg}deg)`;

            raf = requestAnimationFrame(tick);
        };

        /* ── Event listeners ──────────────────────────────────────────── */
        const onMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const onOver = (e) => {
            const el =
                e.target.closest('.hover-trigger') ||
                e.target.closest('a, button, input, textarea, select');
            if (el && el !== lockedEl) {
                lockedEl = el;
                locked   = true;
                rotDeg   = 0; // instant snap
            }
        };

        const onOut = (e) => {
            const el =
                e.target.closest('.hover-trigger') ||
                e.target.closest('a, button, input, textarea, select');
            if (el && el === lockedEl && !el.contains(e.relatedTarget)) {
                lockedEl = null;
                locked   = false;
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
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                style={{ willChange: 'transform' }}
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
                className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
                style={{
                    width:           6,
                    height:          6,
                    borderRadius:   '50%',
                    backgroundColor: 'white',
                    willChange:     'transform',
                    mixBlendMode:   'difference',
                }}
            />
        </>
    );
};

export default Cursor;
