import { FileBarChart, Users, ArrowRightLeft, Bot } from 'lucide-react';
import { Stagger, StaggerItem } from './Reveal';

const VALUES = [
  {
    icon: FileBarChart,
    title: 'Monthly Financials',
    desc: 'Delivered on time, every month, in language you actually understand.',
  },
  {
    icon: Users,
    title: 'Direct CFO Access',
    desc: 'Message or book time with a real strategic finance lead — no ticket queue.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Year-End Handoff',
    desc: 'Tax-ready books handed straight to your CPA, with zero last-minute panic.',
  },
  {
    icon: Bot,
    title: '24/7 AI Assistant',
    desc: 'Ask about any transaction or balance anytime and get an instant answer.',
  },
];

export default function ValueStrip() {
  return (
    <section className="bg-ink py-16">
      <Stagger className="mx-auto grid max-w-[1400px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {VALUES.map(({ icon: Icon, title, desc }) => (
          <StaggerItem key={title} className="flex flex-col items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-primary">
              <Icon size={20} />
            </span>
            <h3 className="font-display text-base font-bold text-white">{title}</h3>
            <p className="text-sm leading-relaxed text-white/60">{desc}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
