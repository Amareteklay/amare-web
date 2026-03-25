import React from 'react'
import Link from 'next/link'

const s = {
  page: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '0 48px',
  } as React.CSSProperties,

  /* Nav */
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '28px 0 24px',
    borderBottom: '0.5px solid var(--faint)',
  } as React.CSSProperties,
  navBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  } as React.CSSProperties,
  navLogo: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    border: '1.5px solid var(--amber)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  } as React.CSSProperties,
  navLogoDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: 'var(--amber)',
  } as React.CSSProperties,
  navName: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--cream)',
  } as React.CSSProperties,
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    listStyle: 'none',
  } as React.CSSProperties,
  navLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,
  navSubscribe: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--amber)',
    border: '0.5px solid var(--amber)',
    padding: '6px 14px',
    borderRadius: '2px',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s',
  } as React.CSSProperties,

  /* Hero */
  hero: {
    padding: '80px 0 72px',
  } as React.CSSProperties,
  heroTagRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: '28px',
  } as React.CSSProperties,
  heroTagLine: {
    width: '24px',
    height: '0.5px',
    background: 'var(--amber)',
    flexShrink: 0,
  } as React.CSSProperties,
  heroTagText: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.16em',
  } as React.CSSProperties,
  heroH1: {
    fontSize: 'clamp(30px, 4vw, 48px)',
    fontWeight: 400,
    lineHeight: 1.15,
    color: 'var(--cream)',
    fontFamily: 'var(--font-lora), Georgia, serif',
    marginBottom: '8px',
  } as React.CSSProperties,
  heroH1Italic: {
    fontStyle: 'italic',
    color: 'var(--muted)',
    display: 'block',
    marginBottom: '24px',
  } as React.CSSProperties,
  heroBody: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '15px',
    color: 'var(--muted)',
    maxWidth: '520px',
    lineHeight: 1.75,
    marginBottom: '36px',
  } as React.CSSProperties,
  subscribeRow: {
    display: 'flex',
    gap: '0',
    maxWidth: '400px',
    marginBottom: '12px',
  } as React.CSSProperties,
  emailInput: {
    flex: 1,
    background: 'var(--bg2)',
    border: '0.5px solid var(--faint)',
    borderRight: 'none',
    color: 'var(--cream)',
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '13px',
    padding: '10px 14px',
    borderRadius: '2px 0 0 2px',
    outline: 'none',
  } as React.CSSProperties,
  subscribeBtn: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    fontWeight: 500,
    background: 'var(--amber)',
    color: '#0f0e0c',
    border: 'none',
    padding: '10px 18px',
    borderRadius: '0 2px 2px 0',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    letterSpacing: '0.06em',
  } as React.CSSProperties,
  subscribeHint: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    letterSpacing: '0.06em',
  } as React.CSSProperties,

  /* Section divider */
  dividerWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
  } as React.CSSProperties,
  dividerLabel: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.14em',
    whiteSpace: 'nowrap' as const,
    flexShrink: 0,
  } as React.CSSProperties,
  dividerLine: {
    flexGrow: 1,
    height: '0.5px',
    background: 'var(--faint2)',
  } as React.CSSProperties,

  /* Featured card */
  section: {
    paddingBottom: '64px',
  } as React.CSSProperties,
  featuredCard: {
    display: 'grid',
    gridTemplateColumns: '1fr 320px',
    border: '0.5px solid var(--faint2)',
    borderRadius: '4px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s',
  } as React.CSSProperties,
  featuredLeft: {
    background: 'var(--bg2)',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column' as const,
  } as React.CSSProperties,
  featuredRight: {
    background: 'var(--bg3)',
    borderLeft: '0.5px solid var(--faint2)',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  } as React.CSSProperties,
  cardTag: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    marginBottom: '12px',
    display: 'block',
  } as React.CSSProperties,
  featuredTitle: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '22px',
    fontWeight: 500,
    color: 'var(--cream)',
    lineHeight: 1.25,
    marginBottom: '14px',
  } as React.CSSProperties,
  featuredLede: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '14px',
    color: 'var(--muted)',
    lineHeight: 1.7,
    flex: 1,
    marginBottom: '20px',
  } as React.CSSProperties,
  featuredActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  } as React.CSSProperties,
  readLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--amber)',
    letterSpacing: '0.06em',
  } as React.CSSProperties,
  readTime: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    letterSpacing: '0.06em',
  } as React.CSSProperties,
  asideLabel: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    marginBottom: '10px',
    display: 'block',
  } as React.CSSProperties,
  pullQuote: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontStyle: 'italic',
    fontSize: '14px',
    color: 'var(--muted)',
    lineHeight: 1.7,
    borderLeft: '2px solid var(--amber-dim)',
    paddingLeft: '14px',
  } as React.CSSProperties,
  asideTagRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '6px',
  } as React.CSSProperties,
  asideTag: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
    border: '0.5px solid var(--faint)',
    padding: '3px 8px',
    borderRadius: '2px',
  } as React.CSSProperties,

  /* Essay grid */
  essayGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '12px',
    paddingBottom: '64px',
  } as React.CSSProperties,
  essayCard: {
    background: 'var(--bg2)',
    border: '0.5px solid var(--faint)',
    borderRadius: '4px',
    padding: '24px',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'background 0.2s, border-color 0.2s',
  } as React.CSSProperties,
  essayTitle: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '15px',
    fontWeight: 500,
    color: 'var(--cream)',
    lineHeight: 1.3,
    marginBottom: '10px',
  } as React.CSSProperties,
  essayLede: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '12px',
    color: 'var(--muted)',
    lineHeight: 1.6,
    marginBottom: '16px',
  } as React.CSSProperties,

  /* Manifesto strip */
  manifestoStrip: {
    background: 'var(--bg2)',
    borderLeft: '3px solid var(--amber)',
    borderRadius: '0 4px 4px 0',
    padding: '40px 40px 36px',
    marginBottom: '64px',
  } as React.CSSProperties,
  manifestoQuote: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontStyle: 'italic',
    fontSize: '17px',
    color: 'var(--cream)',
    maxWidth: '560px',
    lineHeight: 1.7,
    marginBottom: '24px',
  } as React.CSSProperties,
  manifestoBtn: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--amber)',
    border: '0.5px solid var(--amber)',
    padding: '8px 18px',
    borderRadius: '2px',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'background 0.2s, color 0.2s',
    letterSpacing: '0.06em',
  } as React.CSSProperties,

  /* Footer */
  footer: {
    borderTop: '0.5px solid var(--faint2)',
    padding: '28px 0 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
    gap: '16px',
  } as React.CSSProperties,
  footerBrand: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '11px',
    color: 'var(--muted)',
  } as React.CSSProperties,
  footerLinks: {
    display: 'flex',
    gap: '20px',
  } as React.CSSProperties,
  footerLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={s.dividerWrap}>
      <span style={s.dividerLabel}>{label}</span>
      <div style={s.dividerLine} />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <style>{`
        .nav-link:hover     { color: var(--cream) !important; }
        .nav-subscribe:hover { background: var(--amber) !important; color: #0f0e0c !important; }
        .featured-card:hover { border-color: var(--amber-dim) !important; }
        .essay-card:hover   { background: var(--bg3) !important; border-color: var(--faint2) !important; }
        .manifesto-btn:hover { background: var(--amber) !important; color: #0f0e0c !important; }
        .footer-link:hover  { color: var(--amber) !important; }
        .email-input:focus  { border-color: var(--amber-dim) !important; }

        @media (max-width: 640px) {
          .page-wrap        { padding: 0 24px !important; }
          .featured-card    { grid-template-columns: 1fr !important; }
          .featured-right   { border-left: none !important; border-top: 0.5px solid var(--faint2) !important; }
          .essay-grid       { grid-template-columns: 1fr !important; }
          .nav-links        { display: none !important; }
          .subscribe-row    { flex-direction: column !important; }
          .subscribe-row input { border-radius: 2px !important; border-right: 0.5px solid var(--faint) !important; margin-bottom: 8px; }
          .subscribe-row button { border-radius: 2px !important; width: 100%; }
        }
      `}</style>

      <div style={s.page} className="page-wrap">

        {/* Nav */}
        <nav style={s.nav} className="anim-0">
          <Link href="/" style={s.navBrand}>
            <div style={s.navLogo}>
              <div style={s.navLogoDot} />
            </div>
            <span style={s.navName}>Homo Adapticus</span>
          </Link>
          <ul style={s.navLinks} className="nav-links">
            <li><Link href="/" style={s.navLink} className="nav-link">Journal</Link></li>
            <li><Link href="/" style={s.navLink} className="nav-link">About</Link></li>
            <li><Link href="/" style={s.navLink} className="nav-link">Archive</Link></li>
            <li>
              <a href="#" style={s.navSubscribe} className="nav-subscribe">Subscribe</a>
            </li>
          </ul>
        </nav>

        {/* Hero */}
        <section style={s.hero} className="anim-1">
          <div style={s.heroTagRow}>
            <div style={s.heroTagLine} />
            <span style={s.heroTagText}>Journal of Intelligent Change</span>
          </div>

          <h1 style={s.heroH1}>
            Adaptation is no longer a last resort.
            <em style={s.heroH1Italic}>{"It's a primary life skill."}</em>
          </h1>

          <p style={s.heroBody}>
            Essays at the intersection of AI, complexity, and human
            resilience. For people who refuse to be spectators of
            the future.
          </p>

          <div style={s.subscribeRow} className="subscribe-row">
            <input
              type="email"
              placeholder="your@email.com"
              style={s.emailInput}
              className="email-input"
            />
            <button style={s.subscribeBtn}>Get the essays →</button>
          </div>
          <p style={s.subscribeHint}>No spam · Thoughtful signals in a noisy world</p>
        </section>

        {/* Featured essay */}
        <section style={s.section} className="anim-2">
          <SectionDivider label="Featured essay" />
          <Link
            href="/journal/adaptation-ai"
            style={s.featuredCard}
            className="featured-card"
          >
            <div style={s.featuredLeft}>
              <span style={s.cardTag}>AI & Futures</span>
              <h2 style={s.featuredTitle}>Adaptation in the Age of AI</h2>
              <p style={s.featuredLede}>
                When models update faster than institutions, humans face
                a fundamental choice: freeze, outsource, or adapt. The
                third path is harder than it sounds — and the only one
                worth taking.
              </p>
              <div style={s.featuredActions}>
                <span style={s.readLink}>Read essay ↗</span>
                <span style={s.readTime}>11 min read</span>
              </div>
            </div>

            <div style={s.featuredRight} className="featured-right">
              <div>
                <span style={s.asideLabel}>From the essay</span>
                <blockquote style={s.pullQuote}>
                  &ldquo;The organism that cannot change its behavior when the
                  environment changes is not adaptable — it is merely
                  consistent.&rdquo;
                </blockquote>
              </div>
              <div>
                <span style={s.asideLabel}>Themes</span>
                <div style={s.asideTagRow}>
                  {['AI pace', 'agency', 'cognition', 'institutions'].map((t) => (
                    <span key={t} style={s.asideTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Essay grid */}
        <section style={s.essayGrid} className="essay-grid anim-3">
          <Link href="/journal/adaptation-ai" style={s.essayCard} className="essay-card">
            <span style={s.cardTag}>Inner Systems</span>
            <h3 style={s.essayTitle}>Anxiety, Agency, and the Future Self</h3>
            <p style={s.essayLede}>
              Anxious minds are often highly simulated minds.
              The question is what we do with all those simulations.
            </p>
            <span style={s.readTime}>8 min read</span>
          </Link>

          <a href="#" style={s.essayCard} className="essay-card">
            <span style={s.cardTag}>Complexity</span>
            <h3 style={s.essayTitle}>When Systems Tip: Regime Shifts in Everyday Life</h3>
            <p style={s.essayLede}>
              Ecological tipping points have a quiet analogue in
              how humans and organizations change.
            </p>
            <span style={s.readTime}>10 min read</span>
          </a>

          <a href="#" style={s.essayCard} className="essay-card">
            <span style={s.cardTag}>Behavior</span>
            <h3 style={s.essayTitle}>Emotion as Signal, Not Noise</h3>
            <p style={s.essayLede}>
              Behavioral economics treats emotion as bias. A more
              useful frame: emotion as fast, lossy information about stakes.
            </p>
            <span style={s.readTime}>9 min read</span>
          </a>
        </section>

        {/* Manifesto strip */}
        <div style={s.manifestoStrip} className="anim-4">
          <p style={s.manifestoQuote}>
            &ldquo;Homo Adapticus is not a philosophy of resilience.
            It is a philosophy of transformation — the idea that
            the right response to an unstable world is to become
            someone who is genuinely at home in instability.&rdquo;
          </p>
          <Link href="/journal/manifesto" style={s.manifestoBtn} className="manifesto-btn">
            Read the manifesto ↗
          </Link>
        </div>

        {/* Footer */}
        <footer style={s.footer} className="anim-5">
          <span style={s.footerBrand}>Homo Adapticus · by Amare Teklay</span>
          <nav style={s.footerLinks}>
            {[
              { label: 'amareteklay.com', href: 'https://amareteklay.com' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amareteklay/' },
              { label: 'Subscribe', href: '#' },
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
