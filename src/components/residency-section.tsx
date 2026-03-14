import { useModal } from './modal-context'

export function ResidencySection() {
  const { openResidency } = useModal()

  const features = [
    {
      icon: '◈',
      title: 'Curated Cohorts',
      desc: 'Small groups of high-performing professionals — vetted, intentional, no exceptions.',
    },
    {
      icon: '◈',
      title: '3 Sessions / Week',
      desc: 'Upper Body · Lower Body · Full-Body Hybrid. Progressive, structured, adaptive.',
    },
    {
      icon: '◈',
      title: 'Full Session Architecture',
      desc: 'Breathwork reset → Skill & strength → Hybrid performance challenge → Closing reinforcement.',
    },
    {
      icon: '◈',
      title: 'Weekly Adventure Experiences',
      desc: 'Kayaking, outdoor challenges, and curated experiences that extend performance beyond the gym.',
    },
    {
      icon: '◈',
      title: 'Between-Session Support',
      desc: 'Direct coach check-ins and a private cohort channel — accountability built into the architecture.',
    },
    {
      icon: '◈',
      title: 'Weekly Achievement Tokens',
      desc: 'Progress is recognized. Milestones are earned. The system rewards the work.',
    },
  ]

  return (
    <section
      id="residency"
      style={{
        background: '#0A0A0A',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 15% 80%, rgba(196,82,30,0.08) 0%, transparent 55%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          className="residency-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'end',
            marginBottom: '5rem',
          }}
        >
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
                The Residency
              </span>
            </div>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.0,
                color: '#F5F0E8',
                margin: 0,
              }}
            >
              An 8-Week Performance
              <br />
              <em style={{ color: '#C4521E', fontStyle: 'italic' }}>
                Residency.
              </em>
              <br />
              Not a gym membership.
            </h2>
          </div>

          <div>
            <p
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.6)',
                margin: '0 0 1.5rem',
              }}
            >
              Application is required. Cohort sizes are intentionally small.
              This is not a gym you join — it's a program you earn access to.
              Every detail of the eight weeks is designed to compound.
            </p>
            <p
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.38)',
                margin: 0,
                fontStyle: 'italic',
              }}
            >
              Graduates transition automatically into Club STASHON X.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0',
            border: '1px solid rgba(196,82,30,0.2)',
            marginBottom: '4rem',
          }}
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              style={{
                padding: '2.5rem',
                borderRight:
                  i % 3 !== 2 ? '1px solid rgba(196,82,30,0.2)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(196,82,30,0.2)' : 'none',
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
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  color: '#C4521E',
                  marginBottom: '1rem',
                  opacity: 0.8,
                }}
              >
                {feature.icon}
              </div>
              <h4
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.1em',
                  color: '#F5F0E8',
                  textTransform: 'uppercase',
                  margin: '0 0 0.75rem',
                }}
              >
                {feature.title}
              </h4>
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.5)',
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={openResidency}
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F5F0E8',
              background: '#C4521E',
              border: 'none',
              cursor: 'pointer',
              padding: '1.1rem 3rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
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
            Apply to the Next Cohort
            <span style={{ fontSize: '1rem' }}>→</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .residency-header {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
