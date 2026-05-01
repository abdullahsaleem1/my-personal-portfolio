import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Projects from '@/components/sections/Projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Browse my portfolio of full-stack MERN, Laravel, and Python projects.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </>
  );
}