import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeHandle from './components/WhatWeHandle';
import NumbersClearly from './components/NumbersClearly';
import HowItWorks from './components/HowItWorks';
import ValueStrip from './components/ValueStrip';
import ProblemFix from './components/ProblemFix';
import Platforms from './components/Platforms';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-surface"
    >
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WhatWeHandle />
        <NumbersClearly />
        <HowItWorks />
        <ValueStrip />
        <ProblemFix />
        <Platforms />
        <Industries />
        <Pricing />
        <Testimonials />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </motion.div>
  );
}
