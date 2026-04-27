import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

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
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}