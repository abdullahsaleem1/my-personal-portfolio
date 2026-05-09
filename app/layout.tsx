import type { Metadata } from 'next';
import './globals.css';
import Monitoring from '@/components/effects/Monitoring';

export const metadata: Metadata = {
  title: {
    default: 'Abdullah Saleem — Software Engineer',
    template: '%s | Abdullah Saleem',
  },
  description:
    'Software Engineering student at University of Lahore. Full-stack developer specializing in MERN Stack, Laravel, and Python. Based in Lahore, Pakistan.',
  keywords: [
    'Abdullah Saleem',
    'Software Engineer Lahore',
    'MERN Stack Developer',
    'Laravel Developer',
    'Full Stack Developer',
    'University of Lahore',
    'Python Developer',
    'Web Developer Pakistan',
  ],
  authors: [{ name: 'Abdullah Saleem' }],
  creator: 'Abdullah Saleem',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdullahsaleem.dev',
    title: 'Abdullah Saleem — Software Engineer',
    description:
      'Full-stack developer specializing in MERN Stack, Laravel, and Python.',
    siteName: 'Abdullah Saleem Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Saleem — Software Engineer',
    description:
      'Full-stack developer specializing in MERN Stack and Laravel.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Monitoring />
      </body>
    </html>
  );
}