import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Abdullah Saleem — Software Engineer',
    template: '%s | Abdullah Saleem',
  },
  description:
    'Software Engineer proficient in Python, PHP, Java, JavaScript, and C++. Expert in full-stack development with Laravel & Flask, AI-integrated automation systems, and web scraping pipelines. Based in Lahore, Pakistan.',
  keywords: [
    'Abdullah Saleem',
    'Software Engineer Lahore',
    'Python Developer',
    'Laravel Developer',
    'Full Stack Developer',
    'Web Scraping',
    'Automation Engineer',
    'Flask Developer',
    'AI ML Developer',
    'University of Lahore',
  ],
  authors: [{ name: 'Abdullah Saleem' }],
  creator: 'Abdullah Saleem',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdullahsaleem.vercel.app',
    title: 'Abdullah Saleem — Software Engineer',
    description:
      'Software Engineer specializing in Python, Laravel, Flask, and AI-integrated automation systems.',
    siteName: 'Abdullah Saleem Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdullah Saleem — Software Engineer',
    description:
      'Software Engineer specializing in Python, Laravel, and automation systems.',
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}