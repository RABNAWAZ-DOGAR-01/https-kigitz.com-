import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import TiltCard from './TiltCard';
import avatar1 from '../assets/figma/testimonial-avatar.png';
import avatar2 from '../assets/figma/avatar-1.png';
import avatar3 from '../assets/figma/avatar-2.png';

const REVIEWS = [
  {
    title: 'I finally know what my margins actually look like.',
    body: 'Before this team, I found out how the business was doing by checking my bank balance. Now I get a real report every month and I actually understand it.',
    name: 'Priya Nandakumar',
    company: 'Founder, Northfield Goods',
    tag: 'Amazon FBA',
    avatar: avatar1,
    featured: false,
  },
  {
    title: 'Having a real CFO changed how I make every decision.',
    body: "I stopped guessing about hiring and pricing. Having someone I can actually message about the numbers has completely changed how I run this business — it's the difference between reacting and actually planning.",
    name: 'Jordan Alvez',
    company: 'Founder, Palisade Brands',
    tag: 'Ecommerce',
    avatar: avatar3,
    featured: true,
  },
  {
    title: 'They caught two years of miscategorized fees.',
    body: 'We switched from a freelance bookkeeper who kept falling behind. In the first month alone, the team found reconciliation errors going back two years.',
    name: 'Marcus Ellery',
    company: 'CEO, Driftwood Supply Co.',
    tag: 'Ecommerce',
    avatar: avatar2,
    featured: false,
  },
];

function StarRow({ featured }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, s) => (
        <motion.span
          key={s}
          animate={{ scale: [1, 1.18, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: s * 0.15 }}
        >
          <Star
            size={featured ? 18 : 16}
            className={featured ? 'fill-secondary text-secondary' : 'fill-primary text-primary'}
          />
        </motion.span>
      ))}
    </div>
  );
}

function AvatarRing({ src, name, size = 56 }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-primary))',
        }}
      />
      <img
        src={src}
        alt={name}
        className="absolute inset-[2.5px] rounded-full border-2 border-ink object-cover"
      />
    </div>
  );
}

function TestimonialCard({ review }) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
      <TiltCard
        tiltStrength={5}
        className={`group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_25px_70px_-20px_rgba(95,179,140,0.45)] ${
          review.featured ? 'ring-1 ring-primary/40 lg:scale-[1.06] lg:p-10' : ''
        }`}
      >
        <motion.span
          aria-hidden
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-6 left-4 select-none font-display text-[140px] font-bold leading-none text-white/10"
        >
          &ldquo;
        </motion.span>

        {review.featured && (
          <span className="absolute right-6 top-6 rounded-full bg-secondary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary">
            Featured
          </span>
        )}

        <div className="relative z-10 flex flex-col gap-6">
          <StarRow featured={review.featured} />

          <div className="flex flex-col gap-3">
            <p className={`font-display font-bold text-white ${review.featured ? 'text-2xl sm:text-[28px]' : 'text-xl'}`}>
              {review.title}
            </p>
            <p className="text-sm leading-relaxed text-white/65">{review.body}</p>
          </div>

          <div className="mt-2 flex items-center gap-4">
            <AvatarRing src={review.avatar} name={review.name} size={review.featured ? 60 : 52} />
            <div className="text-sm">
              <p className="font-bold text-white">{review.name}</p>
              <p className="text-white/50">
                {review.company} <span className="text-white/30">·</span> {review.tag}
              </p>
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        aria-hidden
        className="animate-mesh pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(at 20% 30%, var(--color-primary) 0px, transparent 55%), radial-gradient(at 80% 20%, var(--color-secondary) 0px, transparent 50%), radial-gradient(at 50% 80%, var(--color-primary-dim) 0px, transparent 55%), radial-gradient(at 90% 90%, var(--color-secondary-dim) 0px, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Founders who stopped guessing.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {REVIEWS.map((review) => (
            <StaggerItem key={review.name} className={review.featured ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <TestimonialCard review={review} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
