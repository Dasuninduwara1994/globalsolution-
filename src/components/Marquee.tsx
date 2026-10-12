const items = [
  'Brand Strategy',
  'Web Design',
  'Development',
  'Motion Design',
  'Digital Marketing',
  'UX Research',
  'Creative Direction',
  'Brand Identity',
];

export function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 py-8">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee items-center gap-12 pr-12">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-3xl font-bold text-ink-600 transition-colors hover:text-accent lg:text-5xl">
                {item}
              </span>
              <span className="text-3xl text-accent lg:text-5xl">/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
