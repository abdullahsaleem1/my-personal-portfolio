import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abdullah Saleem - Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        background: '#0a0a0a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px',
        fontFamily: 'system-ui',
      }}
    >
      <div
        style={{
          color: '#00ff88',
          fontSize: '24px',
          marginBottom: '20px',
        }}
      >
        abdullahsaleem.dev
      </div>
      <div
        style={{
          color: '#f5f5f0',
          fontSize: '64px',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}
      >
        Software Engineer
      </div>
      <div
        style={{
          color: '#a0a0a0',
          fontSize: '32px',
        }}
      >
        MERN Stack • AI/ML • Full-Stack Development
      </div>
    </div>,
    { ...size }
  );
}