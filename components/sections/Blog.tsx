import Link from 'next/link';

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Coming soon. I will share build notes, case studies, and lessons
            learned from shipping real projects.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <p className="text-sm uppercase tracking-wide text-purple-300">
              Case Studies
            </p>
            <h3 className="text-xl font-semibold text-white">Deep dives are on the way</h3>
            <p className="text-gray-400 text-sm">
              I am compiling build breakdowns, stack decisions, and lessons learned from
              real client work and university projects.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4">
            <p className="text-sm uppercase tracking-wide text-purple-300">
              Learning Log
            </p>
            <h3 className="text-xl font-semibold text-white">Notes from the journey</h3>
            <p className="text-gray-400 text-sm">
              Expect concise writeups on MERN, Laravel, and AI/ML experiments as I ship.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Visit the blog page
          </Link>
        </div>
      </div>
    </section>
  );
}
