import { useRef } from 'react';
import { motion, useMotionTemplate, useSpring } from 'framer-motion';

export default function TiltCard({
  children,
  className = '',
  tiltStrength = 12,
  scale = 1.03,
  magnetStrength = 0,
}) {
  const ref = useRef(null);
  const rotateX = useSpring(0, { stiffness: 250, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 250, damping: 20 });
  const scaleSpring = useSpring(1, { stiffness: 250, damping: 20 });
  const translateX = useSpring(0, { stiffness: 150, damping: 18 });
  const translateY = useSpring(0, { stiffness: 150, damping: 18 });

  const transform = useMotionTemplate`perspective(1000px) translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleSpring})`;

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * tiltStrength);
    rotateY.set(px * tiltStrength);
    if (magnetStrength) {
      translateX.set(px * magnetStrength);
      translateY.set(py * magnetStrength);
    }
  };

  const handleEnter = () => scaleSpring.set(scale);

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scaleSpring.set(1);
    translateX.set(0);
    translateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
