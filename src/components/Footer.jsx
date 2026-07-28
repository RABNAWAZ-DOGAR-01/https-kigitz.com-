import GetStartedButton from './GetStartedButton';
import Reveal from './Reveal';

const COLUMNS = [
  {
    title: 'Services',
    links: ['Bookkeeping', 'CFO Advisory'],
  },
  {
    title: 'Industries',
    links: ['Amazon Sellers', 'Ecommerce', 'Social Media Influencers'],
  },
  {
    title: 'Company',
    links: ['About', 'FAQs', 'Privacy Policy'],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink pt-20 lg:pt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <img src="/logo-BarwBMNv-removebg-preview.png" alt="Logo" height="38" style={{ width: 'auto' }} />
            <p className="max-w-xs text-sm text-white/50">
              Founder-led bookkeeping and CFO advisory for online sellers and
              creators.
            </p>
            <GetStartedButton label="Book A Call Now" className="mt-2" />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <p className="text-sm font-bold text-white">{col.title}</p>
                <div className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <a key={link} href="#" className="text-sm text-white/60 hover:text-primary">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 px-6 py-6 text-sm text-white/40 sm:flex-row sm:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Ledgerline. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
