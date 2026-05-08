import Link from 'next/link';

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
          Blog
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl">
          Coming soon. I will share build notes, case studies, and lessons
          learned from shipping real projects.
        </p>
        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border-subtle text-text-primary rounded-lg hover:border-accent-green hover:text-accent-green transition-colors"
          >
            Visit the blog page →
          </Link>
        </div>
      </div>
    </section>
  );
}
