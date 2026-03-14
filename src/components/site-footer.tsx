export function SiteFooter() {
  return (
    <footer
      style={{
        background: '#030303',
        padding: '4rem 2rem 3rem',
        borderTop: '1px solid rgba(196,82,30,0.18)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
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
              Brickell, Miami
            </div>
          </div>

          {/* Links */}
          <div
            style={{
              display: 'flex',
              gap: '2.5rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://instagram.com/theflowstashon"
              target="_blank"
              rel="noopener noreferrer"
              style={{
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E8622A')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')
              }
            >
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
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              @theflowstashon
            </a>

            <a
              href="mailto:hello@theflowstashon.com"
              style={{
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E8622A')}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'rgba(245,240,232,0.4)')
              }
            >
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
              hello@theflowstashon.com
            </a>
          </div>

          {/* Insignia */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '0',
            }}
          >
            <img
              src="/images/logo-insignia-white.png"
              alt="TFLX Insignia"
              style={{
                height: '52px',
                width: 'auto',
                objectFit: 'contain',
                opacity: 0.28,
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
          © 2025 THEFLOWSTASHON XTRM. All rights reserved. · Brickell, Miami
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
