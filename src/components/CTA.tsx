import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal, MagneticButton } from './animations';

export function CTA() {
  return (
    <section id="contact" className="relative px-6 py-24 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-850 to-ink-900 p-10 text-center lg:p-20">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
            />

            <div className="relative z-10">
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">Let's Talk</p>
              <h2 className="text-display font-bold text-white">
                Ready to create<br />something <span className="text-gradient">extraordinary?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-ink-300">
                Tell us about your vision. We'll bring the craft, the strategy, and the
                obsession with detail that turns ambitious ideas into living brands.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <MagneticButton
                  href="mailto:hello@3dglobalsolutions.com"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 text-base font-semibold text-white"
                >
                  <span className="relative z-10 transition-colors group-hover:text-ink-950">Start a Project</span>
                  <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:text-ink-950" />
                  <span className="absolute inset-0 bg-white transition-transform duration-300 group-hover:scale-100 scale-0 rounded-full" />
                </MagneticButton>
                <MagneticButton
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  View Portfolio
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
