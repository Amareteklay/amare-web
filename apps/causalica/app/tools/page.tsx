import Link from 'next/link'

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 60 60" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="logo-grad-tools" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f06030" />
        <stop offset="100%" stopColor="#c03010" />
      </linearGradient>
    </defs>
    <path d="M10 30 L22 8 L50 8 L50 18 L34 18 L26 30 L34 42 L50 42 L50 52 L22 52 Z" fill="url(#logo-grad-tools)" />
    <circle cx="38" cy="24" r="3" fill="#0b0d0f" opacity="0.85" />
    <circle cx="38" cy="38" r="3" fill="#0b0d0f" opacity="0.85" />
    <circle cx="26" cy="31" r="3" fill="#0b0d0f" opacity="0.85" />
    <line x1="35.5" y1="25.5" x2="28" y2="29.5" stroke="#0b0d0f" strokeWidth="1.2" opacity="0.85" />
    <line x1="35.5" y1="36.5" x2="28" y2="32.5" stroke="#0b0d0f" strokeWidth="1.2" opacity="0.85" />
  </svg>
)

export default function ToolsPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <Link href="/" className="nav-logo-wordmark">
              <Logo />
              <span className="nav-site-name">Causalica</span>
            </Link>
            <span className="nav-tagline">/ causal inference</span>
          </div>
          <div className="nav-right">
            <Link href="/#" className="nav-link">Start here</Link>
            <Link href="/tools" className="nav-link" style={{ color: 'var(--cream)' }}>Tools</Link>
            <Link href="/#" className="nav-link">About</Link>
            <Link href="/#" className="nav-link">Contact</Link>
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

      <section className="tools-hero anim-hero">
        <div className="container">
          <div className="section-divider">
            <span className="section-divider-label">Tools</span>
            <div className="section-divider-line" />
          </div>
          <p className="tools-coming">Coming soon.</p>
          <p className="tools-sub">
            A collection of templates, checklists, and decision trees
            for applied causal inference. Shipping alongside the textbook.
          </p>
          <Link href="/" className="back-link">← Back to home</Link>
        </div>
      </section>

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
