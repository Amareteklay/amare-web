import React from 'react'
import Link from 'next/link'
import { getPublished } from '../../lib/essays'

export const metadata = {
  title: 'Journal — Homo Adapticus',
  description: 'All essays by Amare Teklay on AI, adaptation, and intelligent change.',
}

export default function JournalPage() {
  const essays = getPublished()

  return (
    <div>
      <style>{`
        .nav-link:hover     { color: var(--cream) !important; }
        .nav-subscribe:hover { background: var(--amber) !important; color: #0f0e0c !important; }
        .footer-link:hover  { color: var(--amber) !important; }

        .essay-list-item {
          display: block;
          padding: 20px 0;
          border-bottom: 0.5px solid var(--faint);
          text-decoration: none;
          color: inherit;
        }
        .essay-list-item:last-child { border-bottom: none; }
        .essay-list-title { transition: color 150ms; }
        .essay-list-item:hover .essay-list-title { color: var(--amber) !important; }
        .essay-arrow { opacity: 0; transition: opacity 150ms; color: var(--amber); }
        .essay-list-item:hover .essay-arrow { opacity: 1; }

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
              <Link href="/journal" style={{ ...s.navLink, color: 'var(--cream)' }}>
                Essays
              </Link>
            </li>
            <li>
              <Link href="/about" style={s.navLink} className="nav-link">
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

        {/* Heading */}
        <header style={s.header} className="fade-up delay-1">
          <h1 style={s.heading}>All essays</h1>
        </header>

        {/* Essay list */}
        <section className="fade-up delay-2">
          {essays.map((essay) => {
            const formatted = new Date(essay.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            })
            return (
              <Link
                key={essay.slug}
                href={`/journal/${essay.slug}`}
                className="essay-list-item"
              >
                <div style={s.listMeta}>
                  <span style={s.listCategory}>{essay.category.toUpperCase()}</span>
                  <span style={s.listReadTime}>{essay.readTime} read</span>
                </div>
                <h2 style={s.listTitle} className="essay-list-title">
                  {essay.title}
                  <span style={s.listArrow} className="essay-arrow"> ↗</span>
                </h2>
                <p style={s.listLede}>{essay.lede}</p>
                <time dateTime={essay.date} style={s.listDate}>
                  {formatted}
                </time>
              </Link>
            )
          })}
        </section>

        {/* Footer */}
        <footer style={s.footer} className="fade-up delay-3">
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
    maxWidth: '820px',
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
  header: {
    padding: '64px 0 40px',
  },
  heading: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '24px',
    fontWeight: 400,
    color: 'var(--cream)',
  },
  listMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  listCategory: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    letterSpacing: '0.1em',
  },
  listReadTime: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
  },
  listTitle: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '16px',
    fontWeight: 500,
    color: 'var(--cream)',
    lineHeight: 1.3,
    marginBottom: '4px',
  },
  listArrow: {
    color: 'var(--amber)',
    fontSize: '14px',
  },
  listLede: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '13px',
    color: 'var(--muted)',
    lineHeight: 1.6,
  },
  listDate: {
    display: 'block',
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
    marginTop: '8px',
  },
  footer: {
    borderTop: '0.5px solid var(--faint2)',
    padding: '28px 0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
    marginTop: '40px',
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
