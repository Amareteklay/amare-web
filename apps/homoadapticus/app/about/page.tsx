import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'About — Homo Adapticus',
  description: 'Homo Adapticus is a personal journal by Amare Teklay.',
}

export default function AboutPage() {
  return (
    <div>
      <style>{`
        .nav-link:hover      { color: var(--cream) !important; }
        .nav-subscribe:hover { background: var(--amber) !important; color: #0f0e0c !important; }
        .footer-link:hover   { color: var(--amber) !important; }
        .elsewhere-link:hover { color: var(--amber) !important; }
        @media (max-width: 640px) {
          .page-wrap { padding: 0 24px !important; }
          .nav-links  { display: none !important; }
        }
      `}</style>

      <div style={s.page} className="page-wrap">

        {/* Nav */}
        <nav style={s.nav} className="fade-up delay-0">
          <Link href="/" style={s.navBrand}>
            <div style={s.navLogo}>
              <div style={s.navLogoDot} />
            </div>
            <span style={s.navName}>Homo Adapticus</span>
          </Link>
          <ul style={s.navLinks} className="nav-links">
            <li>
              <Link href="/journal" style={s.navLink} className="nav-link">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/about" style={{ ...s.navLink, color: 'var(--cream)' }}>
                About
              </Link>
            </li>
            <li>
              <a href="/#subscribe" style={s.navSubscribe} className="nav-subscribe">
                Subscribe →
              </a>
            </li>
          </ul>
        </nav>

        {/* Content */}
        <main style={s.main} className="fade-up delay-1">
          <h1 style={s.heading}>About</h1>

          <div style={s.body}>
            <p style={s.p}>[About text coming — Amare will write this]</p>
          </div>

          {/* Elsewhere */}
          <div style={s.elsewhere}>
            <p style={s.elsewhereLabel}>Elsewhere</p>
            <div style={s.elsewhereLinks}>
              <a
                href="https://amareteklay.com"
                target="_blank"
                rel="noopener noreferrer"
                style={s.elsewhereLink}
                className="elsewhere-link"
              >
                amareteklay.com
                <span style={s.elsewhereDesc}> — research and tools</span>
              </a>
              <a
                href="https://www.linkedin.com/in/amareteklay/"
                target="_blank"
                rel="noopener noreferrer"
                style={s.elsewhereLink}
                className="elsewhere-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={s.footer}>
          <span style={s.footerBrand}>Homo Adapticus · by Amare Teklay</span>
          <nav style={s.footerLinks}>
            {[
              { label: 'amareteklay.com', href: 'https://amareteklay.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amareteklay/' },
              { label: 'Subscribe', href: '/#subscribe' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={s.footerLink}
                className="footer-link"
              >
                {label}
              </a>
            ))}
          </nav>
        </footer>

      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '0 48px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '28px 0 24px',
    borderBottom: '0.5px solid var(--faint)',
  },
  navBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  navLogo: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1.5px solid var(--amber)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  navLogoDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'var(--amber)',
  },
  navName: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--cream)',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    listStyle: 'none',
  },
  navLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  navSubscribe: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--amber)',
    border: '0.5px solid var(--amber)',
    padding: '6px 14px',
    borderRadius: '2px',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s',
  },
  main: {
    padding: '64px 0 56px',
  },
  heading: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '24px',
    fontWeight: 400,
    color: 'var(--cream)',
    marginBottom: '40px',
  },
  body: {
    marginBottom: '56px',
  },
  p: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '17px',
    color: 'var(--muted)',
    lineHeight: 1.85,
    marginBottom: '1.6em',
  },
  elsewhere: {
    borderTop: '0.5px solid var(--faint)',
    paddingTop: '32px',
  },
  elsewhereLabel: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '16px',
  },
  elsewhereLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  elsewhereLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '12px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  elsewhereDesc: {
    color: 'var(--muted)',
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '12px',
  },
  footer: {
    borderTop: '0.5px solid var(--faint2)',
    padding: '28px 0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  footerBrand: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--muted)',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
}
