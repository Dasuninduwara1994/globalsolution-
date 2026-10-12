import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { TextReveal, MagneticButton } from './animations';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-ink-300"
        >
          <Sparkles size={14} className="text-accent" />
          <span>Creative Agency — Est. 2018</span>
        </motion.div>

        <h1 className="text-hero font-bold text-white">
          <span className="block overflow-hidden">
            <TextReveal text="We Build" delay={0.3} />
          </span>
          <span className="block overflow-hidden">
            <TextReveal text="Bold Brands" delay={0.5} className="text-gradient" />
          </span>
          <span className="block overflow-hidden">
            <TextReveal text="That Move" delay={0.7} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mx-auto mt-8 max-w-xl text-lg text-ink-300"
        >
          An international creative agency crafting immersive digital experiences,
          brand identities, and stories that resonate across every screen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            href="#work"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-semibold text-white"
          >
            <span className="relative z-10 transition-colors group-hover:text-ink-950">View Our Work</span>
            <span className="absolute inset-0 bg-white transition-transform duration-300 group-hover:scale-100 scale-0 rounded-full" />
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            Explore Services
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-ink-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
