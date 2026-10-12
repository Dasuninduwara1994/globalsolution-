import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Services: ['Brand Identity', 'Web Design', 'Development', 'Motion & Video', 'Marketing'],
  Company: ['About', 'Work', 'Process', 'Careers', 'Contact'],
  Social: ['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#top" className="text-2xl font-bold tracking-tight">
              <span className="text-gradient">3D Global</span>
              <span className="text-ink-300"> Solutions</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              An international creative agency building bold brands and immersive
              digital experiences.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 text-ink-300 transition-all hover:border-accent hover:text-accent"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">{heading}</h4>
              <ul className="space-y-3">
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
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-ink-500">© 2026 3D Global Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-ink-500 transition-colors hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-ink-500 transition-colors hover:text-white">Terms</a>
            <a href="#" className="text-sm text-ink-500 transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
