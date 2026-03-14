import { useModal } from './modal-context'

export function FinalCtaSection() {
  const { openResidency, openClub } = useModal()

  return (
    <section
      id="apply"
      style={{
        background: '#060606',
        padding: '9rem 2rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background image overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&q=75&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05,
        }}
      />

      {/* Brand color rule top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, #C4521E 30%, #E8622A 70%, transparent)',
        }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(196,82,30,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Insignia watermark — centered, light-gradient version */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.045,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/logo-insignia-white.png"
          alt=""
          style={{ width: '640px', height: 'auto' }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem',
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
            Now Forming
          </span>
          <div
            style={{ width: '40px', height: '1px', background: '#C4521E' }}
          />
        </div>

        <h2
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            lineHeight: 1.0,
            color: '#F5F0E8',
            margin: '0 0 1.5rem',
          }}
        >
          The first cohort is forming.
          <br />
          <em style={{ color: '#C4521E', fontStyle: 'italic' }}>
            The Founding 20
          </em>
          <br />
          are almost gone.
        </h2>

        <p
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            color: 'rgba(245,240,232,0.55)',
            margin: '0 0 3.5rem',
          }}
        >
          Both paths begin with one decision.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
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
              padding: '1.1rem 2.5rem',
              display: 'inline-block',
              transition: 'all 0.25s ease',
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
              border: '1.5px solid rgba(245,240,232,0.35)',
              cursor: 'pointer',
              padding: '1.1rem 2.5rem',
              display: 'inline-block',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C4521E'
              e.currentTarget.style.color = '#C4521E'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.35)'
              e.currentTarget.style.color = '#F5F0E8'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Join Club STASHON X
          </button>
        </div>

        {/* Fine print */}
        <p
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: '0.72rem',
            color: 'rgba(245,240,232,0.22)',
            marginTop: '2.5rem',
            letterSpacing: '0.08em',
            lineHeight: 1.6,
          }}
        >
          THEFLOWSTASHON XTRM · Brickell, Miami
          <br />
          Application required. Cohort sizes are intentionally small.
        </p>
      </div>

      {/* Brand color rule bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background:
            'linear-gradient(to right, transparent, #C4521E 30%, #E8622A 70%, transparent)',
        }}
      />
    </section>
  )
}
