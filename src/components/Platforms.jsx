import Reveal from './Reveal';

import s1 from '../assets/kigitz/slide-1.png';
import s2 from '../assets/kigitz/slide-2.png';
import s3 from '../assets/kigitz/slide-3.png';
import s4 from '../assets/kigitz/slide-4.png';
import s5 from '../assets/kigitz/slide-5-1.png';
import s6 from '../assets/kigitz/slide-6.png';
import s7 from '../assets/kigitz/slide-7.png';
import s8 from '../assets/kigitz/slide-8.png';
import s9 from '../assets/kigitz/slide-9.png';
import s10 from '../assets/kigitz/slide-10.png';

const LOGOS = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10];

export default function Platforms() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dim">
            The Right Financial Tech Stack
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
            Platforms we work with
          </h2>
        </Reveal>

        <div className="relative mt-12 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max shrink-0 animate-marquee items-center gap-8 pr-8">
            {[...LOGOS, ...LOGOS].map((src, i) => (
              <div
                key={i}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl bg-white p-5 ring-1 ring-ink/5"
              >
                <img src={src} alt="" className="max-h-12 max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
