import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, ArrowRight, ArrowUp, Mail } from 'lucide-react';
import { MagneticButton } from './animations';

const footerLinks = {
  Services: ['Brand Identity', 'Web Design', 'Development', 'Motion & Video', 'Marketing'],
  Company: ['About', 'Work', 'Process', 'Careers', 'Contact'],
  Resources: ['Blog', 'Case Studies', 'Guides', 'FAQ', 'Support'],
};

const socials = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Github, label: 'GitHub', href: '#' },
];

export function Footer() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-accent/5 blur-[100px]" />

      {/* CTA Band */}
      <div
        ref={ctaRef}
        className="relative border-b border-white/8 px-6 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-ink-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-glow" />
              Let's Build Together
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-section font-bold tracking-tight text-gradient-white"
            >
              Ready to create something extraordinary?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base text-ink-400"
            >
              Join leading brands that trust us to bring their vision to life.
              Subscribe for insights, or start a project today.
            </motion.p>

            {/* Newsletter */}
            <motion.form
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 w-full max-w-md"
            >
              <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 pl-5 transition-all focus-within:border-accent/50 focus-within:bg-white/8">
                <Mail size={18} className="shrink-0 text-ink-400 transition-colors group-focus-within:text-accent" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-ink-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group/btn flex shrink-0 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-600 active:scale-95"
                >
                  <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
                  {!subscribed && (
                    <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-0.5" />
                  )}
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-xs text-accent-300"
                >
                  Thanks for subscribing! We'll be in touch soon.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <a href="#top" className="text-2xl font-bold tracking-tight">
                <span className="text-gradient">3D Global</span>
                <span className="text-ink-300"> Solutions</span>
              </a>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
                An international creative agency building bold brands and immersive
                digital experiences that move people.
              </p>
              <div className="mt-6 flex gap-3">
                {socials.map(({ Icon, label, href }, i) => (
                  <MagneticButton
                    key={label}
                    href={href}
                    strength={0.4}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 text-ink-300 transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_-5px_rgba(255,77,46,0.5)]"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon size={18} />
                  </MagneticButton>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([heading, links], colIndex) => (
              <div key={heading} className="lg:col-span-2">
                <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-500">
                  {heading}
                </h4>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center text-sm text-ink-400 transition-colors hover:text-white"
                      >
                        <span className="mr-0 h-px w-0 bg-accent transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Card */}
            <div className="lg:col-span-2">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-ink-500">
                Get in Touch
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="mailto:hello@3dglobal.solutions"
                    className="text-ink-400 transition-colors hover:text-white"
                  >
                    hello@3dglobal.solutions
                  </a>
                </li>
                <li className="text-ink-400">
                  +1 (555) 010-2025
                </li>
                <li className="text-ink-400">
                  21 Innovation District<br />
                  New York, NY 10001
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/8 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <p className="text-sm text-ink-500">
              © 2026 3D Global Solutions. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-5">
              <a href="#" className="text-sm text-ink-500 transition-colors hover:text-white">Privacy</a>
              <a href="#" className="text-sm text-ink-500 transition-colors hover:text-white">Terms</a>
              <a href="#" className="text-sm text-ink-500 transition-colors hover:text-white">Cookies</a>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-ink-500 transition-colors hover:text-accent"
              aria-label="Back to top"
            >
              <span>Top</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-accent group-hover:bg-accent/10">
                <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mx-auto mt-6 max-w-7xl border-t border-white/5 pt-5">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-xs text-ink-600 transition-colors hover:text-ink-300"
            >
              <span>Designed & Developed by</span>
              <span className="font-semibold tracking-wide text-gradient transition-all group-hover:tracking-wider">
                DU
              </span>
              <span className="h-1 w-1 rounded-full bg-accent/50 transition-all group-hover:bg-accent group-hover:scale-150" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
