import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState('0');
  const motionValue = useMotionValue(0);

  const match = String(value).match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const numberPart = match ? match[2] : '0';
  const suffix = match ? match[3] : '';
  const target = parseFloat(numberPart.replace(/,/g, ''));
  const decimals = numberPart.includes('.') ? numberPart.split('.')[1].length : 0;

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        setDisplay(decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [isInView, target, duration, decimals, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
