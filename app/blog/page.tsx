import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes, case studies, and learning logs from Abdullah Saleem.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-6">
          <div className="container max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
              Blog
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl">
              Coming soon. I will share build notes, case studies, and lessons
              learned from shipping real projects.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
