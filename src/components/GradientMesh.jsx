import { motion } from 'framer-motion';

const VARIANTS = {
  light: [
    { className: 'left-[-10%] top-[-15%] h-[420px] w-[420px] bg-primary/25', duration: 9 },
    { className: 'right-[-10%] top-[10%] h-[360px] w-[360px] bg-secondary/20', duration: 11 },
    { className: 'bottom-[-15%] left-[30%] h-[300px] w-[300px] bg-primary/15', duration: 13 },
  ],
  dark: [
    { className: 'left-[-8%] top-[-10%] h-[420px] w-[420px] bg-primary/20', duration: 9 },
    { className: 'right-[-12%] bottom-[-10%] h-[380px] w-[380px] bg-secondary/15', duration: 12 },
  ],
};

export default function GradientMesh({ variant = 'light' }) {
  const blobs = VARIANTS[variant] ?? VARIANTS.light;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
          transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute rounded-full blur-[110px] ${blob.className}`}
        />
      ))}
    </div>
  );
}
