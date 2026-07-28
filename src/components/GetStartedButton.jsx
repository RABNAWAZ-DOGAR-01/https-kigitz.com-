import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function GetStartedButton({ label = 'Get Started', className = '', href = '#' }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple = {
      id: Date.now(),
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    };
    setRipples((r) => [...r, ripple]);
    setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== ripple.id));
    }, 650);
  };

  return (
    <a
      href={href}
      onClick={addRipple}
      className={`group relative inline-flex w-fit items-center gap-2.5 overflow-hidden rounded-full border border-ink/10 bg-white py-2.5 pl-6 pr-2.5 text-[18px] font-semibold text-ink tracking-[-0.9px] transition-shadow hover:shadow-[0_0_30px_rgba(95,179,140,0.4)] hover:animate-glow-pulse ${className}`}
    >
      <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-secondary to-primary transition-[height] duration-300 ease-out group-hover:h-full" />

      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <AnimatePresence>
          {ripples.map((r) => (
            <motion.span
              key={r.id}
              initial={{ opacity: 0.45, scale: 0 }}
              animate={{ opacity: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="absolute rounded-full bg-primary/50"
              style={{ left: r.x, top: r.y, width: r.size, height: r.size }}
            />
          ))}
        </AnimatePresence>
      </span>

      <span className="relative z-10">{label}</span>
      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink">
        <ArrowRight
          size={18}
          className="absolute text-white transition-transform duration-300 ease-out -translate-x-6 group-hover:translate-x-0"
        />
        <ArrowRight
          size={18}
          className="absolute text-white transition-transform duration-300 ease-out translate-x-0 group-hover:translate-x-6"
        />
      </span>
    </a>
  );
}
