import { motion } from 'framer-motion';
import { Reveal, StaggerContainer, StaggerItem } from './animations';

const steps = [
  { number: '01', title: 'Discover', desc: 'We dive deep into your brand, market, and audience to uncover what makes you unique.' },
  { number: '02', title: 'Define', desc: 'Strategy sessions align your goals with creative direction, setting the roadmap forward.' },
  { number: '03', title: 'Design', desc: 'Concepts come to life through iterative design — from wireframes to polished visuals.' },
  { number: '04', title: 'Deliver', desc: 'We ship production-ready assets, provide documentation, and support your launch.' },
];

export function Process() {
  return (
    <section id="process" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">How We Work</p>
          <h2 className="text-section font-bold text-white">
            A process built for <span className="text-gradient-white">clarity</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-2xl border border-white/8 bg-ink-850/50 p-8"
              >
                <div className="mb-6 text-5xl font-bold text-white/10 transition-colors group-hover:text-accent/30">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-400">{step.desc}</p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
