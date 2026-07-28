import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Reveal from './Reveal';
import GradientMesh from './GradientMesh';

const FAQS = [
  {
    q: 'What accounting software do you work in?',
    a: 'We work primarily in QuickBooks Online and Xero, integrated with Amazon, Shopify, Stripe, and Gusto. If you use something else, we will assess whether it makes sense to migrate or work within your existing stack.',
  },
  {
    q: 'How quickly can we get started?',
    a: 'Most clients complete a free intro call and books assessment within a week, then move into onboarding. Full cleanup and a stable monthly baseline typically take two to four weeks depending on how far behind the books are.',
  },
  {
    q: "What's the real difference between plans?",
    a: 'Foundations covers monthly bookkeeping and reconciliation. Momentum adds a recurring CFO strategy session, cash flow forecasting, and priority response times — it is built for founders who want a strategic partner, not just a data-entry service.',
  },
  {
    q: 'Do we need to sign a long-term contract?',
    a: 'No. Plans run month-to-month. We ask for 30 days notice if you decide to leave, mainly so we can hand off a clean set of books to whoever comes next.',
  },
  {
    q: 'Do you handle tax filing?',
    a: "We prepare tax-ready financials and hand them directly to your CPA or in-house tax preparer. We can also connect you with a trusted tax partner if you don't have one.",
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/55 shadow-lg backdrop-blur-xl">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={isOpen}>
        <span className="font-semibold text-ink">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-primary-dim transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 leading-relaxed text-ink/70">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <GradientMesh />
      <div className="relative mx-auto max-w-2xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">FAQs</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">Common questions</h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <FAQItem q={item.q} a={item.a} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
