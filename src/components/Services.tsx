import { motion } from 'framer-motion';
import {
  PenTool,
  Monitor,
  Megaphone,
  Code,
  Film,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './animations';

const services = [
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Logos, visual systems, and guidelines that define how the world recognizes you.',
    tags: ['Logo Design', 'Visual Systems', 'Brand Strategy'],
  },
  {
    icon: Monitor,
    title: 'Web Design & UX',
    desc: 'Conversion-driven websites and interfaces engineered for beauty and performance.',
    tags: ['UI/UX', 'Web Design', 'Prototyping'],
  },
  {
    icon: Code,
    title: 'Development',
    desc: 'Production-grade frontends, backends, and apps built with modern technology stacks.',
    tags: ['React', 'Next.js', 'Headless CMS'],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    desc: 'Data-backed campaigns across search, social, and email that grow your audience.',
    tags: ['SEO', 'Paid Social', 'Content'],
  },
  {
    icon: Film,
    title: 'Motion & Video',
    desc: 'Cinematic brand films, motion graphics, and animated content that commands attention.',
    tags: ['Brand Films', 'Motion GFX', '3D'],
  },
  {
    icon: TrendingUp,
    title: 'Strategy & Growth',
    desc: 'Market research, positioning, and roadmaps that turn vision into measurable outcomes.',
    tags: ['Research', 'Positioning', 'Analytics'],
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">What We Do</p>
            <h2 className="text-section font-bold text-white">
              Services engineered<br />for <span className="text-gradient-white">impact</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-400">
            From first sketch to final pixel, we deliver end-to-end creative solutions
            tailored to your brand's ambition and audience.
          </p>
        </Reveal>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServiceCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  icon: typeof PenTool;
  title: string;
  desc: string;
  tags: string[];
};

function ServiceCard({ icon: Icon, title, desc, tags }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-850/60 p-8 backdrop-blur-sm"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
          <Icon size={22} className="text-white transition-colors group-hover:text-accent" />
        </div>

        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-ink-400">{desc}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/8 px-3 py-1 text-xs text-ink-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>Learn more</span>
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-accent to-accent/0 transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
}
