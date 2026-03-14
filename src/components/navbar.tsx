import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Founders', href: '#founders' },
    { label: 'Residency', href: '#residency' },
    { label: 'Club STASHON X', href: '#club' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(6,6,6,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(196,82,30,0.18)' : 'none',
        padding: '0 2rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Official white horizontal logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/images/logo-horizontal-white.png"
            alt="THEFLOWSTASHON XTRM"
            style={{
              height: '30px',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </a>

        <div
          className="nav-desktop"
          style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 500,
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                color: 'rgba(245,240,232,0.65)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E8622A')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(245,240,232,0.65)')
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              color: '#F5F0E8',
              background: '#C4521E',
              textDecoration: 'none',
              textTransform: 'uppercase',
              padding: '0.55rem 1.4rem',
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D4632F'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C4521E'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Apply
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#F5F0E8',
              marginBottom: '5px',
              transition: 'transform 0.3s',
              transform: menuOpen
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none',
            }}
          />
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#F5F0E8',
              marginBottom: '5px',
              opacity: menuOpen ? 0 : 1,
              transition: 'opacity 0.3s',
            }}
          />
          <div
            style={{
              width: '24px',
              height: '2px',
              background: '#F5F0E8',
              transition: 'transform 0.3s',
              transform: menuOpen
                ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
            }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: 'rgba(6,6,6,0.98)',
            padding: '1.5rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            borderTop: '1px solid rgba(196,82,30,0.2)',
          }}
        >
          {/* Mobile logo */}
          <img
            src="/images/logo-horizontal-white.png"
            alt="THEFLOWSTASHON XTRM"
            style={{ height: '22px', width: 'auto', marginBottom: '0.5rem' }}
          />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: '"Syne", sans-serif',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                color: '#F5F0E8',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: '"Syne", sans-serif',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.14em',
              color: '#F5F0E8',
              background: '#C4521E',
              textDecoration: 'none',
              textTransform: 'uppercase',
              padding: '0.75rem 1.5rem',
              display: 'inline-block',
              width: 'fit-content',
            }}
          >
            Apply Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
