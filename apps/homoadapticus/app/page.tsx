import React from 'react'
import Link from 'next/link'
import { getPublished, getFeatured } from '../lib/essays'

/* ─── Shared nav ──────────────────────────────────────────────── */

function Nav() {
  return (
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
          <Link href="/about" style={s.navLink} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <a href="#subscribe" style={s.navSubscribe} className="nav-subscribe">
            Subscribe →
          </a>
        </li>
      </ul>
    </nav>
  )
}

/* ─── Section divider ─────────────────────────────────────────── */

function Divider({ label, action }: { label: string; action?: React.ReactNode }) {
  return (
    <div style={s.dividerWrap}>
      <span style={s.dividerLabel}>{label}</span>
      <div style={s.dividerLine} />
      {action && <span style={s.dividerAction}>{action}</span>}
    </div>
  )
}

/* ─── Essay list item ─────────────────────────────────────────── */

function EssayListItem({
  slug,
  title,
  category,
  readTime,
  lede,
  date,
}: {
  slug: string
  title: string
  category: string
  readTime: string
  lede: string
  date: string
}) {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  })

  return (
    <Link href={`/journal/${slug}`} style={s.listItem} className="essay-list-item">
      <div style={s.listMeta}>
        <span style={s.listCategory}>{category.toUpperCase()}</span>
        <span style={s.listReadTime}>{readTime} read</span>
      </div>
      <h3 style={s.listTitle} className="essay-list-title">
        {title}
        <span style={s.listArrow} className="essay-arrow"> ↗</span>
      </h3>
      <p style={s.listLede}>{lede}</p>
      <time dateTime={date} style={s.listDate}>
        {formatted}
      </time>
    </Link>
  )
}

/* ─── Footer ──────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer style={s.footer}>
      <span style={s.footerBrand}>Homo Adapticus · by Amare Teklay</span>
      <nav style={s.footerLinks}>
        {[
          { label: 'amareteklay.com', href: 'https://amareteklay.com' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amareteklay/' },
          { label: 'Subscribe', href: '#subscribe' },
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
  )
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function Home() {
  const featured = getFeatured()
  const all = getPublished()
  const rest = all.filter((e) => e.slug !== featured.slug)

  return (
    <div>
      <style>{`
        .nav-link:hover      { color: var(--cream) !important; }
        .nav-subscribe:hover { background: var(--amber) !important; color: #0f0e0c !important; }
        .featured-card:hover { border-color: var(--amber-dim) !important; }
        .footer-link:hover   { color: var(--amber) !important; }
        .email-input:focus   { border-color: var(--amber-dim) !important; outline: none; }

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
          .page-wrap       { padding: 0 24px !important; }
          .featured-card   { grid-template-columns: 1fr !important; }
          .featured-right  { border-left: none !important; border-top: 0.5px solid var(--faint2) !important; }
          .nav-links       { display: none !important; }
          .subscribe-row   { flex-direction: column !important; }
          .subscribe-row input  { border-radius: 2px !important; border-right: 0.5px solid var(--faint) !important; margin-bottom: 8px; }
          .subscribe-row button { border-radius: 2px !important; width: 100%; }
        }
      `}</style>

      <div style={s.page} className="page-wrap">

        <Nav />

        {/* ── Hero ── */}
        <section style={s.hero} className="fade-up delay-1">
          <p style={s.heroEyebrow}>Journal of Intelligent Change</p>

          <h1 style={s.heroH1}>
            {"I've been adapting since I was twelve."}
            <em style={s.heroH1Sub}>{"Here's what I've learned."}</em>
          </h1>

          <p style={s.heroBody}>
            I left home at 12, moved to boarding school at 14, crossed
            continents for a PhD, and now watch AI reshape everything
            I built a career around. These are essays from inside that
            process — not a framework, not advice. Honest thinking.
          </p>

          <p style={s.heroByline}>— Amare Teklay, Stockholm</p>
        </section>

        {/* ── Featured essay ── */}
        <section style={s.section} className="fade-up delay-2">
          <Divider
            label="Latest essay"
            action={
              <Link href="/journal" style={s.dividerActionLink} className="nav-link">
                All essays →
              </Link>
            }
          />

          <Link
            href={`/journal/${featured.slug}`}
            style={s.featuredCard}
            className="featured-card"
          >
            <div style={s.featuredLeft}>
              <span style={s.cardTag}>{featured.category}</span>
              <h2 style={s.featuredTitle}>{featured.title}</h2>
              <p style={s.featuredLede}>{featured.lede}</p>
              <div style={s.featuredActions}>
                <span style={s.readLink}>Read essay ↗</span>
                <span style={s.readTime}>{featured.readTime} read</span>
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
                  {['AI pace', 'agency', 'cognition'].map((t) => (
                    <span key={t} style={s.asideTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── Essay list ── */}
        {rest.length > 0 && (
          <section style={s.section} className="fade-up delay-3">
            <Divider label="More writing" />
            <div>
              {rest.map((essay) => (
                <EssayListItem key={essay.slug} {...essay} />
              ))}
            </div>
          </section>
        )}

        {/* ── Subscribe strip ── */}
        <div id="subscribe" style={s.subscribeStrip} className="fade-up delay-4">
          <p style={s.subscribeHeading}>New essays, when they&rsquo;re ready.</p>
          <p style={s.subscribeSub}>No schedule, no spam.</p>
          <div style={s.subscribeRow} className="subscribe-row">
            <input
              type="email"
              placeholder="your@email.com"
              style={s.emailInput}
              className="email-input"
            />
            <button style={s.subscribeBtn}>Subscribe →</button>
          </div>
        </div>

        <Footer />

      </div>
    </div>
  )
}

/* ─── Styles ──────────────────────────────────────────────────── */

const s: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: '820px',
    margin: '0 auto',
    padding: '0 48px',
  },

  /* Nav */
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

  /* Hero */
  hero: {
    padding: '80px 0 72px',
  },
  heroEyebrow: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '28px',
  },
  heroH1: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 400,
    lineHeight: 1.2,
    color: 'var(--cream)',
    marginBottom: '24px',
  },
  heroH1Sub: {
    display: 'block',
    fontStyle: 'italic',
    color: 'var(--muted)',
  },
  heroBody: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '16px',
    color: 'var(--muted)',
    maxWidth: '520px',
    lineHeight: 1.75,
    marginBottom: '0',
  },
  heroByline: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontStyle: 'italic',
    fontSize: '13px',
    color: 'var(--amber-dim)',
    marginTop: '24px',
  },

  /* Section */
  section: {
    paddingBottom: '56px',
  },

  /* Divider */
  dividerWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
  },
  dividerLabel: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  dividerLine: {
    flexGrow: 1,
    height: '0.5px',
    background: 'var(--faint2)',
  },
  dividerAction: {
    flexShrink: 0,
  },
  dividerActionLink: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },

  /* Featured card */
  featuredCard: {
    display: 'grid',
    gridTemplateColumns: '1fr 300px',
    border: '0.5px solid var(--faint2)',
    borderRadius: '4px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'border-color 0.2s',
  },
  featuredLeft: {
    background: 'var(--bg2)',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
  },
  featuredRight: {
    background: 'var(--bg3)',
    borderLeft: '0.5px solid var(--faint2)',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  cardTag: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '12px',
    display: 'block',
  },
  featuredTitle: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '22px',
    fontWeight: 400,
    color: 'var(--cream)',
    lineHeight: 1.25,
    marginBottom: '14px',
  },
  featuredLede: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '14px',
    color: 'var(--muted)',
    lineHeight: 1.7,
    flex: 1,
    marginBottom: '20px',
  },
  featuredActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  readLink: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '13px',
    color: 'var(--amber)',
  },
  readTime: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--muted)',
  },
  asideLabel: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '9px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '10px',
    display: 'block',
  },
  pullQuote: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontStyle: 'italic',
    fontSize: '13px',
    color: 'var(--muted)',
    lineHeight: 1.7,
    borderLeft: '2px solid var(--amber-dim)',
    paddingLeft: '14px',
  },
  asideTagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  asideTag: {
    fontFamily: 'var(--font-mono), monospace',
    fontSize: '10px',
    color: 'var(--amber-dim)',
  },

  /* Essay list */
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

  /* Subscribe strip */
  subscribeStrip: {
    background: 'var(--bg2)',
    borderLeft: '3px solid var(--amber)',
    borderRadius: '0 4px 4px 0',
    padding: '36px 40px',
    marginBottom: '64px',
  },
  subscribeHeading: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontStyle: 'italic',
    fontSize: '16px',
    color: 'var(--cream)',
    marginBottom: '4px',
  },
  subscribeSub: {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '13px',
    color: 'var(--muted)',
    marginBottom: '20px',
  },
  subscribeRow: {
    display: 'flex',
    maxWidth: '400px',
  },
  emailInput: {
    flex: 1,
    background: 'var(--bg3)',
    border: '0.5px solid var(--faint)',
    borderRight: 'none',
    color: 'var(--cream)',
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontSize: '13px',
    padding: '10px 14px',
    borderRadius: '2px 0 0 2px',
    outline: 'none',
  },
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
    whiteSpace: 'nowrap',
    letterSpacing: '0.06em',
  },

  /* Footer */
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
