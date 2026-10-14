import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Reveal } from './animations';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Dasun Udugamasooriya',
    role: 'CEO',
    company: 'Fitness Zone',
    avatar: 'https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    text: '3D Global Solutions completely reimagined our brand identity. The result was nothing short of transformative — our engagement doubled within three months of launch.',
  },
  {
    name: 'Dasun Udugamasooriya',
    role: 'Marketing Director',
    company: 'Fitness Zone',
    avatar: 'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    text: 'Working with 3D Global Solutions felt like having an extension of our own team. Their attention to detail and creative vision elevated every touchpoint of our campaign.',
  },
  {
    name: 'Dasun Udugamasooriya',
    role: 'Founder',
    company: 'Fitness Zone',
    avatar: 'https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    text: 'From strategy to execution, 3D Global Solutions delivered beyond what we thought possible. They understood our product better than we did and it showed in every deliverable.',
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">Client Voices</p>
          <h2 className="text-section font-bold text-white">
            What partners <span className="text-gradient-white">say</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative rounded-3xl border border-white/8 bg-ink-850/50 p-8 backdrop-blur-sm lg:p-12">
            <Quote size={40} className="mb-6 text-accent/40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="mb-8 text-lg leading-relaxed text-ink-100 lg:text-2xl">
                  "{testimonials[active].text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="h-14 w-14 rounded-full border border-white/10 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonials[active].name}</div>
                    <div className="text-sm text-ink-400">
                      {testimonials[active].role}, {testimonials[active].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
