import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Reveal } from './animations';

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const stats: Stat[] = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 40, suffix: '+', label: 'Global Clients' },
  { value: 12, suffix: '', label: 'Industry Awards' },
  { value: 98, suffix: '%', label: 'Client Retention' },
];

export function Stats() {
  return (
    <section id="about" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">By the Numbers</p>
          <h2 className="text-section font-bold text-white">
            Results that <span className="text-gradient-white">speak</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Counter key={stat.label} stat={stat} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(stat.value);
      return;
    }
    const duration = 2000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * stat.value));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setCount(stat.value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-center"
    >
      <div className="mb-2 text-5xl font-bold text-white lg:text-6xl">
        <span className="text-gradient">{count}</span>
        <span className="text-gradient">{stat.suffix}</span>
      </div>
      <p className="text-sm uppercase tracking-widest text-ink-400">{stat.label}</p>
    </motion.div>
  );
}
