import Link from 'next/link'

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 60 60" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="logo-grad" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f06030" />
        <stop offset="100%" stopColor="#c03010" />
      </linearGradient>
    </defs>
    <path d="M10 30 L22 8 L50 8 L50 18 L34 18 L26 30 L34 42 L50 42 L50 52 L22 52 Z" fill="url(#logo-grad)" />
    <circle cx="38" cy="24" r="3" fill="#0b0d0f" opacity="0.85" />
    <circle cx="38" cy="38" r="3" fill="#0b0d0f" opacity="0.85" />
    <circle cx="26" cy="31" r="3" fill="#0b0d0f" opacity="0.85" />
    <line x1="35.5" y1="25.5" x2="28" y2="29.5" stroke="#0b0d0f" strokeWidth="1.2" opacity="0.85" />
    <line x1="35.5" y1="36.5" x2="28" y2="32.5" stroke="#0b0d0f" strokeWidth="1.2" opacity="0.85" />
  </svg>
)

const SectionDivider = ({ label, action }: { label: string; action?: React.ReactNode }) => (
  <div className="section-divider">
    <span className="section-divider-label">{label}</span>
    <div className="section-divider-line" />
    {action && <span className="section-divider-action">{action}</span>}
  </div>
)

export default function Home() {
  return (
    <>
      {/* ── Nav ─────────────────────────────────────────── */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <div className="nav-logo-wordmark">
              <Logo />
              <span className="nav-site-name">Causalica</span>
            </div>
            <span className="nav-tagline">/ causal inference</span>
          </div>
          <div className="nav-right">
            <a href="#" className="nav-link">Start here</a>
            <Link href="/tools" className="nav-link">Tools</Link>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Contact</a>
            <a
              href="https://textbook.causalica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-cta"
            >
              Open textbook ↗
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero anim-hero">
        <div className="container">
          <p className="hero-eyebrow">— Causal inference · made practical</p>
          <h1 className="hero-headline">
            Correlation tells you what.<br />
            Causation tells you why.
          </h1>
          <p className="hero-sub">
            A modern hub for learning and applying causal thinking —
            with a textbook, tools, and workflows that keep you honest.
          </p>
          <div className="hero-badge">
            <span className="hero-badge-dot pulse-dot" />
            Building in public · textbook + tooling shipping now
          </div>

          {/* DAG visualization */}
          <div className="dag-wrap">
            <div className="dag-row">
              <span className="dag-node dag-node-active">Intervention X</span>
              <span className="dag-arrow">→</span>
              <span className="dag-node dag-node-active">Outcome Y</span>
              <span className="dag-separator">?</span>
              <span className="dag-node dag-node-confounder">Confounder Z</span>
            </div>
            <p className="dag-hint">↳ We identify what&apos;s actually doing the causal work.</p>
          </div>

          <div className="hero-actions">
            <a
              href="https://textbook.causalica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read the textbook ↗
            </a>
            <a href="#" className="btn-ghost">Start here</a>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ─────────────────────────────────── */}
      <section className="section anim-pillars">
        <div className="container">
          <SectionDivider label="What's here" />
          <div className="pillars-grid">
            <div className="pillar">
              <div className="pillar-symbol">∂</div>
              <div className="pillar-title">Textbook</div>
              <p className="pillar-desc">
                Foundations, identification strategies, and estimation —
                written for practitioners, not just theorists.
                From DAGs to do-calculus.
              </p>
              <a
                href="https://textbook.causalica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pillar-link"
              >
                textbook.causalica.com ↗
              </a>
            </div>
            <div className="pillar">
              <div className="pillar-symbol">⊢</div>
              <div className="pillar-title">Tools</div>
              <p className="pillar-desc">
                Templates, checklists, and sanity checks you&apos;ll reuse.
                Identification decision trees, DAG builders,
                sensitivity analysis guides.
              </p>
              <Link href="/tools" className="pillar-link">Browse tools →</Link>
            </div>
            <div className="pillar">
              <div className="pillar-symbol">≡</div>
              <div className="pillar-title">Consulting</div>
              <p className="pillar-desc">
                End-to-end causal analysis — study design, DAG
                construction, identification strategy, and estimation
                for research teams and organizations.
              </p>
              <a href="#" className="pillar-link">Work with us →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Learning Path ─────────────────────────────────── */}
      <section className="section anim-path">
        <div className="container">
          <SectionDivider label="Structured learning" />
          <div className="path-card">
            <div className="path-card-body">
              <p className="path-tag">Structured curriculum</p>
              <h2 className="path-title">From intuition to implementation</h2>
              <p className="path-desc">
                A guided sequence that takes you from &ldquo;what is causality&rdquo;
                to running your own causal analyses with confidence.
                No shortcuts, no hand-waving.
              </p>
              <div className="path-steps">
                <span className="path-step path-step-active">Intuition</span>
                <span className="path-step-arrow">→</span>
                <span className="path-step">Causal graphs</span>
                <span className="path-step-arrow">→</span>
                <span className="path-step">Identification</span>
                <span className="path-step-arrow">→</span>
                <span className="path-step">Estimation</span>
                <span className="path-step-arrow">→</span>
                <span className="path-step">Implementation</span>
              </div>
            </div>
            <div className="path-card-action">
              <a
                href="https://textbook.causalica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Begin the path →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ─────────────────────────────────────── */}
      <section className="section anim-cases">
        <div className="container">
          <SectionDivider label="Where it applies" />
          <div className="cases-grid">
            <div className="case-card">
              <p className="case-domain">Public health</p>
              <p className="case-question">
                &ldquo;Did this intervention actually reduce disease burden,
                or just select for healthier populations?&rdquo;
              </p>
              <p className="case-methods">
                <span className="case-methods-label">Methods: </span>
                <span className="case-methods-values">DiD · Propensity score · IV</span>
              </p>
            </div>
            <div className="case-card">
              <p className="case-domain">Economics</p>
              <p className="case-question">
                &ldquo;What is the causal effect of this policy, net of
                everything we can&apos;t randomize away?&rdquo;
              </p>
              <p className="case-methods">
                <span className="case-methods-label">Methods: </span>
                <span className="case-methods-values">Regression discontinuity · IV · Synthetic control</span>
              </p>
            </div>
            <div className="case-card">
              <p className="case-domain">Organizations</p>
              <p className="case-question">
                &ldquo;Was it our product change that moved the metric,
                or just the season?&rdquo;
              </p>
              <p className="case-methods">
                <span className="case-methods-label">Methods: </span>
                <span className="case-methods-values">Causal impact · Synthetic control</span>
              </p>
            </div>
            <div className="case-card">
              <p className="case-domain">Behavioral research</p>
              <p className="case-question">
                &ldquo;Does emotion mediate the path from information
                to sustainable choice?&rdquo;
              </p>
              <p className="case-methods">
                <span className="case-methods-label">Methods: </span>
                <span className="case-methods-values">Mediation analysis · SEM · DAGs</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Textbook strip ────────────────────────────────── */}
      <section className="section anim-strip">
        <div className="container">
          <div className="strip">
            <div className="strip-body">
              <p className="strip-tag">Now shipping</p>
              <h2 className="strip-title">The Causalica Textbook</h2>
              <p className="strip-desc">
                A practitioner&apos;s guide to causal inference — from
                assumptions and graphs through identification and
                modern estimation methods. Built in public.
              </p>
              <div className="strip-chips">
                {['Foundations', 'DAGs', 'Do-calculus', 'Matching', 'DiD', 'IV', 'RDD', 'Sensitivity'].map(c => (
                  <span key={c} className="strip-chip">{c}</span>
                ))}
              </div>
            </div>
            <div className="strip-action">
              <a
                href="https://textbook.causalica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Open textbook ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="footer anim-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="footer-name">Built by Amare Teklay · PhD Economist</p>
            <p className="footer-role">Researcher in adaptive systems &amp; behavior</p>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://amareteklay.com" target="_blank" rel="noopener noreferrer" className="footer-link">amareteklay.com</a>
              <a href="https://homoadapticus.com" target="_blank" rel="noopener noreferrer" className="footer-link">homoadapticus.com</a>
              <a href="https://www.linkedin.com/in/amareteklay/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            <p className="footer-copy">© 2026 Causalica</p>
          </div>
        </div>
      </footer>
    </>
  )
}
