import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'picto-primary': '#6C3CE1',
        'picto-primary-dark': '#4F2DA8',
        'picto-primary-light': '#E8DEFF',
        'soft-white': '#F5F6F8',
        'soft-dark': '#6B7280',
        'dark-bg': '#1E293B',
        'heading': '#0F172A',
        'body-text': '#475569',
        'card-border': '#E2E8F0',
        'accent-teal': '#14B8A6',
      },
      fontFamily: {
        sans: ['"Inter"', '"Work Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};

export default config;