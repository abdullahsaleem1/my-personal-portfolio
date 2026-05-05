import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects();

  const projectRoutes = projects.map((project) => ({
    url: `https://abdullahsaleem.dev/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: 'https://abdullahsaleem.dev',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://abdullahsaleem.dev/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://abdullahsaleem.dev/projects',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://abdullahsaleem.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: 'https://abdullahsaleem.dev/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    ...projectRoutes,
  ];
}