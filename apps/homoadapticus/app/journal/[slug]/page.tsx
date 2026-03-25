import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const SLUGS = ['adaptation-ai', 'manifesto'] as const
type Slug = (typeof SLUGS)[number]

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

const prose: Record<string, React.CSSProperties> = {
  p: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '17px',
    lineHeight: 1.85,
    color: 'var(--cream)',
    marginBottom: '1.6em',
  },
  h1: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 400,
    lineHeight: 1.2,
    color: 'var(--cream)',
    marginBottom: '0.5em',
    marginTop: '1.6em',
  },
  h2: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '22px',
    fontWeight: 500,
    lineHeight: 1.3,
    color: 'var(--amber-dim)',
    marginBottom: '0.6em',
    marginTop: '2em',
  },
  h3: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: 1.35,
    color: 'var(--amber-dim)',
    marginBottom: '0.5em',
    marginTop: '1.8em',
  },
  blockquote: {
    borderLeft: '2px solid var(--amber-dim)',
    paddingLeft: '20px',
    margin: '1.8em 0',
    fontStyle: 'italic',
    color: 'var(--muted)',
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '16px',
    lineHeight: 1.75,
  },
  a: {
    color: 'var(--amber)',
    textDecoration: 'none',
  },
  code: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '14px',
    background: 'var(--bg2)',
    padding: '2px 6px',
    borderRadius: '2px',
    color: 'var(--cream)',
  },
  pre: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '13px',
    background: 'var(--bg2)',
    padding: '20px',
    borderRadius: '4px',
    overflowX: 'auto' as const,
    marginBottom: '1.6em',
    lineHeight: 1.6,
    color: 'var(--cream)',
  },
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h1 style={prose.h1} {...props} />,
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
}

export default async function EssayPage({
  params,
}: {
  params: { slug: string }
}) {
  if (!SLUGS.includes(params.slug as Slug)) {
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
        .nav-link:hover    { color: var(--cream) !important; }
        .back-link:hover   { color: var(--amber) !important; }
        .footer-link:hover { color: var(--amber) !important; }
        .divider-rule      { border: none; border-top: 0.5px solid var(--faint); margin: 40px 0; }
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
          className="anim-0"
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
            {['Journal', 'About', 'Archive'].map((item) => (
              <li key={item}>
                <Link
                  href="/"
                  style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  className="nav-link"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Essay header */}
        <header style={{ padding: '56px 0 0' }} className="anim-1">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            {category && (
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
                {category}
              </span>
            )}
            {readTime && (
              <span style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '10px', color: 'var(--amber-dim)', letterSpacing: '0.08em' }}>
                {readTime}
              </span>
            )}
          </div>

          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 400, lineHeight: 1.2, color: 'var(--cream)', marginBottom: '16px' }}>
            {title}
          </h1>

          {date && (
            <time
              dateTime={date}
              style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', display: 'block', marginBottom: '40px' }}
            >
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          )}

          <hr className="divider-rule" />
        </header>

        {/* Essay body */}
        <article style={{ paddingBottom: '16px' }} className="anim-2">
          <Content components={components} />
        </article>

        <hr className="divider-rule" />

        {/* Post-essay */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '8px 0 40px' }} className="anim-2">
          <Link
            href="/"
            style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.06em' }}
            className="back-link"
          >
            ← Back to journal
          </Link>

          <div style={{ background: 'var(--bg2)', border: '0.5px solid var(--faint)', borderRadius: '4px', padding: '28px' }}>
            <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '14px', color: 'var(--muted)', marginBottom: '16px', lineHeight: 1.65 }}>
              Essays like this one arrive in your inbox when you subscribe.
              No spam. Thoughtful signals in a noisy world.
            </p>
            <div style={{ display: 'flex', maxWidth: '360px' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{ flex: 1, background: 'var(--bg3)', border: '0.5px solid var(--faint)', borderRight: 'none', color: 'var(--cream)', fontFamily: 'var(--font-lora), Georgia, serif', fontSize: '13px', padding: '9px 12px', borderRadius: '2px 0 0 2px', outline: 'none' }}
              />
              <button style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', fontWeight: 500, background: 'var(--amber)', color: '#0f0e0c', border: 'none', padding: '9px 16px', borderRadius: '0 2px 2px 0', cursor: 'pointer', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
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
