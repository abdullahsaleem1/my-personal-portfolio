import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProject, getAllProjects } from '@/lib/projects';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Code, ExternalLink, ArrowLeft } from 'lucide-react';

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
        <article className="py-16 px-4 sm:px-6">
          <div className="container max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-body-text hover:text-picto-primary transition-colors mb-6 text-sm font-medium no-underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-body-text mb-8">{project.tagline}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="w-full">
                  <p className="text-soft-dark text-xs font-semibold uppercase tracking-wider">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-picto-primary-light/50 border border-picto-primary/20 text-picto-primary-dark rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-heading hover:text-picto-primary hover:border-picto-primary rounded-lg text-sm font-semibold transition-colors no-underline"
                    >
                      <Code className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-picto inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold no-underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-slate max-w-none mb-20">
              <MDXRemote source={project.content} />
            </div>

            {/* Next Project CTA */}
            {nextProject && (
              <div className="p-6 sm:p-8 bg-soft-white border border-gray-200 rounded-2xl">
                <p className="text-soft-dark text-sm mb-4">Next Project</p>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center justify-between no-underline"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-heading group-hover:text-picto-primary transition-colors">
                    {nextProject.title}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-picto-primary shrink-0 group-hover:translate-x-1 transition-transform" />
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
