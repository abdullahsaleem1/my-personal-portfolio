export default function HireMe() {
  return (
    <section className="py-20 md:py-24" style={{ background: '#ffbd39' }}>
      <div className="content px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            I&apos;m <span className="text-black">Available</span> for freelancing
          </h2>
          <p className="text-white/90 text-sm sm:text-base mt-4">
            Have a project in mind? Let&apos;s build something great together — from
            automation systems to full-stack applications.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-full uppercase tracking-[2px] font-semibold text-xs px-8 py-4 bg-black text-clark-gold no-underline hover:scale-[1.02] transition-transform duration-300"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  );
}
