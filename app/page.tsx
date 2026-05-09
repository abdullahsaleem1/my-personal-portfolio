import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Profile from '@/components/sections/Profile';
import WorkProcess from '@/components/sections/WorkProcess';
import Projects from '@/components/sections/Projects';
import WorkTogether from '@/components/sections/WorkTogether';
import Blog from '@/components/sections/Blog';
import Services from '@/components/sections/Services';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Testimonial from '@/components/sections/Testimonial';
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
        <div className="bg-soft-white pt-30">
          <WorkProcess />
        </div>
        <Projects />
        <div className="bg-gray-900">
          <WorkTogether />
        </div>
        <div className="blog-background">
          <Blog />
        </div>
        <div className="bg-soft-white">
          <Services />
        </div>
        <Skills />
        <Experience />
        <Education />
        <Testimonial />
        <Contact />
      </main>
      <div className="bg-dark-bg">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}