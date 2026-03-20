import { useModal } from './modal-context'

export function HeroSection() {
  const { openResidency, openClub } = useModal()

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        background: '#060606',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1549476464-37392f717541?w=1800&q=85&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          animation: 'heroZoom 12s ease-out forwards',
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(6,6,6,0.3) 0%, rgba(6,6,6,0.15) 40%, rgba(6,6,6,0.8) 70%, rgba(6,6,6,0.98) 100%)',
        }}
      />

      {/* Brand color line top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background:
            'linear-gradient(to right, transparent, #C4521E 30%, #E8622A 60%, transparent)',
        }}
      />

      {/* Insignia watermark — top right, soft */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-60px',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/logo-insignia-white.png"
          alt=""
          style={{ width: '380px', height: 'auto' }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem 5rem',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            animation: 'fadeUp 0.8s ease 0.2s both',
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
            Miami — Est. 2025
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            lineHeight: 0.92,
            color: '#F5F0E8',
            margin: '0 0 1.5rem',
            maxWidth: '900px',
            animation: 'fadeUp 0.8s ease 0.4s both',
          }}
        >
          Train Like Your
          <br />
          <em style={{ color: '#C4521E', fontStyle: 'italic' }}>Career</em>{' '}
          Depends On It.
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: '"Syne", sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
            lineHeight: 1.6,
            color: 'rgba(245,240,232,0.7)',
            maxWidth: '480px',
            margin: '0 0 2.5rem',
            animation: 'fadeUp 0.8s ease 0.6s both',
          }}
        >
          Miami's premier performance residency for high-achieving
          professionals.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.8s ease 0.8s both',
          }}
        >
          <button
            onClick={openResidency}
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#F5F0E8',
              background: '#C4521E',
              border: 'none',
              cursor: 'pointer',
              padding: '1rem 2.2rem',
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D4632F'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C4521E'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Apply for the Residency
          </button>
          <button
            onClick={openClub}
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#F5F0E8',
              background: 'transparent',
              border: '1.5px solid rgba(245,240,232,0.4)',
              cursor: 'pointer',
              padding: '1rem 2.2rem',
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C4521E'
              e.currentTarget.style.color = '#C4521E'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.4)'
              e.currentTarget.style.color = '#F5F0E8'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Join Club STASHON X
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'fadeUp 0.8s ease 1.1s both',
          }}
        >
          <div
            style={{
              width: '1px',
              height: '50px',
              background: 'linear-gradient(to bottom, #C4521E, transparent)',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'rgba(245,240,232,0.35)',
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
            }}
          >
            Scroll
          </span>
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
