import { useEffect, useRef } from 'react';

// ─── Premium Molar SVG ────────────────────────────────────────────────────────
const ToothSVG = ({ id = 'a' }) => (
  <svg viewBox="0 0 54 66" fill="none" xmlns="http://www.w3.org/2000/svg" width="54" height="66" style={{ display: 'block' }}>
    <defs>
      {/* Pearlescent body — white → ice-blue */}
      <radialGradient id={`body-${id}`} cx="38%" cy="24%" r="72%">
        <stop offset="0%"   stopColor="#FFFFFF" />
        <stop offset="30%"  stopColor="#F4FBFF" />
        <stop offset="65%"  stopColor="#D6EDFF" />
        <stop offset="100%" stopColor="#ACCBFF" />
      </radialGradient>

      {/* Primary big gloss highlight */}
      <radialGradient id={`g1-${id}`} cx="26%" cy="18%" r="48%">
        <stop offset="0%"   stopColor="rgba(255,255,255,1)"   />
        <stop offset="45%"  stopColor="rgba(255,255,255,0.55)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)"   />
      </radialGradient>

      {/* Secondary small gloss — upper right */}
      <radialGradient id={`g2-${id}`} cx="78%" cy="14%" r="30%">
        <stop offset="0%"   stopColor="rgba(255,255,255,0.85)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)"    />
      </radialGradient>

      {/* Root gradient */}
      <linearGradient id={`root-${id}`} x1="0%" y1="0%" x2="10%" y2="100%">
        <stop offset="0%"   stopColor="#C4DEFF" />
        <stop offset="100%" stopColor="#8BADD8" />
      </linearGradient>

      {/* Cusp top glow */}
      <radialGradient id={`cusp-${id}`} cx="50%" cy="30%" r="60%">
        <stop offset="0%"   stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E8F4FF" />
      </radialGradient>

      {/* Drop shadow / depth */}
      <filter id={`sh-${id}`} x="-28%" y="-18%" width="156%" height="148%">
        <feDropShadow dx="0" dy="3.5" stdDeviation="3.5" floodColor="rgba(20,90,230,0.38)" />
      </filter>

      {/* Blue outer glow (activated on hover) */}
      <filter id={`glow-${id}`} x="-40%" y="-32%" width="180%" height="164%">
        <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#4FC3F7" floodOpacity="0.9" />
        <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#38B2F0" floodOpacity="0.45" />
      </filter>
    </defs>

    {/* ── Roots ── */}
    <path
      d="M19,47 C18,53 16,59 13,64 C12,66 15,67 16.5,65 C18.5,61 19.5,54 21,48 Z"
      fill={`url(#root-${id})`} stroke="#A2BEDD" strokeWidth="0.6"
    />
    <path
      d="M35,47 C36,53 38,59 41,64 C42,66 39,67 37.5,65 C35.5,61 34.5,54 33,48 Z"
      fill={`url(#root-${id})`} stroke="#A2BEDD" strokeWidth="0.6"
    />

    {/* ── Crown body ── */}
    <path
      d="
        M10,35
        C9,27 8.5,20 11,13
        C12.5,8 15.5,5 18,3
        C19,1 20.5,0 22,0
        C23,0 24,1 25,3
        C26,1 27.5,0 29,0
        C31,0 32.5,2 33.5,4
        C36.5,6 39,10 40.5,15
        C42.5,21 42,29 40.5,35
        C39,40.5 36,45 32,47.5
        C30,48.5 28,49 27,49
        C26,49 24,48.5 22,47.5
        C18,45 15,40.5 10,35 Z
      "
      fill={`url(#body-${id})`}
      stroke="#BDD2F0"
      strokeWidth="1"
      filter={`url(#sh-${id})`}
    />

    {/* ── Cusps (3 rounded bumps on top) ── */}
    <ellipse cx="18"   cy="3.5" rx="5"   ry="5"   fill={`url(#cusp-${id})`} opacity="0.95" />
    <ellipse cx="27"   cy="1.5" rx="4.2" ry="4.2" fill={`url(#cusp-${id})`} opacity="0.93" />
    <ellipse cx="36"   cy="3.5" rx="5"   ry="5"   fill={`url(#cusp-${id})`} opacity="0.95" />

    {/* ── Main large gloss highlight ── */}
    <ellipse
      cx="19" cy="18" rx="6.5" ry="12"
      fill={`url(#g1-${id})`} opacity="0.88"
      transform="rotate(-13 19 18)"
    />

    {/* ── Small secondary gloss (top-right) ── */}
    <ellipse
      cx="36" cy="10" rx="4" ry="5.5"
      fill={`url(#g2-${id})`} opacity="0.72"
      transform="rotate(10 36 10)"
    />

    {/* ── Shine streak (diagonal) ── */}
    <line
      x1="14" y1="7" x2="24" y2="34"
      stroke="rgba(255,255,255,0.38)" strokeWidth="4" strokeLinecap="round"
    />

    {/* ── Vertical fissure groove ── */}
    <path
      d="M27,11 C25,17 24,23 27,29 C30,23 29,17 27,11"
      stroke="#A8C4E8" strokeWidth="1.2" fill="none" opacity="0.65"
    />
    {/* ── Horizontal occlusal groove ── */}
    <path
      d="M17,23 Q22,25.5 27,23 Q32,20.5 37,23"
      stroke="#A8C4E8" strokeWidth="0.85" fill="none" opacity="0.5"
    />

    {/* ── Bottom rim highlight (light at base of crown) ── */}
    <path
      d="M16,44 Q27,47 38,44"
      stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round"
    />
  </svg>
);

// ─── 4-pointed Star Sparkle ───────────────────────────────────────────────────
const STAR_SVG = (color, size) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0 L11.8 8.2 L20 10 L11.8 11.8 L10 20 L8.2 11.8 L0 10 L8.2 8.2 Z"
      fill="${color}" filter="url(#sf)"/>
    <defs><filter id="sf"><feGaussianBlur stdDeviation="0.6"/></filter></defs>
  </svg>`;

// ─── Main Component ───────────────────────────────────────────────────────────
const ToothCursor = () => {
  const toothRef = useRef(null);
  const ringRef  = useRef(null);
  const dotRef   = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    // ── Global styles ──
    const styleEl = document.createElement('style');
    styleEl.id = 'tooth-cursor-styles';
    styleEl.textContent = `
      *, *::before, *::after { cursor: none !important; }

      #tc-ring {
        border: 2px solid rgba(79, 195, 247, 0.55);
        border-radius: 50%;
        background: rgba(79, 195, 247, 0.05);
        transition: width 0.25s cubic-bezier(0.23,1,0.32,1),
                    height 0.25s cubic-bezier(0.23,1,0.32,1),
                    border-color 0.2s,
                    background 0.2s,
                    opacity 0.2s;
      }

      @keyframes ringPulse {
        0%, 100% { transform: translate(-50%,-50%) scale(1);   opacity: 0.6; }
        50%       { transform: translate(-50%,-50%) scale(1.18); opacity: 0.3; }
      }

      @keyframes starPop {
        0%   { opacity: 1;  transform: translate(-50%,-50%) scale(1.4) rotate(0deg);   }
        100% { opacity: 0;  transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0) rotate(180deg); }
      }

      @keyframes toothFloat {
        0%, 100% { margin-top: 0px; }
        50%       { margin-top: -3px; }
      }

      #tc-tooth-wrap {
        animation: toothFloat 3.2s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleEl);

    // ── State ──
    let mx = -400, my = -400;
    let cx = -400, cy = -400;   // tooth position
    let rx = -400, ry = -400;   // ring position
    let tx = -400, ty = -400;   // trail position
    let hovering = false, clicking = false;
    let rafId;

    const INTERACTIVE = 'a,button,input,select,textarea,label,[role="button"],.btn,.purpose-btn,.submit-btn,.card,.card-service';

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      // Update dot instantly (no lag)
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top  = `${my}px`;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      hovering = !!(el && el.closest(INTERACTIVE));
    };

    const onDown = () => {
      clicking = true;
      // Burst sparkles on click
      for (let i = 0; i < 5; i++) setTimeout(() => spawnStar(), i * 60);
    };
    const onUp = () => { clicking = false; };

    // ── Star spawner ──
    const spawnStar = () => {
      if (cx < 0) return;
      const el    = document.createElement('div');
      const sz    = Math.random() * 10 + 7;
      const ang   = Math.random() * Math.PI * 2;
      const dist  = Math.random() * 30 + 16;
      const color = Math.random() > 0.45 ? '#FFFFFF' : (Math.random() > 0.5 ? '#7DD3FC' : '#BAE6FD');

      el.innerHTML = STAR_SVG(color, sz);
      el.style.cssText = `
        position:fixed;
        left:${cx}px; top:${cy}px;
        width:${sz}px; height:${sz}px;
        pointer-events:none;
        z-index:999995;
        animation: starPop 0.72s ease-out forwards;
        --tx:${(Math.cos(ang)*dist).toFixed(1)}px;
        --ty:${(Math.sin(ang)*dist).toFixed(1)}px;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 800);
    };

    // Random idle sparkles
    const sparkleTimer = setInterval(() => {
      if (Math.random() < 0.5 && mx > 0) spawnStar();
    }, 950);

    // ── RAF loop ──
    const tick = () => {
      cx += (mx - cx) * 0.13;
      cy += (my - cy) * 0.13;
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      tx += (mx - tx) * 0.06;
      ty += (my - ty) * 0.06;

      // ── Tooth ──
      const tooth = toothRef.current;
      if (tooth) {
        tooth.style.left = `${cx}px`;
        tooth.style.top  = `${cy}px`;

        const scale = clicking ? 0.78 : hovering ? 1.25 : 1.0;
        tooth.style.transform = `translate(-50%, -50%) scale(${scale})`;

        tooth.style.filter = hovering
          ? 'drop-shadow(0 0 10px #4FC3F7) drop-shadow(0 0 22px rgba(79,195,247,0.6)) drop-shadow(0 3px 5px rgba(20,90,220,0.35))'
          : clicking
          ? 'drop-shadow(0 1px 2px rgba(20,90,200,0.3))'
          : 'drop-shadow(0 4px 8px rgba(20,90,200,0.28)) drop-shadow(0 1px 2px rgba(20,90,200,0.18))';
      }

      // ── Ring ──
      const ring = ringRef.current;
      if (ring) {
        ring.style.left = `${rx}px`;
        ring.style.top  = `${ry}px`;
        const rSize = clicking ? 20 : hovering ? 56 : 42;
        ring.style.width  = `${rSize}px`;
        ring.style.height = `${rSize}px`;
        ring.style.opacity = clicking ? '0.3' : '1';
        ring.style.borderColor = hovering
          ? 'rgba(79,195,247,0.85)'
          : 'rgba(139,173,220,0.5)';
        ring.style.background = hovering
          ? 'rgba(79,195,247,0.08)'
          : 'transparent';
        ring.style.animation = hovering
          ? 'ringPulse 1.5s ease-in-out infinite'
          : 'none';
      }

      // ── Trail ──
      const trail = trailRef.current;
      if (trail) {
        trail.style.left = `${tx}px`;
        trail.style.top  = `${ty}px`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(sparkleTimer);
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      document.getElementById('tooth-cursor-styles')?.remove();
    };
  }, []);

  const fixed = {
    position: 'fixed',
    pointerEvents: 'none',
    willChange: 'left, top, transform, filter',
  };

  return (
    <>
      {/* ── Ghost trail ── */}
      <div
        ref={trailRef}
        style={{
          ...fixed,
          zIndex: 999995,
          top: -400, left: -400,
          opacity: 0.12,
          filter: 'blur(5px)',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <ToothSVG id="trail" />
      </div>

      {/* ── Cursor ring / halo ── */}
      <div
        id="tc-ring"
        ref={ringRef}
        style={{
          ...fixed,
          zIndex: 999996,
          top: -400, left: -400,
          width: 42, height: 42,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
        }}
      />

      {/* ── Main tooth ── */}
      <div
        ref={toothRef}
        style={{
          ...fixed,
          zIndex: 999998,
          top: -400, left: -400,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s cubic-bezier(0.23,1,0.32,1), filter 0.18s ease',
        }}
      >
        <div id="tc-tooth-wrap">
          <ToothSVG id="main" />
        </div>
      </div>

      {/* ── Precise dot ── */}
      <div
        ref={dotRef}
        style={{
          ...fixed,
          zIndex: 999999,
          top: -400, left: -400,
          width: 5, height: 5,
          borderRadius: '50%',
          background: 'rgba(79,195,247,0.9)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 6px #4FC3F7, 0 0 2px white',
          transition: 'transform 0.08s, box-shadow 0.12s',
        }}
      />
    </>
  );
};

export default ToothCursor;
