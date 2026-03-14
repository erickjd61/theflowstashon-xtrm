export function PhilosophySection() {
  const pillars = [
    {
      number: '80',
      label: 'Mental Architecture',
      desc: 'The psychology of discipline — building systems that make consistency inevitable.',
    },
    {
      number: '20',
      label: 'Physical Execution',
      desc: 'Once the mind is structured, the body follows without resistance.',
    },
    {
      number: '∞',
      label: 'Sustained Performance',
      desc: 'Not a 12-week program. A permanent operating system.',
    },
  ]

  return (
    <section
      id="philosophy"
      style={{
        background: '#0A0A0A',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Insignia watermark — right side, now using the light-gradient version */}
      <div
        style={{
          position: 'absolute',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.055,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/logo-insignia-white.png"
          alt=""
          style={{ width: '480px', height: 'auto' }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 80% 50%, rgba(196,82,30,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="philosophy-grid"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Text */}
        <div>
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
              The Methodology
            </span>
          </div>

          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 600,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.0,
              color: '#F5F0E8',
              margin: '0 0 2rem',
            }}
          >
            Performance is{' '}
            <em style={{ color: '#C4521E', fontStyle: 'italic' }}>80%</em>
            <br />
            Mental Architecture.
          </h2>

          <p
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.6)',
              margin: '0 0 1.5rem',
              maxWidth: '480px',
            }}
          >
            Most fitness environments focus only on the physical. THEFLOWSTASHON
            XTRM reverses this — building the psychological systems that make
            discipline repeatable before asking the body to execute.
          </p>
          <p
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.6)',
              maxWidth: '480px',
            }}
          >
            The result is not just fitness — it's a personal operating system
            for sustained high performance. Built once. Deployed everywhere.
          </p>
        </div>

        {/* Right: Pillars */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              style={{
                padding: '2rem 1rem',
                borderTop: i === 0 ? '1px solid rgba(196,82,30,0.25)' : 'none',
                borderBottom: '1px solid rgba(196,82,30,0.25)',
                display: 'flex',
                gap: '2rem',
                alignItems: 'flex-start',
                transition: 'background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'rgba(196,82,30,0.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'transparent')
              }
            >
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  fontSize: '3rem',
                  lineHeight: 1,
                  color: '#C4521E',
                  opacity: 0.85,
                  minWidth: '80px',
                }}
              >
                {pillar.number}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    color: '#F5F0E8',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  {pillar.label}
                </div>
                <p
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 400,
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'rgba(245,240,232,0.5)',
                    margin: 0,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}
