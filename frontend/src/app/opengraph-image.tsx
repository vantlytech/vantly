import { ImageResponse } from 'next/og';

export const alt = 'Vantly | GEO, SEO & Website Development Agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0b1220 0%, #1d4ed8 100%)',
          color: '#ffffff',
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#93c5fd',
          }}
        >
          Vantly
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 76,
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          GEO, SEO &amp; Website Development
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 34,
            color: '#bfdbfe',
          }}
        >
          Get found. Get chosen. Grow faster.
        </div>
      </div>
    ),
    size
  );
}
