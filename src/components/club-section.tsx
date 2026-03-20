import { useModal } from './modal-context'

export function ClubSection() {
  const { openClub } = useModal()

  const missions = [
    {
      emoji: '🌊',
      label: 'The Elements',
      tag: 'Mission 01',
      desc: 'Secret beaches, sandbars, ocean plunges. Training where the Atlantic sets the tempo.',
    },
    {
      emoji: '🏙',
      label: 'Urban Ops',
      tag: 'Mission 02',
      desc: "Private rooftops, museum plazas, architectural movement through the city's most striking spaces.",
    },
    {
      emoji: '💧',
      label: 'Aqua Labs',
      tag: 'Mission 03',
      desc: 'Yachts, private docks, water-based hybrid training. Miami from the water.',
    },
    {
      emoji: '🏡',
      label: 'The Estate',
      tag: 'Mission 04',
      desc: 'Private homes, remote villas, high-intensity circuits. Curated by invitation only.',
    },
  ]

  const weeklyAdventure = {
    icon: '◈',
    title: 'Weekly Adventure Experiences',
    desc: 'Kayaking, outdoor challenges, and curated experiences that extend performance beyond the gym.',
  }

  const tiers = [
    {
      name: 'The Founding 20',
      price: '$149',
      period: '/month',
      note: 'Locked rate — first 20 members only',
      launch: 'Launching March 14',
      features: [
        '4 Weekend Missions / month',
        'Secret Comms network',
        'Founding member rate — locked permanently',
        'First access to Black Ops events',
      ],
      highlight: true,
      cta: 'Secure Your Spot',
    },
    {
      name: 'Standard Membership',
      price: '$199',
      period: '/month',
      note: null,
      launch: null,
      features: [
        '4 Weekend Missions / month',
        'Secret Comms network',
        'Location reveal 24–72 hours in advance',
        'Community access',
      ],
      highlight: false,
      cta: 'Join STASHON X',
    },
    {
      name: 'Residency Alumni',
      price: '$129',
      period: '/month',
      note: 'Exclusive alumni rate',
      launch: null,
      features: [
        'Everything in Standard',
        'Alumni-locked pricing',
        'Complimentary access during 8-week residency',
        'Priority cohort referral',
      ],
      highlight: false,
      cta: 'Graduate First',
    },
  ]

  return (
    <section
      id="club"
      style={{
        background: '#060606',
        padding: '8rem 2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(ellipse at 20% 60%, rgba(196,82,30,0.07) 0%, transparent 55%)',
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
        <div style={{ marginBottom: '4rem' }}>
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
              Club STASHON X
            </span>
          </div>
          <div
            className="club-header-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'end',
            }}
          >
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
              Every Weekend.
              <br />A New{' '}
              <em style={{ color: '#C4521E', fontStyle: 'italic' }}>
                Mission.
              </em>
            </h2>
            <div>
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.6)',
                  margin: '0 0 1.25rem',
                }}
              >
                STASHON X is a nomadic membership for high-performance
                individuals. No fixed gym. Every weekend, members receive a
                location reveal 24–72 hours in advance and gather for a curated
                fitness experience in an extraordinary Miami setting.
              </p>
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.8,
                  color: 'rgba(245,240,232,0.6)',
                  margin: 0,
                }}
              >
                Members also gain access to the Secret Comms — an exclusive
                network connecting Miami's most driven performers.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Adventure Feature Block */}
        <div
          style={{
            border: '1px solid rgba(196,82,30,0.2)',
            padding: '2.5rem',
            marginBottom: '3rem',
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
          <div
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.8rem',
              color: '#C4521E',
              opacity: 0.8,
              flexShrink: 0,
              lineHeight: 1,
              marginTop: '0.1rem',
            }}
          >
            {weeklyAdventure.icon}
          </div>
          <div>
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
              {weeklyAdventure.title}
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
              {weeklyAdventure.desc}
            </p>
          </div>
        </div>

        {/* Missions Grid */}
        <div
          className="missions-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5px',
            background: 'rgba(196,82,30,0.2)',
            marginBottom: '6rem',
            border: '1.5px solid rgba(196,82,30,0.2)',
          }}
        >
          {missions.map((mission) => (
            <div
              key={mission.label}
              style={{
                background: '#060606',
                padding: '3rem',
                transition: 'background 0.35s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0E0E0E'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#060606'
              }}
            >
              <div
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  color: 'rgba(196,82,30,0.55)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                {mission.tag}
              </div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                {mission.emoji}
              </div>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  fontSize: '2rem',
                  color: '#F5F0E8',
                  margin: '0 0 0.75rem',
                  lineHeight: 1.1,
                }}
              >
                {mission.label}
              </h3>
              <p
                style={{
                  fontFamily: '"Syne", sans-serif',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'rgba(245,240,232,0.5)',
                  margin: 0,
                }}
              >
                {mission.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Membership Tiers */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#F5F0E8',
                margin: '0 0 0.5rem',
              }}
            >
              Membership Tiers
            </h3>
            <p
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '0.85rem',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              Black Ops add-ons available for all members — Yacht Yoga, special
              activations, premium events.
            </p>
          </div>

          <div
            className="tiers-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
            }}
          >
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  border: tier.highlight
                    ? '1.5px solid #C4521E'
                    : '1.5px solid rgba(245,240,232,0.1)',
                  padding: '2.5rem',
                  position: 'relative',
                  background: tier.highlight
                    ? 'rgba(196,82,30,0.06)'
                    : 'transparent',
                }}
              >
                {tier.highlight && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-1px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#C4521E',
                      color: '#F5F0E8',
                      fontFamily: '"Syne", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      padding: '0.25rem 1rem',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Almost Gone
                  </div>
                )}

                <div
                  style={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    color: tier.highlight ? '#C4521E' : 'rgba(245,240,232,0.5)',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  {tier.name}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.25rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 700,
                      fontSize: '3.5rem',
                      color: '#F5F0E8',
                      lineHeight: 1,
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '0.85rem',
                      color: 'rgba(245,240,232,0.4)',
                    }}
                  >
                    {tier.period}
                  </span>
                </div>

                {tier.note && (
                  <p
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '0.75rem',
                      color: '#C4521E',
                      margin: '0 0 0.5rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {tier.note}
                  </p>
                )}

                {tier.launch && (
                  <div
                    style={{
                      fontFamily: '"Syne", sans-serif',
                      fontSize: '0.7rem',
                      letterSpacing: '0.12em',
                      color: 'rgba(245,240,232,0.4)',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    {tier.launch}
                  </div>
                )}

                <div
                  style={{
                    borderTop: '1px solid rgba(245,240,232,0.1)',
                    paddingTop: '1.5rem',
                    marginTop: '1rem',
                    marginBottom: '2rem',
                  }}
                >
                  {tier.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <span
                        style={{
                          color: '#C4521E',
                          fontSize: '0.7rem',
                          marginTop: '0.2rem',
                          flexShrink: 0,
                        }}
                      >
                        ◆
                      </span>
                      <span
                        style={{
                          fontFamily: '"Syne", sans-serif',
                          fontSize: '0.85rem',
                          color: 'rgba(245,240,232,0.6)',
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openClub}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    padding: '0.9rem',
                    transition: 'all 0.25s',
                    color: '#F5F0E8',
                    background: tier.highlight ? '#C4521E' : 'transparent',
                    border: tier.highlight
                      ? 'none'
                      : '1px solid rgba(245,240,232,0.2)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (tier.highlight) {
                      e.currentTarget.style.background = '#D4632F'
                    } else {
                      e.currentTarget.style.borderColor = '#C4521E'
                      e.currentTarget.style.color = '#C4521E'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tier.highlight) {
                      e.currentTarget.style.background = '#C4521E'
                    } else {
                      e.currentTarget.style.borderColor =
                        'rgba(245,240,232,0.2)'
                      e.currentTarget.style.color = '#F5F0E8'
                    }
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Club CTA */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={openClub}
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F5F0E8',
              border: '1.5px solid rgba(245,240,232,0.3)',
              background: 'transparent',
              cursor: 'pointer',
              padding: '1.1rem 3rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C4521E'
              e.currentTarget.style.color = '#C4521E'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'
              e.currentTarget.style.color = '#F5F0E8'
            }}
          >
            Join Club STASHON X<span style={{ fontSize: '1rem' }}>→</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .club-header-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .missions-grid {
            grid-template-columns: 1fr !important;
          }
          .tiers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
