import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';
import Resume from '@/components/sections/Resume';
import WorkProcess from '@/components/sections/WorkProcess';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import HireMe from '@/components/sections/HireMe';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/effects/ScrollToTop';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Resume />
        <WorkProcess />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
