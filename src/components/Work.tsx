import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, StaggerContainer, StaggerItem } from './animations';

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  span: string;
};

const projects: Project[] = [
  {
    title: 'Maison Lumière',
    category: 'Brand Identity · Fashion',
    year: '2025',
    image: 'https://images.pexels.com/photos/9150031/pexels-photo-9150031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Aether Architecture',
    category: 'Web Design · Studio',
    year: '2025',
    image: 'https://images.pexels.com/photos/38744855/pexels-photo-38744855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    title: 'Essence Parfum',
    category: 'Product · Luxury',
    year: '2024',
    image: 'https://images.pexels.com/photos/36779954/pexels-photo-36779954.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    title: 'Florentine Facade',
    category: 'Brand Campaign · Retail',
    year: '2024',
    image: 'https://images.pexels.com/photos/36721241/pexels-photo-36721241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: 'lg:col-span-2',
  },
  {
    title: 'Optika Lens',
    category: 'Product Photography',
    year: '2025',
    image: 'https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
  {
    title: 'Copenhagen Glass',
    category: 'Architecture · Web',
    year: '2024',
    image: 'https://images.pexels.com/photos/32647132/pexels-photo-32647132.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    span: '',
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Selected Work</p>
            <h2 className="text-section font-bold text-white">
              Projects that<br /><span className="text-gradient-white">define us</span>
            </h2>
          </div>
          <p className="max-w-md text-ink-400">
            A curated selection of recent collaborations across fashion, architecture,
            product, and luxury retail.
          </p>
        </Reveal>

        <StaggerContainer className="grid auto-rows-[280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.title} className={project.span}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/8"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />

      <motion.div
        className="absolute inset-0 bg-ink-950/60"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <motion.div
          animate={{ y: hovered ? -8 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-ink-300">{project.year}</span>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={20} className="text-accent" />
            </motion.div>
          </div>
          <h3 className="text-xl font-semibold text-white lg:text-2xl">{project.title}</h3>
          <motion.p
            animate={{ opacity: hovered ? 1 : 0.7 }}
            className="mt-1 text-sm text-ink-300"
          >
            {project.category}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-accent"
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.article>
  );
}
