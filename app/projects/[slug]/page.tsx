import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProject, getAllProjects } from '@/lib/projects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const nextProject = allProjects[currentIndex + 1];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <article className="py-20 px-6">
          <div className="container max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-300 transition-colors mb-6 text-sm"
              >
                ← Back to Projects
              </Link>

              <h1 className="text-5xl md:text-6xl font-bold font-display mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                {project.tagline}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-white/10">
                <div>
                  <p className="text-slate-300 text-sm uppercase tracking-wide">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 ml-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 text-slate-200 hover:text-blue-200 hover:border-blue-500/40 rounded-lg transition-colors"
                    >
                      <Code className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-200 rounded-lg hover:bg-blue-500/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none mb-20">
              <MDXRemote source={project.content} />
            </div>

            {/* Next Project CTA */}
            {nextProject && (
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
                <p className="text-slate-300 text-sm mb-4">Next Project</p>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center justify-between"
                >
                  <h3 className="text-2xl font-bold font-display group-hover:text-blue-300 transition-colors">
                    {nextProject.title}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-blue-300 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}