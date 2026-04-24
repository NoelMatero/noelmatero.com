import { useEffect, useRef, useState } from "react";

const INACTIVITY_MS = 30_000;
const SPEED = 5.0;
const COLORS = [
  "hsl(0, 72%, 88%)",
  "hsl(11, 78%, 87%)",
  "hsl(22, 82%, 87%)",
  "hsl(33, 80%, 86%)",
  "hsl(46, 82%, 85%)",
  "hsl(58, 75%, 84%)",
  "hsl(70, 65%, 83%)",
  "hsl(78, 58%, 82%)",
  "hsl(90, 55%, 83%)",
  "hsl(105, 52%, 83%)",
  "hsl(120, 48%, 83%)",
  "hsl(138, 50%, 82%)",
  "hsl(155, 52%, 81%)",
  "hsl(168, 55%, 82%)",
  "hsl(180, 58%, 83%)",
  "hsl(192, 62%, 84%)",
  "hsl(198, 68%, 84%)",
  "hsl(210, 65%, 85%)",
  "hsl(220, 64%, 86%)",
  "hsl(228, 62%, 87%)",
  "hsl(240, 60%, 87%)",
  "hsl(252, 60%, 87%)",
  "hsl(262, 60%, 87%)",
  "hsl(272, 58%, 87%)",
  "hsl(284, 56%, 87%)",
  "hsl(294, 54%, 86%)",
  "hsl(302, 54%, 86%)",
  "hsl(312, 56%, 87%)",
  "hsl(322, 62%, 87%)",
  "hsl(332, 66%, 87%)",
  "hsl(342, 68%, 88%)",
  "hsl(352, 70%, 88%)",
];

export default function Screensaver() {
  const [active, setActive] = useState(false);

  const posRef = useRef({ x: 200, y: 150, dx: SPEED, dy: SPEED * 0.85 });
  const colorRef = useRef(COLORS[0]);
  const rafRef = useRef<number>();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const nmRef = useRef<HTMLDivElement>(null);

  // Inactivity tracking
  useEffect(() => {
    const reset = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setActive(false);
      timerRef.current = setTimeout(() => setActive(true), INACTIVITY_MS);
    };

    const events = ["mousemove", "mousedown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, reset, { passive: true }));
    timerRef.current = setTimeout(() => setActive(true), INACTIVITY_MS);

    return () => {
      events.forEach((e) => window.removeEventListener(e, reset));
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Bounce animation — position and color written directly to DOM, zero React re-renders per frame
  useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const el = nmRef.current;
    if (!el) return;

    const w = el.offsetWidth || 190;
    const h = el.offsetHeight || 110;
    posRef.current = {
      x: Math.random() * (window.innerWidth - w),
      y: Math.random() * (window.innerHeight - h),
      dx: (Math.random() > 0.5 ? 1 : -1) * SPEED,
      dy: (Math.random() > 0.5 ? 1 : -1) * SPEED * 0.85,
    };

    const animate = () => {
      const p = posRef.current;
      const elemW = el.offsetWidth || 190;
      const elemH = el.offsetHeight || 110;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      p.x += p.dx;
      p.y += p.dy;

      let bounced = false;
      if (p.x <= 0)           { p.x = 0;          p.dx =  Math.abs(p.dx); bounced = true; }
      if (p.x + elemW >= vw)  { p.x = vw - elemW; p.dx = -Math.abs(p.dx); bounced = true; }
      if (p.y <= 0)           { p.y = 0;          p.dy =  Math.abs(p.dy); bounced = true; }
      if (p.y + elemH >= vh)  { p.y = vh - elemH; p.dy = -Math.abs(p.dy); bounced = true; }

      if (bounced) {
        const opts = COLORS.filter((c) => c !== colorRef.current);
        colorRef.current = opts[Math.floor(Math.random() * opts.length)];
        el.style.color = colorRef.current;
      }

      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black cursor-none">
      <div
        ref={nmRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          fontSize: "7rem",
          fontWeight: 600,
          color: colorRef.current,
          fontFamily: "var(--font-mono)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          userSelect: "none",
          willChange: "transform",
        }}
      >
        NM
      </div>
    </div>
  );
}
