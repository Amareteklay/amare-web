import React from 'react'

/* ─────────────────────────────────────────────
   Inline styles use CSS custom properties
   defined in globals.css. All layout is
   done via inline style objects to avoid
   needing CSS Modules (single-file approach).
───────────────────────────────────────────── */

const s = {
  /* Layout */
  page: {
    maxWidth: '780px',
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
  navName: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--amber)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.14em',
  } as React.CSSProperties,
  navLinks: {
    display: 'flex',
    gap: '28px',
    listStyle: 'none',
  } as React.CSSProperties,
  navLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    cursor: 'pointer',
    transition: 'color 0.2s',
  } as React.CSSProperties,

  /* Hero */
  hero: {
    padding: '80px 0 72px',
  } as React.CSSProperties,
  heroTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '28px',
  } as React.CSSProperties,
  heroTagLine: {
    width: '24px',
    height: '0.5px',
    background: 'var(--amber)',
    flexShrink: 0,
  } as React.CSSProperties,
  heroTagText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.16em',
  } as React.CSSProperties,
  heroH1: {
    fontSize: 'clamp(28px, 5vw, 52px)',
    fontWeight: 400,
    lineHeight: 1.18,
    color: 'var(--cream)',
    marginBottom: '24px',
    fontFamily: 'var(--font-lora)',
  } as React.CSSProperties,
  heroItalic: {
    fontStyle: 'italic',
    color: 'var(--muted)',
  } as React.CSSProperties,
  heroBody: {
    fontFamily: 'var(--font-lora)',
    fontSize: '15px',
    color: 'var(--muted)',
    maxWidth: '520px',
    lineHeight: 1.75,
    marginBottom: '36px',
  } as React.CSSProperties,
  heroActions: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  ctaPrimary: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: 500,
    background: 'var(--amber)',
    color: '#0f0e0c',
    padding: '9px 18px',
    borderRadius: '2px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    letterSpacing: '0.06em',
  } as React.CSSProperties,
  ctaGhost: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    fontWeight: 500,
    background: 'transparent',
    color: 'var(--muted)',
    padding: '9px 18px',
    borderRadius: '2px',
    border: '0.5px solid var(--faint2)',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    letterSpacing: '0.06em',
  } as React.CSSProperties,

  /* Section divider */
  divider: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '40px',
  } as React.CSSProperties,
  dividerLabel: {
    fontFamily: 'var(--font-mono)',
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

  /* Cards */
  section: {
    paddingBottom: '72px',
  } as React.CSSProperties,
  ideaGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '12px',
  } as React.CSSProperties,
  ideaGridBottom: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    marginTop: '12px',
  } as React.CSSProperties,
  card: {
    background: 'var(--bg2)',
    border: '0.5px solid var(--faint)',
    borderRadius: '4px',
    padding: '28px 28px 24px',
    transition: 'border-color 0.2s',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'default',
  } as React.CSSProperties,
  cardLink: {
    background: 'var(--bg2)',
    border: '0.5px solid var(--faint)',
    borderRadius: '4px',
    padding: '28px 28px 24px',
    transition: 'border-color 0.2s',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  } as React.CSSProperties,
  cardLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.12em',
    marginBottom: '12px',
    display: 'block',
  } as React.CSSProperties,
  cardTitle: {
    fontFamily: 'var(--font-lora)',
    fontSize: '18px',
    fontWeight: 500,
    color: 'var(--cream)',
    marginBottom: '10px',
    lineHeight: 1.3,
  } as React.CSSProperties,
  cardTitleFeatured: {
    fontFamily: 'var(--font-lora)',
    fontSize: '20px',
    fontWeight: 500,
    color: 'var(--cream)',
    marginBottom: '10px',
    lineHeight: 1.3,
  } as React.CSSProperties,
  cardDesc: {
    fontFamily: 'var(--font-lora)',
    fontSize: '13px',
    color: 'var(--muted)',
    lineHeight: 1.65,
    marginBottom: '16px',
  } as React.CSSProperties,
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '6px',
    marginBottom: '16px',
  } as React.CSSProperties,
  tag: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--muted)',
    border: '0.5px solid var(--faint)',
    padding: '3px 8px',
    borderRadius: '2px',
  } as React.CSSProperties,
  statusBadge: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    border: '0.5px solid var(--amber-dim)',
    padding: '3px 8px',
    borderRadius: '2px',
  } as React.CSSProperties,
  cardDomain: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--amber)',
    marginTop: 'auto',
    display: 'block',
    paddingTop: '4px',
  } as React.CSSProperties,

  /* Two-column section */
  twoCol: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '48px',
    paddingBottom: '72px',
  } as React.CSSProperties,
  colLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.14em',
    marginBottom: '24px',
    display: 'block',
  } as React.CSSProperties,

  /* Research items */
  researchItem: {
    padding: '18px 0',
    borderTop: '0.5px solid var(--faint)',
  } as React.CSSProperties,
  researchTitle: {
    fontFamily: 'var(--font-lora)',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--cream)',
    marginBottom: '4px',
    lineHeight: 1.4,
  } as React.CSSProperties,
  researchMeta: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    letterSpacing: '0.08em',
  } as React.CSSProperties,

  /* Tool cards */
  toolCard: {
    background: 'var(--bg2)',
    border: '0.5px solid var(--faint)',
    borderRadius: '3px',
    padding: '16px',
    marginBottom: '10px',
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
  } as React.CSSProperties,
  toolName: {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    fontWeight: 500,
    color: 'var(--amber)',
    marginBottom: '6px',
    display: 'block',
  } as React.CSSProperties,
  toolDesc: {
    fontFamily: 'var(--font-lora)',
    fontSize: '12px',
    color: 'var(--muted)',
    lineHeight: 1.6,
  } as React.CSSProperties,

  /* Footer */
  footer: {
    borderTop: '0.5px solid var(--faint)',
    paddingTop: '40px',
    paddingBottom: '48px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '32px',
  } as React.CSSProperties,
  footerMain: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '32px',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  footerQuote: {
    fontFamily: 'var(--font-lora)',
    fontStyle: 'italic',
    fontSize: '14px',
    color: 'var(--muted)',
    maxWidth: '440px',
    lineHeight: 1.7,
  } as React.CSSProperties,
  footerLinks: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap' as const,
    alignItems: 'center',
  } as React.CSSProperties,
  footerLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '11px',
    color: 'var(--muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
  } as React.CSSProperties,
  footerCopy: {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    color: 'var(--amber-dim)',
    letterSpacing: '0.08em',
  } as React.CSSProperties,
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={s.divider}>
      <span style={s.dividerLabel}>{label}</span>
      <div style={s.dividerLine} />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <style>{`
        .nav-link:hover { color: var(--cream) !important; }
        .card-hover:hover { border-color: var(--faint2) !important; }
        .footer-link:hover { color: var(--amber) !important; }
        .cta-ghost:hover { border-color: var(--faint2) !important; color: var(--cream) !important; }

        @media (max-width: 640px) {
          .page-wrap { padding: 0 24px !important; }
          .idea-grid-bottom { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      <div style={s.page} className="page-wrap">

        {/* Nav */}
        <nav style={s.nav} className="anim-nav">
          <span style={s.navName}>Amare Teklay</span>
          <ul style={s.navLinks} className="nav-links">
            {['Research', 'Writing', 'Tools', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={s.navLink}
                  className="nav-link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero */}
        <section style={s.hero} className="anim-hero">
          <div style={s.heroTag}>
            <div style={s.heroTagLine} />
            <span style={s.heroTagText}>PhD Economist · Researcher · Builder</span>
          </div>

          <h1 style={s.heroH1}>
            I study how people and systems
            <br />
            <em style={s.heroItalic}>adapt to change.</em>
          </h1>

          <p style={s.heroBody}>
            Epidemics, behavior, AI, sustainability —<br />
            each a different face of the same problem:<br />
            how complex systems respond when the<br />
            environment shifts beneath them.
          </p>

          <div style={s.heroActions}>
            <a
              href="https://homoadapticus.com"
              target="_blank"
              rel="noopener noreferrer"
              style={s.ctaPrimary}
            >
              Read Homo Adapticus ↗
            </a>
            <a href="#ideas" style={s.ctaGhost} className="cta-ghost">
              Explore the work
            </a>
          </div>
        </section>

        {/* Idea Map */}
        <section id="ideas" style={s.section} className="anim-ideas">
          <SectionDivider label="Idea map" />

          {/* Featured card */}
          <a
            href="https://homoadapticus.com"
            target="_blank"
            rel="noopener noreferrer"
            style={s.cardLink}
            className="card-hover"
          >
            <span style={s.cardLabel}>01 · Writing</span>
            <h2 style={s.cardTitleFeatured}>Homo Adapticus</h2>
            <p style={s.cardDesc}>
              Essays and dispatches on adaptation in the age of AI —
              how organisms, institutions, and individuals reorganize
              themselves when stability ends.
            </p>
            <div style={s.tagRow}>
              {['complexity', 'AI', 'behavior', 'sustainability'].map((t) => (
                <span key={t} style={s.tag}>{t}</span>
              ))}
            </div>
            <span style={s.cardDomain}>homoadapticus.com ↗</span>
          </a>

          {/* Bottom two cards */}
          <div style={s.ideaGridBottom} className="idea-grid-bottom">
            <a
              href="https://causalica.com"
              target="_blank"
              rel="noopener noreferrer"
              style={s.cardLink}
              className="card-hover"
            >
              <span style={s.cardLabel}>02 · Service</span>
              <h2 style={s.cardTitle}>Causalica</h2>
              <p style={s.cardDesc}>
                Causal inference as a service — tools, consulting, and
                frameworks for researchers who need to understand
                what actually causes what.
              </p>
              <div style={s.tagRow}>
                {['causal inference', 'consulting'].map((t) => (
                  <span key={t} style={s.tag}>{t}</span>
                ))}
              </div>
              <span style={s.cardDomain}>causalica.com ↗</span>
            </a>

            <div style={s.card} className="card-hover">
              <span style={s.cardLabel}>03 · Tool</span>
              <h2 style={s.cardTitle}>Simuvera</h2>
              <p style={s.cardDesc}>
                A system for converting experimental data into
                agent-based simulations — bridging empirical
                observation and computational modeling.
              </p>
              <div style={s.tagRow}>
                {['ABM', 'simulation', 'experiments'].map((t) => (
                  <span key={t} style={s.tag}>{t}</span>
                ))}
              </div>
              <span style={s.statusBadge}>In development</span>
            </div>
          </div>
        </section>

        {/* Research + Tools two-column */}
        <section id="research" style={s.twoCol} className="two-col anim-two-col">
          {/* Active Research */}
          <div>
            <SectionDivider label="Active research" />
            <div>
              {[
                {
                  title: 'Emerging pests, pathogens & the polycrisis',
                  meta: 'In progress · 2025–26',
                },
                {
                  title: 'Emotions, AI & sustainable behavior',
                  meta: 'Experiment · ABM extension',
                },
                {
                  title: 'Cascading regime shifts in resource systems',
                  meta: 'Team · Bifurcation analysis',
                },
              ].map(({ title, meta }) => (
                <div key={title} style={s.researchItem}>
                  <div style={s.researchTitle}>{title}</div>
                  <div style={s.researchMeta}>{meta}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Experiments */}
          <div id="tools">
            <SectionDivider label="Tools & experiments" />
            <a
              href="#"
              style={s.toolCard}
              className="card-hover"
            >
              <span style={s.toolName}>Ameco</span>
              <span style={s.toolDesc}>
                Automated research process — an AI agent
                designed to take over repetitive research tasks.
              </span>
            </a>
            <a
              href="https://www.youtube.com/@amantology"
              target="_blank"
              rel="noopener noreferrer"
              style={s.toolCard}
              className="card-hover"
            >
              <span style={s.toolName}>Amantology</span>
              <span style={s.toolDesc}>
                YouTube channel tracing an ontological journey
                through AI, knowledge, and identity.
              </span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" style={s.footer} className="anim-footer">
          <div style={s.footerMain}>
            <p style={s.footerQuote}>
              &ldquo;The goal is not to predict the future but to understand
              why systems behave as they do — and to build better ones.&rdquo;
            </p>
            <nav style={s.footerLinks}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amareteklay/' },
                { label: 'GitHub', href: 'https://github.com/amareteklay' },
                { label: 'Twitter', href: 'https://twitter.com/amareteklay' },
                { label: 'CV', href: '#' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel={href !== '#' ? 'noopener noreferrer' : undefined}
                  style={s.footerLink}
                  className="footer-link"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div style={s.footerCopy}>© 2026 Amare Teklay</div>
        </footer>

      </div>
    </div>
  )
}
