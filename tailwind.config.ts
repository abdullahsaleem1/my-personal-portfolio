import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg': {
          primary: '#0a0a0a',
          secondary: '#111111',
          tertiary: '#1a1a1a',
        },
        'text': {
          primary: '#f5f5f0',
          secondary: '#a0a0a0',
          muted: '#555555',
        },
        'accent': {
          green: '#00ff88',
          'green-dim': '#00cc6a',
          blue: '#3b82f6',
          amber: '#f59e0b',
          red: '#ef4444',
        },
        'border': {
          subtle: 'rgba(255, 255, 255, 0.06)',
          active: 'rgba(0, 255, 136, 0.3)',
        },
      },
      fontFamily: {
        display: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      spacing: {
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        card: '0 0 40px rgba(0, 0, 0, 0.6)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.15)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.1)',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.15)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 255, 136, 0.2)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
  require('@tailwindcss/typography'),
],
};

export default config;