import { PhoneCall, ClipboardCheck, CalendarCheck } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from './Reveal';

const STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Free intro call',
    desc: 'We learn how the business runs today — tools, bottlenecks, and what "clean books" would actually mean for you.',
  },
  {
    icon: ClipboardCheck,
    step: '02',
    title: 'We assess your books',
    desc: 'Our team reviews the current setup, flags any cleanup needed, and scopes a plan built around your stage and industry.',
  },
  {
    icon: CalendarCheck,
    step: '03',
    title: 'Clean books, every month',
    desc: 'From there it runs on autopilot — reconciled books, clear reports, and a CFO on call whenever you need one.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Onboarding without the headache.
          </h2>
        </Reveal>

        <Stagger className="relative mt-16 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-ink/10 md:block" />
          {STEPS.map(({ icon: Icon, step, title, desc }) => (
            <StaggerItem key={step} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-ink text-primary shadow-lg">
                <Icon size={26} />
              </div>
              <p className="mt-5 font-mono text-sm font-bold text-primary-dim">{step}</p>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-ink/70">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
