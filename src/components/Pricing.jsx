import { Check } from 'lucide-react';
import GetStartedButton from './GetStartedButton';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import TiltCard from './TiltCard';
import GradientMesh from './GradientMesh';

const FOUNDATIONS_FEATURES = [
  'Monthly bookkeeping & reconciliation',
  'Standard monthly financial report',
  'Email & chat support',
  'Sales tax tracking',
];

const MOMENTUM_FEATURES = [
  'Everything in Foundations',
  'Monthly CFO strategy session',
  'Cash flow forecasting',
  'Priority support with same-day response',
];

const PLANS = [
  {
    name: 'Foundations',
    desc: 'Clean, reconciled books — the baseline every business needs.',
    price: '$650',
    features: FOUNDATIONS_FEATURES,
    cta: 'Get Started',
    variant: 'light',
  },
  {
    name: 'Momentum',
    desc: 'Bookkeeping plus a strategic partner in your corner.',
    price: '$1,450',
    features: MOMENTUM_FEATURES,
    cta: 'Get Started',
    variant: 'white',
  },
  {
    name: 'Partner',
    desc: 'A fully tailored finance function for scaling teams.',
    price: null,
    features: [],
    cta: 'Request a Quote',
    variant: 'accent',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <GradientMesh />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Plans built to scale with you.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <TiltCard
                tiltStrength={6}
                scale={1.015}
                className={`flex h-full flex-col gap-5 rounded-3xl p-9 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl ${
                  plan.variant === 'accent'
                    ? 'bg-gradient-to-br from-ink/90 to-ink-800/90 text-white ring-1 ring-primary/30'
                    : 'border border-white/60 bg-white/55 text-ink'
                }`}
              >
                <p className="font-display text-2xl font-bold">{plan.name}</p>
                <p className={`text-sm ${plan.variant === 'accent' ? 'text-white/70' : 'text-ink/60'}`}>
                  {plan.desc}
                </p>

                {plan.price ? (
                  <div className="flex flex-col gap-6">
                    <p className="font-display text-3xl font-bold">
                      {plan.price} <span className="text-base font-normal">/month</span>
                    </p>
                    <div className={`h-px w-full ${plan.variant === 'accent' ? 'bg-white/20' : 'bg-ink/10'}`} />
                    <div className="flex flex-col gap-3.5">
                      {plan.features.map((f) => (
                        <div key={f} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary-dim">
                            <Check size={14} />
                          </span>
                          <p className="text-sm">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-white/60">
                    Scoped around your revenue, entity structure, and reporting
                    needs — priced after a books assessment.
                  </p>
                )}

                <div className="mt-auto pt-2">
                  <GetStartedButton label={plan.cta} />
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
