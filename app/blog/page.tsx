import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Blog from '@/components/sections/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes, case studies, and learning logs from Abdullah Saleem.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Blog />
      </main>
      <Footer />
    </>
  );
}
