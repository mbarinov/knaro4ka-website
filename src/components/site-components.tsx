import Link from "next/link";
import { Ticker } from "./interactions";
export { Reveal, Ticker, TiltCard, ParallaxHeading } from "./interactions";

export function SiteNavigation({ caseStudy = false }: { caseStudy?: boolean }) {
  return (
    <nav
      className={`site-nav${caseStudy ? " case-nav" : ""}`}
      aria-label="Main navigation"
    >
      <Link className="site-brand" href="/#hero-section">
        KNARA SOBCHAK{" "}
      </Link>
      <div className="site-nav-links">
        <Link className="line-link" href="/about">
          ABOUT
        </Link>
        <a className="line-link" href="#footer-section">
          CONTACT
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter({ responsive = true }: { responsive?: boolean }) {
  return (
    <footer className={`site-footer${responsive ? " responsive-footer" : ""}`}>
      <div className="footer-contact">
        <p className="contact-label">GET IN TOUCH</p>
        <div className="footer-links">
          <a className="line-link" href="mailto:knarasobchak@gmail.com">
            KNARASOBCHAK@GMAIL.COM
          </a>
          <a
            className="line-link"
            href="https://www.tiktok.com/@color_me_bold?_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            TIK TOK
          </a>
          <a
            className="line-link"
            href="https://www.linkedin.com/in/knara-sobchak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
        </div>
      </div>
      <div className="footer-name">
        <div className="footer-copyright">© 2026</div>
        {/* Original source wordmark uses live Gambarino text within an SVG viewport. */}
        <svg
          className="footer-wordmark"
          viewBox="0 0 1160 141"
          role="img"
          aria-label="Knara Sobchak ©"
        >
          <foreignObject
            width="100%"
            height="100%"
            style={{ overflow: "visible" }}
          >
            <p>KNARASOBCHAK©</p>
          </foreignObject>
        </svg>
      </div>
    </footer>
  );
}

const services = [
  "MOBILE & WEB DESIGN",
  "CREATIVE PROBLEM SOLVING",
  "DESIGN SYSTEMS",
  "GRAPHIC DESIGN",
  "VIBECODING",
];
export function ServicesTicker() {
  return (
    <div className="framer-1jdkfek-container">
      <section className="services-mask" aria-label="Design capabilities">
        <Ticker speed={45} gap={64} services>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </Ticker>
      </section>
    </div>
  );
}
