import Reveal, { Stagger, StaggerItem } from './Reveal';
import TiltCard from './TiltCard';
import GradientMesh from './GradientMesh';
import amazon from '../assets/categories/amazon-sellers.jpg';
import ecommerce from '../assets/categories/ecommerce.jpg';
import influencers from '../assets/categories/social-influencers.jpg';

const INDUSTRIES = [
  {
    name: 'Amazon Sellers',
    image: amazon,
    desc: 'Settlement reconciliation, multi-marketplace COGS, and inventory accounting built for FBA and FBM sellers.',
  },
  {
    name: 'Ecommerce',
    image: ecommerce,
    desc: 'Multi-channel bookkeeping across Shopify, Stripe, and payment processors — reconciled and reported monthly.',
  },
  {
    name: 'Social Media Influencers',
    image: influencers,
    desc: 'Sponsorship income, brand deals, and merch drops organized into clean, tax-ready books.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <GradientMesh />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            Industries
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Built around how you actually sell.
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Every industry has its own accounting quirks. We specialize in
            three of the trickiest.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {INDUSTRIES.map((ind) => (
            <StaggerItem key={ind.name}>
              <TiltCard tiltStrength={7} magnetStrength={4} className="group h-full overflow-hidden rounded-3xl border border-white/60 bg-white/50 shadow-xl backdrop-blur-xl transition-shadow hover:shadow-2xl">
                <div className="h-56 overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-ink">{ind.name}</h3>
                  <p className="mt-3 text-sm text-ink/70">{ind.desc}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
