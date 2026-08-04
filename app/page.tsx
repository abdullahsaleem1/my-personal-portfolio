import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';
import Projects from '@/components/sections/Projects';
import WorkProcess from '@/components/sections/WorkProcess';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/effects/ScrollToTop';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <div className="introduction-profile-background">
          <div className="content">
            <Hero />
            <Profile />
          </div>
        </div>
        <Projects />
        <WorkProcess />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <div className="bg-dark-bg">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}