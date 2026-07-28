import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import GetStartedButton from './GetStartedButton';

const HEADING_LINES = ['You Grow.', 'We Reconcile.'];

const CATEGORIES = [
  'Bookkeeping',
  'CFO Advisory',
  'Amazon Sellers',
  'Ecommerce',
  'Social Media Influencers',
];

const lineVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: '110%', filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: '0%',
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const morphVariants = {
  initial: { opacity: 0, filter: 'blur(16px)', y: 8 },
  animate: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    filter: 'blur(16px)',
    y: -8,
    transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [catIndex, setCatIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCatIndex((i) => (i + 1) % CATEGORIES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-[84px]"
    >
      <div
        aria-hidden
        className="animate-mesh pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 30%, var(--color-primary) 0px, transparent 55%), radial-gradient(at 80% 20%, var(--color-secondary) 0px, transparent 50%), radial-gradient(at 50% 80%, var(--color-primary-dim) 0px, transparent 55%), radial-gradient(at 90% 90%, var(--color-secondary-dim) 0px, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <motion.div
        style={{ y: gridY }}
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: glowY, scale: glowScale }}
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/30 blur-[140px]"
      />
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute bottom-[-20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[120px]"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm"
        >
          <Sparkles size={15} className="text-primary" />
          <p className="text-sm font-medium text-white/80">
            Founder-led. CFO-supported. Built for online sellers.
          </p>
        </motion.div>

        <h1 className="mt-8 font-display font-bold leading-[0.95] tracking-[-0.03em] text-white text-[52px] sm:text-[76px] lg:text-[104px]">
          {HEADING_LINES.map((line, i) => (
            <motion.span
              key={line}
              variants={lineVariants}
              initial="hidden"
              animate="show"
              transition={{ delayChildren: 0.2 + i * 0.18 }}
              className="block overflow-hidden"
            >
              {line.split(' ').map((word, j) => (
                <span key={j} className="mr-[0.28em] inline-block overflow-hidden pb-[0.1em] align-top">
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${i === 1 ? 'text-primary' : ''}`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.span>
          ))}
        </h1>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-2xl font-semibold text-white/60 sm:text-3xl">
          <span>Built for</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={CATEGORIES[catIndex]}
              variants={morphVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="inline-block text-primary"
            >
              {CATEGORIES[catIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-7 max-w-[560px] text-lg leading-relaxed text-white/70"
        >
          A dedicated finance team for Amazon sellers, ecommerce brands, and
          creators — clean monthly books, a CFO you can actually reach, and
          numbers you can finally trust.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <GetStartedButton label="Book Your Intro Call" href="#cta" />
          <a href="#what-we-handle" className="text-sm font-semibold text-white/70 underline-offset-4 hover:text-white hover:underline">
            See what we handle →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
