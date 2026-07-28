import Reveal from './Reveal';
import TiltCard from './TiltCard';
import AnimatedCounter from './AnimatedCounter';
import founderPhoto from '../assets/categories/founder-portrait-v2.jpg';

const STATS = [
  { value: '250+', label: 'Clients Served' },
  { value: '11', label: 'Years Experience' },
  { value: '$180M+', label: 'Revenue Managed' },
];

export default function Founder() {
  return (
    <section id="founder" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <TiltCard tiltStrength={6} className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={founderPhoto}
              alt="Founder & Managing CFO"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
          </TiltCard>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            Meet the Founder
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Alicia Ferrante, CPA
          </h2>
          <p className="mt-2 font-medium text-ink/50">Founder & Managing CFO, Ledgerline</p>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Alicia spent nine years leading finance teams for ecommerce and
            marketplace brands before starting Ledgerline. She built the firm
            around one idea: founders shouldn't have to choose between a
            bookkeeper who just enters data and a CFO they can't afford. Every
            client gets both, in one team.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-mono text-2xl font-bold text-ink sm:text-3xl">
                  <AnimatedCounter value={value} />
                </p>
                <p className="mt-1 text-sm text-ink/60">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
