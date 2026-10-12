import { motion, useScroll, useSpring } from 'framer-motion';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Stats } from './components/Stats';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-accent via-accent-400 to-accent-200"
      />

      <AnimatedBackground />
      <Navbar />

      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Marquee />
          <Services />
          <Work />
          <Stats />
          <Process />
          <Testimonials />
          <CTA />
        </motion.div>
      </main>

      <Footer />
    </>
  );
}

export default App;
