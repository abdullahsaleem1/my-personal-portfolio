import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Abdullah Saleem, his journey, skills, and experience in software engineering.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}