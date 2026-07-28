import { motion } from 'framer-motion';
import GetStartedButton from './GetStartedButton';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink py-24 lg:py-28">
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-primary/25 blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to balance your books for good?
        </h2>
        <p className="mt-5 text-lg text-white/70">
          Book a free intro call and see exactly what clean books and real
          financial visibility could look like for your business.
        </p>
        <div className="mt-9 flex justify-center">
          <GetStartedButton label="Book A Call Now" />
        </div>
      </div>
    </section>
  );
}
