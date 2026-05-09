import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/effects/CustomCursor';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <CustomCursor />
    </>
  );
}