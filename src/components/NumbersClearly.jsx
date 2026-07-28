import { Check } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import AnimatedCounter from './AnimatedCounter';
import GradientMesh from './GradientMesh';

const POINTS = [
  'Reconciled books delivered every month — no scrambling at tax time',
  'A live view of revenue, margin, and cash so you always know where you stand',
  'Reports written for founders, not accountants — plain language, real context',
  'Historical records cleaned up and organized, so nothing is a mystery',
];

const BARS = [38, 52, 47, 63, 71, 58, 82, 76];

export default function NumbersClearly() {
  return (
    <section id="numbers" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <GradientMesh />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            Visibility
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            See your numbers clearly.
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            No more guessing what's actually happening in the business. We
            turn raw transactions into a monthly picture you can act on.
          </p>
          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-dim">
                  <Check size={14} />
                </span>
                <span className="text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <TiltCard tiltStrength={5} className="rounded-3xl border border-white/10 bg-ink/90 p-7 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white/60">Monthly Financials — June</p>
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                On Track
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs font-medium text-white/50">Revenue</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-white">
                  $<AnimatedCounter value="212,900" />
                </p>
                <p className="mt-1 text-xs font-semibold text-primary">+9.8%</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs font-medium text-white/50">Gross Margin</p>
                <p className="mt-1 font-mono text-2xl font-semibold text-white">
                  <AnimatedCounter value="61.4%" />
                </p>
                <p className="mt-1 text-xs font-semibold text-primary">+2.6 pts</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="mb-4 text-xs font-medium text-white/50">Revenue trend — 8 months</p>
              <div className="flex h-28 items-end gap-2.5">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-secondary to-primary"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
