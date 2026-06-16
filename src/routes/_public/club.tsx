import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ModalProvider, useModal } from '@/components/modal-context'
import { ClubModal } from '@/components/club-modal'

export const Route = createFileRoute('/_public/club')({
  component: ClubPage,
})

const BLACK = '#060606'
const CREAM = '#F5F0E8'
const TERRA = '#C4521E'
const HAIR = 'rgba(245,240,232,0.2)'
const HAIR_SOFT = 'rgba(245,240,232,0.1)'
const DIM = 'rgba(245,240,232,0.62)'
const FAINT = 'rgba(245,240,232,0.4)'
const SERIF = '"Cormorant Garamond", serif'
const SANS = '"Syne", sans-serif'

const eyebrow: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  fontSize: '0.72rem',
  color: TERRA,
}

function PrimaryButton({
  onClick,
  href,
  children,
}: {
  onClick?: () => void
  href?: string
  children: React.ReactNode
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6em',
    fontFamily: SANS,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    fontSize: '0.76rem',
    padding: '1.05rem 1.8rem',
    border: `1px solid ${TERRA}`,
    background: TERRA,
    color: CREAM,
    textDecoration: 'none',
    cursor: 'pointer',
  }
  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  )
}

function GhostButton({
  href,
  onClick,
  children,
}: {
  href?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.6em',
    fontFamily: SANS,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    fontSize: '0.76rem',
    padding: '1.05rem 1.8rem',
    border: `1px solid ${HAIR}`,
    background: 'transparent',
    color: CREAM,
    textDecoration: 'none',
    cursor: 'pointer',
  }
  if (href) {
    return (
      <a href={href} style={style}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: SANS,
        fontWeight: 600,
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        padding: '0.5rem 0.9rem',
        border: `1px solid ${HAIR}`,
        color: DIM,
      }}
    >
      {children}
    </span>
  )
}

const weekly = [
  'Kayaking',
  'Paddleboarding',
  'Beach bootcamps',
  'Sunset yoga',
  'Trail biking',
  'Park picnics',
  'Sound healing in nature',
  'Sunset Market · Virginia Key',
]

const blackOps = [
  'Horseback excursions',
  'Wakeboarding lessons',
  'Kite surfing',
  'Yacht day in the bay',
  'ATV racing · Everglades',
  'Snorkeling · the Keys',
]

const partners = [
  { name: 'East Coast Marketplace', src: '/partners/eastcoast.png' },
  { name: 'Super Groovy Travels', src: '/partners/supergroovy.png' },
  { name: 'PADL Miami', src: '/partners/padl.png' },
  { name: 'Las Terrazas at The Hyde', src: '/partners/terrazas.png' },
  { name: 'Sixty Vines', src: '/partners/sixty.png' },
]

const galicia = [
  { src: '/galicia/ribeira-sacra.jpg', cap: 'Ribeira Sacra', sub: 'Galicia, Spain', tall: true },
  { src: '/galicia/soul-alignment-yoga.jpg', cap: 'Daily soul alignment', sub: 'Yoga & sound therapy' },
  { src: '/galicia/camino-de-santiago.jpg', cap: 'The Camino de Santiago', sub: 'A sacred stretch on foot' },
  { src: '/galicia/rias-atlantic-coast.jpg', cap: 'The rías & Atlantic coast', sub: 'End of the earth' },
  { src: '/galicia/albarino-rituals.jpg', cap: 'Albariño & Celtic rituals', sub: 'Feasts & the Queimada' },
]

function GalleryPlate({
  img,
}: {
  img: { src: string; cap: string; sub: string; tall?: boolean }
}) {
  return (
    <div
      style={{
        position: 'relative',
        border: `1px solid ${HAIR}`,
        overflow: 'hidden',
        minHeight: img.tall ? '440px' : '220px',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <img
        src={img.src}
        alt={img.cap}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '0.6rem',
          padding: '0.85rem 1rem',
          background: 'linear-gradient(0deg, rgba(6,6,6,0.85), transparent)',
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: '0.62rem',
            color: CREAM,
          }}
        >
          {img.cap}
        </span>
        <span style={{ fontFamily: SANS, fontSize: '0.56rem', letterSpacing: '0.06em', color: FAINT }}>
          {img.sub}
        </span>
      </div>
    </div>
  )
}

const tiers = [
  {
    name: 'Regular',
    price: '$2,200',
    per: '/ year · lump sum',
    alt: 'or $199 / month',
    highlight: false,
    features: [
      'All Weekly Adventures, included',
      'Members’ rate on every Black Op',
      'Access to getaways & retreats',
      'Private WhatsApp community',
    ],
    cta: 'Apply',
  },
  {
    name: 'Founding 20',
    price: '$1,750',
    per: '/ year · lump sum',
    alt: 'or $149 / month',
    highlight: true,
    features: [
      'Everything in Regular',
      'Founding-member rate, locked in',
      'Keeper-of-the-flame status',
      'First onto the blank canvas',
    ],
    cta: 'Claim your place',
  },
]

function ClubContent() {
  const { openClub } = useModal()

  useEffect(() => {
    const id = 'snapwidget-js'
    if (!document.getElementById(id)) {
      const s = document.createElement('script')
      s.id = id
      s.src = 'https://snapwidget.com/js/snapwidget.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])

  return (
    <div style={{ background: BLACK, color: CREAM, minHeight: '100vh' }}>
      {/* NAV */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.1rem clamp(1.4rem, 5vw, 7rem)',
          background: 'rgba(6,6,6,0.9)',
          borderBottom: `1px solid ${HAIR_SOFT}`,
          backdropFilter: 'blur(6px)',
        }}
      >
        <a href="/" aria-label="STASHON X — home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/stashon-x-logo-white.png" alt="stashon X" style={{ height: '23px', width: 'auto', display: 'block' }} />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href="/" style={{ fontFamily: SANS, fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.12em', color: DIM, textTransform: 'uppercase', textDecoration: 'none' }}>
            ← XTRM
          </a>
          <button
            onClick={openClub}
            style={{
              fontFamily: SANS,
              fontWeight: 700,
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              color: TERRA,
              border: `1px solid ${TERRA}`,
              background: 'transparent',
              padding: '0.6rem 1.05rem',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Apply
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '6rem clamp(1.4rem, 5vw, 7rem) 4rem',
          backgroundImage:
            'radial-gradient(120% 90% at 80% 0%, rgba(196,82,30,0.16), transparent 55%)',
        }}
      >
        <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <span style={{ color: TERRA }}>◈</span>
            <span style={eyebrow}>The Manifesto of the 1,000 Lives</span>
          </div>
          <h1
            style={{
              fontFamily: SERIF,
              fontWeight: 600,
              fontSize: 'clamp(2.8rem, 8vw, 6rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.01em',
              maxWidth: '14ch',
              margin: 0,
            }}
          >
            You are not joining a club. You are entering a{' '}
            <em style={{ fontStyle: 'italic', color: TERRA }}>frequency.</em>
          </h1>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(1.3rem, 2vw, 1.7rem)',
              color: CREAM,
              lineHeight: 1.5,
              marginTop: '2.2rem',
              maxWidth: '46ch',
            }}
          >
            A nomadic membership where business is the engine and adventure is the
            soul — open weekly adventures for the many, and a shrouded inner circle
            for the few.
          </p>
          <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            <PrimaryButton onClick={openClub}>Apply for the Founding 20</PrimaryButton>
            <GhostButton href="#galicia">See Galicia</GhostButton>
          </div>
        </div>
      </header>

      {/* MANIFESTO */}
      <section id="manifesto" style={{ padding: 'clamp(4.5rem, 10vw, 9rem) clamp(1.4rem, 5vw, 7rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <span style={eyebrow}>The Creed</span>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 600,
              fontSize: 'clamp(2.1rem, 5vw, 3.6rem)',
              lineHeight: 1.05,
              margin: '1rem 0 3rem',
              maxWidth: '20ch',
            }}
          >
            We are here to architect a reality so vivid you would choose it,{' '}
            <em style={{ fontStyle: 'italic', color: TERRA }}>a thousand times over.</em>
          </h2>

          {[
            {
              n: '◈ I',
              t: 'The Legacy',
              body: 'My mother taught me that a single moment of true joy and human connection can erase a lifetime of tragedy. We are not here to simply exist, to work, or to collect things. We are here to architect a reality so vibrant, so deep, and so visceral that — given the choice — you would live it exactly as it is, a thousand times over.',
              pull: '“Live a life so beautiful it warrants an eternity.”',
            },
            {
              n: '◈ II',
              t: 'The Unmasking',
              body: 'Miami is full of masks: the suits, the heels, the polished networking, the titles that leave us isolated. STASHON X is the antidote. We trade the handshake for the high-five and the societal armor for the nomadic heart. No pretense — just the blank canvas of our rawest selves meeting nature in its wildest form.',
            },
            {
              n: '◈ III',
              t: 'The Duality: Mind, Body & Wild',
              body: 'Business is the engine, but adventure is the soul. We unite high-performance wellness with radical exploration. Led by the world’s #1 Hybrid Athlete (40+) and a Master Visionary Strategist, we train the body to be capable of any adventure the spirit demands.',
            },
          ].map((row) => (
            <div
              key={row.t}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(180px, 240px) 1fr',
                gap: 'clamp(1.5rem, 4vw, 5rem)',
                padding: 'clamp(2.2rem, 4vw, 3.2rem) 0',
                borderTop: `1px solid ${HAIR}`,
              }}
            >
              <div>
                <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem', color: TERRA }}>
                  {row.n}
                </div>
                <div style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', fontWeight: 600, marginTop: '0.5rem', lineHeight: 1.1 }}>
                  {row.t}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: SERIF, fontSize: '1.2rem', color: DIM, lineHeight: 1.62, margin: 0 }}>{row.body}</p>
                {row.pull && (
                  <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', color: CREAM, lineHeight: 1.35, marginTop: '1.3rem' }}>
                    {row.pull}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Trajectory */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 240px) 1fr', gap: 'clamp(1.5rem, 4vw, 5rem)', padding: 'clamp(2.2rem, 4vw, 3.2rem) 0', borderTop: `1px solid ${HAIR}`, borderBottom: `1px solid ${HAIR}` }}>
            <div>
              <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', fontSize: '0.72rem', color: TERRA }}>◈ IV</div>
              <div style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', fontWeight: 600, marginTop: '0.5rem', lineHeight: 1.1 }}>The Evolutionary Trajectory</div>
            </div>
            <div>
              <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', color: CREAM, margin: 0 }}>“We don’t just travel — we evolve.”</p>
              <ul style={{ listStyle: 'none', margin: '1.2rem 0 0', padding: 0, borderTop: `1px solid ${HAIR_SOFT}` }}>
                {[
                  'Galicia, Spain',
                  'Florida Keys',
                  'Santa Cruz Mountains, California',
                  'Cayman Islands',
                  'Mexico',
                  'Costa Rica',
                  'Bali',
                  'Puglia, Italy',
                  'Salar de Uyuni',
                ].map((place, i) => (
                  <li key={place} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', padding: '0.6rem 0', borderBottom: `1px solid ${HAIR_SOFT}`, fontFamily: SERIF, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: CREAM }}>
                    <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: '0.66rem', letterSpacing: '0.14em', color: FAINT, minWidth: '2.4em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {place}
                    {i === 0 && (
                      <span style={{ fontFamily: SANS, fontWeight: 600, fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: TERRA, marginLeft: 'auto' }}>
                        Now Available
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: SERIF, fontSize: '1rem', color: DIM, marginTop: '1.2rem' }}>
                Global trajectories curated with Super Groovy Travels — translating the STASHON X vision into rare, high-altitude experiences.
              </p>
            </div>
          </div>

          {/* Close */}
          <div style={{ border: `1px solid ${HAIR}`, padding: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <span style={eyebrow}>To the Founding 20</span>
              <p style={{ fontFamily: SERIF, fontSize: 'clamp(1.3rem, 2vw, 1.7rem)', color: CREAM, lineHeight: 1.5, marginTop: '1rem', maxWidth: '40ch' }}>
                You are the keepers of the flame — the first to step onto the blank canvas with us.{' '}
                <em style={{ fontStyle: 'italic', color: TERRA }}>Are you ready to start living?</em>
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <PrimaryButton onClick={openClub}>Claim your place</PrimaryButton>
              <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.74rem', color: CREAM, marginTop: '1.4rem' }}>
                Carla & Tashon
                <span style={{ display: 'block', color: FAINT, fontWeight: 600, marginTop: '0.3rem' }}>Founders, STASHON X</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section style={{ padding: 'clamp(4.5rem, 10vw, 9rem) clamp(1.4rem, 5vw, 7rem)', background: '#0c0b0a' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <span style={eyebrow}>Experiences & Adventures</span>
          <h2 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', lineHeight: 1.05, margin: '1rem 0 2.6rem', maxWidth: '16ch' }}>
            An open door, and a door that stays{' '}
            <em style={{ fontStyle: 'italic', color: TERRA }}>shut.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: HAIR_SOFT, border: `1px solid ${HAIR}` }}>
            {/* Weekly */}
            <div style={{ background: BLACK, padding: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'baseline' }}>
                <div style={{ fontFamily: SERIF, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 600 }}>Weekly Adventures</div>
                <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.66rem', color: TERRA }}>◈ Weekends · Included</div>
              </div>
              <p style={{ fontFamily: SERIF, fontSize: '1.2rem', color: DIM, marginTop: '0.8rem', maxWidth: '60ch' }}>
                Low-cost, high-frequency, open to every member. The rhythm of the club — show up, move, connect.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: '1.6rem' }}>
                {weekly.map((w) => (
                  <Chip key={w}>{w}</Chip>
                ))}
              </div>
            </div>
            {/* Black Ops */}
            <div className="ops" style={{ background: BLACK, padding: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'baseline' }}>
                <div style={{ fontFamily: SERIF, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 600 }}>Black Ops</div>
                <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.66rem', color: FAINT }}>◈ VIP · Members’ rate</div>
              </div>
              <p style={{ fontFamily: SERIF, fontSize: '1.2rem', color: DIM, marginTop: '0.8rem', maxWidth: '60ch' }}>
                VIP excursions, unlocked at a discounted member fee per adventure. Details surface when it’s time to move.{' '}
                <em style={{ fontStyle: 'italic', color: TERRA }}>Hover to unmask.</em>
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: '1.6rem' }}>
                {blackOps.map((b) => (
                  <span key={b} className="ops-chip" style={{ fontFamily: SANS, fontWeight: 600, fontSize: '0.72rem', letterSpacing: '0.04em', padding: '0.5rem 0.9rem', border: `1px solid ${HAIR_SOFT}`, color: DIM }}>
                    {b}
                  </span>
                ))}
              </div>
              <div style={{ fontFamily: SANS, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.64rem', color: FAINT, marginTop: '1.4rem' }}>
                <b style={{ color: TERRA }}>Members only.</b> Discounted per-adventure pricing revealed inside the circle.
              </div>
            </div>
          </div>

          {/* Partners */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.7rem 0.8rem', marginTop: '2.6rem' }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.62rem', color: FAINT, marginRight: '0.6rem' }}>
              In partnership with
            </span>
            {partners.map((p) => (
              <span
                key={p.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: CREAM,
                  border: `1px solid ${HAIR}`,
                  padding: '0.55rem 1.05rem',
                }}
              >
                <img src={p.src} alt={p.name} style={{ height: '46px', width: 'auto', display: 'block' }} />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GALICIA */}
      <section id="galicia" style={{ padding: 'clamp(4.5rem, 10vw, 9rem) clamp(1.4rem, 5vw, 7rem)', background: 'linear-gradient(180deg, #060606, #0c0b0a)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.4rem' }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.66rem', color: BLACK, background: TERRA, padding: '0.5rem 0.85rem' }}>
              ◈ Now Available
            </span>
          </div>
          <div className="gal-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 'clamp(1.5rem, 4vw, 3.5rem)', alignItems: 'start' }}>
            <div>
              <span style={eyebrow}>The Enchanted Journey · Galicia, Spain</span>
              <h2 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', lineHeight: 1.05, margin: '1rem 0 0', maxWidth: '14ch' }}>
                Awaken your senses at the{' '}
                <em style={{ fontStyle: 'italic', color: TERRA }}>end of the earth.</em>
              </h2>
              <p style={{ fontFamily: SERIF, fontSize: 'clamp(1.3rem, 2vw, 1.6rem)', color: CREAM, lineHeight: 1.5, marginTop: '1.6rem', maxWidth: '50ch' }}>
                From September 4–13, 2026, STASHON X and Super Groovy Travels invite an
                intimate circle of just 15 visionaries on a restorative migration to the
                mystical coastlines and emerald forests of Galicia. Not a vacation —
                sacred ground designed to call you back to life.
              </p>

              <div style={{ display: 'flex', gap: '2.4rem', flexWrap: 'wrap', marginTop: '2.2rem', borderTop: `1px solid ${HAIR}`, paddingTop: '1.6rem' }}>
                {[
                  ['Dates', 'Sep 4–13'],
                  ['Circle size', '15 only'],
                  ['From', '$3,997'],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.6rem', color: FAINT }}>{k}</div>
                    <div style={{ fontFamily: SERIF, fontSize: 'clamp(1.4rem, 2.4vw, 2rem)', color: CREAM, marginTop: '0.3rem', lineHeight: 1 }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: '0.6rem', color: FAINT, marginTop: '0.9rem' }}>
                Per person · from Madrid · flights to Madrid additional
              </div>

              <ul style={{ listStyle: 'none', margin: '2.2rem 0 0', padding: 0 }}>
                {[
                  ['Daily soul alignment', 'Morning & evening yoga, meditation, and sound therapy against Galicia’s most majestic backdrops.'],
                  ['Breathtaking exploration', 'The green canyons of the Ribeira Sacra, a sacred stretch of the Camino, the Route of Stone & Water, and sunset at Cape Finisterre.'],
                  ['Island of the gods', 'Sail to the Cíes Islands — Caribbean-white sands and turquoise water the Romans called paradise.'],
                  ['Rituals & feasts', 'Albariño wine, over-the-top seafood, and the Queimada — a Celtic fire ritual to bind the tribe.'],
                ].map(([t, d]) => (
                  <li key={t} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem', padding: '1rem 0', borderTop: `1px solid ${HAIR_SOFT}` }}>
                    <span style={{ color: TERRA, fontSize: '0.8rem' }}>◈</span>
                    <span style={{ fontFamily: SERIF, fontSize: '1.15rem', color: CREAM }}>
                      {t}
                      <span style={{ display: 'block', color: FAINT, fontSize: '0.95rem', marginTop: '0.15rem' }}>{d}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p style={{ fontFamily: SERIF, fontSize: '0.98rem', color: FAINT, marginTop: '1.6rem', maxWidth: '52ch' }}>
                All-inclusive within Spain: 4★/5★ stays (2 nights thermal-spa Ourense, 7 nights coastal Portonovo), unlimited spa access, AVE trains, private transport, ferries, return domestic flight, daily breakfasts & dinners, guides, and travel insurance.
              </p>

              <div style={{ display: 'flex', gap: '0.9rem', flexWrap: 'wrap', marginTop: '2.4rem', alignItems: 'center' }}>
                <PrimaryButton href="tel:+15615609994">Call to reserve</PrimaryButton>
                <GhostButton href="mailto:hello@theflowstashonxtrm.com?subject=Galicia%20—%20The%20Enchanted%20Journey">Email to claim a seat</GhostButton>
              </div>
              <p style={{ fontFamily: SANS, fontSize: '0.66rem', letterSpacing: '0.06em', color: FAINT, marginTop: '1rem' }}>
                Online checkout opening soon — call or email to hold one of the 15 seats.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
              <GalleryPlate img={galicia[0]} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GalleryPlate img={galicia[1]} />
                <GalleryPlate img={galicia[2]} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GalleryPlate img={galicia[3]} />
                <GalleryPlate img={galicia[4]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section id="join" style={{ padding: 'clamp(4.5rem, 10vw, 9rem) clamp(1.4rem, 5vw, 7rem)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <span style={eyebrow}>Membership</span>
          <h2 style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 'clamp(2.1rem, 5vw, 3.6rem)', lineHeight: 1.05, margin: '1rem 0 2.8rem', maxWidth: '16ch' }}>
            Two ways in. One <em style={{ fontStyle: 'italic', color: TERRA }}>frequency.</em>
          </h2>
          <div className="plans" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: HAIR, border: `1px solid ${HAIR}` }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlight ? 'linear-gradient(180deg, rgba(196,82,30,0.1), rgba(6,6,6,1) 60%)' : BLACK,
                  padding: 'clamp(2rem, 4vw, 3.4rem)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <span style={{ fontFamily: SERIF, fontSize: 'clamp(1.6rem, 3vw, 2.3rem)', fontWeight: 600 }}>{tier.name}</span>
                  {tier.highlight && (
                    <span style={{ fontFamily: SANS, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.6rem', color: BLACK, background: TERRA, padding: '0.35rem 0.6rem' }}>
                      ◈ First cohort
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '1.8rem' }}>
                  <span style={{ fontFamily: SERIF, fontSize: 'clamp(2.6rem, 5vw, 3.8rem)', fontWeight: 600, lineHeight: 1, color: CREAM }}>{tier.price}</span>
                  <span style={{ fontFamily: SANS, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: FAINT }}>{tier.per}</span>
                </div>
                <div style={{ fontFamily: SANS, fontSize: '0.72rem', letterSpacing: '0.06em', color: DIM, marginTop: '0.7rem' }}>{tier.alt}</div>
                <ul style={{ listStyle: 'none', margin: '1.8rem 0 0', padding: 0, display: 'grid', gap: '0.7rem' }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ display: 'flex', gap: '0.7rem', fontFamily: SERIF, fontSize: '1rem', color: DIM }}>
                      <span style={{ color: TERRA, fontSize: '0.7rem', marginTop: '0.25rem' }}>◈</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openClub}
                  style={{
                    marginTop: '2rem',
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6em',
                    fontFamily: SANS,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    fontSize: '0.76rem',
                    padding: '1.05rem 1.8rem',
                    border: `1px solid ${tier.highlight ? TERRA : HAIR}`,
                    background: tier.highlight ? TERRA : 'transparent',
                    color: CREAM,
                    cursor: 'pointer',
                  }}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR + MEDIA + WHATSAPP */}
      <section style={{ padding: 'clamp(4.5rem, 10vw, 9rem) clamp(1.4rem, 5vw, 7rem)', background: '#0c0b0a' }}>
        <div className="util" style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(1.5rem, 3vw, 2.4rem)' }}>
          <div style={{ border: `1px solid ${HAIR}`, padding: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            <span style={eyebrow}>The Month Ahead</span>
            <div style={{ border: `1px dashed ${HAIR}`, minHeight: '260px', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '2rem', marginTop: '1.4rem', background: 'rgba(245,240,232,0.02)' }}>
              <div>
                <div style={{ fontSize: '1.8rem', color: 'rgba(245,240,232,0.18)' }}>◈</div>
                <div style={{ fontFamily: SERIF, fontSize: '1.3rem', color: CREAM, marginTop: '0.6rem' }}>Live events calendar</div>
                <div style={{ fontFamily: SANS, fontSize: '0.66rem', letterSpacing: '0.08em', color: FAINT, marginTop: '0.7rem', maxWidth: '34ch', lineHeight: 1.5 }}>
                  Google Calendar embed — updates here as activities change.
                </div>
              </div>
            </div>
          </div>
          <div style={{ border: `1px solid ${HAIR}`, padding: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            <span style={eyebrow}>In The Field · @STASHONX</span>
            <div style={{ marginTop: '1.4rem' }}>
              <iframe
                src="https://snapwidget.com/embed/1125410"
                title="STASHON X Club Feed"
                className="snapwidget-widget"
                allowTransparency={true}
                frameBorder="0"
                scrolling="no"
                style={{ border: 'none', overflow: 'hidden', width: '100%', minHeight: '340px', display: 'block' }}
              />
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1320px', margin: 'clamp(1.5rem, 3vw, 2.4rem) auto 0', border: `1px solid ${HAIR}`, padding: 'clamp(1.3rem, 3vw, 1.8rem) clamp(1.4rem, 3vw, 2.2rem)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: TERRA, fontSize: '1.2rem' }}>◈</span>
            <div style={{ fontFamily: SERIF, fontSize: '1.25rem', color: CREAM }}>
              The Secret Comms
              <span style={{ display: 'block', fontFamily: SANS, fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: FAINT, marginTop: '0.25rem' }}>
                Members get the private WhatsApp community
              </span>
            </div>
          </div>
          <button onClick={openClub} style={{ fontFamily: SANS, fontWeight: 700, fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CREAM, border: `1px solid ${HAIR}`, background: 'transparent', padding: '0.7rem 1.1rem', cursor: 'pointer' }}>
            Become a member
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.4rem, 5vw, 7rem) 2.4rem', borderTop: `1px solid ${HAIR}` }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <img src="/stashon-x-logo-white.png" alt="stashon X" style={{ height: '40px', width: 'auto' }} />
          <div style={{ fontFamily: SANS, fontSize: '0.72rem', letterSpacing: '0.08em', color: DIM, lineHeight: 2 }}>
            <a href="mailto:hello@theflowstashonxtrm.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello@theflowstashonxtrm.com</a>
            <br />
            <a href="tel:+15615609994" style={{ color: 'inherit', textDecoration: 'none' }}>+1 561 560 9994 · Call / Text / WhatsApp</a>
            <br />
            <a href="https://www.instagram.com/stashonx" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram · @STASHONX</a>
          </div>
        </div>
      </footer>

      <style>{`
        .ops .ops-chip { color: transparent; position: relative; }
        .ops .ops-chip { transition: color 0.35s; }
        .ops:hover .ops-chip { color: ${DIM}; }
        @media (max-width: 900px) {
          .gal-grid { grid-template-columns: 1fr !important; }
          .plans { grid-template-columns: 1fr !important; }
          .util { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function ClubPage() {
  return (
    <ModalProvider>
      <ClubContent />
      <ClubModal />
    </ModalProvider>
  )
}
