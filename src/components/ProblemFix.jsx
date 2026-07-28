import { X, Check } from 'lucide-react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import GradientMesh from './GradientMesh';

const PROBLEMS = [
  'Books are months behind and reconciled just before tax season',
  "You don't actually know your cash position or real margins",
  'One overworked bookkeeper juggling too many clients',
  'No strategic guidance — just data entry, no direction',
  'Disconnected spreadsheets across banks, Amazon, and Shopify',
];

const FIXES = [
  'Reconciled, accurate books delivered every single month',
  'A live dashboard showing cash, margin, and runway at a glance',
  'A dedicated team built around how your business operates',
  'A real CFO reviewing numbers and guiding key decisions',
  'Every platform synced into one clean source of truth',
];

export default function ProblemFix() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <GradientMesh />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            Why Founders Switch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Sound familiar?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.05}>
            <TiltCard tiltStrength={3} className="h-full rounded-3xl border border-white/60 bg-white/50 p-8 shadow-xl backdrop-blur-xl">
              <h3 className="font-display text-lg font-bold text-ink/70">The Problem</h3>
              <ul className="mt-6 space-y-4">
                {PROBLEMS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-ink/70">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <X size={14} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard tiltStrength={3} className="h-full rounded-3xl border border-white/10 bg-ink/90 p-8 shadow-2xl backdrop-blur-xl">
              <h3 className="font-display text-lg font-bold text-primary">The Fix</h3>
              <ul className="mt-6 space-y-4">
                {FIXES.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-white/80">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check size={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
