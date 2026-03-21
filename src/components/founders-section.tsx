import type { JSX } from 'react'

export function FoundersSection(): JSX.Element {
  const founders = [
    {
      name: 'Tashon Marté',
      title: 'Co-Founder | Lead Performance Coach',
      credential:
        'BS Exercise Science & Kinesiology · Pro Hybrid Athlete Champion',
      image: '/images/tashon.jpg',
      objectPosition: 'top center',
      bio: `Tashon Marté is a Pro Hybrid Athlete Champion and credentialed performance coach with a BS in Exercise Science and Kinesiology. A nationally recognized competitor, he has spent years studying how elite athletes build bodies that don't just perform — they endure. His training philosophy rejects specialization in favor of adaptability, which is why hybrid training is not a method he teaches but a discipline he lives. At THEFLOWSTASHON XTRM, Tashon is the physical standard. The proof of concept. Every program he builds is designed to develop well-rounded, resilient professionals who train with the same structure and intensity as the athletes he has competed alongside.`,
    },
    {
      name: 'Carla Cid de Diego',
      title: 'Co-Founder | Master Behavioral Coach',
      credential: 'BFA Design & Marketing · 20+ Years Business Development',
      image: '/images/carla.jpg',
      objectPosition: 'center 15%',
      bio: `Carla Cid de Diego is a Master Behavioral Coach with a BFA in Design and Marketing and over twenty years of experience building businesses from the ground up across industries. Bilingual in English and Spanish, she brings both the creative and strategic architecture to everything THEFLOWSTASHON XTRM delivers. Carla's work is rooted in a single insight: most people know exactly what they need to do — and still don't do it consistently. That gap between intention and action is her specialty. The 80/20 methodology at the heart of the residency is her design. She builds the mental systems that make Tashon's training sustainable — and turns participants not just into athletes, but into people who operate differently.`,
    },
  ]

  return (
    <section
      id="founders"
      style={{
        background: '#060606',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Insignia watermark — left, light-gradient version */}
      <div
        style={{
          position: 'absolute',
          left: '-120px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.045,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/logo-insignia-white.png"
          alt=""
          style={{ width: '540px', height: 'auto' }}
        />
      </div>

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
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
              The Founders
            </span>
          </div>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 600,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.0,
              color: '#F5F0E8',
              margin: 0,
              maxWidth: '600px',
            }}
          >
            Two disciplines.
            <br />
            <em style={{ color: '#C4521E', fontStyle: 'italic' }}>
              One system.
            </em>
          </h2>
        </div>

        {/* Founders Grid */}
        <div
          className="founders-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
          }}
        >
          {founders.map((founder) => (
            <div key={founder.name}>
              {/* Photo */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '2rem',
                  aspectRatio: '3/4',
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: founder.objectPosition,
                    display: 'block',
                    filter: 'grayscale(20%) contrast(1.05)',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.03)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
                {/* Bottom gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background:
                      'linear-gradient(to top, rgba(6,6,6,0.7) 0%, transparent 100%)',
                  }}
                />
                {/* Brand accent bar */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background:
                      'linear-gradient(to right, #C4521E, #E8622A 50%, #C4521E)',
                  }}
                />
              </div>

              {/* Name & Title */}
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  color: '#F5F0E8',
                  margin: '0 0 0.25rem',
                  lineHeight: 1.1,
                }}
              >
                {founder.name}
              </h3>
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(245,240,232,0.5)',
                  textTransform: 'uppercase',
                  margin: '0 0 0.5rem',
                }}
              >
                {founder.title}
              </p>
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: '#C4521E',
                  margin: '0 0 1.25rem',
                  opacity: 0.9,
                }}
              >
                {founder.credential}
              </p>

              {/* Divider */}
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: '#C4521E',
                  marginBottom: '1.25rem',
                  opacity: 0.6,
                }}
              />

              {/* Bio */}
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 400,
                  fontSize: '0.9rem',
                  lineHeight: 1.85,
                  color: 'rgba(245,240,232,0.58)',
                  margin: 0,
                }}
              >
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founders-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
