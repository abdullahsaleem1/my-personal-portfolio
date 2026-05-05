import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export interface ProjectMetadata {
  title: string;
  tagline: string;
  description?: string;
  stack: string[];
  tags: string[];
  status: 'live' | 'in-progress' | 'archived';
  featured: boolean;
  github?: string;
  live?: string;
  date: string;
  slug: string;
}

export interface Project extends ProjectMetadata {
  content: string;
}

export function getAllProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR);
  const projects = files.map((file) => {
    const filePath = path.join(PROJECTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(content);
    return {
      ...data,
      content: markdownContent,
      slug: file.replace('.mdx', ''),
    } as Project;
  });

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getProject(slug: string): Project {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, 'utf8');
  const { data, content: markdownContent } = matter(content);
  return {
    ...data,
    content: markdownContent,
    slug,
  } as Project;
}