import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#founder' },
  {
    label: 'Services',
    href: '#what-we-handle',
    children: [
      { label: 'Bookkeeping', href: '#what-we-handle' },
      { label: 'CFO Advisory', href: '#what-we-handle' },
    ],
  },
  {
    label: 'Industries',
    href: '#industries',
    children: [
      { label: 'Amazon Sellers', href: '#industries' },
      { label: 'Ecommerce', href: '#industries' },
      { label: 'Social Media Influencers', href: '#industries' },
    ],
  },
  { label: 'FAQs', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 160) {
      setHidden(true);
      setOpen(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 backdrop-blur-xl"
      style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 8px rgba(0,0,0,0.08)' }}
    >
      <nav className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo-BarwBMNv-removebg-preview.png"
            alt="Logo"
            style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setDropdown(item.label)}
              onMouseLeave={() => item.children && setDropdown(null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-[15px] font-medium text-ink/80 transition-colors hover:text-primary"
              >
                {item.label}
                {item.children && <ChevronDown size={14} />}
              </a>
              {item.children && dropdown === item.label && (
                <div className="absolute left-0 top-full w-56 pt-3">
                  <div className="overflow-hidden rounded-xl bg-white py-2 shadow-2xl ring-1 ring-ink/10">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ink/70 transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <a
          href="#cta"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105 lg:inline-block"
        >
          Book A Call Now
        </a>

        <button className="text-ink lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {NAV.map((item) => (
              <div key={item.label}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-2.5 text-base font-medium text-ink">
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-4 pb-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-ink/60"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-ink"
            >
              Book A Call Now
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
