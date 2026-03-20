export function CommunitySection() {
  const photos = [
    {
      src: '/images/training-1.jpg',
      alt: 'Training session — cable work and battle ropes',
      span: 'tall',
    },
    {
      src: '/images/training-rooftop.jpg',
      alt: 'Rooftop group training at sunrise',
      span: 'normal',
    },
    {
      src: '/images/training-2.jpg',
      alt: 'Training session — dual workout',
      span: 'normal',
    },
    {
      src: '/images/training-sled.jpg',
      alt: 'Sled push at competition',
      span: 'normal',
    },
    {
      src: '/images/training-plates.jpg',
      alt: 'Overhead plate press — partner training',
      span: 'normal',
    },
    {
      src: '/images/training-beach.jpg',
      alt: 'Beach sprint training at sunset',
      span: 'wide',
    },
    {
      src: '/images/training-kayaking.jpg',
      alt: 'Group kayaking through mangroves',
      span: 'normal',
    },
  ]

  return (
    <section
      id="community"
      style={{
        background: '#080808',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem',
              }}
            >
              <div
                style={{ width: '40px', height: '1px', background: '#C4521E' }}
              />
              <span
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  color: '#C4521E',
                  textTransform: 'uppercase',
                }}
              >
                In The Field
              </span>
            </div>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: 1.05,
                color: '#F5F0E8',
                margin: 0,
              }}
            >
              This is what your weekends
              <br />
              <em style={{ color: '#C4521E', fontStyle: 'italic' }}>
                could look like.
              </em>
            </h2>
          </div>

          <a
            href="https://instagram.com/theflowstashon"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 600,
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              color: 'rgba(245,240,232,0.45)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C4521E')}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'rgba(245,240,232,0.45)')
            }
          >
            Follow @theflowstashon
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Photo Grid */}
        <div
          className="photo-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '6px',
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                overflow: 'hidden',
                gridColumn: photo.span === 'wide' ? 'span 2' : 'span 1',
                gridRow: photo.span === 'tall' ? 'span 2' : 'span 1',
                aspectRatio:
                  photo.span === 'wide'
                    ? '2/1'
                    : photo.span === 'tall'
                      ? '3/4'
                      : '1/1',
                background: '#111',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  filter: 'grayscale(15%) contrast(1.05)',
                  transition: 'transform 0.6s ease, filter 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.filter = 'grayscale(15%) contrast(1.05)'
                }}
              />
              {/* Overlay on hover */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(6,6,6,0.5) 0%, transparent 50%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .photo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .photo-grid > div {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            aspect-ratio: 1/1 !important;
          }
        }
      `}</style>
    </section>
  )
}
