import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TRAIL_CONFIG = [
  { stiffness: 900, damping: 50, size: 6, opacity: 0.9 },
  { stiffness: 500, damping: 45, size: 5, opacity: 0.55 },
  { stiffness: 300, damping: 40, size: 4, opacity: 0.32 },
  { stiffness: 180, damping: 35, size: 3, opacity: 0.18 },
];

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 });

  const trail = TRAIL_CONFIG.map(({ stiffness, damping }) => ({
    x: useSpring(x, { stiffness, damping }),
    y: useSpring(y, { stiffness, damping }),
  }));

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    document.body.classList.add('has-custom-cursor');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const onLeaveWindow = () => setHidden(true);

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(true);
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) setHovering(false);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', onLeaveWindow);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', onLeaveWindow);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {trail.map((spring, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed left-0 top-0 z-[998] rounded-full bg-primary"
          style={{
            x: spring.x,
            y: spring.y,
            translateX: '-50%',
            translateY: '-50%',
            width: TRAIL_CONFIG[i].size,
            height: TRAIL_CONFIG[i].size,
            opacity: hidden ? 0 : TRAIL_CONFIG[i].opacity,
          }}
        />
      ))}

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full border border-primary mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          backgroundColor: hovering ? 'rgba(95,179,140,0.15)' : 'rgba(95,179,140,0)',
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-primary"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
        }}
      />
    </>
  );
}
