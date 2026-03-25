import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPublished } from '../../../lib/essays'

export function generateStaticParams() {
  return getPublished().map((e) => ({ slug: e.slug }))
}

const prose: Record<string, React.CSSProperties> = {
  p: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '17px',
    lineHeight: 1.85,
    color: 'var(--cream)',
    marginBottom: '1.6em',
  },
  h2: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '22px',
    fontWeight: 400,
    lineHeight: 1.3,
    color: 'var(--cream)',
    marginBottom: '0.6em',
    marginTop: '2.5rem',
  },
  h3: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.35,
    color: 'var(--amber-dim)',
    marginBottom: '0.5em',
    marginTop: '2rem',
  },
  blockquote: {
    borderLeft: '2px solid var(--amber-dim)',
    paddingLeft: '20px',
    margin: '2rem 0',
    fontStyle: 'italic',
    color: 'var(--muted)',
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '17px',
    lineHeight: 1.75,
  },
  a: {
    color: 'var(--amber)',
    textDecoration: 'none',
  },
  code: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '13px',
    background: 'var(--bg2)',
    padding: '2px 6px',
    borderRadius: '3px',
    color: 'var(--cream)',
  },
  pre: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '13px',
    background: 'var(--bg2)',
    padding: '16px',
    borderRadius: '4px',
    border: '0.5px solid var(--faint)',
    overflowX: 'auto' as const,
    marginBottom: '1.6em',
    lineHeight: 1.6,
    color: 'var(--cream)',
  },
  strong: {
    color: 'var(--cream)',
    fontWeight: 500,
  },
  hr: {
    border: 'none',
    borderTop: '0.5px solid var(--faint)',
    margin: '2.5rem 0',
  },
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 style={prose.h2} {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 style={prose.h3} {...props} />,
  p:  (props: React.HTMLAttributes<HTMLParagraphElement>) => <p style={prose.p} {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote style={prose.blockquote} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      style={prose.a}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--amber-dim)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--amber)' }}
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => <code style={prose.code} {...props} />,
  pre:  (props: React.HTMLAttributes<HTMLPreElement>) => <pre style={prose.pre} {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong style={prose.strong} {...props} />,
  hr: () => <hr style={prose.hr} />,
}

export default async function EssayPage({
  params,
}: {
  params: { slug: string }
}) {
  const published = getPublished()
  const valid = published.map((e) => e.slug)

  if (!valid.includes(params.slug)) {
    notFound()
  }

  const { default: Content, metadata } = await import(
    `../../content/${params.slug}.mdx`
  )

  const title    = metadata?.title    ?? params.slug
  const category = metadata?.category ?? ''
  const readTime = metadata?.readTime ?? ''
  const date     = metadata?.date     ?? ''

  return (
    <div>
      <style>{`
        .nav-link:hover     { color: var(--cream) !important; }
        .nav-subscribe:hover { background: var(--amber) !important; color: #0f0e0c !important; }
        .back-link:hover    { color: var(--amber) !important; }
        .footer-link:hover  { color: var(--amber) !important; }
        .email-input:focus  { border-color: var(--amber-dim) !important; outline: none; }
        .divider-rule       { border: none; border-top: 0.5px solid var(--faint); margin: 40px 0; }
        @media (max-width: 640px) {
          .essay-wrap { padding: 0 24px !important; }
          .nav-links  { display: none !important; }
        }
      `}</style>

      <div
        style={{ maxWidth: '640px', margin: '0 auto', padding: '0 48px' }}
        className="essay-wrap"
      >

        {/* Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '28px 0 24px',
            borderBottom: '0.5px solid var(--faint)',
          }}
          className="fade-up delay-0"
        >
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                border: '1.5px solid var(--amber)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--amber)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '15px', fontWeight: 500, color: 'var(--cream)' }}>
              Homo Adapticus
            </span>
          </Link>
          <ul style={{ display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none' }} className="nav-links">
            <li>
              <Link
                href="/journal"
                style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                className="nav-link"
              >
                Essays
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="/#subscribe"
                style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--amber)', border: '0.5px solid var(--amber)', padding: '6px 14px', borderRadius: '2px', textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
                className="nav-subscribe"
              >
                Subscribe →
              </a>
            </li>
          </ul>
        </nav>

        {/* Essay header */}
        <header style={{ padding: '56px 0 0' }} className="fade-up delay-1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            {category && (
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {category}
              </span>
            )}
            {readTime && (
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.06em' }}>
                {readTime} read
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--cream)', marginTop: '1rem' }}>
            {title}
          </h1>

          {date && (
            <time
              dateTime={date}
              style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', display: 'block', marginTop: '12px', marginBottom: '40px' }}
            >
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}

          <hr className="divider-rule" />
        </header>

        {/* Essay body */}
        <article style={{ paddingBottom: '16px' }} className="fade-up delay-2">
          <Content components={components} />
        </article>

        <hr className="divider-rule" />

        {/* Post-essay */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '8px 0 40px' }} className="fade-up delay-2">
          <Link
            href="/journal"
            style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.06em' }}
            className="back-link"
          >
            ← Back to journal
          </Link>

          <div style={{ background: 'var(--bg2)', borderLeft: '3px solid var(--amber)', borderRadius: '0 4px 4px 0', padding: '28px' }}>
            <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontStyle: 'italic', fontSize: '14px', color: 'var(--cream)', marginBottom: '4px' }}>
              New essays when they&rsquo;re ready — no schedule, no spam.
            </p>
            <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
              Subscribe to get them in your inbox.
            </p>
            <div style={{ display: 'flex', maxWidth: '360px' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{ flex: 1, background: 'var(--bg3)', border: '0.5px solid var(--faint)', borderRight: 'none', color: 'var(--cream)', fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '13px', padding: '10px 12px', borderRadius: '2px 0 0 2px', outline: 'none' }}
                className="email-input"
              />
              <button style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', fontWeight: 500, background: 'var(--amber)', color: '#0f0e0c', border: 'none', padding: '10px 16px', borderRadius: '0 2px 2px 0', cursor: 'pointer', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ borderTop: '0.5px solid var(--faint2)', padding: '24px 0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)' }}>
            Homo Adapticus · by Amare Teklay
          </span>
          <nav style={{ display: 'flex', gap: '20px' }}>
            {[
              { label: 'amareteklay.com', href: 'https://amareteklay.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amareteklay/' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
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
