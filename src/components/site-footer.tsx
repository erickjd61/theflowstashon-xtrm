const linkStyle: React.CSSProperties = {
  fontFamily: '"Syne", sans-serif',
  fontWeight: 500,
  fontSize: '0.75rem',
  letterSpacing: '0.12em',
  color: 'rgba(245,240,232,0.4)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'color 0.2s',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}

const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = '#E8622A')
const hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')

const InstagramIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const EmailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.09 19.79 19.79 0 0 1 1.11 3.53 2 2 0 0 1 3.09 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.27a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.28 16.92z" />
  </svg>
)

export function SiteFooter() {
  return (
    <footer
      style={{
        background: '#030303',
        padding: '4rem 2rem 3rem',
        borderTop: '1px solid rgba(196,82,30,0.18)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          className="footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Logo block */}
          <div>
            <img
              src="/images/logo-horizontal-white.png"
              alt="THEFLOWSTASHON XTRM"
              style={{
                height: '26px',
                width: 'auto',
                objectFit: 'contain',
                marginBottom: '0.75rem',
                display: 'block',
              }}
            />
            <div
              style={{
                fontFamily: '"Syne", sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                color: 'rgba(245,240,232,0.28)',
                textTransform: 'uppercase',
              }}
            >
              Miami
            </div>
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Instagram — main */}
            <a
              href="https://instagram.com/theflowstashon"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              <InstagramIcon />
              @theflowstashon
            </a>

            {/* Instagram — Carla */}
            <a
              href="https://instagram.com/carlaciddediego_official"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              <InstagramIcon />
              @carlaciddediego_official
            </a>

            {/* Email */}
            <a
              href="mailto:hello@theflowstashonxtrm.com"
              style={linkStyle}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              <EmailIcon />
              hello@theflowstashonxtrm.com
            </a>

            {/* Phone / Text / WhatsApp */}
            <a
              href="https://wa.me/15615609994"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={hoverOn}
              onMouseLeave={hoverOff}
            >
              <PhoneIcon />
              +1 561-560-9994 &nbsp;·&nbsp; Call / Text / WhatsApp
            </a>
          </div>

          {/* Insignia — new orange version */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <img
              src="/images/insignia-orange.png"
              alt="TFLX Insignia"
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain',
                opacity: 0.7,
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(to right, transparent, rgba(196,82,30,0.3) 30%, rgba(196,82,30,0.3) 70%, transparent)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Copyright */}
        <div
          style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: '0.68rem',
            color: 'rgba(245,240,232,0.18)',
            letterSpacing: '0.08em',
            textAlign: 'center',
          }}
        >
          © 2025 THEFLOWSTASHON XTRM. All rights reserved. · Miami
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-top { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
