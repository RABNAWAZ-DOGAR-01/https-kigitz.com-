import { useState } from 'react';
import { motion } from 'framer-motion';
import { Workflow, Plug } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import GradientMesh from './GradientMesh';
import bookkeepingPhoto from '../assets/categories/bookkeeping.jpg';
import cfoPhoto from '../assets/categories/cfo-advisory.jpg';

const CATEGORIES = [
  {
    image: bookkeepingPhoto,
    title: 'Bookkeeping',
    items: [
      'Monthly reconciliations',
      'Accounts payable & receivable',
      'Sales tax tracking & filing',
      'Payroll coordination',
    ],
  },
  {
    image: cfoPhoto,
    title: 'CFO Advisory',
    items: [
      'Monthly financial reviews',
      'Cash flow forecasting',
      'Budgeting & scenario planning',
      'Fundraising-ready reporting',
    ],
  },
  {
    icon: Workflow,
    title: 'Back Office & Workflow',
    items: [
      'Vendor & bill-pay management',
      'Expense policy & approvals',
      'Inventory & COGS tracking',
      'Year-end close & tax handoff',
    ],
    featured: true,
  },
  {
    icon: Plug,
    title: 'Tech & Integrations',
    items: [
      'QuickBooks & Xero setup',
      'Amazon, Shopify & Stripe sync',
      'Payroll & HR tool integration',
      'Custom dashboards & reporting',
    ],
  },
];

const TITLE_WORDS = 'Every part of the back office, covered.'.split(' ');

const titleContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const titleWord = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 60, scale: 0.88 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedCheck({ delay = 0 }) {
  return (
    <motion.svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#B2FF00"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0"
    >
      <motion.path
        d="M20 6 9 17l-5-5"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      />
    </motion.svg>
  );
}

function CategoryCard({ category }) {
  const { icon: Icon, image, title, items, featured } = category;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={cardItem} className="h-full" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <TiltCard
        tiltStrength={8}
        magnetStrength={6}
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/20 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_70px_-15px_rgba(98,67,250,0.5)] hover:border-[#6243FA]/50 ${
          featured ? 'bg-[#0d1117]' : 'bg-white/60'
        }`}
      >
        {featured ? (
          <div className="relative flex h-32 w-full items-center justify-center overflow-hidden">
            <div
              aria-hidden
              className="animate-mesh absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'radial-gradient(at 30% 30%, #B2FF00 0px, transparent 55%), radial-gradient(at 75% 70%, #6243FA 0px, transparent 55%)',
                backgroundSize: '200% 200%',
              }}
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#B2FF00] ring-1 ring-white/20"
            >
              <Icon size={26} />
            </motion.div>
          </div>
        ) : image ? (
          <div className="h-32 w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <div className="flex h-32 w-full items-center justify-center bg-ink">
            <Icon size={30} className="text-primary" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-7">
          <h3 className={`font-display text-lg font-bold ${featured ? 'text-white' : 'text-ink'}`}>
            {title}
          </h3>
          <ul className="mt-4 space-y-3">
            {items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0.5, x: 0 }}
                animate={hovered ? { opacity: 1, x: 4 } : { opacity: 0.6, x: 0 }}
                transition={{ duration: 0.35, delay: hovered ? i * 0.08 : 0, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-start gap-2 text-sm ${featured ? 'text-white/75' : 'text-ink/70'}`}
              >
                <AnimatedCheck delay={i * 0.08} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function WhatWeHandle() {
  return (
    <section id="what-we-handle" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <GradientMesh />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            What We Handle
          </p>
          <motion.h2
            variants={titleContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
          >
            {TITLE_WORDS.map((word, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-1 align-top">
                <motion.span variants={titleWord} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h2>
          <p className="mt-4 text-lg text-ink/70">
            One team, four disciplines — from day-to-day bookkeeping to
            strategic finance, so nothing slips between the cracks.
          </p>
        </Reveal>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
